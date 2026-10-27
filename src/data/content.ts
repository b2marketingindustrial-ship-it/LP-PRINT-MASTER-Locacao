/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Transcrito da ficha de execução (`docs/FICHA-LP.md`), campo `conteudo`. O conteúdo
 * que vem no template é o exemplo de referência, com imagens placeholder.
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.png'

/* ------------------------------------------------------------------ tipos */

export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicite sua cotação',
  primaryShort: 'Cotação',
  /** Link do hero que rola até a seção de produtos (não abre o atendimento). */
  secondary: 'Conheça os equipamentos',
  card: 'Fale com um especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  tagline: `${site.product} para ${site.context}`,
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Impressão corporativa',
  title: `${site.product} para ${site.context}`,
  /** Trecho do H1 em menta, na mesma linha (precisa estar contido em `title`). */
  highlight: 'impressoras',
  text: 'Variedade de multifuncionais, copiadoras e scanners, mono ou coloridos, com manutenção inclusa e sem investimento inicial.',
  banner: {
    src: heroBg,
    alt: 'Multifuncionais Ricoh e Canon e impressora Epson em escritório claro',
  },
  points: [
    { icon: 'shield', line1: 'Desde 2003', line2: 'no mercado' },
    { icon: 'wrench', line1: 'Manutenção', line2: 'inclusa' },
    { icon: 'users', line1: 'Suporte', line2: 'especializado' },
    { icon: 'map-pin', line1: 'Atendimento', line2: 'em GO e DF' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Peça sua cotação',
  title: 'A impressão ideal para o ritmo da sua empresa.',
  /** Trecho final do título em menta (precisa estar contido em `title`). */
  highlight: 'sua empresa.',
  /** `|` marca a quebra de linha no desktop. */
  text: 'Locação de impressoras com tecnologia, manutenção e suporte|para simplificar a rotina da sua empresa.',
  /** Chamada acima do espaço reservado ao WhatsApp. */
  whatsappLead: 'Prefere falar com a nossa equipe?',
  trust: [
    { icon: 'wrench', label: 'Manutenção inclusa' },
    { icon: 'users', label: 'Suporte remoto e presencial' },
    { icon: 'pin', label: 'Atendimento em GO/DF' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: 'Seus dados serão usados apenas para responder à sua solicitação.',
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  whatsappLead: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
