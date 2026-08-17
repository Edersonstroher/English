# English Path — Curso de Inglês em Família

App web para aprender inglês com trilhas por tema (Trabalho, Viagens, Cultura Pop, Tecnologia), progresso salvo por usuário no Supabase, e avanço de módulo só liberado com quiz aprovado (≥70%). Cada pessoa da família cria sua própria conta e tem seu próprio progresso.

## 📁 Estrutura do projeto
```
english-app/
├── index.html
├── css/style.css
├── js/
│   ├── supabase-client.js   ← você vai colocar suas chaves aqui
│   ├── lessons-data.js      ← todo o conteúdo das lições (fácil de editar/expandir)
│   └── app.js                ← lógica do app
└── supabase/schema.sql       ← script para criar as tabelas no Supabase
```

---

## 1. Criar o projeto no Supabase (gratuito)

1. Acesse [supabase.com](https://supabase.com) e crie uma conta (pode usar GitHub para logar).
2. Clique em **New Project**, escolha um nome (ex: `english-path`) e uma senha de banco de dados (guarde essa senha).
3. Aguarde o projeto ser criado (leva ~2 minutos).
4. No menu lateral, vá em **SQL Editor** → **New query**.
5. Abra o arquivo `supabase/schema.sql` deste projeto, copie **todo** o conteúdo, cole no editor e clique em **Run**.
   - Isso cria as tabelas `profiles`, `progress` e `quiz_results`, já com segurança (cada usuário só vê os próprios dados).
6. No menu lateral, vá em **Authentication → Providers**, confirme que **Email** está habilitado (vem habilitado por padrão).
   - Opcional: em **Authentication → Settings**, desative "Confirm email" se quiser que os cadastros da família fiquem ativos na hora (bom para uso doméstico rápido).
7. Vá em **Project Settings → API**. Copie:
   - **Project URL**
   - **anon public key**

## 2. Conectar o app ao Supabase

Abra `js/supabase-client.js` e substitua:
```js
const SUPABASE_URL = "COLE_AQUI_A_SUA_SUPABASE_URL";
const SUPABASE_ANON_KEY = "COLE_AQUI_A_SUA_SUPABASE_ANON_KEY";
```
pelos valores que você copiou. Salve o arquivo.

> A chave "anon public" é segura para ficar no código do front-end — ela só permite o que as regras de segurança (RLS) do banco autorizam, que já configuramos no `schema.sql`.

## 3. Testar localmente

Não dá pra abrir `index.html` direto no navegador com duplo clique (o navegador bloqueia alguns recursos). Rode um servidor local simples:

```bash
cd english-app
python3 -m http.server 8000
```
Depois acesse `http://localhost:8000` no navegador.

## 4. Publicar no GitHub Pages (grátis)

1. Crie um repositório novo no GitHub (ex: `english-path`).
2. Envie os arquivos deste projeto para o repositório:
   ```bash
   cd english-app
   git init
   git add .
   git commit -m "English Path - primeira versão"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/english-path.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings → Pages**.
4. Em "Source", escolha a branch `main` e a pasta `/ (root)`. Clique em **Save**.
5. Em alguns minutos, seu site estará em:
   `https://SEU_USUARIO.github.io/english-path/`
6. Compartilhe esse link com sua filha e seus irmãos — cada um cria a própria conta na tela de cadastro.

## 5. Como funciona o desbloqueio de progresso

- O primeiro dia do primeiro módulo de cada tema já vem aberto.
- Cada dia de lição libera o próximo quando você clica em **"Marcar dia como concluído"**.
- Depois de concluir todos os dias de um módulo, o **quiz do módulo** é liberado.
- É preciso acertar **70% ou mais** no quiz para liberar o próximo módulo.
- Se reprovar, pode revisar o conteúdo e refazer o quiz — as tentativas ficam salvas em `quiz_results` no Supabase.

## 6. Como adicionar mais conteúdo (novos módulos/temas)

Todo o conteúdo didático vive em `js/lessons-data.js`, em um objeto `LESSONS`. Para adicionar um novo dia de aula, copie o formato de um dia existente (vocabulário, gramática, diálogo, dica de memorização e frases de tradução) dentro do array `days` de um módulo. Para adicionar um módulo novo, copie o formato `{ id, title, days: [...], quiz: [...] }` dentro do array `modules` do tema desejado. O app detecta automaticamente a estrutura nova — não precisa mexer no `app.js`.

## 7. Acompanhar o crescimento de cada pessoa

No painel do Supabase, em **Table Editor**, você pode abrir a tabela `progress` (o que cada um já concluiu) e `quiz_results` (histórico de notas nos quizzes) para acompanhar a evolução da família. Cada linha tem o `user_id`, que corresponde ao e-mail cadastrado em **Authentication → Users**.
