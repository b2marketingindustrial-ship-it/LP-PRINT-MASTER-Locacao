#!/usr/bin/env node
/**
 * publish:wp — verifica o padrão, gera a landing page e publica `dist/` na raiz da branch
 * órfã `wp-build`, que o plugin B2 LP Publisher (WordPress) lê. Substitui o antigo workflow
 * do GitHub Actions (`build-wp.yml`): a publicação agora é feita daqui, à mão.
 *
 * Passos: árvore limpa e `main` já no GitHub → check:lp, lint, prettier → build →
 * `git init -b wp-build` dentro de `dist/` → force-push. O Lighthouse (`npm run lh`) não roda
 * aqui: o Chromium não abre neste servidor. Rode-o onde ele funcionar quando a mudança mexer
 * em layout ou imagens.
 */
import { spawnSync } from 'node:child_process'
import { existsSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const DIST = join(ROOT, 'dist')
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { stdio: 'inherit', ...opts })
  if (r.status !== 0) {
    console.error(`\n✖ Falhou: ${cmd} ${args.join(' ')}`)
    process.exit(r.status ?? 1)
  }
}

function out(cmd, args, opts = {}) {
  return spawnSync(cmd, args, { encoding: 'utf8', ...opts }).stdout.trim()
}

// 1. Só publica o que já está commitado e no GitHub, para a wp-build apontar um commit real.
if (out('git', ['status', '--porcelain'])) {
  console.error('✖ Há alterações não commitadas. Faça commit (e push) antes de publicar.')
  process.exit(1)
}
const branch = out('git', ['rev-parse', '--abbrev-ref', 'HEAD'])
if (branch !== 'main') {
  console.error(`✖ Publique a partir de main (você está em ${branch}).`)
  process.exit(1)
}
run('git', ['fetch', '-q', 'origin', 'main'])
const sha = out('git', ['rev-parse', 'HEAD'])
if (sha !== out('git', ['rev-parse', 'origin/main'])) {
  console.error('✖ main local e origin/main diferem. Faça pull/push antes de publicar.')
  process.exit(1)
}

// 2. Mesmas verificações que o CI fazia.
run(npm, ['run', 'check:lp'])
run(npm, ['run', 'lint'])
run(npm, ['run', 'format:check'])

// 3. Build limpo.
rmSync(DIST, { recursive: true, force: true })
run(npm, ['run', 'build'])
if (!existsSync(join(DIST, 'index.html'))) {
  console.error('✖ dist/index.html não foi gerado.')
  process.exit(1)
}

// 4. Repositório órfão só com a saída do build, empurrado por cima da wp-build.
const remote = out('git', ['remote', 'get-url', 'origin'])
const name = out('git', ['config', 'user.name']) || 'B2 Marketing Industrial'
const email = out('git', ['config', 'user.email'])
const inDist = { cwd: DIST }
run('git', ['init', '-q', '-b', 'wp-build'], inDist)
run('git', ['config', 'user.name', name], inDist)
if (email) run('git', ['config', 'user.email', email], inDist)
run('git', ['add', '-A'], inDist)
run(
  'git',
  [
    'commit',
    '-q',
    '-m',
    `build: main@${sha.slice(0, 7)}`,
    '-m',
    `Origem: ${remote.replace(/\.git$/, '')}/commit/${sha}`,
  ],
  inDist,
)
run('git', ['push', '--force', '-q', remote, 'HEAD:wp-build'], inDist)

rmSync(DIST, { recursive: true, force: true })
console.log(`\n✔ wp-build publicada a partir de main@${sha.slice(0, 7)}.`)
