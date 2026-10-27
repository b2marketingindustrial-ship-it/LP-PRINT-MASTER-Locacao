/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * Variante local da Print Master (mockup aprovado em 26/10/2026, docs/BRIEFING.md):
 * cabeçalho centralizado e carrossel de cards-botão (6 segmentos) com foto 6:5 numerada
 * e painel verde-escuro. O card inteiro é o CTA.
 */
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.jpg'
import app2 from '@assets/aplicacoes/aplicacao-2.jpg'
import app3 from '@assets/aplicacoes/aplicacao-3.jpg'
import app4 from '@assets/aplicacoes/aplicacao-4.jpg'
import app5 from '@assets/aplicacoes/aplicacao-5.jpg'
import app6 from '@assets/aplicacoes/aplicacao-6.jpg'

export interface Application {
  id: string
  label: string
  description: string
  photo: Photo
}

export const applications = {
  eyebrow: 'Soluções por segmento',
  title: 'Impressão para a rotina de cada negócio',
  text: 'Soluções de impressão, cópia e digitalização para empresas de todos os portes e segmentos.',
  items: [
    {
      id: 'contabilidades',
      label: 'Contabilidades',
      description: 'Impressão e digitalização para a rotina de escritórios de contabilidade.',
      photo: {
        src: app1,
        alt: 'Mesa de contabilidade com notebook, calculadora e multifuncional ao fundo',
      },
    },
    {
      id: 'coworkings',
      label: 'Coworkings',
      description: 'Equipamentos compartilhados para quem trabalha em espaços de coworking.',
      photo: { src: app2, alt: 'Coworking com pessoas trabalhando e multifuncional ao fundo' },
    },
    {
      id: 'escolas',
      label: 'Escolas e faculdades',
      description: 'Impressão e cópias para escolas, faculdades e cursinhos.',
      photo: { src: app3, alt: 'Estudante escrevendo em biblioteca com multifuncional ao lado' },
    },
    {
      id: 'advocacia',
      label: 'Escritórios de advocacia',
      description: 'Impressão e digitalização de documentos para escritórios de advocacia.',
      photo: {
        src: app4,
        alt: 'Mesa de escritório de advocacia com livros, balança da justiça e multifuncional',
      },
    },
    {
      id: 'clinicas',
      label: 'Clínicas e consultórios',
      description: 'Impressão e digitalização de documentos para clínicas e consultórios.',
      photo: { src: app5, alt: 'Consultório claro com mesa, cadeira e armário de documentos' },
    },
    {
      id: 'administrativo',
      label: 'Departamentos administrativos',
      description: 'Equipamentos para a rotina de impressão e cópia dos setores administrativos.',
      photo: { src: app6, alt: 'Pessoa digitando em mesa de escritório com pilha de documentos' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly Application[]
}
