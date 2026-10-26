/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e a pessoa recortada, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'
import pessoa from '@assets/diferenciais/pessoa.png'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada). 3–6 palavras no total. */
  titleLines: ['Sua empresa mais', 'produtiva e econômica.'],
  text: `Desde 2003, a ${site.brandShort} é referência em soluções de impressão, cópias e digitalização de documentos para empresas de todos os portes.`,
  scene: {
    src: cenario,
    alt: 'Profissional digitando em mesa de escritório',
  },
  person: {
    src: pessoa,
    alt: 'Impressoras multifuncionais, copiadoras, plotter e scanners',
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
  scene: Photo
  person: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
