# 🌐 GUIA DETALHADO: GITHUB PAGES

## 📋 O QUE É GITHUB PAGES

GitHub Pages é um serviço **gratuito** do GitHub que transforma seu repositório em um site público na internet.

### **Vantagens:**
- ✅ **100% Gratuito** (para repositórios públicos)
- ✅ **SSL automático** (https://)
- ✅ **Domínio personalizado** (opcional)
- ✅ **Atualizações automáticas** quando você faz mudanças
- ✅ **Sem limite de visitantes**
- ✅ **Backup automático**

---

## 🚀 CONFIGURAÇÃO PASSO A PASSO

### **ETAPA 1: PREPARAR O REPOSITÓRIO**

#### **1.1 - Verificar estrutura**
Seu repositório deve ter esta estrutura na **raiz**:
```
questionario-neuroeducacao/
├── index.html          # ← OBRIGATÓRIO na raiz
├── assets/             # ← Pasta com CSS/JS
├── src/                # ← Código fonte (opcional)
└── README.md           # ← Documentação
```

#### **1.2 - Mover arquivos se necessário**
Se seus arquivos estão na pasta `dist/`:
1. **Entre** na pasta `dist/` no GitHub
2. **Selecione** todos os arquivos (Ctrl+A)
3. **Copie** os arquivos
4. **Volte** para a raiz do repositório
5. **Cole** os arquivos
6. **Commit**: "Mover arquivos para raiz para GitHub Pages"

---

### **ETAPA 2: ATIVAR GITHUB PAGES**

#### **2.1 - Acessar configurações**
1. **No seu repositório**, clique na aba **"Settings"**
2. **Role para baixo** no menu lateral esquerdo
3. **Clique em "Pages"**

#### **2.2 - Configurar source**
1. **Source**: Selecione **"Deploy from a branch"**
2. **Branch**: Selecione **"main"** (ou "master" se for mais antigo)
3. **Folder**: Selecione **"/ (root)"**
4. **Clique** "Save"

#### **2.3 - Aguardar deploy**
1. **Aparecerá** uma mensagem: "GitHub Pages source saved"
2. **Aguarde** 2-10 minutos para o primeiro deploy
3. **Atualize** a página Settings → Pages
4. **Você verá**: "Your site is published at..."

---

### **ETAPA 3: ACESSAR SEU SITE**

#### **3.1 - URL padrão**
Seu site estará disponível em:
```
https://SEU_USUARIO.github.io/questionario-neuroeducacao/
```

**Exemplo:**
- Se seu usuário é `joaosilva123`
- URL será: `https://joaosilva123.github.io/questionario-neuroeducacao/`

#### **3.2 - Testar o site**
1. **Acesse** a URL do seu site
2. **Teste** todas as funcionalidades:
   - Questionário dos alunos
   - Questionário dos professores
   - Exportação de dados
   - Responsividade (celular/tablet)

---

## 🔧 TROUBLESHOOTING

### **Problema 1: Site não carrega**

**Sintomas:**
- Erro 404 "Page not found"
- Página em branco

**Soluções:**
1. **Verifique** se `index.html` está na **raiz** do repositório
2. **Aguarde** até 10 minutos (primeiro deploy demora)
3. **Verifique** se o repositório é **público**
4. **Tente** acessar: `https://SEU_USUARIO.github.io/questionario-neuroeducacao/index.html`

### **Problema 2: CSS/JavaScript não carrega**

**Sintomas:**
- Site aparece sem formatação
- Funcionalidades não funcionam

**Soluções:**
1. **Verifique** se a pasta `assets/` está na raiz
2. **Abra** o `index.html` e verifique os caminhos:
   ```html
   <!-- Deve ser assim: -->
   <link rel="stylesheet" href="./assets/index-XXX.css">
   <script src="./assets/index-XXX.js"></script>
   
   <!-- NÃO assim: -->
   <link rel="stylesheet" href="/assets/index-XXX.css">
   ```
3. **Se necessário**, edite o `index.html` no GitHub

### **Problema 3: Mudanças não aparecem**

**Sintomas:**
- Fez mudanças mas site não atualizou

**Soluções:**
1. **Aguarde** 2-5 minutos após o commit
2. **Force refresh**: Ctrl+F5 (Windows) ou Cmd+Shift+R (Mac)
3. **Limpe** o cache do navegador
4. **Verifique** se fez commit das mudanças

### **Problema 4: GitHub Pages não aparece**

**Sintomas:**
- Não encontra a opção "Pages" nas configurações

**Soluções:**
1. **Repositório** deve ser **público**
2. **Deve ter** pelo menos um arquivo na raiz
3. **Aguarde** alguns minutos após criar o repositório
4. **Atualize** a página de configurações

---

## ⚙️ CONFIGURAÇÕES AVANÇADAS

### **Domínio Personalizado (Opcional)**

Se você tem um domínio próprio:

1. **Em Settings → Pages**, encontre "Custom domain"
2. **Digite** seu domínio: `meusite.com.br`
3. **Clique** "Save"
4. **No seu provedor de domínio**, configure:
   - **CNAME**: aponte para `SEU_USUARIO.github.io`
   - **Ou A record**: aponte para IPs do GitHub

### **HTTPS Forçado**

1. **Em Settings → Pages**
2. **Marque** "Enforce HTTPS"
3. **Aguarde** alguns minutos para ativar

### **Deploy Automático**

GitHub Pages atualiza automaticamente quando você:
- Faz commit na branch principal
- Faz push de mudanças
- Edita arquivos diretamente no GitHub

---

## 📊 MONITORAMENTO

### **Verificar Status**
1. **Settings → Pages** mostra status do deploy
2. **Actions** (aba do repositório) mostra histórico de deploys
3. **Verde** = funcionando
4. **Vermelho** = erro no deploy

### **Estatísticas de Acesso**
1. **Insights** (aba do repositório)
2. **Traffic** mostra visitantes
3. **Referrers** mostra de onde vêm os acessos

---

## 🔄 ATUALIZAÇÕES

### **Método 1: Editar no GitHub**
1. **Clique** no arquivo que quer editar
2. **Clique** no ícone de lápis
3. **Faça** as mudanças
4. **Commit** as mudanças
5. **Aguarde** 2-5 minutos para atualizar

### **Método 2: Upload de Arquivos**
1. **Clique** "Add file" → "Upload files"
2. **Selecione** os arquivos atualizados
3. **Marque** "Replace existing files"
4. **Commit** as mudanças

### **Método 3: Git Command Line**
```bash
# 1. Fazer mudanças localmente
# 2. Adicionar mudanças
git add .

# 3. Commit
git commit -m "Atualizar questionário"

# 4. Push para GitHub
git push origin main

# 5. GitHub Pages atualiza automaticamente
```

---

## 🎯 OTIMIZAÇÕES

### **Performance**
- **Comprima** imagens antes de fazer upload
- **Minimize** arquivos CSS/JS
- **Use** CDNs para bibliotecas externas

### **SEO**
Adicione no `index.html`:
```html
<head>
  <title>Questionário de Neuroeducação - 8º e 9º Ano</title>
  <meta name="description" content="Instrumento de avaliação de estilos de aprendizagem baseado em neuroeducação">
  <meta name="keywords" content="neuroeducação, kolb, estilos de aprendizagem, ensino fundamental">
  <meta name="author" content="Seu Nome">
</head>
```

### **Analytics (Opcional)**
Adicione Google Analytics para monitorar acessos:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

---

## 🔒 SEGURANÇA

### **Dados Sensíveis**
- **NUNCA** coloque senhas ou chaves API no repositório público
- **Use** variáveis de ambiente para dados sensíveis
- **Considere** repositório privado se necessário

### **Backup**
- GitHub já faz backup automático
- **Clone** o repositório localmente como backup extra
- **Exporte** dados coletados regularmente

---

## 📈 VANTAGENS PARA PESQUISA

### **Citação Científica**
- **URL estável** para citar em artigos
- **DOI disponível** via Zenodo
- **Versionamento** para reprodutibilidade

### **Colaboração**
- **Outros pesquisadores** podem contribuir
- **Issues** para reportar problemas
- **Fork** para adaptações

### **Transparência**
- **Código aberto** aumenta credibilidade
- **Metodologia** transparente
- **Peer review** da comunidade

---

## 🎉 RESULTADO FINAL

### **Você terá:**
🌐 **Site profissional** online 24/7
🔒 **HTTPS** automático e seguro
📱 **Responsivo** para todos os dispositivos
🚀 **Rápido** e otimizado
📊 **Monitorável** com estatísticas
🔄 **Atualizável** facilmente
💰 **Gratuito** para sempre

### **URLs importantes:**
- **Site**: `https://SEU_USUARIO.github.io/questionario-neuroeducacao/`
- **Repositório**: `https://github.com/SEU_USUARIO/questionario-neuroeducacao`
- **Configurações**: `https://github.com/SEU_USUARIO/questionario-neuroeducacao/settings/pages`

---

## 📞 SUPORTE ADICIONAL

### **Documentação Oficial:**
- **GitHub Pages**: https://docs.github.com/en/pages
- **Troubleshooting**: https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites

### **Comunidade:**
- **GitHub Community**: https://github.community/
- **Stack Overflow**: Tag `github-pages`

---

## 🏆 PARABÉNS!

**Seu projeto de neuroeducação agora está:**
🌍 **Acessível mundialmente**
🎓 **Pronto para uso educacional**
📊 **Preparado para coleta de dados**
🔬 **Adequado para pesquisa científica**
💡 **Inovador** e **profissional**

**Agora é só compartilhar o link e revolucionar a educação!** 🚀📚✨

