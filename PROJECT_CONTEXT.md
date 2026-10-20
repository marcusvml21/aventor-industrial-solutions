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

Estado: pronto para publicação.
