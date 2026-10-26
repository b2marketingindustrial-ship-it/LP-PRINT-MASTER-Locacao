/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * 3 ou 4 cards, exatamente um deles escuro — normalmente o card de marcas, que
 * fecha o grid com peso visual. Cada linha tem 3 features de 2–4 palavras.
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
  features: readonly [string, string, string]
  /** Exatamente um card escuro por grid. Informe sempre (true/false). */
  dark: boolean
}

export const productLines = {
  eyebrow: 'Equipamentos para locação',
  title: 'Impressoras, copiadoras e scanners para locação',
  text: 'Trabalhamos com o equipamento ideal para a sua necessidade: modelos laser e multifuncionais, monocromáticos ou coloridos.',
  items: [
    {
      id: 'multifuncionais',
      tag: 'Ricoh',
      title: 'Multifuncionais laser Ricoh',
      description: 'Modelos laser Ricoh mono e coloridos para a rotina da empresa.',
      photo: { src: linha1, alt: 'Impressora multifuncional laser Ricoh M 320F' },
      features: ['Imprime, copia e digitaliza', 'Mono ou colorida', 'Tecnologia laser'],
      dark: false,
    },
    {
      id: 'copiadoras',
      tag: 'Alto volume',
      title: 'Copiadoras',
      description: 'Copiadoras de alta produtividade para grandes volumes de cópias.',
      photo: { src: linha2, alt: 'Copiadora multifuncional Ricoh MP 4055' },
      features: ['Alta produtividade', 'Grandes volumes', 'Manutenção inclusa'],
      dark: false,
    },
    {
      id: 'scanners',
      tag: 'Digitalização',
      title: 'Scanners inteligentes',
      description: 'Scanners inteligentes para digitalizar documentos em rede.',
      photo: { src: linha3, alt: 'Scanner de documentos fi-7600' },
      features: ['Digitalização em rede', 'Integração com GED', 'Arquivo digital'],
      dark: false,
    },
    {
      id: 'conectados',
      tag: 'Mobilidade',
      title: 'Equipamentos conectados',
      description: 'Equipamentos com impressão a partir de dispositivos móveis.',
      photo: { src: marcasPhoto, alt: 'Ícone de nuvem conectada a servidores' },
      features: ['Impressão pelo celular', 'Conexão em rede', 'Contabilização de páginas'],
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
