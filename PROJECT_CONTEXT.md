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
- Publicação ainda não executada.

## Checkpoint

- Branch de trabalho: `codex/aventor-premium-v1`.
- Checkpoint aprovado: commit `dc233ee`.
- Tag restaurável: `aventor-v1-premium-2026-10-20`.
- Para restaurar esta versão, usar a tag acima no repositório local ou remoto.
- Mudanças posteriores à tag não existem neste checkpoint.
