import { useState, useEffect } from 'react'
import { Progress } from '@/components/ui/progress'
import './App.css'

// Dados dos questionários
const kolbQuestions = [
  {
    id: 1,
    situation: "Quando preciso aprender algo novo, eu prefiro:",
    options: {
      A: "Experimentar fazendo na prática",
      B: "Ler sobre o assunto primeiro", 
      C: "Pensar em como aplicar na vida real",
      D: "Discutir com outras pessoas"
    }
  },
  {
    id: 2,
    situation: "Em um trabalho em grupo, eu geralmente:",
    options: {
      A: "Gosto de liderar e organizar as tarefas",
      B: "Prefiro pesquisar e estudar o conteúdo",
      C: "Foco em resolver os problemas práticos",
      D: "Ajudo a gerar ideias criativas"
    }
  },
  {
    id: 3,
    situation: "Quando o professor explica algo novo, eu:",
    options: {
      A: "Quero logo colocar a mão na massa",
      B: "Presto atenção e anoto tudo",
      C: "Penso em onde vou usar isso",
      D: "Imagino diferentes possibilidades"
    }
  },
  {
    id: 4,
    situation: "Para estudar para uma prova, eu prefiro:",
    options: {
      A: "Fazer exercícios práticos",
      B: "Ler o material várias vezes",
      C: "Fazer resumos organizados",
      D: "Estudar com amigos conversando"
    }
  },
  {
    id: 5,
    situation: "Em uma apresentação escolar, eu me sinto melhor:",
    options: {
      A: "Mostrando experimentos ou demonstrações",
      B: "Explicando a teoria com detalhes",
      C: "Apresentando soluções para problemas",
      D: "Contando histórias e exemplos"
    }
  },
  {
    id: 6,
    situation: "Quando tenho um problema para resolver, eu:",
    options: {
      A: "Tento várias soluções até dar certo",
      B: "Pesquiso e estudo antes de agir",
      C: "Analiso logicamente passo a passo",
      D: "Peço opiniões e ideias de outros"
    }
  },
  {
    id: 7,
    situation: "Em atividades escolares, eu me destaco mais em:",
    options: {
      A: "Projetos práticos e experimentos",
      B: "Trabalhos de pesquisa e leitura",
      C: "Exercícios de lógica e matemática",
      D: "Atividades criativas e debates"
    }
  },
  {
    id: 8,
    situation: "Quando não entendo algo, eu prefiro:",
    options: {
      A: "Tentar fazer até conseguir",
      B: "Ler mais sobre o assunto",
      C: "Pedir uma explicação clara e objetiva",
      D: "Conversar com colegas sobre o tema"
    }
  },
  {
    id: 9,
    situation: "Em um projeto escolar, eu gosto mais de:",
    options: {
      A: "Fazer a parte prática e construir coisas",
      B: "Fazer a pesquisa e fundamentação teórica",
      C: "Organizar e planejar todo o projeto",
      D: "Criar a apresentação e divulgação"
    }
  },
  {
    id: 10,
    situation: "Para memorizar um conteúdo, eu:",
    options: {
      A: "Pratico fazendo exercícios repetidas vezes",
      B: "Leio e releio até decorar",
      C: "Faço esquemas e mapas mentais",
      D: "Explico para outras pessoas"
    }
  }
]

const perceptionQuestions = [
  // Metodologias Tradicionais
  { id: 1, category: "tradicional", text: "O professor explica a matéria falando na frente da turma" },
  { id: 2, category: "tradicional", text: "Usamos o livro didático para estudar e fazer exercícios" },
  { id: 3, category: "tradicional", text: "O professor escreve no quadro e nós copiamos no caderno" },
  { id: 4, category: "tradicional", text: "Fazemos provas escritas individuais" },
  { id: 5, category: "tradicional", text: "O professor passa lição de casa do livro" },
  { id: 6, category: "tradicional", text: "Estudamos decorando fórmulas e conceitos" },
  { id: 7, category: "tradicional", text: "As aulas seguem sempre a mesma rotina" },
  
  // Metodologias Ativas
  { id: 8, category: "ativa", text: "Trabalhamos em grupos pequenos (3-4 alunos)" },
  { id: 9, category: "ativa", text: "Fazemos projetos que duram várias aulas" },
  { id: 10, category: "ativa", text: "O professor faz perguntas e nós debatemos" },
  { id: 11, category: "ativa", text: "Apresentamos trabalhos para a turma" },
  { id: 12, category: "ativa", text: "Resolvemos problemas do dia a dia usando a matéria" },
  { id: 13, category: "ativa", text: "Criamos coisas novas (textos, experimentos, etc.)" },
  
  // Tecnologias Digitais
  { id: 14, category: "tecnologia", text: "Assistimos vídeos educativos nas aulas" },
  { id: 15, category: "tecnologia", text: "Usamos computadores ou tablets para estudar" },
  { id: 16, category: "tecnologia", text: "Fazemos pesquisas na internet durante a aula" },
  { id: 17, category: "tecnologia", text: "O professor usa apresentações no computador/projetor" },
  { id: 18, category: "tecnologia", text: "Usamos aplicativos educativos no celular" },
  
  // Estratégias Criativas
  { id: 19, category: "criativa", text: "Fazemos atividades artísticas (desenhos, música, teatro)" },
  { id: 20, category: "criativa", text: "Criamos histórias ou inventamos situações" },
  { id: 21, category: "criativa", text: "Fazemos jogos educativos" },
  { id: 22, category: "criativa", text: "O professor conta histórias para explicar a matéria" },
  
  // Estratégias Reflexivas
  { id: 23, category: "reflexiva", text: "O professor pergunta nossa opinião sobre os assuntos" },
  { id: 24, category: "reflexiva", text: "Conversamos sobre como a matéria se relaciona com nossa vida" },
  { id: 25, category: "reflexiva", text: "Fazemos autoavaliação do nosso aprendizado" },
  { id: 26, category: "reflexiva", text: "Discutimos problemas atuais da sociedade" },
  
  // Estratégias Práticas
  { id: 27, category: "pratica", text: "Fazemos experimentos ou atividades práticas" },
  { id: 28, category: "pratica", text: "Saímos da sala para aulas em outros lugares" },
  { id: 29, category: "pratica", text: "Construímos ou montamos coisas com as mãos" },
  { id: 30, category: "pratica", text: "Simulamos situações reais para aprender" }
]

const teacherStrategies = [
  // Metodologias Tradicionais (A)
  { id: 'A1', category: 'A', text: 'Explicação oral com uso de quadro/slides' },
  { id: 'A2', category: 'A', text: 'Leitura do livro didático' },
  { id: 'A3', category: 'A', text: 'Exercícios individuais do livro' },
  { id: 'A4', category: 'A', text: 'Cópia de conteúdo do quadro' },
  { id: 'A5', category: 'A', text: 'Avaliações escritas tradicionais' },
  { id: 'A6', category: 'A', text: 'Memorização de fórmulas/conceitos' },
  { id: 'A7', category: 'A', text: 'Aulas expositivas dialogadas' },
  { id: 'A8', category: 'A', text: 'Correção coletiva de exercícios' },
  { id: 'A9', category: 'A', text: 'Ditado de textos/resumos' },
  { id: 'A10', category: 'A', text: 'Lição de casa tradicional' },
  { id: 'A11', category: 'A', text: 'Seminários individuais' },
  { id: 'A12', category: 'A', text: 'Provas orais' },
  { id: 'A13', category: 'A', text: 'Recitação/declamação' },
  { id: 'A14', category: 'A', text: 'Fichamento de textos' },
  { id: 'A15', category: 'A', text: 'Resumos escritos' },

  // Metodologias Ativas (B)
  { id: 'B1', category: 'B', text: 'Trabalhos em grupos pequenos (3-4 alunos)' },
  { id: 'B2', category: 'B', text: 'Projetos interdisciplinares' },
  { id: 'B3', category: 'B', text: 'Debates e discussões dirigidas' },
  { id: 'B4', category: 'B', text: 'Aprendizagem baseada em problemas' },
  { id: 'B5', category: 'B', text: 'Estudos de caso' },
  { id: 'B6', category: 'B', text: 'Aprendizagem colaborativa' },
  { id: 'B7', category: 'B', text: 'Sala de aula invertida' },
  { id: 'B8', category: 'B', text: 'Rotação por estações' },
  { id: 'B9', category: 'B', text: 'Peer instruction (ensino pelos pares)' },
  { id: 'B10', category: 'B', text: 'Brainstorming/tempestade de ideias' },
  { id: 'B11', category: 'B', text: 'Mesa redonda' },
  { id: 'B12', category: 'B', text: 'Painel integrado' },
  { id: 'B13', category: 'B', text: 'Júri simulado' },
  { id: 'B14', category: 'B', text: 'Role playing/dramatização' },
  { id: 'B15', category: 'B', text: 'Oficinas práticas' },

  // Tecnologias Digitais (C)
  { id: 'C1', category: 'C', text: 'Vídeos educativos' },
  { id: 'C2', category: 'C', text: 'Aplicativos educacionais' },
  { id: 'C3', category: 'C', text: 'Pesquisa orientada na internet' },
  { id: 'C4', category: 'C', text: 'Apresentações digitais interativas' },
  { id: 'C5', category: 'C', text: 'Plataformas educacionais (Google Classroom, etc.)' },
  { id: 'C6', category: 'C', text: 'Jogos educativos digitais' },
  { id: 'C7', category: 'C', text: 'Simuladores virtuais' },
  { id: 'C8', category: 'C', text: 'Podcasts educacionais' },
  { id: 'C9', category: 'C', text: 'Realidade aumentada/virtual' },
  { id: 'C10', category: 'C', text: 'Lousa digital interativa' },
  { id: 'C11', category: 'C', text: 'QR Codes para conteúdo' },
  { id: 'C12', category: 'C', text: 'Redes sociais educativas' },
  { id: 'C13', category: 'C', text: 'Webquests' },
  { id: 'C14', category: 'C', text: 'E-books interativos' },
  { id: 'C15', category: 'C', text: 'Videoconferências/lives educativas' },

  // Estratégias Criativas (D)
  { id: 'D1', category: 'D', text: 'Atividades artísticas integradas' },
  { id: 'D2', category: 'D', text: 'Storytelling/narrativas' },
  { id: 'D3', category: 'D', text: 'Jogos e brincadeiras educativas' },
  { id: 'D4', category: 'D', text: 'Teatro pedagógico' },
  { id: 'D5', category: 'D', text: 'Música como recurso didático' },
  { id: 'D6', category: 'D', text: 'Desenho e ilustração' },
  { id: 'D7', category: 'D', text: 'Criação de histórias em quadrinhos' },
  { id: 'D8', category: 'D', text: 'Produção de vídeos pelos alunos' },
  { id: 'D9', category: 'D', text: 'Criação de jogos pelos alunos' },
  { id: 'D10', category: 'D', text: 'Concursos e competições criativas' },
  { id: 'D11', category: 'D', text: 'Exposições e mostras' },
  { id: 'D12', category: 'D', text: 'Saraus e eventos culturais' },
  { id: 'D13', category: 'D', text: 'Criação de memes educativos' },
  { id: 'D14', category: 'D', text: 'Paródias musicais' },
  { id: 'D15', category: 'D', text: 'Criação de podcasts pelos alunos' },

  // Estratégias Reflexivas (E)
  { id: 'E1', category: 'E', text: 'Roda de conversa' },
  { id: 'E2', category: 'E', text: 'Diário reflexivo' },
  { id: 'E3', category: 'E', text: 'Autoavaliação' },
  { id: 'E4', category: 'E', text: 'Portfólio reflexivo' },
  { id: 'E5', category: 'E', text: 'Discussão de temas atuais' },
  { id: 'E6', category: 'E', text: 'Conexão com experiências pessoais' },
  { id: 'E7', category: 'E', text: 'Análise crítica de situações' },
  { id: 'E8', category: 'E', text: 'Questionamento socrático' },
  { id: 'E9', category: 'E', text: 'Metacognição (pensar sobre o pensar)' },
  { id: 'E10', category: 'E', text: 'Círculos de cultura' },
  { id: 'E11', category: 'E', text: 'Assembleias de classe' },
  { id: 'E12', category: 'E', text: 'Análise de dilemas éticos' },
  { id: 'E13', category: 'E', text: 'Reflexão sobre processo de aprendizagem' },
  { id: 'E14', category: 'E', text: 'Conexão teoria-prática-vida' },
  { id: 'E15', category: 'E', text: 'Avaliação formativa contínua' },

  // Estratégias Práticas (F)
  { id: 'F1', category: 'F', text: 'Experimentos científicos' },
  { id: 'F2', category: 'F', text: 'Aulas de campo/saídas pedagógicas' },
  { id: 'F3', category: 'F', text: 'Construção de modelos/maquetes' },
  { id: 'F4', category: 'F', text: 'Simulações de situações reais' },
  { id: 'F5', category: 'F', text: 'Laboratório de ciências' },
  { id: 'F6', category: 'F', text: 'Atividades mão na massa (hands-on)' },
  { id: 'F7', category: 'F', text: 'Visitas técnicas' },
  { id: 'F8', category: 'F', text: 'Estágios/práticas profissionais' },
  { id: 'F9', category: 'F', text: 'Feira de ciências' },
  { id: 'F10', category: 'F', text: 'Horta escolar' },
  { id: 'F11', category: 'F', text: 'Culinária pedagógica' },
  { id: 'F12', category: 'F', text: 'Construção civil escolar' },
  { id: 'F13', category: 'F', text: 'Robótica educacional' },
  { id: 'F14', category: 'F', text: 'Marcenaria/artesanato' },
  { id: 'F15', category: 'F', text: 'Práticas esportivas integradas' }
]

function App() {
  // Estados principais
  const [currentScreen, setCurrentScreen] = useState('home')
  const [userType, setUserType] = useState('')
  const [grade, setGrade] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState({})
  const [results, setResults] = useState(null)
  const [userData, setUserData] = useState({})

  // Estados para dados demográficos
  const [demographicData, setDemographicData] = useState({
    school: '',
    age: '',
    grade: '',
    city: ''
  })

  // Estados para professores
  const [teacherData, setTeacherData] = useState({
    school: '',
    subject: '',
    experience: '',
    education: '',
    city: ''
  })
  const [teacherStrategiesData, setTeacherStrategiesData] = useState({})

  // Função para calcular estilo de aprendizagem Kolb
  const calculateKolbStyle = (responses) => {
    const scores = { A: 0, B: 0, C: 0, D: 0 }
    
    Object.entries(responses).forEach(([questionId, answer]) => {
      if (answer.option && answer.value) {
        scores[answer.option] += parseInt(answer.value)
      }
    })

    // Determinar estilo predominante
    const maxScore = Math.max(...Object.values(scores))
    const dominantOptions = Object.keys(scores).filter(key => scores[key] === maxScore)
    
    let style = ''
    let description = ''
    
    if (dominantOptions.includes('A') && dominantOptions.includes('D')) {
      style = 'Acomodador'
      description = 'Você aprende melhor fazendo e experimentando. Gosta de atividades práticas e trabalho em equipe.'
    } else if (dominantOptions.includes('B') && dominantOptions.includes('A')) {
      style = 'Divergente'  
      description = 'Você é criativo e gosta de ver as situações de diferentes perspectivas. Aprende bem em discussões e atividades em grupo.'
    } else if (dominantOptions.includes('B') && dominantOptions.includes('C')) {
      style = 'Assimilador'
      description = 'Você prefere teoria e conceitos abstratos. Aprende melhor lendo, ouvindo explicações e organizando informações.'
    } else if (dominantOptions.includes('C') && dominantOptions.includes('A')) {
      style = 'Convergente'
      description = 'Você gosta de aplicar ideias na prática. Aprende melhor resolvendo problemas e fazendo atividades práticas.'
    } else {
      // Estilo misto ou empate
      const dominantOption = dominantOptions[0]
      switch(dominantOption) {
        case 'A':
          style = 'Prático'
          description = 'Você aprende melhor com atividades práticas e experimentação.'
          break
        case 'B':
          style = 'Teórico'
          description = 'Você prefere estudar teoria e conceitos antes de partir para a prática.'
          break
        case 'C':
          style = 'Analítico'
          description = 'Você gosta de analisar e organizar informações de forma lógica.'
          break
        case 'D':
          style = 'Social'
          description = 'Você aprende melhor interagindo com outras pessoas e em atividades colaborativas.'
          break
      }
    }

    return { style, description, scores }
  }

  // Função para salvar dados (localStorage para demo)
  const saveData = (data, type) => {
    const timestamp = new Date().toISOString()
    const savedData = {
      ...data,
      timestamp,
      type,
      id: Date.now() + Math.random()
    }
    
    // Salvar no localStorage
    const existingData = JSON.parse(localStorage.getItem('researchData') || '[]')
    existingData.push(savedData)
    localStorage.setItem('researchData', JSON.stringify(existingData))
    
    console.log('Dados salvos:', savedData)
  }

  // Função para exportar dados
  const exportData = () => {
    const data = JSON.parse(localStorage.getItem('researchData') || '[]')
    const dataStr = JSON.stringify(data, null, 2)
    const dataBlob = new Blob([dataStr], {type: 'application/json'})
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'dados-pesquisa-neuroeducacao.json'
    link.click()
  }

  // Função para limpar dados
  const clearData = () => {
    localStorage.removeItem('researchData')
    alert('Dados limpos com sucesso!')
  }

  // Navegação entre telas
  const handleStart = (type) => {
    setUserType(type)
    if (type === 'student') {
      setCurrentScreen('gradeSelection')
    } else {
      setCurrentScreen('teacherInfo')
    }
  }

  const handleGradeSelection = (selectedGrade) => {
    setGrade(selectedGrade)
    setCurrentScreen('studentInfo')
  }

  const handleStudentInfo = (data) => {
    setDemographicData({...data, grade})
    setCurrentScreen('kolbQuiz')
  }

  const handleTeacherInfo = (data) => {
    setTeacherData(data)
    setCurrentScreen('teacherStrategies')
  }

  // Navegação do questionário
  const handleAnswer = (questionId, option, value) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: { option, value }
    }))
  }

  const handleNext = () => {
    if (currentScreen === 'kolbQuiz' && currentQuestion < kolbQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else if (currentScreen === 'kolbQuiz') {
      // Finalizar questionário Kolb e ir para percepção
      setCurrentQuestion(0)
      setCurrentScreen('perceptionQuiz')
    } else if (currentScreen === 'perceptionQuiz' && currentQuestion < perceptionQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else if (currentScreen === 'perceptionQuiz') {
      // Finalizar questionário de percepção
      finishStudentQuiz()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const finishStudentQuiz = () => {
    // Calcular resultados Kolb
    const kolbResults = calculateKolbStyle(responses)
    
    // Preparar dados para salvar
    const studentData = {
      demographic: demographicData,
      kolbResponses: responses,
      perceptionResponses: responses,
      results: kolbResults
    }
    
    saveData(studentData, 'student')
    setResults(kolbResults)
    setCurrentScreen('results')
  }

  const finishTeacherQuiz = () => {
    const completeTeacherData = {
      demographic: teacherData,
      strategies: teacherStrategiesData
    }
    
    saveData(completeTeacherData, 'teacher')
    setCurrentScreen('teacherResults')
  }

  // Verificar se pergunta atual foi respondida
  const isCurrentQuestionAnswered = () => {
    if (currentScreen === 'kolbQuiz') {
      const question = kolbQuestions[currentQuestion]
      return responses[question.id] && 
             responses[question.id].option && 
             responses[question.id].value
    } else if (currentScreen === 'perceptionQuiz') {
      const question = perceptionQuestions[currentQuestion]
      return responses[question.id] !== undefined
    }
    return false
  }

  // Calcular progresso
  const getProgress = () => {
    if (currentScreen === 'kolbQuiz') {
      return ((currentQuestion + 1) / kolbQuestions.length) * 50 // 50% para Kolb
    } else if (currentScreen === 'perceptionQuiz') {
      return 50 + ((currentQuestion + 1) / perceptionQuestions.length) * 50 // 50% + percepção
    }
    return 0
  }

  // Renderização das telas
  if (currentScreen === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Descubra Seu Estilo de Aprendizagem
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Para alunos do 8º e 9º ano do Ensino Fundamental
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Uma ferramenta inovadora baseada em neuroeducação para melhorar o processo de ensino-aprendizagem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Para Estudantes</h3>
              <p className="text-green-700 mb-4">
                Descubra como você aprende melhor e como percebe as metodologias utilizadas em suas aulas.
              </p>
              <ul className="text-sm text-green-600 mb-4 space-y-1">
                <li>• Questionário de estilos de aprendizagem (Kolb)</li>
                <li>• Avaliação da percepção sobre as aulas</li>
                <li>• Tempo: aproximadamente 30 minutos</li>
                <li>• Resultado personalizado</li>
              </ul>
              <button
                onClick={() => handleStart('student')}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Sou Estudante
              </button>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Para Professores</h3>
              <p className="text-purple-700 mb-4">
                Compartilhe suas estratégias pedagógicas e contribua para a pesquisa em neuroeducação.
              </p>
              <ul className="text-sm text-purple-600 mb-4 space-y-1">
                <li>• Questionário sobre estratégias de ensino</li>
                <li>• 90 metodologias categorizadas</li>
                <li>• Tempo: aproximadamente 25 minutos</li>
                <li>• Contribuição para pesquisa científica</li>
              </ul>
              <button
                onClick={() => handleStart('teacher')}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Sou Professor(a)
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Sobre esta Pesquisa</h3>
            <p className="text-gray-600 mb-4">
              Este instrumento foi desenvolvido para correlacionar estilos de aprendizagem dos alunos com as estratégias 
              pedagógicas utilizadas pelos professores, criando uma triangulação única de dados educacionais.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Neuroeducação</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Estilos de Aprendizagem</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Estratégias Pedagógicas</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">Pesquisa Científica</span>
            </div>
          </div>

          {/* Painel de administração */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-600 mb-3">Painel do Pesquisador</h4>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={exportData}
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
              >
                Exportar Dados
              </button>
              <button
                onClick={clearData}
                className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition-colors"
              >
                Limpar Dados
              </button>
              <button
                onClick={() => {
                  const data = JSON.parse(localStorage.getItem('researchData') || '[]')
                  alert(`Total de respostas: ${data.length}\nEstudantes: ${data.filter(d => d.type === 'student').length}\nProfessores: ${data.filter(d => d.type === 'teacher').length}`)
                }}
                className="bg-gray-600 text-white px-4 py-2 rounded text-sm hover:bg-gray-700 transition-colors"
              >
                Ver Estatísticas
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentScreen === 'gradeSelection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Qual é a sua série?</h2>
            <p className="text-gray-600">Selecione sua série atual para personalizar o questionário</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handleGradeSelection('8')}
              className="w-full p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl hover:border-green-400 transition-colors text-left"
            >
              <h3 className="text-xl font-semibold text-green-800">8º Ano (13-14 anos)</h3>
              <p className="text-green-600 mt-2">Desenvolvendo autonomia e pensamento crítico</p>
            </button>

            <button
              onClick={() => handleGradeSelection('9')}
              className="w-full p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl hover:border-blue-400 transition-colors text-left"
            >
              <h3 className="text-xl font-semibold text-blue-800">9º Ano (14-15 anos)</h3>
              <p className="text-blue-600 mt-2">Preparando-se para novos desafios! Você está se preparando para o Ensino Médio.</p>
            </button>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setCurrentScreen('home')}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              ← Voltar ao início
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (currentScreen === 'studentInfo') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Informações Básicas</h2>
            <p className="text-gray-600">Precisamos de algumas informações para a pesquisa (dados anônimos)</p>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const data = {
              school: formData.get('school'),
              age: formData.get('age'),
              city: formData.get('city')
            }
            handleStudentInfo(data)
          }} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome da sua escola
              </label>
              <input
                type="text"
                name="school"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ex: Escola Municipal João Silva"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sua idade
              </label>
              <select
                name="age"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecione sua idade</option>
                <option value="12">12 anos</option>
                <option value="13">13 anos</option>
                <option value="14">14 anos</option>
                <option value="15">15 anos</option>
                <option value="16">16 anos</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cidade
              </label>
              <input
                type="text"
                name="city"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ex: São Paulo"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setCurrentScreen('gradeSelection')}
                className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Voltar
              </button>
              <button
                type="submit"
                className="flex-1 py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continuar
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  if (currentScreen === 'teacherInfo') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Informações Profissionais</h2>
            <p className="text-gray-600">Dados para caracterização do perfil pedagógico (anônimos)</p>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const data = {
              school: formData.get('school'),
              subject: formData.get('subject'),
              experience: formData.get('experience'),
              education: formData.get('education'),
              city: formData.get('city')
            }
            handleTeacherInfo(data)
          }} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome da escola onde leciona
              </label>
              <input
                type="text"
                name="school"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Ex: Escola Municipal João Silva"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Principal disciplina que leciona
              </label>
              <select
                name="subject"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Selecione a disciplina</option>
                <option value="Português">Língua Portuguesa</option>
                <option value="Matemática">Matemática</option>
                <option value="História">História</option>
                <option value="Geografia">Geografia</option>
                <option value="Ciências">Ciências</option>
                <option value="Inglês">Inglês</option>
                <option value="Educação Física">Educação Física</option>
                <option value="Arte">Arte</option>
                <option value="Ensino Religioso">Ensino Religioso</option>
                <option value="Outra">Outra</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tempo de experiência no magistério
              </label>
              <select
                name="experience"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Selecione</option>
                <option value="0-2">0 a 2 anos</option>
                <option value="3-5">3 a 5 anos</option>
                <option value="6-10">6 a 10 anos</option>
                <option value="11-15">11 a 15 anos</option>
                <option value="16-20">16 a 20 anos</option>
                <option value="20+">Mais de 20 anos</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maior nível de formação
              </label>
              <select
                name="education"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Selecione</option>
                <option value="Graduação">Graduação</option>
                <option value="Especialização">Especialização</option>
                <option value="Mestrado">Mestrado</option>
                <option value="Doutorado">Doutorado</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cidade
              </label>
              <input
                type="text"
                name="city"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Ex: São Paulo"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setCurrentScreen('home')}
                className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Voltar
              </button>
              <button
                type="submit"
                className="flex-1 py-3 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Continuar
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  if (currentScreen === 'teacherStrategies') {
    const categories = {
      'A': { name: 'Metodologias Tradicionais', color: 'blue' },
      'B': { name: 'Metodologias Ativas', color: 'green' },
      'C': { name: 'Tecnologias Digitais', color: 'purple' },
      'D': { name: 'Estratégias Criativas', color: 'orange' },
      'E': { name: 'Estratégias Reflexivas', color: 'teal' },
      'F': { name: 'Estratégias Práticas', color: 'red' }
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Estratégias Pedagógicas</h2>
            <p className="text-gray-600 mb-2">
              Marque a frequência com que você utiliza cada estratégia em suas aulas
            </p>
            <div className="text-sm text-gray-500">
              1 = Nunca • 2 = Raramente • 3 = Frequentemente • 4 = Sempre
            </div>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault()
            finishTeacherQuiz()
          }}>
            {Object.entries(categories).map(([categoryKey, category]) => (
              <div key={categoryKey} className="mb-8">
                <h3 className={`text-xl font-semibold mb-4 text-${category.color}-800`}>
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {teacherStrategies.filter(s => s.category === categoryKey).map((strategy) => (
                    <div key={strategy.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-700 flex-1">{strategy.text}</span>
                      <div className="flex gap-2 ml-4">
                        {[1, 2, 3, 4].map((value) => (
                          <label key={value} className="flex items-center">
                            <input
                              type="radio"
                              name={strategy.id}
                              value={value}
                              onChange={(e) => {
                                setTeacherStrategiesData(prev => ({
                                  ...prev,
                                  [strategy.id]: parseInt(e.target.value)
                                }))
                              }}
                              className="mr-1"
                            />
                            <span className="text-sm">{value}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex gap-4 mt-8">
              <button
                type="button"
                onClick={() => setCurrentScreen('teacherInfo')}
                className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Voltar
              </button>
              <button
                type="submit"
                className="flex-1 py-3 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Finalizar
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  if (currentScreen === 'kolbQuiz') {
    const question = kolbQuestions[currentQuestion]
    const currentResponse = responses[question.id]

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">
                Parte 1 de 2: Estilos de Aprendizagem
              </span>
              <span className="text-sm text-gray-500">
                {grade}º Ano
              </span>
            </div>
            <Progress value={getProgress()} className="mb-4" />
            <div className="text-center">
              <span className="text-lg font-semibold text-gray-700">
                Pergunta {currentQuestion + 1} de {kolbQuestions.length}
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {question.situation}
            </h2>

            <div className="grid gap-4">
              {Object.entries(question.options).map(([option, text]) => (
                <div key={option} className="border-2 border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <span className="font-semibold text-blue-600 mr-3">{option}.</span>
                      <span className="text-gray-700">{text}</span>
                    </div>
                    <div className="flex gap-2 ml-4">
                      {[1, 2, 3, 4].map((value) => (
                        <button
                          key={value}
                          onClick={() => handleAnswer(question.id, option, value)}
                          className={`w-10 h-10 rounded-full border-2 font-semibold transition-colors ${
                            currentResponse && currentResponse.option === option && currentResponse.value === value.toString()
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600'
                          }`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6 text-sm text-gray-500">
              Ordene de 1 a 4: 1 = menos parecido com você, 4 = mais parecido com você
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              disabled={!isCurrentQuestionAnswered()}
              className="py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === kolbQuestions.length - 1 ? 'Próxima Parte' : 'Próxima'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (currentScreen === 'perceptionQuiz') {
    const question = perceptionQuestions[currentQuestion]

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">
                Parte 2 de 2: Percepção das Aulas
              </span>
              <span className="text-sm text-gray-500">
                {grade}º Ano
              </span>
            </div>
            <Progress value={getProgress()} className="mb-4" />
            <div className="text-center">
              <span className="text-lg font-semibold text-gray-700">
                Pergunta {currentQuestion + 1} de {perceptionQuestions.length}
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Com que frequência isso acontece em suas aulas?
            </h2>

            <div className="bg-gray-50 p-6 rounded-xl mb-6">
              <p className="text-xl text-gray-700 text-center">
                "{question.text}"
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: 1, label: 'Nunca', color: 'red' },
                { value: 2, label: 'Às vezes', color: 'yellow' },
                { value: 3, label: 'Frequentemente', color: 'blue' },
                { value: 4, label: 'Sempre', color: 'green' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setResponses(prev => ({
                      ...prev,
                      [question.id]: option.value
                    }))
                  }}
                  className={`p-4 rounded-xl border-2 font-semibold transition-colors ${
                    responses[question.id] === option.value
                      ? `bg-${option.color}-600 text-white border-${option.color}-600`
                      : `border-${option.color}-300 text-${option.color}-600 hover:border-${option.color}-400`
                  }`}
                >
                  <div className="text-2xl mb-2">{option.value}</div>
                  <div>{option.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              disabled={responses[question.id] === undefined}
              className="py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === perceptionQuestions.length - 1 ? 'Finalizar' : 'Próxima'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (currentScreen === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Parabéns! Questionário Concluído
            </h2>
            <p className="text-gray-600">
              Aqui estão os resultados do seu estilo de aprendizagem
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
              Seu Estilo de Aprendizagem: {results.style}
            </h3>
            <p className="text-blue-700 text-lg text-center mb-6">
              {results.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(results.scores).map(([key, score]) => {
                const labels = {
                  A: 'Prático',
                  B: 'Teórico', 
                  C: 'Analítico',
                  D: 'Social'
                }
                return (
                  <div key={key} className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">{score}</div>
                    <div className="text-sm text-gray-600">{labels[key]}</div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Dicas para Estudar Melhor:
            </h4>
            {results.style === 'Acomodador' && (
              <ul className="text-gray-700 space-y-2">
                <li>• Participe de atividades práticas e experimentos</li>
                <li>• Estude em grupos e discuta os conteúdos</li>
                <li>• Use jogos educativos e simulações</li>
                <li>• Aplique o que aprendeu em situações reais</li>
              </ul>
            )}
            {results.style === 'Divergente' && (
              <ul className="text-gray-700 space-y-2">
                <li>• Participe de discussões e debates</li>
                <li>• Use brainstorming para gerar ideias</li>
                <li>• Conecte o conteúdo com suas experiências</li>
                <li>• Trabalhe em projetos criativos</li>
              </ul>
            )}
            {results.style === 'Assimilador' && (
              <ul className="text-gray-700 space-y-2">
                <li>• Leia bastante sobre os assuntos</li>
                <li>• Faça resumos e mapas mentais</li>
                <li>• Organize as informações logicamente</li>
                <li>• Prefira estudar sozinho em ambiente silencioso</li>
              </ul>
            )}
            {results.style === 'Convergente' && (
              <ul className="text-gray-700 space-y-2">
                <li>• Resolva muitos exercícios práticos</li>
                <li>• Aplique fórmulas e conceitos</li>
                <li>• Use simuladores e laboratórios</li>
                <li>• Foque na resolução de problemas</li>
              </ul>
            )}
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setCurrentScreen('home')
                setCurrentQuestion(0)
                setResponses({})
                setResults(null)
                setUserType('')
                setGrade('')
              }}
              className="py-3 px-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Fazer Novo Questionário
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (currentScreen === 'teacherResults') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Obrigado pela Participação!
            </h2>
            <p className="text-gray-600">
              Suas respostas foram registradas com sucesso e contribuirão para nossa pesquisa em neuroeducação.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">
              Sua Contribuição é Valiosa
            </h3>
            <p className="text-purple-700 text-center mb-4">
              Os dados coletados ajudarão a desenvolver estratégias pedagógicas mais eficazes 
              e alinhadas com os estilos de aprendizagem dos alunos.
            </p>
            <div className="text-center text-sm text-purple-600">
              Em breve, os resultados da pesquisa estarão disponíveis para toda a comunidade educacional.
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Próximos Passos:
            </h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Os dados serão analisados de forma agregada e anônima</li>
              <li>• Resultados serão compartilhados com a comunidade educacional</li>
              <li>• Recomendações pedagógicas serão desenvolvidas</li>
              <li>• Você receberá acesso aos resultados da pesquisa</li>
            </ul>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setCurrentScreen('home')
                setUserType('')
                setTeacherData({})
                setTeacherStrategiesData({})
              }}
              className="py-3 px-8 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default App

