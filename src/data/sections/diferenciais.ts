/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Variante local da Print Master (mockup aprovado em 26/10/2026, docs/BRIEFING.md):
 * bloco em largura total sobre a foto do escritório com a multifuncional Ricoh (o
 * degradê verde já vem na imagem), sem a pessoa recortada, e 5 cards sobrepostos à
 * base. São 5 exatos: o grid é `lg:grid-cols-5`.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: 'Soluções Print Master',
  /** Cada item é uma linha do H2 (quebra forçada). 3–6 palavras no total. */
  titleLines: ['Impressão inteligente', 'para sua empresa.'],
  text: 'Tecnologia, suporte e gestão para imprimir melhor, reduzir custos e simplificar a rotina da sua empresa.',
  /** Rótulo do botão da seção. */
  cta: 'Solicite uma proposta',
  scene: {
    src: cenario,
    alt: 'Multifuncional Ricoh em escritório iluminado com plantas e estações de trabalho',
  },
  reasons: [
    {
      icon: 'tag',
      title: 'Redução de custos',
      description: 'Economia em compra, manutenção, toners e suprimentos.',
    },
    {
      icon: 'wrench',
      title: 'Assistência técnica',
      description: 'Suporte remoto ou presencial quando precisar.',
    },
    {
      icon: 'zap',
      title: 'Alta performance',
      description: 'Modelos laser e multifuncionais, mono ou coloridos.',
    },
    {
      icon: 'sliders',
      title: 'Gestão inteligente',
      description: 'Contabilização e gerenciamento eletrônico de documentos.',
    },
    {
      icon: 'shield',
      title: 'Sem investimento inicial',
      description: 'Use equipamentos sem comprar ou imobilizar capital.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  cta: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
