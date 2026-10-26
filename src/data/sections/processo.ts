/**
 * Dados da seção "Como funciona" (biblioteca B2, fase: apoio).
 *
 * Alternativa ao painel de identificação para quando o atrito do visitante não é
 * "não sei o que pedir" e sim "não sei como isso acontece" — típico de serviço,
 * instalação, adequação a norma e contrato de manutenção.
 *
 * 4 a 6 etapas. Com 3 a promessa parece rasa; com 7 ninguém lê.
 */
import type { IconName } from '@data/icons'

export interface ProcessStep {
  id: string
  icon: IconName
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
  microcopy: string
  steps: readonly ProcessStep[]
}

export const process: Process = {
  eyebrow: 'Como funciona',
  title: 'Da escolha ao equipamento funcionando',
  text: 'Um atendimento completo para indicar o equipamento ideal e manter a impressão da sua empresa funcionando.',
  microcopy: 'Manutenção e suporte inclusos',
  steps: [
    {
      id: 'diagnostico',
      icon: 'search',
      title: 'Diagnóstico',
      description: 'Entendemos o volume de impressão, cópias e digitalização da empresa.',
    },
    {
      id: 'proposta',
      icon: 'file',
      title: 'Proposta sob medida',
      description: 'Indicamos os equipamentos ideais e montamos a proposta de locação.',
    },
    {
      id: 'instalacao',
      icon: 'gear',
      title: 'Instalação',
      description: 'Entregamos e configuramos os equipamentos na rede da sua empresa.',
    },
    {
      id: 'suporte',
      icon: 'wrench',
      title: 'Suporte e manutenção',
      description: 'Assistência técnica remota ou presencial, com manutenção inclusa.',
    },
  ],
}
