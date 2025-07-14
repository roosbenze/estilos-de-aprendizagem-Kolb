# 🐙 GUIA COMPLETO: COLOCAR PROJETO NO GITHUB

## 📋 VISÃO GERAL

Este guia te ajudará a:
- ✅ Criar um repositório no GitHub
- ✅ Fazer upload do projeto de neuroeducação
- ✅ Configurar GitHub Pages para hospedagem gratuita
- ✅ Manter o projeto organizado junto com seus outros projetos

---

## 🚀 PASSO A PASSO COMPLETO

### **ETAPA 1: PREPARAÇÃO**

#### **1.1 - Extrair o projeto**
1. **Extraia o arquivo** `site-neuroeducacao-pronto.zip` que você recebeu
2. **Você terá uma pasta** com esta estrutura:
   ```
   questionario-aprendizagem-8ano/
   ├── dist/           # Arquivos para hospedar
   ├── src/            # Código fonte
   ├── package.json    # Configurações
   ├── index.html      # Página principal
   └── vite.config.js  # Configurações do Vite
   ```

#### **1.2 - Renomear a pasta (opcional)**
- **Renomeie** `questionario-aprendizagem-8ano` para `questionario-neuroeducacao`
- **Motivo**: Nome mais claro e profissional

---

### **ETAPA 2: CRIAR REPOSITÓRIO NO GITHUB**

#### **2.1 - Acessar GitHub**
1. **Acesse**: https://github.com/
2. **Faça login** na sua conta
3. **Clique no botão verde** "New" ou "+" no canto superior direito

#### **2.2 - Configurar o repositório**
1. **Repository name**: `questionario-neuroeducacao`
2. **Description**: `Instrumento de triangulação educacional baseado em neuroeducação para alunos do 8º e 9º ano`
3. **Visibilidade**: 
   - ✅ **Public** (recomendado para GitHub Pages gratuito)
   - ❌ Private (só se você tiver GitHub Pro)
4. **Marque**: ✅ Add a README file
5. **Clique**: "Create repository"

---

### **ETAPA 3: FAZER UPLOAD DOS ARQUIVOS**

#### **3.1 - Método Simples (Interface Web)**

**Opção A: Arrastar e Soltar**
1. **Abra** o repositório criado no GitHub
2. **Clique** em "uploading an existing file"
3. **Arraste TODOS os arquivos** da pasta do projeto para a área de upload
4. **Aguarde** o upload completar
5. **Escreva** uma mensagem de commit: `Adicionar projeto completo de neuroeducação`
6. **Clique** "Commit changes"

**Opção B: Upload Manual**
1. **No repositório**, clique "Add file" → "Upload files"
2. **Selecione todos os arquivos** da pasta do projeto
3. **Faça upload** (pode demorar alguns minutos)
4. **Commit message**: `Adicionar projeto completo de neuroeducação`
5. **Clique** "Commit changes"

#### **3.2 - Método Avançado (Git Command Line)**

Se você tem Git instalado no computador:

```bash
# 1. Clonar o repositório
git clone https://github.com/SEU_USUARIO/questionario-neuroeducacao.git

# 2. Entrar na pasta
cd questionario-neuroeducacao

# 3. Copiar arquivos do projeto para esta pasta
# (copie manualmente todos os arquivos)

# 4. Adicionar arquivos
git add .

# 5. Fazer commit
git commit -m "Adicionar projeto completo de neuroeducação"

# 6. Enviar para GitHub
git push origin main
```

---

### **ETAPA 4: CONFIGURAR GITHUB PAGES**

#### **4.1 - Ativar GitHub Pages**
1. **No seu repositório**, clique na aba "Settings"
2. **Role para baixo** até encontrar "Pages" no menu lateral
3. **Clique em "Pages"**

#### **4.2 - Configurar Source**
1. **Source**: Selecione "Deploy from a branch"
2. **Branch**: Selecione "main" (ou "master")
3. **Folder**: Selecione "/ (root)"
4. **Clique** "Save"

#### **4.3 - Aguardar Deploy**
1. **Aguarde 2-5 minutos** para o deploy
2. **Atualize a página** Settings → Pages
3. **Você verá**: "Your site is published at https://SEU_USUARIO.github.io/questionario-neuroeducacao/"

---

### **ETAPA 5: AJUSTAR PARA GITHUB PAGES**

#### **5.1 - Problema Comum**
- GitHub Pages serve arquivos da raiz do repositório
- Nossos arquivos estão na pasta `dist/`
- **Precisamos mover** os arquivos da pasta `dist/` para a raiz

#### **5.2 - Solução**
1. **No GitHub**, entre na pasta `dist/`
2. **Selecione todos os arquivos** (index.html, pasta assets/, etc.)
3. **Copie** esses arquivos
4. **Volte** para a raiz do repositório
5. **Cole** os arquivos na raiz
6. **Commit**: "Mover arquivos para raiz para GitHub Pages"

#### **5.3 - Estrutura Final**
```
questionario-neuroeducacao/
├── index.html          # ← Movido da pasta dist/
├── assets/             # ← Movido da pasta dist/
├── dist/               # ← Pasta original (pode manter)
├── src/                # ← Código fonte
├── package.json        # ← Configurações
├── vite.config.js      # ← Configurações
└── README.md           # ← Criado pelo GitHub
```

---

### **ETAPA 6: TESTAR O SITE**

#### **6.1 - Acessar o site**
1. **URL**: `https://SEU_USUARIO.github.io/questionario-neuroeducacao/`
2. **Substitua** "SEU_USUARIO" pelo seu nome de usuário do GitHub
3. **Teste** todas as funcionalidades

#### **6.2 - Se não funcionar**
- **Aguarde** até 10 minutos (GitHub Pages pode demorar)
- **Verifique** se o arquivo `index.html` está na raiz
- **Verifique** se o repositório é público
- **Tente** acessar: `https://SEU_USUARIO.github.io/questionario-neuroeducacao/index.html`

---

### **ETAPA 7: ORGANIZAR E DOCUMENTAR**

#### **7.1 - Editar README.md**
1. **No repositório**, clique em "README.md"
2. **Clique** no ícone de lápis para editar
3. **Substitua** o conteúdo por:

```markdown
# 🧠 Questionário de Neuroeducação

Instrumento de triangulação educacional baseado em neuroeducação para alunos do 8º e 9º ano do Ensino Fundamental.

## 🎯 Funcionalidades

- **Questionário de Kolb**: Avaliação de estilos de aprendizagem
- **Percepção dos Alunos**: Como percebem as metodologias dos professores
- **Estratégias dos Professores**: Coleta de práticas pedagógicas
- **Triangulação de Dados**: Correlação entre os três módulos

## 🌐 Acesso ao Site

**Link**: [https://SEU_USUARIO.github.io/questionario-neuroeducacao/](https://SEU_USUARIO.github.io/questionario-neuroeducacao/)

## 📊 Como Usar

1. Acesse o link acima
2. Escolha "Sou Estudante" ou "Sou Professor(a)"
3. Responda ao questionário
4. Veja os resultados personalizados

## 📈 Pesquisa Científica

Este instrumento foi desenvolvido para pesquisa em neuroeducação, permitindo:
- Análise de estilos de aprendizagem
- Correlação entre metodologias e percepção
- Triangulação de dados educacionais

## 🔧 Tecnologias

- React + Vite
- Tailwind CSS
- shadcn/ui
- GitHub Pages

## 📄 Licença

Desenvolvido para pesquisa educacional.
```

4. **Substitua** "SEU_USUARIO" pelo seu nome de usuário
5. **Clique** "Commit changes"

#### **7.2 - Adicionar Tags**
1. **No repositório**, clique em "About" (engrenagem ao lado da descrição)
2. **Topics**: Adicione tags como:
   - `neuroeducacao`
   - `educacao`
   - `kolb`
   - `questionario`
   - `react`
   - `ensino-fundamental`
3. **Clique** "Save changes"

---

## 🎯 RESULTADO FINAL

### **Você terá:**
✅ **Repositório organizado** no GitHub
✅ **Site funcionando** em GitHub Pages
✅ **URL pública** para compartilhar
✅ **Código versionado** e seguro
✅ **Documentação** profissional

### **URLs importantes:**
- **Repositório**: `https://github.com/SEU_USUARIO/questionario-neuroeducacao`
- **Site funcionando**: `https://SEU_USUARIO.github.io/questionario-neuroeducacao/`

---

## 🔄 ATUALIZAÇÕES FUTURAS

### **Para fazer mudanças:**
1. **Edite** os arquivos diretamente no GitHub (clique no lápis)
2. **Ou faça upload** de novos arquivos
3. **Commit** as mudanças
4. **GitHub Pages** atualiza automaticamente em 2-5 minutos

### **Para modificar o código:**
1. **Clone** o repositório no seu computador
2. **Edite** os arquivos na pasta `src/`
3. **Execute** `npm run build` para gerar nova pasta `dist/`
4. **Copie** arquivos da `dist/` para a raiz
5. **Commit** e **push** as mudanças

---

## 🎉 VANTAGENS DO GITHUB

### **Gratuito:**
- ✅ Hospedagem ilimitada
- ✅ Domínio personalizado (opcional)
- ✅ SSL automático (https://)
- ✅ Backup automático

### **Profissional:**
- ✅ Versionamento do código
- ✅ Histórico de mudanças
- ✅ Colaboração com outros
- ✅ Portfolio público

### **Para Pesquisa:**
- ✅ Citável em artigos científicos
- ✅ DOI disponível (via Zenodo)
- ✅ Transparência metodológica
- ✅ Reprodutibilidade

---

## 📞 SUPORTE

### **Problemas comuns:**

**Site não carrega:**
- Verifique se `index.html` está na raiz
- Aguarde até 10 minutos
- Repositório deve ser público

**Arquivos não aparecem:**
- Verifique se fez commit das mudanças
- Atualize a página do repositório

**GitHub Pages não ativa:**
- Repositório deve ser público
- Deve ter pelo menos um arquivo `index.html`

---

## 🏆 PARABÉNS!

**Seu projeto agora está:**
🌐 **Online** e acessível mundialmente
🔒 **Seguro** e com backup automático  
📈 **Profissional** e bem documentado
🚀 **Pronto** para usar na sua escola
📊 **Preparado** para pesquisa científica

**Agora é só compartilhar o link e começar a coletar dados!** 🎓📊✨

