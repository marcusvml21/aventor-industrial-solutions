# AVENTOR — Contexto do Projeto

## Estado atual

- Projeto: site institucional da AVENTOR.
- Tecnologia: React, Vite, TypeScript, Tailwind CSS.
- Publicação: GitHub Pages via `.github/workflows/pages.yml`.
- Domínio: `www.aventor.com.br`.
- Fonte oficial de trabalho: este repositório GitHub. O projeto não usa mais Lovable.

## Regras comerciais aprovadas

- A empresa deve ser apresentada como fundada em 2011.
- Usar “100+ clientes cadastrados”.
- Atendimento: segunda a sexta, das 8h às 18h.
- Não exibir telefone; usar apenas link/botão para WhatsApp.
- Não mencionar certificações.
- Depoimentos existentes são reais e podem permanecer publicados.
- Não usar “100% qualidade garantida”. Preferir linguagem sóbria e verificável.

## V1 premium — 2026-10-20

Objetivo: tornar a home mais sofisticada, clara e leve, com foco em orçamento via WhatsApp.

Implementado nesta etapa:

- Hero simplificado com posicionamento mais direto.
- Paleta visual mais sóbria, com azul profundo e acento quente.
- Remoção de estatísticas e afirmações inconsistentes.
- Atualização para 100+ clientes cadastrados e fundação em 2011.
- Remoção do telefone visível.
- Substituição do formulário simulado por contato direto via WhatsApp e e-mail.
- Redução de linguagem relacionada a certificações.
- Correção do `#root` para permitir composição full-width.

Validações realizadas:

- `npm run lint`: aprovado sem erros; permanecem 7 avisos preexistentes de Fast Refresh nos componentes padrão do Lovable.
- `npm run build`: aprovado.
- Detector visual Impeccable: nenhum achado.
- Inspeção visual: desktop e mobile aprovados.
- HTML/SEO revisados para remover referências antigas a “30+ anos”, certificações e qualidade garantida.
- Publicação executada pelo GitHub Actions com sucesso no run `39503910880`.
- Artefato publicado confirmado no branch `gh-pages`, commit `d5306ac`.
- O domínio público respondeu com HTTP 200 e serviu os bundles da V1; a propagação de cache pode variar por alguns minutos.
- Avisos não bloqueantes do deploy: futura migração de Node 20 para Node 24 nas actions e atualização futura do Ubuntu do runner.

## Checkpoint

- Branch de trabalho: `codex/aventor-premium-v1`.
- Checkpoint aprovado do código: commit `adfb8a1`.
- Tag restaurável: `aventor-v1-premium-2026-10-20`.
- Para restaurar esta versão, usar a tag acima no repositório local ou remoto.
- Mudanças posteriores à tag não existem neste checkpoint.

## Publicação V1 — 2026-10-20

- Estado: publicada no GitHub Pages.
- Versão pública: artefato do branch `gh-pages`, commit `d5306ac`.
- Checkpoint documental: commit `41e160b`, associado à tag `aventor-v1-premium-publicada-2026-10-20`.

## Fase 1 — Favicon, abertura e higiene pública — 2026-10-20

Objetivo: reduzir a poluição visual da primeira tela, corrigir o favicon e remover referências públicas incompatíveis com as regras comerciais aprovadas.

Implementado:

- Favicon recriado a partir da marca enviada pelo proprietário, com versões para navegador e Apple touch icon.
- Referência do favicon corrigida no HTML; o arquivo HTML inválido `favicon.jpg` deixou de ser utilizado.
- Hero simplificado: removidos chips de categorias, estatísticas, elementos geométricos e indicador de rolagem.
- Mantidos apenas o posicionamento, a mensagem principal e os dois caminhos de ação.
- Removidas referências públicas a certificações, “qualidade certificada” e “garantias de qualidade”.
- Sitemap reduzido à única rota realmente existente e atualizado para 2026-10-20.
- Diretiva do sitemap adicionada ao `robots.txt`.

Validações da fase:

- `npm run lint`: aprovado sem erros; 7 avisos preexistentes de Fast Refresh.
- `npm run build`: aprovado.
- Detector visual Impeccable: nenhum achado; execução em modo degradado por ausência de módulos opcionais do parser HTML.
- Inspeção visual local: abertura revisada e favicon conferido.

Estado: publicado no GitHub Pages.

Checkpoint da fase: commit `cec98c0`, tag `aventor-fase1-2026-10-20`.
Artefato publicado confirmado no branch `gh-pages`, commit `45a1383`.
O domínio pode permanecer temporariamente em cache antigo na CDN; isso não representa falha do artefato publicado.

## Fase 2 — SEO avançado e imagens — 2026-10-20

Objetivo: fortalecer a indexação e o compartilhamento do site sem substituir as imagens institucionais ou de produto.

Implementado:

- Título e descrição da página refinados para busca orgânica.
- Open Graph e Twitter Cards corrigidos para usar URLs reais do domínio `www.aventor.com.br`.
- Criada imagem social `public/og-image.jpg` em 1200 × 630 usando a identidade visual existente.
- Adicionados textos alternativos para compartilhamento social.
- Dados estruturados ampliados com Organization e WebSite, fundação em 2011 e horário de atendimento.
- Removidos metadados genéricos ou antigos que não contribuíam para a estratégia atual.
- Imagem principal configurada como carregamento prioritário; imagens abaixo da abertura configuradas para carregamento tardio.
- Dimensões explícitas adicionadas às imagens principais para reduzir mudanças de layout durante o carregamento.

Validações da fase:

- `npm run lint`: aprovado sem erros; 7 avisos preexistentes de Fast Refresh.
- `npm run build`: aprovado.
- Detector visual Impeccable: nenhum achado; execução em modo degradado por ausência de módulos opcionais do parser HTML.
- Verificação de resíduos SEO: nenhuma referência antiga a certificações, “30+”, imagem social inexistente ou metadado removido.

Estado: publicado no GitHub Pages.

Checkpoint da fase: commit `8b9c366`, tag `aventor-fase2-2026-10-20`.
Artefato publicado confirmado no branch `gh-pages`, commit `a6f7cef`.

## Fase 3 — Amostra visual aprovada e imagem principal — 2026-10-20

Objetivo: substituir somente a imagem principal após apresentação e aprovação prévia de uma amostra visual.

Implementado:

- Amostra visual apresentada ao proprietário e aprovada antes da alteração.
- Imagem principal substituída por uma fotografia editorial industrial com espaço negativo para o texto da abertura.
- As demais imagens institucionais e de produtos não foram alteradas.
- A imagem foi convertida para JPEG otimizado, reduzindo o arquivo para aproximadamente 376 KB.
- Texto alternativo mantido descritivo e sem afirmar que a cena representa instalações reais da AVENTOR.
- Segunda amostra visual apresentada e aprovada para a imagem de produtos/uniformes.
- Imagem da seção de produtos/uniformes substituída; a imagem anterior foi preservada no projeto.
- Nova imagem otimizada para aproximadamente 392 KB.
- Terceira amostra visual apresentada e aprovada para a seção “Sobre a AVENTOR”.
- Imagem da seção “Sobre” substituída; a imagem anterior foi preservada no projeto.
- Nova imagem otimizada para aproximadamente 372 KB.
- Quarta amostra visual apresentada e aprovada para a categoria de EPIs e materiais industriais.
- Imagem da categoria de EPIs e acessórios substituída no carrossel de produtos; a imagem anterior foi preservada.
- Nova imagem otimizada para aproximadamente 432 KB.
- Quinta amostra visual apresentada e aprovada para material elétrico e hidráulico.
- Imagem da categoria de material elétrico e hidráulico substituída no carrossel; a imagem anterior foi preservada.
- Nova imagem otimizada para aproximadamente 512 KB.
- Sexta amostra visual apresentada e aprovada para material de limpeza.
- Imagem da categoria de material de limpeza substituída no carrossel; a imagem anterior foi preservada.
- Nova imagem otimizada para aproximadamente 282 KB.
- Sétima amostra visual apresentada e aprovada para ferramentas.
- Imagem da categoria de ferramentas substituída no carrossel; a imagem anterior foi preservada.
- Nova imagem otimizada para aproximadamente 350 KB.
- Oitava amostra visual apresentada e aprovada para fábrica e estrutura operacional.
- Imagem da categoria de fábrica substituída no carrossel; a imagem anterior foi preservada.
- Nova imagem otimizada para aproximadamente 363 KB.

Validações da fase:

- `npm run lint`: aprovado sem erros; 7 avisos preexistentes de Fast Refresh.
- `npm run build`: aprovado.
- Detector visual Impeccable: nenhum achado.
- `git diff --check`: aprovado.

Estado: publicado no GitHub Pages.

Checkpoint da atualização: commit `cc4267a`, tag `aventor-fase3-produtos-2026-10-20`.
Artefato publicado confirmado no branch `gh-pages`, commit `be9d4c0`.

Checkpoint da fase: commit `0f5e9d0`, tag `aventor-fase3-2026-10-20`.
Artefato publicado confirmado no branch `gh-pages`, commit `363d282`.

Checkpoint da atualização institucional: commit `7aae9be`, tag `aventor-fase3-sobre-2026-10-20`.
Artefato publicado confirmado no branch `gh-pages`, commit `c6019f1`.

Checkpoint da atualização de EPIs: commit `e703207`, tag `aventor-fase3-epis-2026-10-20`.
Artefato publicado confirmado no branch `gh-pages`, commit `8ba717d`.

Checkpoint da atualização de materiais: commit `5997f84`, tag `aventor-fase3-materiais-2026-10-20`.
Artefato publicado confirmado no branch `gh-pages`, commit `8a4dba1`.

Checkpoint da atualização de material de limpeza: commit `7e13577`, tag `aventor-fase3-limpeza-2026-10-20`.
Artefato publicado confirmado no branch `gh-pages`, commit `d45cf99`.

Checkpoint da atualização de ferramentas: commit `77bcb74`, tag `aventor-fase3-ferramentas-2026-10-20`.
Artefato publicado confirmado no branch `gh-pages`, commit `ea80d96`.

Checkpoint da atualização de fábrica: commit `d32003f`, tag `aventor-fase3-fabrica-2026-10-20`.
Artefato publicado confirmado no branch `gh-pages`, commit `414929a`.
