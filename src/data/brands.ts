/**
 * Logos do carrossel de marcas — primitivo opcional.
 *
 * Vazio por decisão da ficha (`marcas.usarLogos: false`): a Ricoh aparece só por
 * extenso. O componente fica porque `linhas` declara o primitivo `BrandCarousel`; com
 * menos de 4 logos ele não renderiza.
 */
import type { ImageMetadata } from 'astro'

export interface Brand {
  name: string
  src: ImageMetadata
}

export const brands: readonly Brand[] = []
