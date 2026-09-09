# 📚 Sistema de Gestão de Biblioteca

**Trabalho de Avaliação III — Desenvolvimento de Aplicativos Web Empresariais**  
Curso de Gestão de Sistemas de Informação — UNISCED

---

## 📋 Descrição do Projeto

Aplicação web completa para gestão de uma biblioteca, desenvolvida com **Node.js puro** e **SQLite nativo**, sem dependências externas. O sistema permite gerir:

- 📖 **Livros** – Cadastro, edição, exclusão e consulta com controle de exemplares
- 👤 **Autores** – Gestão completa de autores de livros
- 🏷️ **Categorias** – Organização de livros por categorias
- 👥 **Membros** – Registo e gestão de membros da biblioteca
- 📊 **Empréstimos** – Registo de empréstimos e devoluções com histórico
- 🔐 **Autenticação** – Sistema de login seguro com cookies de sessão

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|-----------|-----------|
| **Node.js** | Servidor HTTP nativo (versão ≥ 22.5) – sem Express |
| **SQLite** | Base de dados relacional com módulo experimental nativo `node:sqlite` |
| **HTML5** | Markup semântico e responsivo |
| **CSS3** | Estilos responsivos sem Bootstrap ou bibliotecas externas |
| **JavaScript** | Lógica de negócio do lado do servidor |

### ⚠️ Sem Dependências Externas
> Nenhum pacote `npm` foi instalado propositalmente. O projeto funciona em **qualquer máquina** com apenas Node.js instalado, **sem necessidade de acesso à Internet**.

---

## 📦 Requisitos

- **Node.js** versão 22.5 ou superior (necessário para o módulo `node:sqlite`)
  
Verifique sua versão:
```bash
node -v
```

Se precisar atualizar, acesse [nodejs.org](https://nodejs.org)

---

## 🚀 Como Executar Localmente

### 1. Clonar o repositório
```bash
git clone https://github.com/anhampa1/biblioteca-app.git
cd biblioteca-app
```

### 2. Executar o servidor
```bash
node src/server.js
```

### 3. Abrir no navegador
```
http://localhost:3000
```

### Dados de Demonstração (Primeira Execução)

A base de dados é criada **automaticamente** em `data/biblioteca.db` com dados de demonstração:

| Campo | Valor |
|-------|-------|
| **Utilizador** | `admin@biblioteca.mz` |
| **Palavra-passe** | `Admin@123` |

---

## 📂 Estrutura do Projeto

```
biblioteca-app/
├── src/
│   ├── server.js           # Router e controladores (todas as rotas HTTP)
│   ├── db.js               # Ligação à base de dados e esquema SQL
│   ├── session.js          # Gestão de sessões e autenticação
│   ├── validate.js         # Validações de formulários no servidor
│   ├── body.js             # Leitura do corpo dos pedidos POST
│   └── views/              # Templates HTML (uma página por funcionalidade)
│       ├── layout.html
│       ├── login.html
│       ├── dashboard.html
│       ├── livros.html
│       ├── autores.html
│       ├── categorias.html
│       ├── membros.html
│       └── emprestimos.html
├── public/
│   └── style.css           # Estilos CSS3 responsivos
├── data/                   # Base de dados SQLite (criada automaticamente)
│   └── biblioteca.db
└── README.md               # Este arquivo
```

---

## ✨ Funcionalidades Principais

### 🔐 Autenticação
- Login seguro com validação de credenciais
- Palavras-passe cifradas com **scrypt**
- Controle de sessão via cookies seguros
- Logout com limpeza de sessão

### 📚 Gestão de Livros
- ✅ Criar novo livro (título, ISBN, autor, categoria, exemplares)
- ✅ Listar todos os livros com filtros
- ✅ Editar dados de livro
- ✅ Eliminar livro
- ✅ Controle automático de exemplares disponíveis

### 👤 Gestão de Autores
- ✅ Criar, editar e eliminar autores
- ✅ Listar autores com livros associados
- ✅ Validação de duplicatas

### 🏷️ Gestão de Categorias
- ✅ Criar, editar e eliminar categorias
- ✅ Organização hierárquica

### 👥 Gestão de Membros
- ✅ Registo de novos membros
- ✅ Editar dados de membro
- ✅ Eliminar membro
- ✅ Histórico de empréstimos por membro

### 📊 Empréstimos e Devoluções
- ✅ Registar empréstimo (com validação de exemplares disponíveis)
- ✅ Registar devolução com atualização automática
- ✅ Controle de atrasos
- ✅ Histórico completo de empréstimos
- ✅ Dashboard com estatísticas
- ✅ Alerta de empréstimos em atraso

### 📱 Interface Responsiva
- ✅ Design adaptável (telemóvel, tablet, computador)
- ✅ Sem dependências de CSS frameworks
- ✅ Menu navegável em todos os dispositivos
- ✅ Formulários otimizados para touch

---

## 🔒 Segurança

- Validação de entrada no servidor
- Palavras-passe cifradas com **scrypt**
- Proteção contra SQL Injection via prepared statements
- Cookies de sessão seguros
- Validação de formulários antes de inserção na BD

---

## 📝 Como Publicar no GitHub

Se ainda não fez, siga estes passos:

```bash
cd biblioteca-app
git init
git add .
git commit -m "Sistema de Gestão de Biblioteca - Avaliação III DAWE"
git branch -M main
git remote add origin https://github.com/anhampa1/biblioteca-app.git
git push -u origin main
```

---

## 🎥 Demonstração (Guião Sugerido)

### Estrutura recomendada para vídeo (máx. 20 minutos):

#### 1️⃣ Introdução (1–2 min)
- Nome do projeto e número de estudante
- Objectivo: Sistema de Gestão de Biblioteca

#### 2️⃣ Tecnologias (2–3 min)
- Justificação de Node.js puro + SQLite nativo
- Estrutura de pastas
- Nenhuma dependência externa

#### 3️⃣ Modelação (2–3 min)
- Diagramas UML (casos de uso, classes, sequência)
- Relação com código

#### 4️⃣ Demonstração Funcional (8–10 min)
- ✅ Login (credenciais válidas e inválidas)
- ✅ CRUD de Livros (criar, editar, eliminar)
- ✅ CRUD de Autores e Membros
- ✅ Registar empréstimo (verificar redução de exemplares)
- ✅ Registar devolução (verificar reposição)
- ✅ Dashboard com estatísticas
- ✅ Empréstimos em atraso
- ✅ Responsividade (redimensionar janela ou ferramentas de dev)

#### 5️⃣ Conclusão (1–2 min)
- Dificuldades encontradas
- Possíveis melhorias futuras

**Ferramentas de gravação:**
- OBS Studio (gratuito, multi-plataforma)
- Xbox Game Bar (Windows)
- QuickTime (macOS)
- Gravação de ecrã nativa do SO

**Formato:** MP4

---

## 🐛 Troubleshooting

### Erro: "SQLite module not available"
- Verifique se está usando Node.js ≥ 22.5
- Execute: `node -v`

### Porto 3000 já está em uso
- Altere a porta em `src/server.js`
- Ou termine o processo anterior: `lsof -ti:3000 | xargs kill -9`

### Base de dados corrompida
- Delete `data/biblioteca.db`
- Reinicie o servidor (será recriada automaticamente)

---

## 📚 Estrutura da Base de Dados

### Tabelas principais:
- `utilizadores` – Credenciais de acesso
- `autores` – Autores de livros
- `categorias` – Categorias de livros
- `livros` – Livros com referências a autores e categorias
- `membros` – Membros da biblioteca
- `emprestimos` – Histórico de empréstimos e devoluções

---

## 👨‍💼 Autor

**Estudante:** [Seu Nome]  
**Número de Estudante:** [Seu Número]  
**Curso:** Gestão de Sistemas de Informação  
**Instituição:** UNISCED  
**Data:** 2025

---

## 📄 Licença

Este projeto foi desenvolvido para fins académicos.

---

## 🙏 Agradecimentos

Agradecimentos especiais aos docentes de **DAWE** pela orientação e suporte durante o desenvolvimento deste projeto.

---

**Última atualização:** Setembro de 2025  
**Status:** ✅ Completo
