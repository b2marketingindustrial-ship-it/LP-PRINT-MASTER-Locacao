```yaml
ficha: 1
padrao: 2.8.0
cliente: Print Master
produto: Locação de impressoras
data: 2026-10-26

site:
  brand: Print Master
  brandShort: Print Master
  product: Locação de impressoras
  context: empresas
  url: https://printmaster.net.br/lp-locacao-de-impressoras-para-empresas/
  address: Rua C56 nº 65, Qd. 103, Lt. 05, Setor Sudoeste, Goiânia/GO, CEP 74.305-350
  privacyUrl: ''
  whatsapp: ''
  shortcodes:
    chat: '[atendimento_chat id="default"]'
    form: '[atendimento_form id="default-form"]'

campanha:
  mainKeyword: locação de impressoras
  negatives: []
  forbidden: []
  areaAtendida: Goiânia/GO, confirmada pelo endereço; Brasília não confirmada
  onde: selo
  familias:
    - nome: locacao-aluguel
      termos:
        [
          aluguel de copiadora,
          aluguel de impressoras,
          locação de impressoras,
          locação de impressora,
          alugar impressora,
          empresa de aluguel de impressoras,
          empresas de locação de impressoras,
        ]
      responde: linhas
    - nome: multifuncionais-copiadoras
      termos:
        [
          locação de multifuncional,
          aluguel de multifuncional,
          locação de multifuncionais,
          locação de impressora multifuncional,
          aluguel de copiadora,
        ]
      responde: linhas
    - nome: scanners
      termos: [aluguel de scanner, locação de scanner]
      responde: linhas
    - nome: impressao-colorida
      termos: [aluguel de impressora laser colorida]
      responde: linhas
    - nome: marca-ricoh
      termos: [locação de impressora Ricoh]
      responde: linhas
    - nome: outsourcing
      termos:
        [
          outsourcing de impressão,
          outsourcing de impressoras,
          empresas de outsourcing de impressão,
          locação de impressoras outsourcing,
          serviço de outsourcing de impressão,
        ]
      responde: null
    - nome: goiania
      termos:
        [
          aluguel de impressoras Goiânia,
          aluguel de impressora Goiânia,
          locação de impressoras Goiânia,
          aluguel de impressora em Goiânia,
        ]
      responde: null
    - nome: brasilia
      termos:
        [
          locação de impressoras Brasília,
          aluguel de impressora Brasília,
          outsourcing de impressão em Brasília,
        ]
      responde: null

publico: [Administrativo, Compras, TI, Diretoria]

marcas:
  usarLogos: true
  nomes: [Ricoh, Brother, Canon, Epson, OKI, Konica Minolta, Zebra, Kyocera]
  autorizacao: logos recortadas da arte que o próprio cliente publica no site atual; mockup aprovado em 26/10/2026

tokens:
  padrao: false
  # verdes do logotipo e do mockup de abertura aprovado em 26/10/2026; fonte Manrope mantida
  cores:
    primaria: '#064337'
    acao: '#027653'
    menta: '#61e5a9'

conteudo:
  title: null
  description: 'Locação de impressoras para empresas em Goiânia: multifuncionais laser Ricoh, copiadoras e scanners com manutenção inclusa e suporte especializado.'
  hero:
    eyebrow: Impressão corporativa
    title: Locação de impressoras para empresas
    text: Multifuncionais laser Ricoh, copiadoras e scanners para a rotina da sua empresa, com manutenção inclusa e sem investimento inicial.
    points:
      - icon: shield
        line1: Desde 2003
        line2: no mercado
      - icon: wrench
        line1: Manutenção
        line2: inclusa
      - icon: users
        line1: Suporte
        line2: especializado
  quote:
    eyebrow: Solicite sua cotação
    title: Fale com quem entende de locação de impressoras.
    text: Nossa equipe indica o equipamento ideal para a sua necessidade e monta a proposta de locação. Preencha o formulário ou fale direto conosco pelo WhatsApp.
    trust:
      - icon: wrench
        label: Manutenção inclusa
      - icon: users
        label: Suporte remoto e presencial
      - icon: pin
        label: Sede em Goiânia/GO
    lgpd: Seus dados são usados apenas para responder à sua solicitação de cotação, conforme a LGPD.

blocos:
  linhas:
    veredicto: completo
    responde:
      [locacao-aluguel, multifuncionais-copiadoras, scanners, impressao-colorida, marca-ricoh]
    papeis: [Administrativo, Compras]
    # variante local do mockup aprovado em 26/10/2026: 2 características, sem card escuro
    eyebrow: Equipamentos para locação
    title: Impressoras, copiadoras e scanners para locação
    text: Encontre o equipamento ideal para a rotina da sua empresa.
    help:
      text: Precisa de ajuda para escolher?
      cta: Fale com um especialista
    itemCta: Solicitar orçamento
    brandsLabel: Soluções com marcas reconhecidas
    items:
      - id: multifuncionais
        tag: Multifuncionais
        title: Multifuncionais Ricoh
        description: Imprima, copie e digitalize com praticidade.
        features: [Modelos mono e coloridos, Tecnologia laser]
        photo: Impressora multifuncional laser Ricoh M 320F
      - id: copiadoras
        tag: Alta produtividade
        title: Copiadoras
        description: Mais agilidade para grandes volumes de cópias.
        features: [Alta produtividade, Manutenção inclusa]
        photo: Copiadora multifuncional Ricoh MP 4055
      - id: scanners
        tag: Digitalização
        title: Scanners inteligentes
        description: Organize e digitalize documentos em rede.
        features: [Digitalização em rede, Arquivo digital]
        photo: Scanner de documentos fi-7600
      - id: conectados
        tag: Conectividade
        title: Impressão conectada
        description: Imprima pela rede e por dispositivos móveis.
        features: [Impressão pelo celular, Conexão em rede]
        photo: Celular enviando impressão por rede sem fio para uma multifuncional Ricoh

  vitrine:
    veredicto: insuficiente
    falta: há 4 categorias de equipamento; a vitrine pede 6 a 24 produtos

  especificacoes:
    veredicto: insuficiente
    falta: faltam modelos com especificações comparáveis (velocidade, formato, volume mensal)

  identificar:
    veredicto: insuficiente
    falta: o comercial não informou os 6 dados que pede para dimensionar uma locação

  situacoes:
    veredicto: insuficiente
    falta: o comercial não listou os gatilhos de contato mais comuns

  processo:
    veredicto: completo
    responde: [locacao-aluguel]
    papeis: [Administrativo, Compras]
    # variante local do mockup aprovado em 26/10/2026: cards numerados, sem ícones
    eyebrow: Como funciona
    title: Da escolha à impressão, cuidamos de cada etapa.
    microcopy: Manutenção e suporte inclusos
    text: Soluções sob medida para simplificar a rotina da sua empresa.
    cta: Fale com um especialista
    steps:
      - id: diagnostico
        title: Diagnóstico
        description: Entendemos o volume e as necessidades de impressão da sua empresa.
      - id: proposta
        title: Proposta sob medida
        description: Selecionamos os equipamentos e montamos sua proposta de locação.
      - id: instalacao
        title: Instalação
        description: Entregamos e configuramos tudo na rede da sua empresa.
      - id: suporte
        title: Suporte e manutenção
        description: Assistência técnica remota ou presencial, com manutenção inclusa.

  aplicacoes:
    veredicto: completo
    responde: [locacao-aluguel]
    papeis: [Administrativo, Diretoria]
    # variante local do mockup aprovado em 26/10/2026; fotos recortadas do próprio mockup
    eyebrow: Soluções por segmento
    title: Impressão para a rotina de cada negócio
    text: Soluções de impressão, cópia e digitalização para empresas de todos os portes e segmentos.
    cta: Encontre a solução ideal
    items:
      - id: contabilidades
        label: Contabilidades
        description: Impressão e digitalização para a rotina de escritórios de contabilidade.
        photo: Mesa de contabilidade com notebook, calculadora e multifuncional ao fundo
      - id: coworkings
        label: Coworkings
        description: Equipamentos compartilhados para quem trabalha em espaços de coworking.
        photo: Coworking com pessoas trabalhando e multifuncional ao fundo
      - id: escolas
        label: Escolas e faculdades
        description: Impressão e cópias para escolas, faculdades e cursinhos.
        photo: Estudante escrevendo em biblioteca com multifuncional ao lado
      - id: advocacia
        label: Escritórios de advocacia
        description: Impressão e digitalização de documentos para escritórios de advocacia.
        photo: Mesa de escritório de advocacia com livros, balança da justiça e multifuncional

  segmentos:
    veredicto: insuficiente
    falta: são 6 contextos de uso sem vocabulário nem 3 equipamentos por setor; a seção pede 7 setores completos

  clientes:
    veredicto: insuficiente
    falta: faltam 4 a 8 logos autorizadas e 3 números com fonte

  diferenciais:
    veredicto: completo
    responde: [locacao-aluguel]
    papeis: [Diretoria, Compras]
    eyebrow: Por que a Print Master
    titleLines: [Sua empresa mais, produtiva e econômica.]
    text: Desde 2003, a Print Master é referência em soluções de impressão, cópias e digitalização de documentos para empresas de todos os portes.
    scene: Profissional digitando em mesa de escritório
    person: Impressoras multifuncionais, copiadoras, plotter e scanners
    reasons:
      - icon: tag
        title: Redução de custos
        description: Economia em compra, manutenção, toners e suprimentos.
      - icon: wrench
        title: Assistência técnica
        description: Suporte remoto ou presencial quando precisar.
      - icon: zap
        title: Alta performance
        description: Modelos laser e multifuncionais, mono ou coloridos.
      - icon: sliders
        title: Gestão inteligente
        description: Contabilização e gerenciamento eletrônico de documentos.
      - icon: shield
        title: Sem investimento inicial
        description: Use equipamentos sem comprar ou imobilizar capital.

  perguntas:
    veredicto: insuficiente
    falta: o comercial não enviou a lista real de dúvidas, com respostas aprovadas

  escopo:
    veredicto: nao-se-aplica
    falta: a oferta não é consolidação de compras de itens diferentes

assets:
  pendentes: []

conflitos:
  - pede: CTA "Fale com um especialista agora!" com âncora `#whats`
    regra: todo CTA usa o vocabulário e o componente padrão (`button.btn-slave-whats`)

naoAplicado:
  - CNPJ 21.762.387/0001-93 (dado legal, sem bloco previsto no footer padrão)
  - texto institucional longo de apresentação da empresa
  - aplicações excedentes "Clínicas e consultórios" e "Departamentos administrativos" (a foto do segundo virou o cenário de diferenciais)
  - logotipo antigo logo-printmaster.jpg
```

# Ficha de execução — Print Master / Locação de impressoras

> Montada no editor a partir de `docs/briefing-cliente/briefing-print-master-locacao-impressoras.md` (briefing organizado de 22/10/2026) e da página atual do cliente, `printmaster.net.br/lp-locacao-de-impressoras-para-empresas/`, por pedido de uma primeira versão publicada antes da entrevista completa no chat — o mesmo caminho da LP de compressores de parafuso da Falanga. Os pontos marcados como **inferido** precisam ser validados com o cliente; se mudarem, a ficha é regerada.

## O que foi decidido

LP de serviço para a campanha de locação de impressoras da Print Master, com a palavra-chave `locação de impressoras` no H1 ("Locação de impressoras para empresas", o mesmo título da página atual do cliente) e no title. Goiânia entra na meta description e num selo da cotação ("Sede em Goiânia/GO"), porque o endereço a confirma; Brasília fica de fora até a cobertura ser confirmada.

A oferta abre em `linhas` com as quatro categorias do material: multifuncionais laser Ricoh, copiadoras, scanners inteligentes e equipamentos conectados (card escuro). O apoio mostra o caminho do atendimento em `processo`. A prova usa as quatro primeiras aplicações do material em `aplicacoes`. A autoridade fecha com a frase de autoridade "Sua empresa mais produtiva e econômica" e os cinco diferenciais do briefing.

As imagens são as da página atual do cliente, nos slots posicionais do padrão.

**Revisão de 26/10/2026, a pedido do usuário:** a abertura (header e hero) foi refeita sobre o mockup enviado — fundo claro, verdes da marca, título em três linhas com "impressoras" em destaque, CTA em pílula e pontos curtos ("Desde 2003 / no mercado", "Manutenção / inclusa", "Suporte / especializado"). O banner do hero passou a ser a foto enviada junto (multifuncionais Ricoh e Canon e impressora Epson em escritório claro). Os tokens de cor saíram do padrão para os verdes da marca, em toda a página.

A Ricoh aparece **só por extenso**. Não há claims proibidos no material.

## Viabilidade por fase

| Fase       | Bloco            | Veredicto     | Responde                                                                   | Papéis                    | O que falta                                                             |
| ---------- | ---------------- | ------------- | -------------------------------------------------------------------------- | ------------------------- | ----------------------------------------------------------------------- |
| Oferta     | `linhas`         | completo      | locação e aluguel, multifuncionais e copiadoras, scanners, colorida, Ricoh | Administrativo, Compras   | features **inferidas** do material e da página atual; validar           |
| Oferta     | `vitrine`        | insuficiente  | —                                                                          | —                         | só 4 categorias                                                         |
| Oferta     | `especificacoes` | insuficiente  | —                                                                          | —                         | modelos com especificações comparáveis                                  |
| Apoio      | `processo`       | completo      | locação e aluguel                                                          | Administrativo, Compras   | sequência **inferida**; sem prazos                                      |
| Apoio      | `identificar`    | insuficiente  | —                                                                          | —                         | os 6 dados que o comercial pede para dimensionar                        |
| Apoio      | `situacoes`      | insuficiente  | —                                                                          | —                         | gatilhos de contato reais                                               |
| Prova      | `aplicacoes`     | completo      | locação e aluguel                                                          | Administrativo, Diretoria | fotos do site em resolução abaixo de 1200×900                           |
| Prova      | `segmentos`      | insuficiente  | —                                                                          | —                         | 7 setores completos                                                     |
| Prova      | `clientes`       | insuficiente  | —                                                                          | —                         | logos autorizadas e números com fonte                                   |
| Autoridade | `diferenciais`   | completo      | locação e aluguel                                                          | Diretoria, Compras        | foto de pessoa da equipe (hoje entra a frota de equipamentos recortada) |
| Autoridade | `perguntas`      | insuficiente  | —                                                                          | —                         | lista real de dúvidas do comercial                                      |
| Autoridade | `escopo`         | não se aplica | —                                                                          | —                         | não é consolidação de compras                                           |

## Núcleo

| #   | Entrada            | Valor                                                                       | Origem                                     |
| --- | ------------------ | --------------------------------------------------------------------------- | ------------------------------------------ |
| 1   | MARCA              | Print Master                                                                | briefing                                   |
| 2   | MARCA_CURTA        | Print Master                                                                | briefing                                   |
| 3   | PRODUTO_PRINCIPAL  | Locação de impressoras                                                      | briefing                                   |
| 4   | CONTEXTO_DE_USO    | empresas                                                                    | página atual ("para empresas")             |
| 5   | PUBLICO            | Administrativo, Compras, TI, Diretoria                                      | **inferido** — cargos ausentes no material |
| 6   | HERO               | desde 2003, manutenção inclusa, suporte especializado                       | briefing; forma curta do mockup (26/10)    |
| 7   | MARCAS_ATENDIDAS   | Ricoh, só por extenso                                                       | briefing; uso de logo não decidido         |
| 8   | SELOS_DE_CONFIANCA | manutenção inclusa, suporte remoto e presencial, sede em Goiânia            | briefing e endereço                        |
| 9   | ENDERECO           | Rua C56 nº 65, Qd. 103, Lt. 05, Setor Sudoeste, Goiânia/GO                  | briefing                                   |
| 10  | URL + PRIVACIDADE  | `printmaster.net.br/lp-locacao-de-impressoras-para-empresas/`; sem política | briefing                                   |
| 11  | SHORTCODES         | padrão do plugin                                                            | default                                    |
| 12  | WHATSAPP           | sem botão flutuante                                                         | ausente no material                        |
| 13  | STACK + PUBLICACAO | padrão da agência + prévia na Vercel                                        | default                                    |
| 14  | TOKENS + FONTE     | verdes da marca (#064337, #027653, #61e5a9); Manrope                        | logotipo e mockup de abertura (26/10)      |
| 15  | CAMPANHA           | `locação de impressoras`                                                    | briefing                                   |

## Pendências

| O que falta                             | Quem resolve        | Especificação                                                                          |
| --------------------------------------- | ------------------- | -------------------------------------------------------------------------------------- |
| Fotos de produto recortadas             | cliente             | as do site vêm com fundo branco; PNG 800×600 com fundo transparente                    |
| Foto de "equipamentos conectados"       | cliente             | hoje é o ícone de nuvem do site; foto real de equipamento, 1280×800                    |
| Fotos das aplicações em alta            | cliente ou banco    | as do site têm 740 a 996 px de largura; pedir 1200×900                                 |
| Pessoa da equipe recortada              | cliente ou designer | 1220×1000 com fundo transparente; hoje entra a frota de equipamentos recortada do site |
| Validar features das 4 linhas           | cliente             | inferidas do material e da página atual                                                |
| Validar a sequência de `processo`       | cliente             | inferida (diagnóstico, proposta, instalação, suporte); sem prazos                      |
| WhatsApp comercial                      | cliente             | número com DDD; liga o botão flutuante                                                 |
| Cobertura em Brasília                   | cliente             | habilitaria a família "Brasília" da campanha                                           |
| Escopo de outsourcing                   | cliente             | a família "outsourcing" da campanha segue sem bloco que responda                       |
| Os 6 dados para dimensionar uma locação | comercial           | habilitaria `identificar` no apoio                                                     |
| Lista de dúvidas reais                  | comercial           | habilitaria `perguntas` na autoridade                                                  |
| Política de privacidade                 | cliente             | link para a nota de LGPD                                                               |

## Conflitos com o padrão

| O que o material pedia                                    | Regra do padrão                                  | O que entrou no lugar                            |
| --------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------ |
| CTA "Fale com um especialista agora!" com âncora `#whats` | todo CTA usa o vocabulário e o componente padrão | "Falar com especialista" e demais rótulos padrão |

## Dados não usados pelo padrão

CNPJ 21.762.387/0001-93; "Print Master 2026 | Todos direitos reservados" (o footer gera o ano); texto institucional longo; imagem com logos de fabricantes multimarcas; aplicações excedentes (clínicas e consultórios, departamentos administrativos); logotipo antigo.
