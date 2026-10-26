/**
 * Dados da seção "Como funciona" (biblioteca B2, fase: apoio).
 *
 * Variante local da Print Master (mockup aprovado em 26/10/2026, docs/BRIEFING.md):
 * cabeçalho claro com botão à direita e 4 cards verde-escuros numerados, sem ícones.
 * O contrato repinado (sem `icon`) está em `lp.manifest.json`.
 */

export interface ProcessStep {
  id: string
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
  text: string
  /** Rótulo do botão da seção. */
  cta: string
  microcopy: string
  steps: readonly ProcessStep[]
}

export const process: Process = {
  eyebrow: 'Como funciona',
  title: 'Da escolha à impressão, cuidamos de cada etapa.',
  text: 'Soluções sob medida para simplificar a rotina da sua empresa.',
  cta: 'Fale com um especialista',
  microcopy: 'Manutenção e suporte inclusos',
  steps: [
    {
      id: 'diagnostico',
      title: 'Diagnóstico',
      description: 'Entendemos o volume e as necessidades de impressão da sua empresa.',
    },
    {
      id: 'proposta',
      title: 'Proposta sob medida',
      description: 'Selecionamos os equipamentos e montamos sua proposta de locação.',
    },
    {
      id: 'instalacao',
      title: 'Instalação',
      description: 'Entregamos e configuramos tudo na rede da sua empresa.',
    },
    {
      id: 'suporte',
      title: 'Suporte e manutenção',
      description: 'Assistência técnica remota ou presencial, com manutenção inclusa.',
    },
  ],
}
