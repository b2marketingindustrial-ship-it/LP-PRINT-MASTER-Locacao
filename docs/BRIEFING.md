# Registro da LP — o que a ficha decidiu e o que a execução fez

> Preenchido pelo agente **durante a execução**, a partir de `docs/FICHA-LP.md`. Não é um registro de entrevista: a entrevista aconteceu no chat web (`docs/PROMPT-FICHA-LP.md`) e a ficha é a fonte. Este arquivo existe para que, meses depois e sem a conversa, se saiba de onde veio cada coisa — e porque `docs/briefing-cliente/` fica fora do git.
>
> Nada aqui é perguntado ao usuário. Se um campo não puder ser preenchido a partir da ficha, a execução para e recusa, em vez de deixar lacuna.

## Origem

| Campo                     | Valor                                                                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ficha de execução         | `docs/FICHA-LP.md`                                                                                                                                          |
| Data da ficha             | 26/10/2026                                                                                                                                                  |
| Versão do padrão na ficha | 2.8.0 (o briefing organizado citava v2.9.0; o starter local está em 2.8.0)                                                                                  |
| Validada em               | 26/10/2026 por `npm run ficha`                                                                                                                              |
| Material bruto do cliente | `docs/briefing-cliente/briefing-print-master-locacao-impressoras.md` (fora do git) e a página `printmaster.net.br/lp-locacao-de-impressoras-para-empresas/` |
| Briefing de campanha      | não                                                                                                                                                         |
| Fora desta execução       | —                                                                                                                                                           |

A ficha foi **montada no editor** a partir do briefing organizado e da página atual do cliente, por pedido de uma primeira versão publicada antes da entrevista completa no chat — o mesmo caminho da LP de compressores de parafuso da Falanga. Os pontos marcados como inferidos na ficha precisam de validação com o cliente.

## Campanha

| Campo                      | Valor                                                                                                                  |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Palavra-chave principal    | `locação de impressoras` — no H1 ("Locação de impressoras para empresas") e no title                                   |
| Origem                     | informada (lista de palavras-chave do briefing)                                                                        |
| Área atendida              | Goiânia/GO, confirmada pelo endereço: meta description e selo "Sede em Goiânia/GO" na cotação. Brasília não confirmada |
| Negativas de oferta        | nenhuma                                                                                                                |
| Claims proibidos           | nenhum                                                                                                                 |
| Divergência de vocabulário | o cliente diz "locação de impressoras"; a campanha compra também aluguel e outsourcing. Abriu a página: locação        |

### Famílias de palavra-chave

| Família                      | Termos                                                                  | Bloco que responde | Status     |
| ---------------------------- | ----------------------------------------------------------------------- | ------------------ | ---------- |
| locação e aluguel            | locação/aluguel de impressoras, alugar impressora, aluguel de copiadora | hero + `linhas`    | coberta    |
| multifuncionais e copiadoras | locação/aluguel de multifuncional, aluguel de copiadora                 | `linhas`           | coberta    |
| scanners                     | aluguel de scanner, locação de scanner                                  | `linhas`           | coberta    |
| impressão colorida           | aluguel de impressora laser colorida                                    | `linhas`           | coberta    |
| marca Ricoh                  | locação de impressora Ricoh                                             | `linhas`           | coberta    |
| outsourcing                  | outsourcing de impressão/impressoras e variações                        | —                  | **lacuna** |
| Goiânia                      | aluguel/locação de impressoras Goiânia                                  | selo da cotação    | parcial    |
| Brasília                     | locação/aluguel de impressora Brasília, outsourcing em Brasília         | —                  | **lacuna** |

### Comitê de compra

| Papel          | Argumento de compra                        | Bloco que responde    | Status       |
| -------------- | ------------------------------------------ | --------------------- | ------------ |
| Administrativo | equipamento certo e funcionando            | `linhas`, `processo`  | **inferido** |
| Compras        | custo previsível, sem investimento inicial | `diferenciais`        | **inferido** |
| TI             | equipamentos em rede, impressão móvel      | `linhas` (conectados) | **inferido** |
| Diretoria      | redução de custos e produtividade          | `diferenciais`        | **inferido** |

## Composição

Derivada em: 26/10/2026 · comando aplicado: `npm run compose -- linhas processo aplicacoes diferenciais`

### Seções que entraram

| Fase       | Seção          | Fundo | Respiro         | Veredicto na ficha | Famílias que responde |
| ---------- | -------------- | ----- | --------------- | ------------------ | --------------------- |
| oferta     | `linhas`       | light | `open`          | completo           | 5                     |
| apoio      | `processo`     | light | `panel-lead`    | completo (navy)    | 1                     |
| prova      | `aplicacoes`   | gray  | `centered-lead` | completo           | 1                     |
| autoridade | `diferenciais` | gray  | `overlap`       | completo (navy)    | 1                     |

### Blocos que ficaram fora

| Bloco            | Veredicto     | O que falta para entrar                                      |
| ---------------- | ------------- | ------------------------------------------------------------ |
| `vitrine`        | insuficiente  | 6 a 24 produtos; há 4 categorias                             |
| `especificacoes` | insuficiente  | modelos com especificações comparáveis                       |
| `identificar`    | insuficiente  | os 6 dados que o comercial pede para dimensionar uma locação |
| `situacoes`      | insuficiente  | gatilhos de contato reais                                    |
| `segmentos`      | insuficiente  | 7 setores com vocabulário e 3 equipamentos cada              |
| `clientes`       | insuficiente  | 4 a 8 logos autorizadas e 3 números com fonte                |
| `perguntas`      | insuficiente  | lista real de dúvidas do comercial, com respostas aprovadas  |
| `escopo`         | não se aplica | a oferta não é consolidação de compras                       |

## Entradas do núcleo

| #   | Entrada                 | Valor                                                                                       | Origem                                                                                      |
| --- | ----------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 1   | MARCA                   | Print Master                                                                                | briefing                                                                                    |
| 2   | MARCA_CURTA             | Print Master                                                                                | briefing                                                                                    |
| 3   | PRODUTO_PRINCIPAL       | Locação de impressoras                                                                      | briefing                                                                                    |
| 4   | CONTEXTO_DE_USO         | empresas                                                                                    | página atual                                                                                |
| 5   | PUBLICO                 | Administrativo, Compras, TI, Diretoria                                                      | **inferido**                                                                                |
| 6   | HERO                    | Desde 2003 / no mercado · Manutenção / inclusa · Suporte / especializado                    | briefing; forma curta do mockup de abertura (26/10/2026)                                    |
| 7   | MARCAS_ATENDIDAS        | Ricoh, Brother, Canon, Epson, OKI, Konica Minolta, Zebra e Kyocera, com logos               | logos recortadas da arte que o cliente publica no site atual; mockup aprovado em 26/10/2026 |
| 8   | SELOS_DE_CONFIANCA      | Manutenção inclusa · Suporte remoto e presencial · Sede em Goiânia/GO                       | briefing e endereço                                                                         |
| 9   | ENDERECO                | Rua C56 nº 65, Qd. 103, Lt. 05, Setor Sudoeste, Goiânia/GO, CEP 74.305-350                  | briefing                                                                                    |
| 10  | URL_FINAL + PRIVACIDADE | `https://printmaster.net.br/lp-locacao-de-impressoras-para-empresas/`; sem política         | briefing                                                                                    |
| 11  | SHORTCODES              | `[atendimento_chat id="default"]` · `[atendimento_form id="default-form"]`                  | default                                                                                     |
| 12  | WHATSAPP                | sem botão flutuante                                                                         | ausente no material                                                                         |
| 13  | STACK + PUBLICACAO      | Astro, `main` → `wp-build`; prévia na Vercel                                                | default do padrão                                                                           |
| 14  | TOKENS_DE_COR + FONTE   | verdes da marca: `#064337` (profundo), `#027653` (ação), `#61e5a9` (menta do logo); Manrope | logotipo e mockup de abertura (26/10/2026)                                                  |
| 15  | CAMPANHA                | `locação de impressoras`                                                                    | briefing                                                                                    |

## Assets

> Nenhum slot ficou com placeholder: todas as imagens vêm da página atual do cliente. Várias são **provisórias** e estão listadas para troca.

| Asset          | Arquivo esperado        | Especificação               | Status                                                                                                                |
| -------------- | ----------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Logo           | `src/assets/LOGO.png`   | 240×200, fundo transparente | entregue — logotipo do site recortado (1736×398); o `Image` do Header usa 262×60, sem a placa branca                  |
| Banner do hero | `src/assets/heroBg.png` | 1981×900, brief 4.1.3       | entregue em 26/10/2026 pelo usuário — multifuncionais Ricoh e Canon e impressora Epson em escritório claro (1870×841) |

| Asset                | Arquivo esperado                        | Especificação                   | Status                                                                                                                                                      |
| -------------------- | --------------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Multifuncional Ricoh | `src/assets/linhas/linha-1.png`         | PNG 800×600, fundo transparente | entregue — foto do site, fundo branco removido                                                                                                              |
| Copiadora            | `src/assets/linhas/linha-2.png`         | PNG 800×600, fundo transparente | entregue — recorte do site                                                                                                                                  |
| Scanner              | `src/assets/linhas/linha-3.png`         | PNG 800×600, fundo transparente | entregue — foto do site, fundo cinza-claro removido                                                                                                         |
| Impressão conectada  | `src/assets/linhas/marcas.png`          | 1280×800                        | montada em 26/10/2026 no estilo do mockup: celular e sinal de rede desenhados + a foto real da Ricoh M 320F (1007×630)                                      |
| Aplicações (4)       | `src/assets/aplicacoes/aplicacao-*.jpg` | 1200×900 (4:3)                  | recortadas do mockup aprovado em 26/10/2026 (escritórios com multifuncional), 6:5, ampliadas 2× a partir de ~384px — pedir as originais em alta para trocar |
| Cenário              | `src/assets/diferenciais/cenario.jpg`   | 1600×900                        | entregue em 26/10/2026 pelo usuário — multifuncional Ricoh em escritório, com o degradê verde à esquerda (1890×832)                                         |
| Pessoa               | —                                       | —                               | removida em 26/10/2026: o mockup de diferenciais não tem pessoa recortada                                                                                   |

## Conflitos com o padrão

| O que o material pedia                                    | Regra do padrão                                  | O que entrou no lugar                      |
| --------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------ |
| CTA "Fale com um especialista agora!" com âncora `#whats` | todo CTA usa o vocabulário e o componente padrão | rótulos padrão em `button.btn-slave-whats` |

## Desvios desta execução

- **Abertura refeita sobre o mockup do cliente (26/10/2026).** `Header.astro`: barra branca translúcida, logo sem a placa branca, tagline com marcador menta e CTA em pílula verde com ícone de WhatsApp — a ordem logo · tagline · CTA e a ausência de menu continuam as do padrão (o menu do mockup não entrou). `Hero.astro`: fundo claro, título em três linhas com o destaque `hero.highlight`, CTA primário em pílula, secundário como link com ícone, pontos curtos e a foto ancorada pelo centro do grupo de impressoras (53,5% da largura) no centro da coluna 2; no mobile a foto vira um card entre o texto e o chat. O grid de três colunas e a coluna de 300px do shortcode continuam. A assinatura A8 de `scripts/check-lp.mjs` foi repinada para essa abertura, como na LP de compressores de parafuso.
- **Tokens da marca em toda a página** (`src/styles/global.css`): os nomes do padrão ficam, com os valores verdes — "navy" é o verde profundo e "orange" é o verde de ação. As sombras laranja fixas dos botões de `ProcessSteps.astro` e `WhyBrand.astro` passaram para a cor de ação; vale levar para a biblioteca uma sombra que use o token.
- **`linhas` como no mockup aprovado (26/10/2026).** Fundo menta, título maior com subtítulo curto, "Precisa de ajuda para escolher?" com botão "Fale com um especialista" (`data-cta="linhas-ajuda"`), 4 cards brancos com foto grande em palco menta, etiqueta, 2 características e botão "Solicitar orçamento", sem card escuro, e a faixa "Soluções com marcas reconhecidas" com 8 logos em cinza. Os rótulos de CTA desta seção são os do mockup, não o vocabulário fixo. O contrato da seção foi repinado em `lp.manifest.json` (2 características, sem `exactlyOneTrue`) e o `scripts/ficha.mjs` local passou a usar o contrato da LP quando houver, o mesmo que o `check:lp` usa. Os recortes de `linha-1` e `linha-3` foram refeitos com limiar estrito, porque o fundo menta revelava o corpo branco "comido" pelo recorte antigo.
- **`processo` como no mockup aprovado (26/10/2026).** Sai o painel verde-escuro; entra um cabeçalho claro com o título "Da escolha à impressão, cuidamos de cada etapa.", o botão "Fale com um especialista" e a garantia "Manutenção e suporte inclusos", e as 4 etapas em cards verde-escuros numerados, sem ícones — os cards fazem o papel do bloco escuro desta metade da página. Textos das etapas reescritos como no mockup. Contrato repinado em `lp.manifest.json` (sem `icon` nos itens).
- **`aplicacoes` como no mockup aprovado (26/10/2026).** Cabeçalho à esquerda ("Soluções por segmento"), link "Encontre a solução ideal" à direita (`data-cta="aplicacoes-cta"`), e 4 cards-botão com foto 6:5 numerada e painel verde-escuro com título, texto e seta menta. As fotos saíram do próprio mockup (o número gravado nelas foi apagado e fica coberto pelo número da seção); as do site do cliente seguem no histórico do git.
- **`diferenciais` como no mockup aprovado (26/10/2026).** Bloco em largura total sobre a foto enviada (multifuncional Ricoh em escritório, degradê verde já na imagem), eyebrow "Soluções Print Master", título "Impressão inteligente / para sua empresa.", texto novo e botão "Solicite uma proposta"; a colagem de equipamentos recortada (`pessoa.png`) saiu. Os 5 cards sobrepostos continuam. De quebra, as setas do trilho no celular voltaram a funcionar: o script procurava `[data-why]`, que a seção não tinha.
- **Cotação como no mockup aprovado (26/10/2026).** Fundo verde-escuro; o shortcode do formulário fica dentro de um card branco com cabeçalho ("Solicite sua cotação" + subtítulo) e nota de privacidade com cadeado; título "A impressão ideal para o ritmo da sua empresa." com o final em menta; "Prefere falar com a nossa equipe?" e botão "Conversar no WhatsApp" em verde vivo (`#17a463`, texto 19px negrito para passar no contraste de texto grande); selos com divisórias. O formulário continua sendo o do plugin: fora do WordPress a prévia mostra os campos do mockup (Nome, Empresa, E-mail corporativo, WhatsApp, mensagem) como imagem não interativa, com a legenda "Prévia". Ícone `lock` acrescentado ao mapa de ícones. As assinaturas A8 da Cotação continuam as do padrão.
- **Prévia do chat fora do WordPress**: na Vercel o shortcode chega como texto cru; o Hero o esconde e mostra um card de prévia ("O chat da Print Master abre aqui na página publicada"). Só age quando o conteúdo é exatamente um shortcode e o domínio não é `printmaster.net.br`; no WordPress nada muda.
- `Layout.astro`: o preload do LCP acompanha as larguras do banner novo (até 1870px) e os `sizes` do `<Picture>`.
- **Fonte servida pelo próprio site**: o Manrope saiu do Google Fonts para `@fontsource-variable/manrope` (5.3.0), com preload do subconjunto latino no `Layout.astro` e reserva com métricas de Arial (`Arial`, `Helvetica`, `Liberation Sans`). Com a abertura nova, a troca tardia de fonte no runner Linux (reserva DejaVu, mais larga) deslocava o hero: CLS de 0,104 no Lighthouse CI, acima do limite de 0,1. Depois da mudança: CLS 0 e LCP ~0,5 s no Lighthouse local.
- A coluna do chat no hero reserva 510px (a altura do widget do plugin), para a troca do shortcode pela prévia não deslocar o layout.
- `src/data/sections/processo.ts`: tipo anotado em vez de `as const satisfies`, porque sem nenhum `when` o tipo literal não tem a propriedade e o `ProcessSteps.astro` deixa de tipar (mesma correção da LP de compressores de parafuso).
- Ícones com hífen (`file-text`, `trend-up`) foram trocados por `file`, `tag` e `sliders`: o `ficha.mjs` não reconhece chaves entre aspas de `icons.ts`.
- `npm run screens` não roda com espaço no caminho da pasta; as capturas foram feitas com os mesmos parâmetros, à mão.

## Dados não aplicados

CNPJ 21.762.387/0001-93; "Print Master 2026 | Todos direitos reservados" (o footer gera o ano); texto institucional longo; imagem com logos de fabricantes (Ricoh, OKI, Brother, Canon, Epson, Konica Minolta, Zebra, Kyocera); aplicações excedentes "Clínicas e consultórios" e "Departamentos administrativos"; logotipo antigo `logo-printmaster.jpg`.

## Estado da entrega

- [x] Primeira versão de pé (`npm run check:lp:rascunho` passa) em: 26/10/2026
- [ ] Todos os assets reais entregues (foto de "equipamentos conectados", cenário e pessoa são provisórios)
- [x] `npm run verify` passa inteiro em: 26/10/2026
- [x] Padrão B2 versão: `2.8.0`
