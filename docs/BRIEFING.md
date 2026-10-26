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

| #   | Entrada                 | Valor                                                                               | Origem                                          |
| --- | ----------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------- |
| 1   | MARCA                   | Print Master                                                                        | briefing                                        |
| 2   | MARCA_CURTA             | Print Master                                                                        | briefing                                        |
| 3   | PRODUTO_PRINCIPAL       | Locação de impressoras                                                              | briefing                                        |
| 4   | CONTEXTO_DE_USO         | empresas                                                                            | página atual                                    |
| 5   | PUBLICO                 | Administrativo, Compras, TI, Diretoria                                              | **inferido**                                    |
| 6   | HERO                    | desde 2003 · equipamentos modernos com manutenção inclusa · suporte especializado   | briefing                                        |
| 7   | MARCAS_ATENDIDAS        | Ricoh, só por extenso                                                               | logos de terceiros: decisão do cliente pendente |
| 8   | SELOS_DE_CONFIANCA      | Manutenção inclusa · Suporte remoto e presencial · Sede em Goiânia/GO               | briefing e endereço                             |
| 9   | ENDERECO                | Rua C56 nº 65, Qd. 103, Lt. 05, Setor Sudoeste, Goiânia/GO, CEP 74.305-350          | briefing                                        |
| 10  | URL_FINAL + PRIVACIDADE | `https://printmaster.net.br/lp-locacao-de-impressoras-para-empresas/`; sem política | briefing                                        |
| 11  | SHORTCODES              | `[atendimento_chat id="default"]` · `[atendimento_form id="default-form"]`          | default                                         |
| 12  | WHATSAPP                | sem botão flutuante                                                                 | ausente no material                             |
| 13  | STACK + PUBLICACAO      | Astro, `main` → `wp-build`; prévia na Vercel                                        | default do padrão                               |
| 14  | TOKENS_DE_COR + FONTE   | padrão B2                                                                           | manual da marca ausente                         |
| 15  | CAMPANHA                | `locação de impressoras`                                                            | briefing                                        |

## Assets

> Nenhum slot ficou com placeholder: todas as imagens vêm da página atual do cliente. Várias são **provisórias** e estão listadas para troca.

| Asset          | Arquivo esperado        | Especificação               | Status                                                                                         |
| -------------- | ----------------------- | --------------------------- | ---------------------------------------------------------------------------------------------- |
| Logo           | `src/assets/LOGO.png`   | 240×200, fundo transparente | entregue — logotipo do site em quadro 3:1 (o `Image` do Header usa 288×96 para essa proporção) |
| Banner do hero | `src/assets/heroBg.png` | 1981×900, brief 4.1.3       | **provisório** — copiadora Ricoh MP 4055 do site sobre fundo navy, centrada em 70% da largura  |

| Asset                   | Arquivo esperado                        | Especificação                   | Status                                                                                |
| ----------------------- | --------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------- |
| Multifuncional Ricoh    | `src/assets/linhas/linha-1.png`         | PNG 800×600, fundo transparente | entregue — foto do site, fundo branco removido                                        |
| Copiadora               | `src/assets/linhas/linha-2.png`         | PNG 800×600, fundo transparente | entregue — recorte do site                                                            |
| Scanner                 | `src/assets/linhas/linha-3.png`         | PNG 800×600, fundo transparente | entregue — foto do site, fundo cinza-claro removido                                   |
| Equipamentos conectados | `src/assets/linhas/marcas.png`          | 1280×800                        | **provisório** — ícone de nuvem do site; pedir foto real                              |
| Aplicações (4)          | `src/assets/aplicacoes/aplicacao-*.jpg` | 1200×900 (4:3)                  | entregue em baixa resolução (675 a 885 px) — `check:lp` avisa                         |
| Cenário                 | `src/assets/diferenciais/cenario.jpg`   | 1600×900                        | **provisório** — foto "departamentos administrativos" do site, desfocada e escurecida |
| Pessoa                  | `src/assets/diferenciais/pessoa.png`    | 1220×1000, fundo transparente   | **provisório** — frota de equipamentos do site, recortada; pedir pessoa da equipe     |

## Conflitos com o padrão

| O que o material pedia                                    | Regra do padrão                                  | O que entrou no lugar                      |
| --------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------ |
| CTA "Fale com um especialista agora!" com âncora `#whats` | todo CTA usa o vocabulário e o componente padrão | rótulos padrão em `button.btn-slave-whats` |

## Desvios desta execução

- `src/components/Header.astro`: `width`/`height` do logo passaram de 240×200 para 288×96, a proporção do logotipo da Print Master (mesmo ajuste das LPs COAIR). Layout, classes e medidas visíveis (`h-14`/`h-24`) não mudaram.
- `src/data/sections/processo.ts`: tipo anotado em vez de `as const satisfies`, porque sem nenhum `when` o tipo literal não tem a propriedade e o `ProcessSteps.astro` deixa de tipar (mesma correção da LP de compressores de parafuso).
- Ícones com hífen (`file-text`, `trend-up`) foram trocados por `file`, `tag` e `sliders`: o `ficha.mjs` não reconhece chaves entre aspas de `icons.ts`.
- `npm run screens` não roda com espaço no caminho da pasta; as capturas foram feitas com os mesmos parâmetros, à mão.

## Dados não aplicados

CNPJ 21.762.387/0001-93; "Print Master 2026 | Todos direitos reservados" (o footer gera o ano); texto institucional longo; imagem com logos de fabricantes (Ricoh, OKI, Brother, Canon, Epson, Konica Minolta, Zebra, Kyocera); aplicações excedentes "Clínicas e consultórios" e "Departamentos administrativos"; logotipo antigo `logo-printmaster.jpg`.

## Estado da entrega

- [x] Primeira versão de pé (`npm run check:lp:rascunho` passa) em: 26/10/2026
- [ ] Todos os assets reais entregues (banner, foto de "equipamentos conectados", cenário e pessoa são provisórios)
- [x] `npm run verify` passa inteiro em: 26/10/2026
- [x] Padrão B2 versão: `2.8.0`
