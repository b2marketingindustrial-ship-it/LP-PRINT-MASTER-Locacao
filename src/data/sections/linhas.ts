/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * Variante local da Print Master (mockup aprovado em 26/10/2026, docs/BRIEFING.md):
 * 4 cards brancos com foto grande, etiqueta, 2 características e botão de orçamento,
 * sem card escuro, e a faixa de marcas abaixo do grid. O contrato repinado está em
 * `lp.manifest.json`.
 */
import type { Photo } from '@data/types'

import linha1 from '@assets/linhas/linha-1.png'
import linha2 from '@assets/linhas/linha-2.png'
import linha3 from '@assets/linhas/linha-3.png'
import marcasPhoto from '@assets/linhas/marcas.png'

export interface ProductLine {
  id: string
  tag: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string]
}

export const productLines = {
  eyebrow: 'Equipamentos para locação',
  title: 'Impressoras, copiadoras e scanners para locação',
  text: 'Encontre o equipamento ideal para a rotina da sua empresa.',
  /** Ajuda ao lado do cabeçalho. */
  help: {
    text: 'Precisa de ajuda para escolher?',
    cta: 'Fale com um especialista',
  },
  /** Rótulo do botão de cada card. */
  itemCta: 'Solicitar orçamento',
  /** Rótulo da faixa de marcas abaixo do grid (só aparece com 4+ logos). */
  brandsLabel: 'Soluções com marcas reconhecidas',
  items: [
    {
      id: 'multifuncionais',
      tag: 'Multifuncionais',
      title: 'Multifuncionais Ricoh',
      description: 'Imprima, copie e digitalize com praticidade.',
      photo: { src: linha1, alt: 'Impressora multifuncional laser Ricoh M 320F' },
      features: ['Modelos mono e coloridos', 'Tecnologia laser'],
    },
    {
      id: 'copiadoras',
      tag: 'Alta produtividade',
      title: 'Copiadoras',
      description: 'Mais agilidade para grandes volumes de cópias.',
      photo: { src: linha2, alt: 'Copiadora multifuncional Ricoh MP 4055' },
      features: ['Alta produtividade', 'Manutenção inclusa'],
    },
    {
      id: 'scanners',
      tag: 'Digitalização',
      title: 'Scanners inteligentes',
      description: 'Organize e digitalize documentos em rede.',
      photo: { src: linha3, alt: 'Scanner de documentos fi-7600' },
      features: ['Digitalização em rede', 'Arquivo digital'],
    },
    {
      id: 'conectados',
      tag: 'Conectividade',
      title: 'Impressão conectada',
      description: 'Imprima pela rede e por dispositivos móveis.',
      photo: {
        src: marcasPhoto,
        alt: 'Celular enviando impressão por rede sem fio para uma multifuncional Ricoh',
      },
      features: ['Impressão pelo celular', 'Conexão em rede'],
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  help: { text: string; cta: string }
  itemCta: string
  brandsLabel: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
