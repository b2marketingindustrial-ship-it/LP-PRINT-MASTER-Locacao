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
import { cta } from '@data/content'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: 'Por que a Print Master',
  /** Cada item é uma linha do H2 (quebra forçada). 3–6 palavras no total. */
  titleLines: ['Duas décadas de', 'soluções em impressão.'],
  /** `|` marca a quebra de linha no desktop. */
  text: 'A Print Master une tecnologia, suporte técnico|e gestão de documentos para empresas que precisam imprimir|com eficiência e custo previsível.',
  /** Rótulo do botão da seção. */
  cta: cta.primary,
  scene: {
    src: cenario,
    alt: 'Multifuncional Ricoh em escritório iluminado com plantas e estações de trabalho',
  },
  reasons: [
    {
      icon: 'badge-check',
      title: 'Desde 2003',
      description: 'Mais de duas décadas com impressão, cópia e digitalização.',
    },
    {
      icon: 'building',
      title: 'Escritório e indústria',
      description: 'Experiência em dois segmentos, com solução para cada rotina.',
    },
    {
      icon: 'map-pin',
      title: 'Atendimento local',
      description: 'Sede em Goiânia e atendimento técnico em todo GO e DF.',
    },
    {
      icon: 'sliders',
      title: 'Custo por página',
      description: 'Contabilização do que se imprime, com custo previsível.',
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
