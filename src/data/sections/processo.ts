/**
 * Dados da seção "Como funciona" (biblioteca B2, fase: apoio).
 *
 * Variante local da Print Master (mockup aprovado em 26/10/2026, docs/BRIEFING.md):
 * painel verde-escuro com cabeçalho, barra de vidro (garantia + botão) e linha do tempo
 * com 4 etapas numeradas. O contrato está em `lp.manifest.json`.
 */

import type { IconName } from '@data/icons'
import { cta } from '@data/content'

export interface ProcessStep {
  id: string
  icon: IconName
  title: string
  description: string
  /** Prazo ou marco da etapa, 2–4 palavras. Opcional. */
  when?: string
}

/**
 * Tipo anotado, e não `as const satisfies`: sem nenhum `when` nos itens, o tipo
 * literal não teria a propriedade e o componente deixaria de tipar.
 */
export interface Process {
  eyebrow: string
  title: string
  /** Trecho final do título em menta (precisa estar contido em `title`). */
  highlight: string
  text: string
  /** Rótulo do botão da seção. */
  cta: string
  microcopy: string
  steps: readonly ProcessStep[]
}

export const process: Process = {
  eyebrow: 'Como funciona',
  title: 'Da escolha à impressão, cuidamos de cada etapa.',
  highlight: 'cuidamos de cada etapa.',
  text: 'Um processo simples, do primeiro contato ao suporte contínuo.',
  cta: cta.card,
  microcopy: 'Manutenção e suporte inclusos',
  steps: [
    {
      id: 'diagnostico',
      icon: 'search',
      title: 'Diagnóstico',
      description: 'Entendemos o volume e as necessidades de impressão.',
    },
    {
      id: 'proposta',
      icon: 'clipboard-check',
      title: 'Proposta sob medida',
      description: 'Selecionamos os equipamentos e montamos sua proposta de locação.',
    },
    {
      id: 'instalacao',
      icon: 'truck',
      title: 'Instalação',
      description: 'Entregamos e configuramos tudo na rede da sua empresa.',
    },
    {
      id: 'suporte',
      icon: 'wrench',
      title: 'Suporte e manutenção',
      description: 'Assistência técnica remota ou presencial, com manutenção inclusa.',
    },
  ],
}
