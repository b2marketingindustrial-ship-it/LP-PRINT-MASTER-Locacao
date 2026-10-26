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
  secondary: 'Identifique seu equipamento',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  tagline: site.product,
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Impressão corporativa',
  title: `${site.product} para ${site.context}`,
  /** Trecho do H1 em verde, em linha própria (precisa estar contido em `title`). */
  highlight: 'impressoras',
  text: 'Multifuncionais laser Ricoh, copiadoras e scanners para a rotina da sua empresa, com manutenção inclusa e sem investimento inicial.',
  banner: {
    src: heroBg,
    alt: 'Multifuncionais Ricoh e Canon e impressora Epson em escritório claro',
  },
  points: [
    { icon: 'shield', line1: 'Desde 2003', line2: 'no mercado' },
    { icon: 'wrench', line1: 'Manutenção', line2: 'inclusa' },
    { icon: 'users', line1: 'Suporte', line2: 'especializado' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: `Fale com quem entende de ${site.product.toLowerCase()}.`,
  text: 'Nossa equipe indica o equipamento ideal para a sua necessidade e monta a proposta de locação. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  trust: [
    { icon: 'wrench', label: 'Manutenção inclusa' },
    { icon: 'users', label: 'Suporte remoto e presencial' },
    { icon: 'pin', label: 'Sede em Goiânia/GO' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: `Seus dados são usados apenas para responder à sua solicitação de cotação, conforme a LGPD.`,
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
