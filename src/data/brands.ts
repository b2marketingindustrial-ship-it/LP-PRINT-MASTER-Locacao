/**
 * Logos de marcas — exibidas na faixa "Soluções com marcas reconhecidas" de `linhas`.
 *
 * As marcas e as logos vêm da arte "Modelos disponíveis para locação" que a própria
 * Print Master publica no site atual (decisão registrada em docs/BRIEFING.md, entrada 7).
 * Cada arquivo é um recorte dessa arte em 400×160, com fundo transparente.
 */
import type { ImageMetadata } from 'astro'

import marca1 from '@assets/brands/marca-1.webp'
import marca2 from '@assets/brands/marca-2.webp'
import marca3 from '@assets/brands/marca-3.webp'
import marca4 from '@assets/brands/marca-4.webp'
import marca5 from '@assets/brands/marca-5.webp'
import marca6 from '@assets/brands/marca-6.webp'
import marca7 from '@assets/brands/marca-7.webp'
import marca8 from '@assets/brands/marca-8.webp'

export interface Brand {
  name: string
  src: ImageMetadata
}

export const brands = [
  { name: 'Ricoh', src: marca1 },
  { name: 'Brother', src: marca2 },
  { name: 'Canon', src: marca3 },
  { name: 'Epson', src: marca4 },
  { name: 'OKI', src: marca5 },
  { name: 'Konica Minolta', src: marca6 },
  { name: 'Zebra', src: marca7 },
  { name: 'Kyocera', src: marca8 },
] as const satisfies readonly Brand[]
