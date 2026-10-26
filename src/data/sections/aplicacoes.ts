/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto 4:3 e cabeçalho centrado. O card inteiro é o CTA.
 */
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.jpg'
import app2 from '@assets/aplicacoes/aplicacao-2.jpg'
import app3 from '@assets/aplicacoes/aplicacao-3.jpg'
import app4 from '@assets/aplicacoes/aplicacao-4.jpg'

export interface Application {
  id: string
  label: string
  description: string
  photo: Photo
}

export const applications = {
  eyebrow: 'Ideal para',
  title: 'Impressão para a rotina de cada negócio',
  text: 'Soluções de impressão, cópia e digitalização para empresas de todos os portes e segmentos.',
  items: [
    {
      id: 'contabilidades',
      label: 'Contabilidades',
      description: 'Impressão e digitalização para a rotina de escritórios de contabilidade.',
      photo: { src: app1, alt: 'Papéis, calculadora e notebook sobre mesa de escritório' },
    },
    {
      id: 'coworkings',
      label: 'Coworkings',
      description: 'Equipamentos compartilhados para quem trabalha em espaços de coworking.',
      photo: { src: app2, alt: 'Sala de trabalho equipada com computadores' },
    },
    {
      id: 'escolas',
      label: 'Escolas e faculdades',
      description: 'Impressão e cópias para escolas, faculdades e cursinhos.',
      photo: { src: app3, alt: 'Estudante sorrindo sentada à mesa com cadernos' },
    },
    {
      id: 'advocacia',
      label: 'Escritórios de advocacia',
      description: 'Impressão e digitalização de documentos para escritórios de advocacia.',
      photo: { src: app4, alt: 'Estátua da deusa da justiça com balança' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [Application, Application, Application, Application]
}
