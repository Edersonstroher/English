// ============================================================
// LESSONS-DATA.JS
// Todo o conteúdo didático do curso, organizado por tema > módulo > dia.
// Para adicionar mais conteúdo, siga exatamente esta estrutura.
// ============================================================

const LESSONS = {
  business: {
    name: "Trabalho e Negócios",
    icon: "💼",
    color: "#3B5B92",
    modules: [
      {
        id: "biz_m1",
        title: "Apresentações e Rotina de Trabalho",
        days: [
          {
            id: "biz_m1_d1",
            title: "Cumprimentos e se apresentar",
            vocab: [
              ["to introduce yourself", "se apresentar"],
              ["job / position", "cargo / função"],
              ["company", "empresa"],
              ["department", "departamento"],
              ["Nice to meet you", "Prazer em conhecê-lo"],
              ["What do you do?", "O que você faz (profissionalmente)?"]
            ],
            grammarTitle: "Verb 'to be'",
            grammarExplain: "I am / You are / He-She-It is / We are / They are. Usado para dizer quem você é e o que você faz.",
            grammarExamples: ["I am a sales manager.", "She is from the Marketing department."],
            commonMistakes: [
              "❌ 'I is a manager' → ✅ 'I am a manager'",
              "❌ 'She are from Marketing' → ✅ 'She is from Marketing'",
              "❌ 'What you do?' → ✅ 'What do you do?'"
            ],
            dialogue: [
              ["A", "Hi, I'm John. Nice to meet you."],
              ["B", "Nice to meet you too. I'm Sarah. What do you do?"],
              ["A", "I'm an accountant at a tech company. And you?"],
              ["B", "I work in Marketing."]
            ],
            memoryTip: "'Company' soa como 'companhia' — fácil de lembrar. 'Job' rima com 'hobb' (de hobby): pense num hobby que virou trabalho.",
            translation: [
              "Eu sou gerente.",
              "Ela trabalha no departamento de vendas.",
              "Prazer em conhecê-lo.",
              "Qual é o seu cargo?",
              "Nós somos de uma empresa de tecnologia."
            ]
          },
          {
            id: "biz_m1_d2",
            title: "Falando sobre sua profissão",
            vocab: [
              ["employee", "funcionário(a)"],
              ["employer", "empregador(a)"],
              ["to work for", "trabalhar para"],
              ["industry", "setor / indústria"],
              ["experience", "experiência"],
              ["colleague / coworker", "colega de trabalho"]
            ],
            grammarTitle: "Present Simple (afirmativo)",
            grammarExplain: "I/You/We/They + verbo. He/She/It + verbo + s. Usamos para rotinas e fatos permanentes.",
            grammarExamples: ["I work for a software company.", "He works in the finance industry."],
            commonMistakes: [
              "❌ 'She work here' → ✅ 'She works here'",
              "❌ 'I have experience in marketing since 2 years' → ✅ 'I have had experience in marketing for 2 years'",
              "❌ 'He work for a bank' → ✅ 'He works for a bank'"
            ],
            dialogue: [
              ["A", "How long have you worked here?"],
              ["B", "I've worked here for three years. I work for the finance team."],
              ["A", "Do you like it?"],
              ["B", "Yes, my coworkers are great."]
            ],
            memoryTip: "'Colleague' tem 'league' dentro — pense num 'time' (league) do qual você faz parte no trabalho.",
            translation: [
              "Eu trabalho para uma empresa grande.",
              "Ela tem experiência em vendas.",
              "Meus colegas são simpáticos.",
              "Ele trabalha no setor de tecnologia.",
              "Nós somos funcionários dessa empresa."
            ]
          },
          {
            id: "biz_m1_d3",
            title: "Rotina diária no trabalho",
            vocab: [
              ["to start work", "começar a trabalhar"],
              ["deadline", "prazo"],
              ["to attend a meeting", "participar de uma reunião"],
              ["schedule", "agenda"],
              ["task", "tarefa"],
              ["report", "relatório"]
            ],
            grammarTitle: "Present Simple (negativo e perguntas)",
            grammarExplain: "Negativo: don't/doesn't + verbo. Pergunta: Do/Does + sujeito + verbo?",
            grammarExamples: ["I don't work on weekends.", "Does she attend the meeting every Monday?"],
            commonMistakes: [
              "❌ 'She don't work on Fridays' → ✅ 'She doesn't work on Fridays'",
              "❌ 'Does she attends?' → ✅ 'Does she attend?'",
              "❌ 'I no have a deadline' → ✅ 'I don't have a deadline'"
            ],
            dialogue: [
              ["A", "Do you start work at 8am?"],
              ["B", "No, I don't. I start at 9. But I have a deadline today."],
              ["A", "Does your team attend the meeting too?"],
              ["B", "Yes, we all attend it."]
            ],
            memoryTip: "'Deadline' = 'dead' + 'line': imagine uma linha que 'mata' o prazo se você não entregar antes.",
            translation: [
              "Eu não trabalho aos sábados.",
              "Ela participa da reunião toda semana.",
              "Qual é o prazo desse relatório?",
              "Nós não temos tarefas hoje.",
              "Ele começa a trabalhar às 9h."
            ]
          }
        ],
        quiz: [
          { q: "I ___ a project manager.", type: "fill", answer: "am" },
          { q: "She ___ (work) in the sales department.", type: "fill", answer: "works" },
          { q: "They ___ (not/work) on Sundays.", type: "fill", answer: "don't work" },
          { q: "___ he attend the meeting on Mondays?", type: "fill", answer: "Does" },
          { q: "Traduza: 'Prazer em conhecê-lo.'", type: "translate", answer: "Nice to meet you." },
          { q: "Traduza: 'Qual é o seu cargo?'", type: "translate", answer: "What is your position?" },
          { q: "Traduza: 'Ela tem experiência em marketing.'", type: "translate", answer: "She has experience in marketing." },
          { q: "Corrija: 'She don't work here.'", type: "correct", answer: "She doesn't work here." },
          { q: "Corrija: 'What you do?'", type: "correct", answer: "What do you do?" },
          { q: "Corrija: 'I is a manager.'", type: "correct", answer: "I am a manager." }
        ]
      },
      {
        id: "biz_m2",
        title: "Reuniões, Emails e Trabalho em Equipe",
        days: [
          {
            id: "biz_m2_d1",
            title: "Emails profissionais e comunicação por escrito",
            vocab: [
              ["to attach", "anexar"],
              ["attachment", "anexo"],
              ["to reply", "responder"],
              ["subject line", "assunto (do email)"],
              ["to follow up", "dar retorno / cobrar retorno"],
              ["as soon as possible (ASAP)", "o mais rápido possível"]
            ],
            grammarTitle: "Past Simple (verbos regulares e irregulares)",
            grammarExplain: "Usamos o Past Simple para falar de ações finalizadas no passado. Verbos regulares recebem -ed; irregulares têm forma própria (go → went).",
            grammarExamples: ["I replied to the email yesterday.", "She sent the report last week."],
            commonMistakes: [
              "❌ 'I sended the email' → ✅ 'I sent the email'",
              "❌ 'She replyed yesterday' → ✅ 'She replied yesterday'",
              "❌ 'Did you sent it?' → ✅ 'Did you send it?'"
            ],
            dialogue: [
              ["A", "Did you reply to the client's email?"],
              ["B", "Yes, I replied this morning. I attached the report too."],
              ["A", "Great. Did you follow up on the deadline?"],
              ["B", "Not yet, I'll do it ASAP."]
            ],
            memoryTip: "'Attachment' tem 'attach' (grudar/anexar) — pense em algo 'grudado' no email.",
            translation: [
              "Eu respondi o email ontem.",
              "Ela anexou o relatório.",
              "Você enviou o email a tempo?",
              "Nós demos retorno sobre o prazo.",
              "Qual é o assunto desse email?"
            ]
          },
          {
            id: "biz_m2_d2",
            title: "Participando de reuniões",
            vocab: [
              ["to schedule", "agendar"],
              ["agenda (meeting)", "pauta"],
              ["to bring up (a topic)", "levantar (um assunto)"],
              ["to postpone", "adiar"],
              ["minutes (of a meeting)", "ata (da reunião)"],
              ["stakeholder", "parte interessada"]
            ],
            grammarTitle: "Past Simple - perguntas e negativas",
            grammarExplain: "Pergunta: Did + sujeito + verbo no infinitivo? Negativa: didn't + verbo no infinitivo.",
            grammarExamples: ["Did you schedule the meeting?", "We didn't postpone the deadline."],
            commonMistakes: [
              "❌ 'Did you scheduled the meeting?' → ✅ 'Did you schedule the meeting?'",
              "❌ 'We not postponed it' → ✅ 'We didn't postpone it'",
              "❌ 'Did she brought up the topic?' → ✅ 'Did she bring up the topic?'"
            ],
            dialogue: [
              ["A", "Did you schedule the meeting with the stakeholders?"],
              ["B", "Yes, I did. It's on Thursday."],
              ["A", "Did anyone bring up the budget topic?"],
              ["B", "No, we didn't discuss it. We postponed it to next week."]
            ],
            memoryTip: "'Postpone' tem 'post' (depois) — pense em 'colocar para depois'.",
            translation: [
              "Você agendou a reunião?",
              "Nós adiamos a decisão.",
              "Quem levantou esse assunto?",
              "A ata da reunião ainda não está pronta.",
              "As partes interessadas não participaram."
            ]
          },
          {
            id: "biz_m2_d3",
            title: "Planos futuros no trabalho",
            vocab: [
              ["to plan to", "planejar"],
              ["upcoming", "próximo / que está por vir"],
              ["project", "projeto"],
              ["to launch", "lançar"],
              ["goal", "meta"],
              ["to achieve", "alcançar"]
            ],
            grammarTitle: "Future: going to",
            grammarExplain: "Usamos 'going to' para planos e intenções já decididas. to be + going to + verbo.",
            grammarExamples: ["We are going to launch the project next month.", "She is going to achieve her goal this year."],
            commonMistakes: [
              "❌ 'We going to launch' → ✅ 'We are going to launch'",
              "❌ 'She is go to achieve' → ✅ 'She is going to achieve'",
              "❌ 'I am going launch' → ✅ 'I am going to launch'"
            ],
            dialogue: [
              ["A", "What are you going to do about the upcoming project?"],
              ["B", "We're going to launch it next month."],
              ["A", "Are you going to achieve your goal this quarter?"],
              ["B", "I hope so! We're planning to finish everything on time."]
            ],
            memoryTip: "'Upcoming' = 'up' + 'coming' — algo que está 'vindo para cima', ou seja, se aproximando.",
            translation: [
              "Nós vamos lançar o projeto no mês que vem.",
              "Ela vai alcançar a meta esse ano.",
              "Qual é o próximo projeto?",
              "Eu estou planejando terminar a tempo.",
              "Eles vão participar da reunião."
            ]
          }
        ],
        quiz: [
          { q: "I ___ (send) the report yesterday.", type: "fill", answer: "sent" },
          { q: "___ you reply to the email? (pergunta no passado)", type: "fill", answer: "Did" },
          { q: "We ___ (not/postpone) the meeting.", type: "fill", answer: "didn't postpone" },
          { q: "We are ___ (go) to launch the project next month.", type: "fill", answer: "going" },
          { q: "Traduza: 'Ela respondeu o email ontem.'", type: "translate", answer: "She replied to the email yesterday." },
          { q: "Traduza: 'Nós vamos lançar o projeto.'", type: "translate", answer: "We are going to launch the project." },
          { q: "Traduza: 'Você agendou a reunião?'", type: "translate", answer: "Did you schedule the meeting?" },
          { q: "Corrija: 'I sended the email.'", type: "correct", answer: "I sent the email." },
          { q: "Corrija: 'Did you scheduled the meeting?'", type: "correct", answer: "Did you schedule the meeting?" },
          { q: "Corrija: 'We going to launch it.'", type: "correct", answer: "We are going to launch it." }
        ]
      },
      {
        id: "biz_m3",
        title: "Experiência Profissional e Negociações",
        days: [
          {
            id: "biz_m3_d1",
            title: "Falando sobre experiência profissional",
            vocab: [
              ["career", "carreira"],
              ["achievement", "conquista"],
              ["to manage (a team)", "gerenciar (uma equipe)"],
              ["responsible for", "responsável por"],
              ["background", "histórico / experiência prévia"],
              ["to promote / promotion", "promover / promoção"]
            ],
            grammarTitle: "Present Perfect (experiência profissional)",
            grammarExplain: "Usamos have/has + particípio passado para falar de experiências sem dizer quando aconteceram exatamente.",
            grammarExamples: ["I have worked in sales for five years.", "She has managed three different teams."],
            commonMistakes: [
              "❌ 'I have work here' → ✅ 'I have worked here'",
              "❌ 'She has manage a team' → ✅ 'She has managed a team'",
              "❌ 'I have worked here since five years' → ✅ 'I have worked here for five years'"
            ],
            dialogue: [
              ["A", "Tell me about your background."],
              ["B", "I've worked in marketing for five years and I've managed two teams."],
              ["A", "Have you ever been promoted?"],
              ["B", "Yes, I was promoted last year."]
            ],
            memoryTip: "'Achievement' tem 'achieve' (alcançar) — pense em algo que você 'alcançou' com esforço.",
            translation: [
              "Eu trabalho aqui há cinco anos.",
              "Ela já gerenciou três equipes.",
              "Você já foi promovido?",
              "Essa é uma grande conquista.",
              "Eu sou responsável pelo projeto."
            ]
          },
          {
            id: "biz_m3_d2",
            title: "Fazendo propostas e negociando",
            vocab: [
              ["to propose", "propor"],
              ["deal", "acordo"],
              ["budget", "orçamento"],
              ["to negotiate", "negociar"],
              ["in exchange for", "em troca de"],
              ["counteroffer", "contraproposta"]
            ],
            grammarTitle: "First Conditional (if + present, will + verbo)",
            grammarExplain: "Usamos para falar de situações reais e possíveis no futuro: If + present simple, will + verbo infinitivo.",
            grammarExamples: ["If we increase the budget, we will finish faster.", "If you accept the deal, we will sign the contract."],
            commonMistakes: [
              "❌ 'If we will increase the budget' → ✅ 'If we increase the budget'",
              "❌ 'If you accept, we sign' (sem will) → ✅ 'If you accept, we will sign'",
              "❌ 'If we negotiate, we will avoiding delays' → ✅ 'If we negotiate, we will avoid delays'"
            ],
            dialogue: [
              ["A", "If we increase the budget, will we finish faster?"],
              ["B", "Yes, if you accept this deal, we will finish two weeks earlier."],
              ["A", "What if we negotiate a lower price?"],
              ["B", "If you offer something in exchange, I'll consider a counteroffer."]
            ],
            memoryTip: "'Deal' também aparece em 'no big deal' — pense em um 'acordo' que fecha um assunto.",
            translation: [
              "Se nós aumentarmos o orçamento, terminaremos mais rápido.",
              "Se você aceitar o acordo, nós assinaremos o contrato.",
              "Eu vou negociar um preço melhor.",
              "Essa é a nossa contraproposta.",
              "O que você oferece em troca?"
            ]
          },
          {
            id: "biz_m3_d3",
            title: "Dando feedback no trabalho",
            vocab: [
              ["feedback", "retorno / feedback"],
              ["to improve", "melhorar"],
              ["strength", "ponto forte"],
              ["weakness", "ponto fraco"],
              ["to point out", "apontar"],
              ["constructive", "construtivo"]
            ],
            grammarTitle: "Should / could para sugestões e feedback",
            grammarExplain: "Usamos 'should' para recomendar mudanças e 'could' para sugerir possibilidades de forma mais suave.",
            grammarExamples: ["You should improve your time management.", "You could ask for help when needed."],
            commonMistakes: [
              "❌ 'You should to improve' → ✅ 'You should improve'",
              "❌ 'You could to ask for help' → ✅ 'You could ask for help'",
              "❌ 'She should improves' → ✅ 'She should improve'"
            ],
            dialogue: [
              ["A", "Can I give you some feedback?"],
              ["B", "Sure, I'd love constructive feedback."],
              ["A", "You should improve your time management, but your communication is a real strength."],
              ["B", "Thanks, I could definitely work on that."]
            ],
            memoryTip: "'Constructive' tem 'construct' (construir) — pense em feedback que 'constrói' algo melhor.",
            translation: [
              "Você deveria melhorar sua gestão de tempo.",
              "Esse é o seu ponto forte.",
              "Qual é o meu ponto fraco?",
              "Eu adoraria um feedback construtivo.",
              "Você poderia pedir ajuda quando precisar."
            ]
          }
        ],
        quiz: [
          { q: "I ___ (work) here for five years. (experiência)", type: "fill", answer: "have worked" },
          { q: "If we increase the budget, we ___ (finish) faster.", type: "fill", answer: "will finish" },
          { q: "You ___ improve your time management. (sugestão)", type: "fill", answer: "should" },
          { q: "She has ___ (manage) three teams.", type: "fill", answer: "managed" },
          { q: "Traduza: 'Ela já gerenciou três equipes.'", type: "translate", answer: "She has managed three teams." },
          { q: "Traduza: 'Se você aceitar o acordo, nós assinaremos o contrato.'", type: "translate", answer: "If you accept the deal, we will sign the contract." },
          { q: "Traduza: 'Você deveria melhorar sua gestão de tempo.'", type: "translate", answer: "You should improve your time management." },
          { q: "Corrija: 'I have work here for five years.'", type: "correct", answer: "I have worked here for five years." },
          { q: "Corrija: 'If we will increase the budget.'", type: "correct", answer: "If we increase the budget." },
          { q: "Corrija: 'You should to improve.'", type: "correct", answer: "You should improve." }
        ]
      }
    ]
  },

  travel: {
    name: "Viagens e Dia a Dia",
    icon: "✈️",
    color: "#2E8B7A",
    modules: [
      {
        id: "trav_m1",
        title: "No Aeroporto e Check-in",
        days: [
          {
            id: "trav_m1_d1",
            title: "No aeroporto",
            vocab: [
              ["boarding pass", "cartão de embarque"],
              ["luggage / baggage", "bagagem"],
              ["gate", "portão de embarque"],
              ["flight", "voo"],
              ["passport", "passaporte"],
              ["security check", "controle de segurança"]
            ],
            grammarTitle: "There is / There are",
            grammarExplain: "Usamos 'there is' para singular e 'there are' para plural, pra dizer o que existe em um lugar.",
            grammarExamples: ["There is a long line at security.", "There are two gates for this flight."],
            commonMistakes: [
              "❌ 'There is two gates' → ✅ 'There are two gates'",
              "❌ 'Is there a line?' respondido como 'Yes, there' → ✅ 'Yes, there is'",
              "❌ 'There are a passport control' → ✅ 'There is a passport control'"
            ],
            dialogue: [
              ["A", "Excuse me, where is gate 12?"],
              ["B", "It's over there, next to the security check."],
              ["A", "Thank you! Is there a long line?"],
              ["B", "Not really, it's quick today."]
            ],
            memoryTip: "'Gate' = 'portão' — imagine o portão de casa, só que no aeroporto.",
            translation: [
              "Onde está meu cartão de embarque?",
              "Há uma fila longa na segurança.",
              "Meu passaporte está na bolsa.",
              "Qual é o portão do meu voo?",
              "Minha bagagem está pesada."
            ]
          },
          {
            id: "trav_m1_d2",
            title: "No hotel",
            vocab: [
              ["reservation", "reserva"],
              ["check-in / check-out", "entrada / saída"],
              ["front desk", "recepção"],
              ["room key", "chave do quarto"],
              ["available", "disponível"],
              ["to book", "reservar"]
            ],
            grammarTitle: "Can / Could (pedidos educados)",
            grammarExplain: "'Can' e 'could' são usados para pedir algo. 'Could' soa mais educado.",
            grammarExamples: ["Can I check in early?", "Could you give me a room key, please?"],
            commonMistakes: [
              "❌ 'Can you to help me?' → ✅ 'Can you help me?'",
              "❌ 'I can to book a room' → ✅ 'I can book a room'",
              "❌ 'Could you gives me the key?' → ✅ 'Could you give me the key?'"
            ],
            dialogue: [
              ["A", "Hi, I have a reservation under Silva."],
              ["B", "Let me check... Yes, here it is. Could I see your passport?"],
              ["A", "Sure. Can I check in early?"],
              ["B", "Yes, your room is available now."]
            ],
            memoryTip: "'Book' também significa 'livro' — pense em 'reservar uma página' na agenda do hotel.",
            translation: [
              "Eu tenho uma reserva para hoje.",
              "Você pode me dar a chave do quarto?",
              "O quarto está disponível agora?",
              "Eu gostaria de reservar dois quartos.",
              "Onde fica a recepção?"
            ]
          }
        ],
        quiz: [
          { q: "___ is a long line at the gate.", type: "fill", answer: "There" },
          { q: "There ___ (be) two suitcases here.", type: "fill", answer: "are" },
          { q: "___ I check in early? (pedido educado)", type: "fill", answer: "Could" },
          { q: "___ you help me with my luggage?", type: "fill", answer: "Can" },
          { q: "Traduza: 'Onde está meu passaporte?'", type: "translate", answer: "Where is my passport?" },
          { q: "Traduza: 'Eu tenho uma reserva.'", type: "translate", answer: "I have a reservation." },
          { q: "Traduza: 'O quarto está disponível?'", type: "translate", answer: "Is the room available?" },
          { q: "Corrija: 'Can you to help me?'", type: "correct", answer: "Can you help me?" },
          { q: "Corrija: 'There is two gates.'", type: "correct", answer: "There are two gates." },
          { q: "Corrija: 'Could you gives me the key?'", type: "correct", answer: "Could you give me the key?" }
        ]
      },
      {
        id: "trav_m2",
        title: "Se Locomovendo e Aproveitando a Viagem",
        days: [
          {
            id: "trav_m2_d1",
            title: "Pedindo direções e usando transporte",
            vocab: [
              ["to turn left/right", "virar à esquerda/direita"],
              ["straight ahead", "em frente"],
              ["public transportation", "transporte público"],
              ["to take a taxi/bus", "pegar um táxi/ônibus"],
              ["intersection", "cruzamento"],
              ["nearby", "por perto"]
            ],
            grammarTitle: "Imperativos para dar instruções",
            grammarExplain: "Usamos o verbo no infinitivo sem 'to' para dar instruções ou direções.",
            grammarExamples: ["Turn left at the corner.", "Take the bus number 5."],
            commonMistakes: [
              "❌ 'You turn left' (como comando) → ✅ 'Turn left'",
              "❌ 'To take the bus' (como instrução) → ✅ 'Take the bus'",
              "❌ 'Turn to left' → ✅ 'Turn left'"
            ],
            dialogue: [
              ["A", "Excuse me, how do I get to the museum?"],
              ["B", "Go straight ahead and turn left at the intersection."],
              ["A", "Is it near here? Should I take a taxi?"],
              ["B", "No, it's nearby. You can walk or take the bus."]
            ],
            memoryTip: "'Straight' lembra 'reto' — pense numa linha reta e 'esticada' (stretch).",
            translation: [
              "Vire à direita no cruzamento.",
              "O museu fica por perto.",
              "Eu vou pegar um táxi.",
              "Siga em frente até o semáforo.",
              "O transporte público aqui é bom."
            ]
          },
          {
            id: "trav_m2_d2",
            title: "Pedindo comida em restaurantes",
            vocab: [
              ["to order", "pedir (comida)"],
              ["menu", "cardápio"],
              ["check / bill", "conta"],
              ["waiter / waitress", "garçom / garçonete"],
              ["to recommend", "recomendar"],
              ["allergic (to)", "alérgico (a)"]
            ],
            grammarTitle: "Would like to (pedidos educados)",
            grammarExplain: "'Would like' é uma forma educada de dizer 'want' (querer). Usado para pedir algo em restaurantes.",
            grammarExamples: ["I would like to order the pasta.", "Would you like some water?"],
            commonMistakes: [
              "❌ 'I would like order' → ✅ 'I would like to order'",
              "❌ 'I want order the pasta' → ✅ 'I would like to order the pasta'",
              "❌ 'Would you to like water?' → ✅ 'Would you like water?'"
            ],
            dialogue: [
              ["A", "Are you ready to order?"],
              ["B", "Yes, I'd like to order the salmon. Could you recommend a good side dish?"],
              ["A", "Sure! Are you allergic to anything?"],
              ["B", "No, I'm not. Could we have the check at the end, please?"]
            ],
            memoryTip: "'Bill' também significa 'conta' em outros contextos — pense em 'pagar a conta' no fim da refeição.",
            translation: [
              "Eu gostaria de pedir a massa.",
              "Você pode recomendar um prato?",
              "Eu sou alérgico a amendoim.",
              "Podemos ver o cardápio, por favor?",
              "A conta, por favor."
            ]
          },
          {
            id: "trav_m2_d3",
            title: "Contando sobre uma viagem passada",
            vocab: [
              ["to visit", "visitar"],
              ["souvenir", "lembrancinha"],
              ["breathtaking", "de tirar o fôlego"],
              ["to get lost", "se perder"],
              ["local (adj)", "local"],
              ["worth it", "vale a pena"]
            ],
            grammarTitle: "Past Simple para contar viagens",
            grammarExplain: "Usamos o Past Simple para narrar experiências de viagens passadas, combinando verbos regulares e irregulares.",
            grammarExamples: ["We visited three cities last summer.", "I got lost in the old town, but it was worth it."],
            commonMistakes: [
              "❌ 'We visited to Paris' → ✅ 'We visited Paris'",
              "❌ 'I get lost yesterday' → ✅ 'I got lost yesterday'",
              "❌ 'It was worth' (sem 'it') → ✅ 'It was worth it'"
            ],
            dialogue: [
              ["A", "How was your trip?"],
              ["B", "Amazing! We visited three cities and the views were breathtaking."],
              ["A", "Did anything go wrong?"],
              ["B", "We got lost once, but a local helped us. It was worth it!"]
            ],
            memoryTip: "'Breathtaking' = 'breath' (fôlego) + 'taking' (tirando) — algo que literalmente 'tira o fôlego'.",
            translation: [
              "Nós visitamos três cidades.",
              "Eu me perdi na cidade velha.",
              "A vista era de tirar o fôlego.",
              "Valeu muito a pena.",
              "Eu comprei lembrancinhas para a família."
            ]
          }
        ],
        quiz: [
          { q: "___ left at the corner. (comando)", type: "fill", answer: "Turn" },
          { q: "I would ___ to order the pasta.", type: "fill", answer: "like" },
          { q: "We ___ (visit) three cities last year.", type: "fill", answer: "visited" },
          { q: "I got ___ in the old town. (perdido)", type: "fill", answer: "lost" },
          { q: "Traduza: 'Siga em frente.'", type: "translate", answer: "Go straight ahead." },
          { q: "Traduza: 'Eu gostaria de pedir a massa.'", type: "translate", answer: "I would like to order the pasta." },
          { q: "Traduza: 'Nós visitamos três cidades.'", type: "translate", answer: "We visited three cities." },
          { q: "Corrija: 'I would like order the pasta.'", type: "correct", answer: "I would like to order the pasta." },
          { q: "Corrija: 'I get lost yesterday.'", type: "correct", answer: "I got lost yesterday." },
          { q: "Corrija: 'We visited to Paris.'", type: "correct", answer: "We visited Paris." }
        ]
      },
      {
        id: "trav_m3",
        title: "Emergências e Situações Inesperadas",
        days: [
          {
            id: "trav_m3_d1",
            title: "Lidando com emergências",
            vocab: [
              ["emergency", "emergência"],
              ["to lose (lost)", "perder"],
              ["embassy", "embaixada"],
              ["to report (to police)", "registrar (na polícia)"],
              ["insurance", "seguro"],
              ["urgent", "urgente"]
            ],
            grammarTitle: "Must / have to (obrigação em emergências)",
            grammarExplain: "'Must' e 'have to' expressam obrigação. 'Must' é mais forte/formal, 'have to' é mais comum no dia a dia.",
            grammarExamples: ["You must report this to the police.", "I have to call my insurance company."],
            commonMistakes: [
              "❌ 'You must to report it' → ✅ 'You must report it'",
              "❌ 'I have call the embassy' → ✅ 'I have to call the embassy'",
              "❌ 'She must goes to the embassy' → ✅ 'She must go to the embassy'"
            ],
            dialogue: [
              ["A", "I lost my passport! What should I do?"],
              ["B", "You must report it to the police immediately."],
              ["A", "Do I have to call the embassy too?"],
              ["B", "Yes, it's urgent. You have to contact them today."]
            ],
            memoryTip: "'Urgent' soa parecido em português — pense em algo 'urgente' que não pode esperar.",
            translation: [
              "Eu perdi meu passaporte.",
              "Você deve registrar isso na polícia.",
              "Eu tenho que ligar para o seguro.",
              "Isso é urgente.",
              "Nós precisamos contatar a embaixada."
            ]
          },
          {
            id: "trav_m3_d2",
            title: "Perguntando sobre experiências de viagem",
            vocab: [
              ["have you ever...?", "você já...?"],
              ["abroad", "no exterior"],
              ["to travel alone", "viajar sozinho(a)"],
              ["backpacking", "mochilão"],
              ["culture shock", "choque cultural"],
              ["unforgettable", "inesquecível"]
            ],
            grammarTitle: "Present Perfect (experiências de viagem)",
            grammarExplain: "Usamos 'Have you ever...?' para perguntar sobre experiências de vida, sem especificar quando aconteceram.",
            grammarExamples: ["Have you ever traveled abroad?", "I have never been backpacking."],
            commonMistakes: [
              "❌ 'Have you ever traveled abroad yesterday?' → ✅ 'Did you travel abroad yesterday?'",
              "❌ 'I never have been' → ✅ 'I have never been'",
              "❌ 'Have you went abroad?' → ✅ 'Have you been abroad?'"
            ],
            dialogue: [
              ["A", "Have you ever traveled alone?"],
              ["B", "Yes, I've been backpacking twice. It was unforgettable!"],
              ["A", "Did you have any culture shock?"],
              ["B", "A little, but I loved every moment."]
            ],
            memoryTip: "'Unforgettable' = 'un' (não) + 'forgettable' (esquecível) — algo que não dá pra esquecer.",
            translation: [
              "Você já viajou sozinho?",
              "Eu nunca fiz mochilão.",
              "Foi uma experiência inesquecível.",
              "Eu tive um pouco de choque cultural.",
              "Você já viajou para o exterior?"
            ]
          },
          {
            id: "trav_m3_d3",
            title: "Se comunicando em situações do dia a dia na viagem",
            vocab: [
              ["to exchange money", "trocar dinheiro"],
              ["currency", "moeda"],
              ["ATM", "caixa eletrônico"],
              ["to rent (a car)", "alugar (um carro)"],
              ["SIM card", "chip de celular"],
              ["Wi-Fi password", "senha do wi-fi"]
            ],
            grammarTitle: "Perguntas com Where/How/Can (situações práticas)",
            grammarExplain: "Combinamos palavras interrogativas (where, how) com 'can' para pedir informações práticas em viagens.",
            grammarExamples: ["Where can I exchange money?", "How can I rent a car here?"],
            commonMistakes: [
              "❌ 'Where I can exchange money?' → ✅ 'Where can I exchange money?'",
              "❌ 'How I can rent a car?' → ✅ 'How can I rent a car?'",
              "❌ 'Can I to buy a SIM card?' → ✅ 'Can I buy a SIM card?'"
            ],
            dialogue: [
              ["A", "Where can I exchange money around here?"],
              ["B", "There's an ATM and a currency exchange near the hotel."],
              ["A", "How can I rent a car and get a SIM card?"],
              ["B", "Both are available at the airport."]
            ],
            memoryTip: "'Currency' lembra 'correr' (fluir) — pense no dinheiro 'circulando' entre países.",
            translation: [
              "Onde posso trocar dinheiro?",
              "Como eu posso alugar um carro?",
              "Qual é a senha do wi-fi?",
              "Eu preciso comprar um chip de celular.",
              "Tem um caixa eletrônico perto daqui?"
            ]
          }
        ],
        quiz: [
          { q: "You ___ report it to the police. (obrigação forte)", type: "fill", answer: "must" },
          { q: "I ___ (have) to call the embassy.", type: "fill", answer: "have" },
          { q: "___ you ever traveled abroad?", type: "fill", answer: "Have" },
          { q: "___ can I exchange money?", type: "fill", answer: "Where" },
          { q: "Traduza: 'Eu perdi meu passaporte.'", type: "translate", answer: "I lost my passport." },
          { q: "Traduza: 'Você já viajou sozinho?'", type: "translate", answer: "Have you ever traveled alone?" },
          { q: "Traduza: 'Onde posso trocar dinheiro?'", type: "translate", answer: "Where can I exchange money?" },
          { q: "Corrija: 'You must to report it.'", type: "correct", answer: "You must report it." },
          { q: "Corrija: 'I never have been.'", type: "correct", answer: "I have never been." },
          { q: "Corrija: 'Where I can exchange money?'", type: "correct", answer: "Where can I exchange money?" }
        ]
      }
    ]
  },

  pop_culture: {
    name: "Séries, Filmes e Cultura Pop",
    icon: "🎬",
    color: "#B0459C",
    modules: [
      {
        id: "pop_m1",
        title: "Falando sobre o que você assiste",
        days: [
          {
            id: "pop_m1_d1",
            title: "Séries e filmes favoritos",
            vocab: [
              ["TV show", "série de TV"],
              ["episode", "episódio"],
              ["season", "temporada"],
              ["plot", "enredo"],
              ["character", "personagem"],
              ["to binge-watch", "maratonar"]
            ],
            grammarTitle: "I like / I love + verbo + -ing",
            grammarExplain: "Depois de 'like', 'love' e 'enjoy', o verbo seguinte vai para a forma -ing.",
            grammarExamples: ["I love watching thrillers.", "She enjoys binge-watching sitcoms."],
            commonMistakes: [
              "❌ 'I like to watching' → ✅ 'I like watching' ou 'I like to watch'",
              "❌ 'She enjoy watch series' → ✅ 'She enjoys watching series'",
              "❌ 'I like series of comedy' → ✅ 'I like comedy series'"
            ],
            dialogue: [
              ["A", "What's your favorite TV show?"],
              ["B", "I love watching mystery series. What about you?"],
              ["A", "I enjoy binge-watching sitcoms on weekends."],
              ["B", "The plot in the last season was amazing!"]
            ],
            memoryTip: "'Binge-watch' vem de 'binge' (exagerar) — pense em 'maratonar até exagerar'.",
            translation: [
              "Eu adoro assistir séries de comédia.",
              "Qual é o seu personagem favorito?",
              "O enredo desse filme é ótimo.",
              "Nós maratonamos a série no fim de semana.",
              "Essa temporada tem 10 episódios."
            ]
          }
        ],
        quiz: [
          { q: "I love ___ (watch) thrillers.", type: "fill", answer: "watching" },
          { q: "She enjoys ___ (binge-watch) series.", type: "fill", answer: "binge-watching" },
          { q: "This ___ has 8 episodes. (temporada)", type: "fill", answer: "season" },
          { q: "My favorite ___ in the show is the detective. (personagem)", type: "fill", answer: "character" },
          { q: "Traduza: 'Qual é o seu filme favorito?'", type: "translate", answer: "What's your favorite movie?" },
          { q: "Traduza: 'Eu maratonei a série inteira.'", type: "translate", answer: "I binge-watched the whole series." },
          { q: "Traduza: 'O enredo é muito bom.'", type: "translate", answer: "The plot is really good." },
          { q: "Corrija: 'I like to watching movies.'", type: "correct", answer: "I like watching movies." },
          { q: "Corrija: 'She enjoy watch series.'", type: "correct", answer: "She enjoys watching series." },
          { q: "Corrija: 'I like series of comedy.'", type: "correct", answer: "I like comedy series." }
        ]
      },
      {
        id: "pop_m2",
        title: "Opiniões e Comparações",
        days: [
          {
            id: "pop_m2_d1",
            title: "Dando opiniões sobre filmes e séries",
            vocab: [
              ["in my opinion", "na minha opinião"],
              ["overrated", "supervalorizado"],
              ["underrated", "subestimado"],
              ["to be into (something)", "curtir / gostar de algo"],
              ["boring", "chato"],
              ["thrilling", "emocionante"]
            ],
            grammarTitle: "I think / I believe + opinião",
            grammarExplain: "Usamos 'I think' e 'I believe' para expressar opiniões pessoais, seguidos de oração completa.",
            grammarExamples: ["I think this show is overrated.", "I believe the ending was thrilling."],
            commonMistakes: [
              "❌ 'I think that is overrated it' → ✅ 'I think it is overrated'",
              "❌ 'In my opinion, is boring' → ✅ 'In my opinion, it is boring'",
              "❌ 'I am into of this show' → ✅ 'I am into this show'"
            ],
            dialogue: [
              ["A", "What do you think of the new season?"],
              ["B", "In my opinion, it's a bit boring. I think it's overrated."],
              ["A", "Really? I'm really into it, I find it thrilling."],
              ["B", "Maybe it's underrated then, I'll give it another chance."]
            ],
            memoryTip: "'Overrated' tem 'over' (acima) — pense em algo 'avaliado acima' do que merece.",
            translation: [
              "Na minha opinião, essa série é chata.",
              "Eu acho essa série supervalorizada.",
              "Eu curto muito esse filme.",
              "Eu acredito que o final foi emocionante.",
              "Esse ator é subestimado."
            ]
          },
          {
            id: "pop_m2_d2",
            title: "Comparando filmes, atores e séries",
            vocab: [
              ["better than", "melhor que"],
              ["worse than", "pior que"],
              ["the best", "o melhor"],
              ["as good as", "tão bom quanto"],
              ["sequel", "continuação"],
              ["original", "original"]
            ],
            grammarTitle: "Comparativos e superlativos",
            grammarExplain: "Adjetivos curtos: -er/-est (better, best). Adjetivos longos: more/most + adjetivo.",
            grammarExamples: ["This movie is better than the original.", "It's the most exciting series I've watched."],
            commonMistakes: [
              "❌ 'more better' → ✅ 'better'",
              "❌ 'the most best' → ✅ 'the best'",
              "❌ 'exciting than' (sem 'more') → ✅ 'more exciting than'"
            ],
            dialogue: [
              ["A", "Is the sequel better than the original?"],
              ["B", "I think it's worse than the original, honestly."],
              ["A", "Really? I think it's as good as the first one."],
              ["B", "Maybe, but the first one is still the best for me."]
            ],
            memoryTip: "'Sequel' soa como 'sequência' — fácil de lembrar que é a continuação.",
            translation: [
              "Essa continuação é melhor que a original.",
              "Esse é o melhor filme do ano.",
              "O segundo filme é tão bom quanto o primeiro.",
              "Esse ator é pior que o outro.",
              "Esse é o filme mais emocionante que eu já vi."
            ]
          },
          {
            id: "pop_m2_d3",
            title: "Recomendando e discutindo gêneros",
            vocab: [
              ["genre", "gênero"],
              ["to recommend", "recomendar"],
              ["a must-watch", "algo que precisa assistir"],
              ["spoiler", "spoiler / estrago da surpresa"],
              ["cast", "elenco"],
              ["to give something a try", "dar uma chance a algo"]
            ],
            grammarTitle: "Should / shouldn't (recomendações)",
            grammarExplain: "Usamos 'should' para dar conselhos e recomendações, e 'shouldn't' para desaconselhar.",
            grammarExamples: ["You should watch this show, it's a must-watch.", "You shouldn't read spoilers before watching."],
            commonMistakes: [
              "❌ 'You should to watch it' → ✅ 'You should watch it'",
              "❌ 'You not should read spoilers' → ✅ 'You shouldn't read spoilers'",
              "❌ 'She should watches it' → ✅ 'She should watch it'"
            ],
            dialogue: [
              ["A", "What genre do you recommend?"],
              ["B", "You should try this thriller, the cast is amazing."],
              ["A", "Is it a must-watch?"],
              ["B", "Definitely, but you shouldn't read any spoilers first."]
            ],
            memoryTip: "'Cast' também significa 'lançar/jogar' — pense no elenco como as pessoas 'lançadas' nos papéis do filme.",
            translation: [
              "Você deveria assistir essa série.",
              "Você não deveria ler spoilers.",
              "Qual gênero você recomenda?",
              "O elenco desse filme é incrível.",
              "Dá uma chance a essa série."
            ]
          }
        ],
        quiz: [
          { q: "I ___ this show is overrated. (opinião)", type: "fill", answer: "think" },
          { q: "This movie is ___ (good) than the original.", type: "fill", answer: "better" },
          { q: "This is the ___ (good) series I've watched.", type: "fill", answer: "best" },
          { q: "You ___ watch this show. (recomendação)", type: "fill", answer: "should" },
          { q: "Traduza: 'Na minha opinião, é chato.'", type: "translate", answer: "In my opinion, it's boring." },
          { q: "Traduza: 'Essa continuação é melhor que a original.'", type: "translate", answer: "This sequel is better than the original." },
          { q: "Traduza: 'Você deveria assistir essa série.'", type: "translate", answer: "You should watch this show." },
          { q: "Corrija: 'This is more better.'", type: "correct", answer: "This is better." },
          { q: "Corrija: 'You should to watch it.'", type: "correct", answer: "You should watch it." },
          { q: "Corrija: 'I am into of this show.'", type: "correct", answer: "I am into this show." }
        ]
      },
      {
        id: "pop_m3",
        title: "Cultura Pop Mais a Fundo",
        days: [
          {
            id: "pop_m3_d1",
            title: "Falando sobre música e shows",
            vocab: [
              ["concert", "show / concerto"],
              ["lyrics", "letra (de música)"],
              ["to release (an album)", "lançar (um álbum)"],
              ["fan", "fã"],
              ["setlist", "lista de músicas do show"],
              ["to go viral", "viralizar"]
            ],
            grammarTitle: "Can't wait to / to be dying to (expressando ansiedade)",
            grammarExplain: "'Can't wait to' e 'be dying to' expressam grande expectativa ou ansiedade para algo acontecer.",
            grammarExamples: ["I can't wait to see the concert!", "She's dying to hear the new album."],
            commonMistakes: [
              "❌ 'I can't wait see it' → ✅ 'I can't wait to see it'",
              "❌ 'I am dying to listen the album' → ✅ 'I am dying to listen to the album'",
              "❌ 'I can't wait for see you' → ✅ 'I can't wait to see you'"
            ],
            dialogue: [
              ["A", "Did you hear the new album just released?"],
              ["B", "Yes! I can't wait to see the concert next month."],
              ["A", "Are the lyrics as good as the last album?"],
              ["B", "Even better, it's already going viral online."]
            ],
            memoryTip: "'Fan' vem de 'fanatic' — pense em alguém 'fanático' por algo.",
            translation: [
              "Eu mal posso esperar para ver o show.",
              "Ela está morrendo de vontade de ouvir o álbum novo.",
              "Essa música viralizou rápido.",
              "A letra dessa música é linda.",
              "Ele lançou um álbum novo semana passada."
            ]
          },
          {
            id: "pop_m3_d2",
            title: "Falando sobre prêmios e produções (Voz Passiva)",
            vocab: [
              ["award", "prêmio"],
              ["to direct (a movie)", "dirigir (um filme)"],
              ["director", "diretor(a)"],
              ["to nominate", "indicar (para prêmio)"],
              ["to win (an award)", "ganhar (um prêmio)"],
              ["box office", "bilheteria"]
            ],
            grammarTitle: "Voz Passiva (Present/Past Simple)",
            grammarExplain: "Usamos a voz passiva quando o foco é a ação, não quem a faz: to be + particípio passado.",
            grammarExamples: ["This movie was directed by a famous director.", "The award is given every year."],
            commonMistakes: [
              "❌ 'This movie was direct by' → ✅ 'This movie was directed by'",
              "❌ 'The award gave every year' → ✅ 'The award is given every year'",
              "❌ 'She was nominate for an award' → ✅ 'She was nominated for an award'"
            ],
            dialogue: [
              ["A", "Who directed this movie?"],
              ["B", "It was directed by a famous director. It was nominated for three awards."],
              ["A", "Did it win anything?"],
              ["B", "Yes! It won best picture and broke box office records."]
            ],
            memoryTip: "'Nominate' soa como 'nomear' — pense em ser 'nomeado' pra concorrer a um prêmio.",
            translation: [
              "Esse filme foi dirigido por um diretor famoso.",
              "O filme foi indicado a três prêmios.",
              "Ele ganhou o prêmio de melhor filme.",
              "Essa série é assistida por milhões de pessoas.",
              "O prêmio é dado todo ano."
            ]
          },
          {
            id: "pop_m3_d3",
            title: "Discutindo tendências e cultura pop atual",
            vocab: [
              ["trend", "tendência"],
              ["to trend (verb)", "estar em alta / bombando"],
              ["influencer", "influenciador(a)"],
              ["hype", "expectativa / hype"],
              ["mainstream", "popular / mainstream"],
              ["fandom", "comunidade de fãs"]
            ],
            grammarTitle: "Present Perfect Continuous",
            grammarExplain: "Usamos have/has + been + verbo-ing para falar de ações que começaram no passado e continuam ou têm efeito no presente.",
            grammarExamples: ["Everyone has been talking about this trend.", "She has been following this fandom for years."],
            commonMistakes: [
              "❌ 'Everyone has talking about it' → ✅ 'Everyone has been talking about it'",
              "❌ 'She has follow this fandom' → ✅ 'She has been following this fandom'",
              "❌ 'I have been trend it' → ✅ 'I have been following the trend'"
            ],
            dialogue: [
              ["A", "Have you seen this trend everywhere?"],
              ["B", "Yes, everyone has been talking about it, it's all over social media."],
              ["A", "Are you into that fandom?"],
              ["B", "I've been following it for years, the hype is real!"]
            ],
            memoryTip: "'Hype' é uma palavra curta usada até em português — pense em 'expectativa alta' antes de algo acontecer.",
            translation: [
              "Todo mundo está falando sobre essa tendência.",
              "Ela segue esse fandom há anos.",
              "Esse influenciador está em alta agora.",
              "O hype por esse filme é enorme.",
              "Essa música virou mainstream rapidinho."
            ]
          }
        ],
        quiz: [
          { q: "I can't wait ___ (see) the concert!", type: "fill", answer: "to see" },
          { q: "This movie ___ (direct) by a famous director.", type: "fill", answer: "was directed" },
          { q: "She has ___ (be) nominated for an award.", type: "fill", answer: "been" },
          { q: "Everyone has ___ (talk) about this trend.", type: "fill", answer: "been talking" },
          { q: "Traduza: 'Eu mal posso esperar para ver o show.'", type: "translate", answer: "I can't wait to see the concert." },
          { q: "Traduza: 'Esse filme foi dirigido por um diretor famoso.'", type: "translate", answer: "This movie was directed by a famous director." },
          { q: "Traduza: 'Todo mundo está falando sobre essa tendência.'", type: "translate", answer: "Everyone has been talking about this trend." },
          { q: "Corrija: 'I can't wait see it.'", type: "correct", answer: "I can't wait to see it." },
          { q: "Corrija: 'This movie was direct by him.'", type: "correct", answer: "This movie was directed by him." },
          { q: "Corrija: 'Everyone has talking about it.'", type: "correct", answer: "Everyone has been talking about it." }
        ]
      }
    ]
  },

  tech: {
    name: "Tecnologia e Assuntos Gerais",
    icon: "💻",
    color: "#C97A2B",
    modules: [
      {
        id: "tech_m1",
        title: "Tecnologia no dia a dia",
        days: [
          {
            id: "tech_m1_d1",
            title: "Falando sobre apps e dispositivos",
            vocab: [
              ["device", "dispositivo"],
              ["app / application", "aplicativo"],
              ["to download", "baixar"],
              ["to update", "atualizar"],
              ["password", "senha"],
              ["screen", "tela"]
            ],
            grammarTitle: "Present Continuous",
            grammarExplain: "Usado para ações acontecendo agora: to be + verbo + -ing.",
            grammarExamples: ["I'm downloading a new app.", "She is updating her phone."],
            commonMistakes: [
              "❌ 'I downloading an app' → ✅ 'I am downloading an app'",
              "❌ 'She is update her phone' → ✅ 'She is updating her phone'",
              "❌ 'I am forgetting my password' (rotina) → ✅ 'I always forget my password'"
            ],
            dialogue: [
              ["A", "What are you doing?"],
              ["B", "I'm updating my phone. It's taking forever."],
              ["A", "Are you downloading the new app too?"],
              ["B", "Yes, but I forgot my password again!"]
            ],
            memoryTip: "'Password' = 'palavra' (word) + 'passe' (pass) — a palavra que te deixa passar.",
            translation: [
              "Eu estou baixando um aplicativo novo.",
              "Ela esqueceu a senha de novo.",
              "Meu celular está atualizando.",
              "Qual é a senha do wi-fi?",
              "A tela do meu dispositivo quebrou."
            ]
          }
        ],
        quiz: [
          { q: "I ___ (download) a new app right now.", type: "fill", answer: "am downloading" },
          { q: "She ___ (update) her phone at the moment.", type: "fill", answer: "is updating" },
          { q: "I forgot my ___. (senha)", type: "fill", answer: "password" },
          { q: "My phone's ___ is broken. (tela)", type: "fill", answer: "screen" },
          { q: "Traduza: 'Eu estou baixando um app.'", type: "translate", answer: "I am downloading an app." },
          { q: "Traduza: 'Qual é a senha?'", type: "translate", answer: "What is the password?" },
          { q: "Traduza: 'Meu celular está atualizando.'", type: "translate", answer: "My phone is updating." },
          { q: "Corrija: 'I downloading an app.'", type: "correct", answer: "I am downloading an app." },
          { q: "Corrija: 'She is update her phone.'", type: "correct", answer: "She is updating her phone." },
          { q: "Corrija: 'I am forget my password.'", type: "correct", answer: "I forget my password." }
        ]
      },
      {
        id: "tech_m2",
        title: "Resolvendo Problemas e Redes Sociais",
        days: [
          {
            id: "tech_m2_d1",
            title: "Problemas técnicos e soluções",
            vocab: [
              ["to crash", "travar (sistema)"],
              ["to restart", "reiniciar"],
              ["bug", "erro (no sistema)"],
              ["to fix", "consertar"],
              ["to charge (battery)", "carregar (bateria)"],
              ["battery life", "duração da bateria"]
            ],
            grammarTitle: "Should / have to (problemas e soluções)",
            grammarExplain: "'Should' para sugestões, 'have to' para obrigações/necessidades.",
            grammarExamples: ["You should restart your phone.", "I have to fix this bug today."],
            commonMistakes: [
              "❌ 'You should to restart' → ✅ 'You should restart'",
              "❌ 'I have fix it' → ✅ 'I have to fix it'",
              "❌ 'I has to charge my phone' → ✅ 'I have to charge my phone'"
            ],
            dialogue: [
              ["A", "My laptop keeps crashing. What should I do?"],
              ["B", "You should restart it. Maybe there's a bug."],
              ["A", "I already tried that. I have to fix it before tomorrow."],
              ["B", "Have you checked the battery life too?"]
            ],
            memoryTip: "'Crash' soa como um 'baque' — pense no som de algo quebrando quando o sistema trava.",
            translation: [
              "Meu computador está travando.",
              "Você deveria reiniciar o celular.",
              "Eu tenho que consertar esse erro.",
              "A bateria do meu celular acaba rápido.",
              "Eu preciso carregar meu celular."
            ]
          },
          {
            id: "tech_m2_d2",
            title: "Redes sociais e comunicação online",
            vocab: [
              ["to post", "postar"],
              ["to follow / follower", "seguir / seguidor"],
              ["to like / comment", "curtir / comentar"],
              ["to share", "compartilhar"],
              ["online", "on-line"],
              ["notification", "notificação"]
            ],
            grammarTitle: "Present Simple x Present Continuous",
            grammarExplain: "Present Simple para hábitos/rotinas; Present Continuous para ações acontecendo agora.",
            grammarExamples: ["I post photos every week. (hábito)", "I'm posting a photo right now. (agora)"],
            commonMistakes: [
              "❌ 'I am posting every day' (hábito) → ✅ 'I post every day'",
              "❌ 'I share now this' → ✅ 'I am sharing this now'",
              "❌ 'She following me' → ✅ 'She is following me' ou 'She follows me'"
            ],
            dialogue: [
              ["A", "Do you post on social media a lot?"],
              ["B", "Yes, I usually post every week. Right now I'm sharing some vacation photos."],
              ["A", "How many followers do you have?"],
              ["B", "A lot! I get so many notifications when I post."]
            ],
            memoryTip: "'Follower' tem 'follow' (seguir) — pense em alguém que 'segue seus passos' online.",
            translation: [
              "Eu posto fotos toda semana.",
              "Ela está compartilhando um vídeo agora.",
              "Eu tenho muitos seguidores.",
              "Eu recebo muitas notificações.",
              "Você curtiu minha postagem?"
            ]
          },
          {
            id: "tech_m2_d3",
            title: "Comprando e comparando aparelhos",
            vocab: [
              ["to upgrade", "atualizar (para versão melhor)"],
              ["storage", "armazenamento"],
              ["worth the money", "vale o dinheiro"],
              ["latest (model)", "mais recente (modelo)"],
              ["affordable", "acessível (preço)"],
              ["to compare", "comparar"]
            ],
            grammarTitle: "Comparativos com adjetivos de tecnologia",
            grammarExplain: "Usamos comparativos e superlativos para comparar dispositivos: faster, more expensive, the best, etc.",
            grammarExamples: ["This phone is faster than my old one.", "It's the most affordable option."],
            commonMistakes: [
              "❌ 'more faster' → ✅ 'faster'",
              "❌ 'the expensivest' → ✅ 'the most expensive'",
              "❌ 'This is worther' → ✅ 'This is worth the money'"
            ],
            dialogue: [
              ["A", "Are you going to upgrade your phone?"],
              ["B", "Yes, the latest model has more storage and it's faster."],
              ["A", "Is it affordable?"],
              ["B", "It's a bit expensive, but I think it's worth the money."]
            ],
            memoryTip: "'Affordable' tem 'afford' (conseguir pagar) — pense em algo que você 'consegue pagar'.",
            translation: [
              "Esse celular é mais rápido que o antigo.",
              "Vale a pena o dinheiro.",
              "Esse é o modelo mais recente.",
              "Esse preço é acessível.",
              "Eu vou comparar os dois modelos."
            ]
          }
        ],
        quiz: [
          { q: "You ___ restart your phone. (sugestão)", type: "fill", answer: "should" },
          { q: "I ___ (have) to fix this bug today.", type: "fill", answer: "have" },
          { q: "I ___ (post) photos every week. (hábito)", type: "fill", answer: "post" },
          { q: "This phone is ___ (fast) than my old one.", type: "fill", answer: "faster" },
          { q: "Traduza: 'Meu computador está travando.'", type: "translate", answer: "My computer is crashing." },
          { q: "Traduza: 'Eu tenho muitos seguidores.'", type: "translate", answer: "I have a lot of followers." },
          { q: "Traduza: 'Vale a pena o dinheiro.'", type: "translate", answer: "It's worth the money." },
          { q: "Corrija: 'You should to restart it.'", type: "correct", answer: "You should restart it." },
          { q: "Corrija: 'This phone is more faster.'", type: "correct", answer: "This phone is faster." },
          { q: "Corrija: 'I am posting every day.'", type: "correct", answer: "I post every day." }
        ]
      },
      {
        id: "tech_m3",
        title: "Segurança Digital e Inteligência Artificial",
        days: [
          {
            id: "tech_m3_d1",
            title: "Segurança digital e senhas",
            vocab: [
              ["to hack", "hackear"],
              ["data breach", "vazamento de dados"],
              ["two-factor authentication", "autenticação de dois fatores"],
              ["suspicious (link/email)", "suspeito (link/email)"],
              ["to protect", "proteger"],
              ["privacy", "privacidade"]
            ],
            grammarTitle: "If + Present Simple, might/could + verbo (possibilidade)",
            grammarExplain: "Usamos 'might' e 'could' depois de uma condição para falar de possibilidades (menos certas que 'will').",
            grammarExamples: ["If you click that link, you might get hacked.", "If your password is weak, someone could access your account."],
            commonMistakes: [
              "❌ 'If you click, you might to get hacked' → ✅ 'If you click, you might get hacked'",
              "❌ 'If you will click' → ✅ 'If you click'",
              "❌ 'Someone could accesses' → ✅ 'Someone could access'"
            ],
            dialogue: [
              ["A", "I got a suspicious email asking for my password."],
              ["B", "Don't click it! If you click that link, you might get hacked."],
              ["A", "Should I turn on two-factor authentication?"],
              ["B", "Definitely, it could protect your account from a data breach."]
            ],
            memoryTip: "'Suspicious' soa como 'suspeito' — quase igual em português.",
            translation: [
              "Se você clicar nesse link, pode ser hackeado.",
              "Ative a autenticação de dois fatores.",
              "Esse email parece suspeito.",
              "Isso pode proteger sua privacidade.",
              "Houve um vazamento de dados na empresa."
            ]
          },
          {
            id: "tech_m3_d2",
            title: "Falando sobre inteligência artificial",
            vocab: [
              ["artificial intelligence (AI)", "inteligência artificial (IA)"],
              ["to automate", "automatizar"],
              ["algorithm", "algoritmo"],
              ["chatbot", "chatbot"],
              ["to generate", "gerar"],
              ["machine learning", "aprendizado de máquina"]
            ],
            grammarTitle: "Will / might para previsões sobre o futuro",
            grammarExplain: "'Will' expressa previsões mais certas; 'might' expressa previsões possíveis, mas incertas.",
            grammarExamples: ["AI will change many jobs.", "This algorithm might automate the whole process."],
            commonMistakes: [
              "❌ 'AI will changes jobs' → ✅ 'AI will change jobs'",
              "❌ 'It might to automate' → ✅ 'It might automate'",
              "❌ 'AI going to change everything' (falta 'is') → ✅ 'AI is going to change everything'"
            ],
            dialogue: [
              ["A", "Do you think AI will change our jobs?"],
              ["B", "It might automate a lot of tasks, but I don't think it will replace everyone."],
              ["A", "This chatbot generates really good answers."],
              ["B", "Yes, the algorithm behind it uses machine learning."]
            ],
            memoryTip: "'Automate' tem 'auto' (sozinho) — pense em algo que funciona 'sozinho', sem ajuda.",
            translation: [
              "A inteligência artificial vai mudar muitos empregos.",
              "Esse algoritmo pode automatizar o processo.",
              "O chatbot gera respostas rápidas.",
              "Isso usa aprendizado de máquina.",
              "Pode ser que a IA substitua algumas tarefas."
            ]
          },
          {
            id: "tech_m3_d3",
            title: "Comprando e usando tecnologia de forma segura",
            vocab: [
              ["to back up (data)", "fazer backup (de dados)"],
              ["cloud storage", "armazenamento em nuvem"],
              ["antivirus", "antivírus"],
              ["to update software", "atualizar o software"],
              ["firewall", "firewall"],
              ["secure", "seguro"]
            ],
            grammarTitle: "Imperativos + should para boas práticas de segurança",
            grammarExplain: "Combinamos imperativos e 'should' para dar dicas e recomendações de segurança digital.",
            grammarExamples: ["Always back up your data.", "You should update your software regularly."],
            commonMistakes: [
              "❌ 'Always backing up' → ✅ 'Always back up'",
              "❌ 'You should updating' → ✅ 'You should update'",
              "❌ 'Use to a firewall' → ✅ 'Use a firewall'"
            ],
            dialogue: [
              ["A", "How do I keep my data secure?"],
              ["B", "Always back up your files to cloud storage, and use a good antivirus."],
              ["A", "Should I update my software often?"],
              ["B", "Yes, you should update it regularly and use a firewall too."]
            ],
            memoryTip: "'Secure' e 'security' têm a mesma raiz de 'segurança' — fácil de associar.",
            translation: [
              "Sempre faça backup dos seus dados.",
              "Use um armazenamento em nuvem seguro.",
              "Você deveria atualizar o software regularmente.",
              "Instale um bom antivírus.",
              "Use um firewall para proteção extra."
            ]
          }
        ],
        quiz: [
          { q: "If you click that link, you ___ (might/get) hacked.", type: "fill", answer: "might get" },
          { q: "AI ___ (will/change) many jobs.", type: "fill", answer: "will change" },
          { q: "Always ___ (back up) your data.", type: "fill", answer: "back up" },
          { q: "You ___ update your software regularly.", type: "fill", answer: "should" },
          { q: "Traduza: 'Se você clicar nesse link, pode ser hackeado.'", type: "translate", answer: "If you click that link, you might get hacked." },
          { q: "Traduza: 'A inteligência artificial vai mudar muitos empregos.'", type: "translate", answer: "AI will change many jobs." },
          { q: "Traduza: 'Sempre faça backup dos seus dados.'", type: "translate", answer: "Always back up your data." },
          { q: "Corrija: 'If you click, you might to get hacked.'", type: "correct", answer: "If you click, you might get hacked." },
          { q: "Corrija: 'AI will changes jobs.'", type: "correct", answer: "AI will change jobs." },
          { q: "Corrija: 'You should updating your software.'", type: "correct", answer: "You should update your software." }
        ]
      }
    ]
  },

  home_family: {
    name: "Casa e Família",
    icon: "🏠",
    color: "#7CB342",
    modules: [
      {
        id: "home_m1",
        title: "Vida em Família e Rotina Doméstica",
        days: [
          {
            id: "home_m1_d1",
            title: "Cômodos e móveis da casa",
            vocab: [
              ["living room", "sala de estar"],
              ["kitchen", "cozinha"],
              ["bedroom", "quarto"],
              ["backyard", "quintal"],
              ["furniture", "móveis"],
              ["appliance", "eletrodoméstico"]
            ],
            grammarTitle: "There is / There are",
            grammarExplain: "Usamos 'there is' para singular e 'there are' para plural, pra falar sobre o que existe em um lugar.",
            grammarExamples: ["There is a sofa in the living room.", "There are three bedrooms in this house."],
            commonMistakes: [
              "❌ 'There is three bedrooms' → ✅ 'There are three bedrooms'",
              "❌ 'There are a sofa' → ✅ 'There is a sofa'",
              "❌ 'Is there a sofa in the living room' (sem inversão em afirmativa) → ✅ 'There is a sofa'"
            ],
            dialogue: [
              ["A", "Is there a backyard in your new house?"],
              ["B", "Yes, there is! And there are three bedrooms too."],
              ["A", "Is there a lot of furniture already?"],
              ["B", "Not yet, we still need to buy some appliances."]
            ],
            memoryTip: "'Appliance' soa como 'aplicar' — pense em aparelhos que 'aplicamos' pra facilitar tarefas de casa.",
            translation: [
              "Tem um sofá na sala de estar.",
              "Tem três quartos nessa casa.",
              "Tem um quintal grande.",
              "Não tem muitos móveis ainda.",
              "Tem uma cozinha nova."
            ]
          },
          {
            id: "home_m1_d2",
            title: "Tarefas domésticas",
            vocab: [
              ["chore", "tarefa doméstica"],
              ["to do the dishes", "lavar a louça"],
              ["to do the laundry", "lavar roupa"],
              ["to vacuum", "aspirar"],
              ["to tidy up", "arrumar / organizar"],
              ["to take out the trash", "levar o lixo pra fora"]
            ],
            grammarTitle: "Present Simple (rotina e hábitos)",
            grammarExplain: "Usamos o Present Simple para falar de hábitos e rotinas, incluindo tarefas de casa que se repetem.",
            grammarExamples: ["I do the dishes every night.", "She vacuums the living room on Saturdays."],
            commonMistakes: [
              "❌ 'She vacuum the house' → ✅ 'She vacuums the house'",
              "❌ 'I doing the laundry every day' → ✅ 'I do the laundry every day'",
              "❌ 'He take out the trash' → ✅ 'He takes out the trash'"
            ],
            dialogue: [
              ["A", "Who does the dishes in your house?"],
              ["B", "I do the dishes, and my brother takes out the trash."],
              ["A", "Do you tidy up your room every day?"],
              ["B", "Yes, and I do the laundry on weekends."]
            ],
            memoryTip: "'Chore' rima com 'floor' — pense em tarefas que fazemos no 'chão' da casa, tipo aspirar.",
            translation: [
              "Eu lavo a louça toda noite.",
              "Ela aspira a sala aos sábados.",
              "Nós arrumamos o quarto juntos.",
              "Ele leva o lixo pra fora.",
              "Você lava roupa aos domingos?"
            ]
          },
          {
            id: "home_m1_d3",
            title: "Conversas em família",
            vocab: [
              ["sibling", "irmão/irmã"],
              ["relative", "parente"],
              ["to get along (with)", "se dar bem (com)"],
              ["to argue", "discutir / brigar"],
              ["household", "lar / residência"],
              ["quality time", "tempo de qualidade"]
            ],
            grammarTitle: "Present Simple - negativas e perguntas",
            grammarExplain: "Negativa: don't/doesn't + verbo. Pergunta: Do/Does + sujeito + verbo?",
            grammarExamples: ["I don't argue with my siblings often.", "Does your family spend quality time together?"],
            commonMistakes: [
              "❌ 'She don't get along' → ✅ 'She doesn't get along'",
              "❌ 'Does you have siblings?' → ✅ 'Do you have siblings?'",
              "❌ 'We not argue much' → ✅ 'We don't argue much'"
            ],
            dialogue: [
              ["A", "Do you get along with your siblings?"],
              ["B", "Yes, we rarely argue. We spend a lot of quality time together."],
              ["A", "Does your household have many relatives living close by?"],
              ["B", "Yes, most of my relatives live nearby."]
            ],
            memoryTip: "'Sibling' não tem gênero — serve pra irmão ou irmã, diferente de 'brother/sister'.",
            translation: [
              "Eu me dou bem com meus irmãos.",
              "Nós raramente brigamos.",
              "Minha família passa tempo de qualidade junta.",
              "Você tem parentes por perto?",
              "Esse é o meu lar."
            ]
          }
        ],
        quiz: [
          { q: "___ a sofa in the living room. (there is/are)", type: "fill", answer: "There is" },
          { q: "___ three bedrooms in the house.", type: "fill", answer: "There are" },
          { q: "She ___ (vacuum) the house every week.", type: "fill", answer: "vacuums" },
          { q: "___ you get along with your siblings? (pergunta)", type: "fill", answer: "Do" },
          { q: "Traduza: 'Tem um sofá na sala.'", type: "translate", answer: "There is a sofa in the living room." },
          { q: "Traduza: 'Eu lavo a louça toda noite.'", type: "translate", answer: "I do the dishes every night." },
          { q: "Traduza: 'Eu me dou bem com meus irmãos.'", type: "translate", answer: "I get along with my siblings." },
          { q: "Corrija: 'There is three bedrooms.'", type: "correct", answer: "There are three bedrooms." },
          { q: "Corrija: 'She vacuum the house.'", type: "correct", answer: "She vacuums the house." },
          { q: "Corrija: 'She don't get along with him.'", type: "correct", answer: "She doesn't get along with him." }
        ]
      }
    ]
  },

  health: {
    name: "Saúde e Bem-estar",
    icon: "🩺",
    color: "#E05263",
    modules: [
      {
        id: "health_m1",
        title: "Cuidando da Saúde",
        days: [
          {
            id: "health_m1_d1",
            title: "Sintomas e partes do corpo",
            vocab: [
              ["headache", "dor de cabeça"],
              ["fever", "febre"],
              ["sore throat", "dor de garganta"],
              ["stomachache", "dor de estômago"],
              ["symptom", "sintoma"],
              ["to feel sick", "se sentir mal"]
            ],
            grammarTitle: "Have / Has (sintomas)",
            grammarExplain: "Usamos 'have/has' para descrever sintomas: I/You/We/They have..., He/She/It has...",
            grammarExamples: ["I have a headache.", "She has a fever today."],
            commonMistakes: [
              "❌ 'I has a headache' → ✅ 'I have a headache'",
              "❌ 'She have a fever' → ✅ 'She has a fever'",
              "❌ 'I am having sore throat' (uso incomum) → ✅ 'I have a sore throat'"
            ],
            dialogue: [
              ["A", "What's wrong? You look sick."],
              ["B", "I have a headache and a sore throat."],
              ["A", "Do you have a fever too?"],
              ["B", "I think so, I feel really sick."]
            ],
            memoryTip: "'Fever' soa como 'febre' em português — quase igual, fácil de lembrar.",
            translation: [
              "Eu tenho dor de cabeça.",
              "Ela está com febre.",
              "Eu tenho dor de garganta.",
              "Quais são os sintomas?",
              "Eu me sinto mal hoje."
            ]
          },
          {
            id: "health_m1_d2",
            title: "Na farmácia e no médico",
            vocab: [
              ["pharmacy", "farmácia"],
              ["prescription", "receita médica"],
              ["appointment", "consulta"],
              ["painkiller", "analgésico"],
              ["to check up", "fazer check-up"],
              ["dose", "dose"]
            ],
            grammarTitle: "Should (conselhos de saúde)",
            grammarExplain: "Usamos 'should' para dar conselhos e recomendações sobre saúde.",
            grammarExamples: ["You should see a doctor.", "You should take this medicine twice a day."],
            commonMistakes: [
              "❌ 'You should to see a doctor' → ✅ 'You should see a doctor'",
              "❌ 'You should takes the medicine' → ✅ 'You should take the medicine'",
              "❌ 'You should going to the pharmacy' → ✅ 'You should go to the pharmacy'"
            ],
            dialogue: [
              ["A", "I need to make an appointment with the doctor."],
              ["B", "You should also go to the pharmacy for painkillers."],
              ["A", "How many times a day should I take the dose?"],
              ["B", "Usually twice a day, but check the prescription."]
            ],
            memoryTip: "'Prescription' tem 'script' (escrito) — pense na receita como algo 'escrito' pelo médico.",
            translation: [
              "Você deveria ir ao médico.",
              "Eu preciso marcar uma consulta.",
              "Vá à farmácia comprar analgésico.",
              "Qual é a dose certa?",
              "Eu tenho que fazer check-up."
            ]
          },
          {
            id: "health_m1_d3",
            title: "Hábitos saudáveis",
            vocab: [
              ["to exercise", "se exercitar"],
              ["healthy diet", "dieta saudável"],
              ["to sleep well", "dormir bem"],
              ["to stay hydrated", "se manter hidratado"],
              ["habit", "hábito"],
              ["stress", "estresse"]
            ],
            grammarTitle: "Present Simple (hábitos de saúde)",
            grammarExplain: "Usamos o Present Simple para falar de hábitos saudáveis que fazemos regularmente.",
            grammarExamples: ["I exercise three times a week.", "She sleeps eight hours every night."],
            commonMistakes: [
              "❌ 'I exercises every day' → ✅ 'I exercise every day'",
              "❌ 'She sleep eight hours' → ✅ 'She sleeps eight hours'",
              "❌ 'I drinking water all day' → ✅ 'I drink water all day'"
            ],
            dialogue: [
              ["A", "Do you have any healthy habits?"],
              ["B", "Yes, I exercise regularly and I stay hydrated."],
              ["A", "Do you sleep well?"],
              ["B", "Usually, but stress sometimes affects my sleep."]
            ],
            memoryTip: "'Hydrated' tem 'hydro' (água) — pense em qualquer coisa relacionada à água, como hidrante.",
            translation: [
              "Eu me exercito três vezes por semana.",
              "Ela dorme oito horas por noite.",
              "Eu me mantenho hidratado.",
              "Estresse afeta meu sono.",
              "Eu tenho uma dieta saudável."
            ]
          }
        ],
        quiz: [
          { q: "I ___ a headache. (sintoma)", type: "fill", answer: "have" },
          { q: "She ___ a fever today.", type: "fill", answer: "has" },
          { q: "You ___ see a doctor. (conselho)", type: "fill", answer: "should" },
          { q: "I ___ (exercise) three times a week.", type: "fill", answer: "exercise" },
          { q: "Traduza: 'Eu tenho dor de cabeça.'", type: "translate", answer: "I have a headache." },
          { q: "Traduza: 'Você deveria ir ao médico.'", type: "translate", answer: "You should see a doctor." },
          { q: "Traduza: 'Eu me exercito três vezes por semana.'", type: "translate", answer: "I exercise three times a week." },
          { q: "Corrija: 'I has a headache.'", type: "correct", answer: "I have a headache." },
          { q: "Corrija: 'You should to see a doctor.'", type: "correct", answer: "You should see a doctor." },
          { q: "Corrija: 'She sleep eight hours.'", type: "correct", answer: "She sleeps eight hours." }
        ]
      }
    ]
  },

  shopping_money: {
    name: "Compras e Finanças",
    icon: "🛍️",
    color: "#F2B134",
    modules: [
      {
        id: "shop_m1",
        title: "Compras e Dinheiro no Dia a Dia",
        days: [
          {
            id: "shop_m1_d1",
            title: "No mercado",
            vocab: [
              ["grocery store", "mercado"],
              ["cart", "carrinho de compras"],
              ["receipt", "nota fiscal / recibo"],
              ["some", "algum(a)/alguns(as)"],
              ["any", "algum(a)/nenhum(a)"],
              ["aisle", "corredor (de mercado)"]
            ],
            grammarTitle: "Some / Any (contáveis e incontáveis)",
            grammarExplain: "Usamos 'some' em afirmativas e 'any' em negativas e perguntas, com substantivos contáveis ou incontáveis.",
            grammarExamples: ["I need some milk.", "Do we have any bread left?"],
            commonMistakes: [
              "❌ 'I need any milk' (afirmativa) → ✅ 'I need some milk'",
              "❌ 'Do we have some bread?' (pergunta comum) → ✅ 'Do we have any bread?'",
              "❌ 'We don't have some eggs' → ✅ 'We don't have any eggs'"
            ],
            dialogue: [
              ["A", "Do we have any milk left?"],
              ["B", "No, but we have some eggs. Let's go to the grocery store."],
              ["A", "Can you grab a cart? I'll check the receipt after."],
              ["B", "Sure, the bread is in the next aisle."]
            ],
            memoryTip: "Pense em 'some' pra 'sim' (afirmativa) e 'any' pra dúvida/negação.",
            translation: [
              "Eu preciso de leite.",
              "Nós temos ovos?",
              "Não temos pão.",
              "Pegue um carrinho, por favor.",
              "O corredor de frutas fica ali."
            ]
          },
          {
            id: "shop_m1_d2",
            title: "Preços e pagamento",
            vocab: [
              ["price", "preço"],
              ["discount", "desconto"],
              ["cash", "dinheiro (espécie)"],
              ["credit card", "cartão de crédito"],
              ["change", "troco"],
              ["to pay for", "pagar por"]
            ],
            grammarTitle: "How much / How many",
            grammarExplain: "'How much' para incontáveis (dinheiro, quantidade); 'How many' para contáveis (itens).",
            grammarExamples: ["How much does this cost?", "How many items do you have?"],
            commonMistakes: [
              "❌ 'How many money do you have?' → ✅ 'How much money do you have?'",
              "❌ 'How much items?' → ✅ 'How many items?'",
              "❌ 'How much cost this?' → ✅ 'How much does this cost?'"
            ],
            dialogue: [
              ["A", "How much does this jacket cost?"],
              ["B", "It's on discount, so it's cheaper. Will you pay with cash or credit card?"],
              ["A", "Credit card, please. How many items am I buying total?"],
              ["B", "Three. Here's your change."]
            ],
            memoryTip: "'Change' tem dois sentidos: 'mudança' e 'troco' — pense no dinheiro que 'muda de mãos'.",
            translation: [
              "Quanto custa essa jaqueta?",
              "Quantos itens você está comprando?",
              "Eu vou pagar em dinheiro.",
              "Tem desconto nesse produto?",
              "Aqui está o seu troco."
            ]
          },
          {
            id: "shop_m1_d3",
            title: "Orçamento pessoal",
            vocab: [
              ["budget", "orçamento"],
              ["to save (money)", "economizar (dinheiro)"],
              ["to spend", "gastar"],
              ["expense", "despesa"],
              ["income", "renda"],
              ["to afford", "ter condições de pagar"]
            ],
            grammarTitle: "Present Simple (hábitos financeiros)",
            grammarExplain: "Usamos o Present Simple para falar de hábitos e rotinas com dinheiro.",
            grammarExamples: ["I save 10% of my income every month.", "She doesn't spend much on clothes."],
            commonMistakes: [
              "❌ 'I saves money every month' → ✅ 'I save money every month'",
              "❌ 'She don't spend much' → ✅ 'She doesn't spend much'",
              "❌ 'I can't afford to buying it' → ✅ 'I can't afford to buy it'"
            ],
            dialogue: [
              ["A", "Do you follow a budget every month?"],
              ["B", "Yes, I save part of my income and track my expenses."],
              ["A", "Can you afford that new phone?"],
              ["B", "Not right now, I don't want to spend too much this month."]
            ],
            memoryTip: "'Afford' soa como 'a fortuna' — pense em ter 'fortuna suficiente' pra comprar algo.",
            translation: [
              "Eu economizo parte da minha renda.",
              "Ela não gasta muito com roupas.",
              "Eu não posso pagar por isso agora.",
              "Qual é a sua despesa mensal?",
              "Eu sigo um orçamento todo mês."
            ]
          }
        ],
        quiz: [
          { q: "I need ___ milk. (afirmativa)", type: "fill", answer: "some" },
          { q: "Do we have ___ bread? (pergunta)", type: "fill", answer: "any" },
          { q: "___ does this cost? (dinheiro)", type: "fill", answer: "How much" },
          { q: "I ___ (save) part of my income every month.", type: "fill", answer: "save" },
          { q: "Traduza: 'Eu preciso de leite.'", type: "translate", answer: "I need some milk." },
          { q: "Traduza: 'Quanto custa essa jaqueta?'", type: "translate", answer: "How much does this jacket cost?" },
          { q: "Traduza: 'Eu economizo parte da minha renda.'", type: "translate", answer: "I save part of my income." },
          { q: "Corrija: 'I need any milk.'", type: "correct", answer: "I need some milk." },
          { q: "Corrija: 'How many money do you have?'", type: "correct", answer: "How much money do you have?" },
          { q: "Corrija: 'She don't spend much.'", type: "correct", answer: "She doesn't spend much." }
        ]
      }
    ]
  },

  school: {
    name: "Escola e Estudos",
    icon: "🎓",
    color: "#5E60CE",
    modules: [
      {
        id: "school_m1",
        title: "Vida Escolar",
        days: [
          {
            id: "school_m1_d1",
            title: "Matérias escolares",
            vocab: [
              ["subject", "matéria"],
              ["math", "matemática"],
              ["science", "ciências"],
              ["favorite subject", "matéria favorita"],
              ["teacher", "professor(a)"],
              ["classmate", "colega de classe"]
            ],
            grammarTitle: "Like / Love / Hate + verbo-ing",
            grammarExplain: "Depois de 'like', 'love' e 'hate', usamos o verbo com -ing.",
            grammarExamples: ["I love studying science.", "She hates doing homework on weekends."],
            commonMistakes: [
              "❌ 'I love study science' → ✅ 'I love studying science'",
              "❌ 'She hate to do homework' → ✅ 'She hates doing homework'",
              "❌ 'I like read books' → ✅ 'I like reading books'"
            ],
            dialogue: [
              ["A", "What's your favorite subject?"],
              ["B", "I love studying math. What about you?"],
              ["A", "I hate doing math homework, but I like science."],
              ["B", "My classmates feel the same way!"]
            ],
            memoryTip: "'Subject' também significa 'assunto' — pense na matéria como o 'assunto' que você estuda.",
            translation: [
              "Eu adoro estudar ciências.",
              "Ela odeia fazer dever de casa.",
              "Qual é sua matéria favorita?",
              "Meu professor é muito legal.",
              "Meus colegas de classe são divertidos."
            ]
          },
          {
            id: "school_m1_d2",
            title: "Rotina escolar",
            vocab: [
              ["timetable / schedule", "horário (de aulas)"],
              ["classroom", "sala de aula"],
              ["recess / break", "recreio / intervalo"],
              ["to attend class", "assistir aula / comparecer à aula"],
              ["lesson", "lição / aula"],
              ["grade", "nota / série"]
            ],
            grammarTitle: "Present Simple (rotina escolar)",
            grammarExplain: "Usamos o Present Simple pra falar da rotina da escola: horários, aulas, atividades regulares.",
            grammarExamples: ["Classes start at 8 AM.", "We have a break at 10 o'clock."],
            commonMistakes: [
              "❌ 'Classes starts at 8' → ✅ 'Classes start at 8'",
              "❌ 'She attend class every day' → ✅ 'She attends class every day'",
              "❌ 'We has a break' → ✅ 'We have a break'"
            ],
            dialogue: [
              ["A", "What time do your classes start?"],
              ["B", "They start at 8 AM. We have recess at 10."],
              ["A", "Do you attend every class?"],
              ["B", "Yes, and I always check my schedule the night before."]
            ],
            memoryTip: "'Recess' lembra 'recesso' — uma pausa nas aulas, igual em português.",
            translation: [
              "As aulas começam às 8 da manhã.",
              "Nós temos recreio às 10 horas.",
              "Eu assisto todas as aulas.",
              "Qual é a sua nota nessa matéria?",
              "Essa sala de aula é grande."
            ]
          },
          {
            id: "school_m1_d3",
            title: "Provas e deveres de casa",
            vocab: [
              ["exam / test", "prova"],
              ["homework", "dever de casa"],
              ["to study for", "estudar para"],
              ["deadline", "prazo de entrega"],
              ["to pass / to fail", "passar / reprovar"],
              ["to submit", "entregar (trabalho)"]
            ],
            grammarTitle: "Have to / Must (obrigações escolares)",
            grammarExplain: "Usamos 'have to' e 'must' para falar de obrigações na escola, como estudar e entregar trabalhos.",
            grammarExamples: ["I have to study for the exam.", "You must submit the homework by Friday."],
            commonMistakes: [
              "❌ 'I have study for the exam' → ✅ 'I have to study for the exam'",
              "❌ 'You must to submit it' → ✅ 'You must submit it'",
              "❌ 'She has to studies' → ✅ 'She has to study'"
            ],
            dialogue: [
              ["A", "Do you have to study for the exam tonight?"],
              ["B", "Yes, and I also must submit my homework before the deadline."],
              ["A", "What happens if you fail?"],
              ["B", "I'll have to retake the exam next month."]
            ],
            memoryTip: "'Deadline' = 'dead' (morto) + 'line' (linha) — pense numa 'linha' que você não pode cruzar depois.",
            translation: [
              "Eu tenho que estudar para a prova.",
              "Você deve entregar o dever até sexta.",
              "Qual é o prazo de entrega?",
              "Eu passei na prova!",
              "Ela reprovou em matemática."
            ]
          }
        ],
        quiz: [
          { q: "I love ___ (study) science.", type: "fill", answer: "studying" },
          { q: "Classes ___ (start) at 8 AM.", type: "fill", answer: "start" },
          { q: "I ___ to study for the exam. (obrigação)", type: "fill", answer: "have" },
          { q: "You ___ submit the homework by Friday.", type: "fill", answer: "must" },
          { q: "Traduza: 'Eu adoro estudar ciências.'", type: "translate", answer: "I love studying science." },
          { q: "Traduza: 'As aulas começam às 8 da manhã.'", type: "translate", answer: "Classes start at 8 AM." },
          { q: "Traduza: 'Eu tenho que estudar para a prova.'", type: "translate", answer: "I have to study for the exam." },
          { q: "Corrija: 'I love study science.'", type: "correct", answer: "I love studying science." },
          { q: "Corrija: 'Classes starts at 8.'", type: "correct", answer: "Classes start at 8." },
          { q: "Corrija: 'You must to submit it.'", type: "correct", answer: "You must submit it." }
        ]
      }
    ]
  },

  gaming: {
    name: "Games e Internet",
    icon: "🎮",
    color: "#FF6F59",
    modules: [
      {
        id: "game_m1",
        title: "Jogando Online",
        days: [
          {
            id: "game_m1_d1",
            title: "Vocabulário de jogos",
            vocab: [
              ["level", "fase / nível"],
              ["controller", "controle"],
              ["to score points", "marcar pontos"],
              ["multiplayer", "multijogador"],
              ["opponent", "adversário"],
              ["to win / to lose", "vencer / perder"]
            ],
            grammarTitle: "Present Continuous (ações no jogo)",
            grammarExplain: "Usamos o Present Continuous (to be + verbo-ing) para descrever ações acontecendo agora, como durante um jogo.",
            grammarExamples: ["I'm playing a multiplayer game.", "She's scoring a lot of points right now."],
            commonMistakes: [
              "❌ 'I playing a game' (sem 'am') → ✅ 'I'm playing a game'",
              "❌ 'She scoring points' → ✅ 'She's scoring points'",
              "❌ 'I am play now' → ✅ 'I am playing now'"
            ],
            dialogue: [
              ["A", "What are you playing right now?"],
              ["B", "I'm playing a multiplayer game against a tough opponent."],
              ["A", "Are you winning?"],
              ["B", "Yes, I'm scoring a lot of points this level!"]
            ],
            memoryTip: "'Opponent' tem 'oppose' (se opor) — pense em alguém que se 'opõe' a você no jogo.",
            translation: [
              "Eu estou jogando um jogo multijogador.",
              "Ela está marcando muitos pontos.",
              "Eu estou ganhando essa fase.",
              "Meu adversário é difícil.",
              "Onde está o meu controle?"
            ]
          },
          {
            id: "game_m1_d2",
            title: "Jogando com amigos",
            vocab: [
              ["teammate", "companheiro de equipe"],
              ["to team up", "formar equipe"],
              ["chat", "bate-papo / chat"],
              ["headset", "fone de ouvido com microfone"],
              ["to invite", "convidar"],
              ["squad", "esquadrão / grupo de jogadores"]
            ],
            grammarTitle: "Can (habilidades no jogo)",
            grammarExplain: "Usamos 'can' para falar sobre habilidades ou capacidades dentro do jogo.",
            grammarExamples: ["I can beat this level easily.", "She can't join the squad right now."],
            commonMistakes: [
              "❌ 'I can to beat this level' → ✅ 'I can beat this level'",
              "❌ 'She cannot to join' → ✅ 'She can't join'",
              "❌ 'I can beats it' → ✅ 'I can beat it'"
            ],
            dialogue: [
              ["A", "Can you team up with me for this match?"],
              ["B", "Sure! Invite me and put on your headset."],
              ["A", "Can our squad beat this level together?"],
              ["B", "Definitely, let's chat and plan our strategy."]
            ],
            memoryTip: "'Squad' lembra 'esquadrão' em português — mesmo som e sentido parecido.",
            translation: [
              "Você pode formar equipe comigo?",
              "Eu posso vencer essa fase facilmente.",
              "Convide seus companheiros de equipe.",
              "Ela não pode entrar agora.",
              "Vamos conversar no chat."
            ]
          },
          {
            id: "game_m1_d3",
            title: "Regras e estratégias",
            vocab: [
              ["rule", "regra"],
              ["strategy", "estratégia"],
              ["to respawn", "renascer (no jogo)"],
              ["cheat", "trapaça"],
              ["to unlock", "desbloquear"],
              ["achievement", "conquista (no jogo)"]
            ],
            grammarTitle: "Imperativos (instruções de jogo)",
            grammarExplain: "Usamos o verbo no infinitivo sem 'to' para dar instruções e explicar regras de jogos.",
            grammarExamples: ["Follow the rules to unlock new levels.", "Don't use cheats in this game."],
            commonMistakes: [
              "❌ 'To follow the rules' (como instrução direta) → ✅ 'Follow the rules'",
              "❌ 'Not use cheats' → ✅ 'Don't use cheats'",
              "❌ 'You unlock the level' (como comando) → ✅ 'Unlock the level'"
            ],
            dialogue: [
              ["A", "What's the best strategy for this level?"],
              ["B", "Follow the rules and don't use cheats — unlock achievements naturally."],
              ["A", "What happens if I lose all my lives?"],
              ["B", "You respawn at the last checkpoint."]
            ],
            memoryTip: "'Respawn' = 're' (de novo) + 'spawn' (nascer) — pense em 'nascer de novo' no jogo.",
            translation: [
              "Siga as regras do jogo.",
              "Não use trapaças.",
              "Desbloqueie novas fases.",
              "Qual é a melhor estratégia?",
              "Eu renasci no último checkpoint."
            ]
          }
        ],
        quiz: [
          { q: "I ___ (play) a multiplayer game right now.", type: "fill", answer: "am playing" },
          { q: "She ___ (score) a lot of points right now.", type: "fill", answer: "is scoring" },
          { q: "I ___ beat this level easily. (habilidade)", type: "fill", answer: "can" },
          { q: "___ the rules to unlock new levels. (instrução)", type: "fill", answer: "Follow" },
          { q: "Traduza: 'Eu estou jogando um jogo multijogador.'", type: "translate", answer: "I am playing a multiplayer game." },
          { q: "Traduza: 'Eu posso vencer essa fase facilmente.'", type: "translate", answer: "I can beat this level easily." },
          { q: "Traduza: 'Siga as regras do jogo.'", type: "translate", answer: "Follow the rules of the game." },
          { q: "Corrija: 'I playing a game.'", type: "correct", answer: "I am playing a game." },
          { q: "Corrija: 'I can to beat this level.'", type: "correct", answer: "I can beat this level." },
          { q: "Corrija: 'Not use cheats.'", type: "correct", answer: "Don't use cheats." }
        ]
      }
    ]
  },

  sports: {
    name: "Esportes",
    icon: "⚽",
    color: "#06A77D",
    modules: [
      {
        id: "sports_m1",
        title: "Esportes e Competições",
        days: [
          {
            id: "sports_m1_d1",
            title: "Esportes e equipamentos",
            vocab: [
              ["team", "time"],
              ["ball", "bola"],
              ["field / court", "campo / quadra"],
              ["to play (a sport)", "jogar (um esporte)"],
              ["referee", "árbitro"],
              ["uniform", "uniforme"]
            ],
            grammarTitle: "Like / Play + esporte",
            grammarExplain: "Usamos 'play' antes de esportes com bola, e 'like' para expressar gosto pelo esporte.",
            grammarExamples: ["I play soccer every weekend.", "She likes basketball a lot."],
            commonMistakes: [
              "❌ 'I do soccer' → ✅ 'I play soccer'",
              "❌ 'She like basketball' → ✅ 'She likes basketball'",
              "❌ 'I play to soccer' → ✅ 'I play soccer'"
            ],
            dialogue: [
              ["A", "Do you play any sports?"],
              ["B", "Yes, I play soccer every weekend with my team."],
              ["A", "Do you like basketball too?"],
              ["B", "I do, but I prefer playing on the field, not the court."]
            ],
            memoryTip: "'Referee' soa parecido com 'árbitro' na função — pense na 're' de 'regras' que ele aplica.",
            translation: [
              "Eu jogo futebol todo fim de semana.",
              "Ela gosta muito de basquete.",
              "Onde está a bola?",
              "O árbitro apitou a falta.",
              "Esse é o uniforme do time."
            ]
          },
          {
            id: "sports_m1_d2",
            title: "Assistindo e torcendo",
            vocab: [
              ["fan", "torcedor(a)"],
              ["to cheer for", "torcer por"],
              ["match / game", "partida / jogo"],
              ["score", "placar"],
              ["stadium", "estádio"],
              ["live (broadcast)", "ao vivo"]
            ],
            grammarTitle: "Present Continuous (jogo acontecendo agora)",
            grammarExplain: "Usamos Present Continuous para narrar ações que estão acontecendo durante uma partida ao vivo.",
            grammarExamples: ["The team is winning right now.", "We're watching the match live."],
            commonMistakes: [
              "❌ 'The team winning now' → ✅ 'The team is winning now'",
              "❌ 'We watching live' → ✅ 'We are watching live'",
              "❌ 'She cheering for her team' → ✅ 'She is cheering for her team'"
            ],
            dialogue: [
              ["A", "Are you watching the match live?"],
              ["B", "Yes! We're at the stadium, cheering for our team."],
              ["A", "What's the score right now?"],
              ["B", "We're winning 2 to 1!"]
            ],
            memoryTip: "'Cheer' soa como um grito de torcida — pense no som de 'viva!' animado.",
            translation: [
              "O time está ganhando agora.",
              "Nós estamos assistindo ao vivo.",
              "Qual é o placar?",
              "Ela está torcendo pelo time.",
              "Nós estamos no estádio."
            ]
          },
          {
            id: "sports_m1_d3",
            title: "Regras e resultados",
            vocab: [
              ["rule", "regra"],
              ["foul", "falta"],
              ["to win / to lose / to tie", "vencer / perder / empatar"],
              ["championship", "campeonato"],
              ["injury", "lesão"],
              ["training", "treino"]
            ],
            grammarTitle: "Past Simple (resultados de jogos)",
            grammarExplain: "Usamos o Past Simple pra falar de resultados de partidas que já aconteceram.",
            grammarExamples: ["We won the championship last year.", "They tied the match 1 to 1."],
            commonMistakes: [
              "❌ 'We win the championship yesterday' → ✅ 'We won the championship yesterday'",
              "❌ 'They tie the game' → ✅ 'They tied the game'",
              "❌ 'She getted injured' → ✅ 'She got injured'"
            ],
            dialogue: [
              ["A", "Did your team win the championship?"],
              ["B", "Yes! We won 3 to 0, but one player got injured."],
              ["A", "Was there a foul in the game?"],
              ["B", "Yes, and the referee stopped training right after."]
            ],
            memoryTip: "'Injury' tem 'injure' (machucar) — pense em algo que 'machuca' durante o jogo.",
            translation: [
              "Nós ganhamos o campeonato ano passado.",
              "Eles empataram o jogo.",
              "Ela se machucou durante o treino.",
              "Teve uma falta nesse lance.",
              "Nós perdemos a partida."
            ]
          }
        ],
        quiz: [
          { q: "I ___ (play) soccer every weekend.", type: "fill", answer: "play" },
          { q: "The team ___ (win) right now.", type: "fill", answer: "is winning" },
          { q: "We ___ (win) the championship last year.", type: "fill", answer: "won" },
          { q: "They ___ (tie) the match 1 to 1.", type: "fill", answer: "tied" },
          { q: "Traduza: 'Eu jogo futebol todo fim de semana.'", type: "translate", answer: "I play soccer every weekend." },
          { q: "Traduza: 'O time está ganhando agora.'", type: "translate", answer: "The team is winning right now." },
          { q: "Traduza: 'Nós ganhamos o campeonato ano passado.'", type: "translate", answer: "We won the championship last year." },
          { q: "Corrija: 'I do soccer.'", type: "correct", answer: "I play soccer." },
          { q: "Corrija: 'The team winning now.'", type: "correct", answer: "The team is winning now." },
          { q: "Corrija: 'We win the championship yesterday.'", type: "correct", answer: "We won the championship yesterday." }
        ]
      }
    ]
  },

  cooking: {
    name: "Culinária e Receitas",
    icon: "🍳",
    color: "#D62839",
    modules: [
      {
        id: "cook_m1",
        title: "Cozinhando em Casa",
        days: [
          {
            id: "cook_m1_d1",
            title: "Ingredientes e medidas",
            vocab: [
              ["ingredient", "ingrediente"],
              ["cup", "xícara"],
              ["tablespoon", "colher de sopa"],
              ["teaspoon", "colher de chá"],
              ["a pinch of", "uma pitada de"],
              ["recipe", "receita"]
            ],
            grammarTitle: "Some / Any com ingredientes",
            grammarExplain: "Usamos 'some' em afirmativas e 'any' em negativas/perguntas para falar de ingredientes.",
            grammarExamples: ["I need some flour for this recipe.", "We don't have any sugar left."],
            commonMistakes: [
              "❌ 'I need any flour' (afirmativa) → ✅ 'I need some flour'",
              "❌ 'Do you have some salt?' (pergunta comum) → ✅ 'Do you have any salt?'",
              "❌ 'Add a pinch salt' → ✅ 'Add a pinch of salt'"
            ],
            dialogue: [
              ["A", "Do we have any flour for this recipe?"],
              ["B", "Yes, and I also have some sugar. Do we need a pinch of salt?"],
              ["A", "Just one teaspoon. And two tablespoons of oil."],
              ["B", "Got it, let's start cooking!"]
            ],
            memoryTip: "'Pinch' também significa 'beliscar' — pense num 'beliscão' de sal entre os dedos.",
            translation: [
              "Eu preciso de farinha para essa receita.",
              "Nós não temos açúcar.",
              "Adicione uma pitada de sal.",
              "Use duas colheres de sopa de óleo.",
              "Qual é o próximo ingrediente?"
            ]
          },
          {
            id: "cook_m1_d2",
            title: "Modo de preparo",
            vocab: [
              ["to mix", "misturar"],
              ["to chop", "picar"],
              ["to bake", "assar"],
              ["to boil", "ferver"],
              ["to preheat (the oven)", "pré-aquecer (o forno)"],
              ["to stir", "mexer"]
            ],
            grammarTitle: "Imperativos (instruções de receita)",
            grammarExplain: "Receitas usam o verbo no infinitivo sem 'to' para dar instruções, passo a passo.",
            grammarExamples: ["Preheat the oven to 180°C.", "Chop the vegetables and mix them well."],
            commonMistakes: [
              "❌ 'To preheat the oven' (como instrução) → ✅ 'Preheat the oven'",
              "❌ 'You chop the vegetables' (como comando) → ✅ 'Chop the vegetables'",
              "❌ 'Stirring the mixture' (como comando) → ✅ 'Stir the mixture'"
            ],
            dialogue: [
              ["A", "What's the first step in this recipe?"],
              ["B", "Preheat the oven, then chop the vegetables."],
              ["A", "Should I boil the water first?"],
              ["B", "Yes, then mix everything and stir well."]
            ],
            memoryTip: "'Preheat' = 'pre' (antes) + 'heat' (esquentar) — 'esquentar antes' de usar o forno.",
            translation: [
              "Pré-aqueça o forno.",
              "Pique os vegetais.",
              "Misture bem os ingredientes.",
              "Ferva a água.",
              "Mexa a massa devagar."
            ]
          },
          {
            id: "cook_m1_d3",
            title: "Descrevendo pratos",
            vocab: [
              ["delicious", "delicioso"],
              ["tasty", "saboroso"],
              ["spicy", "picante"],
              ["sweet", "doce"],
              ["homemade", "caseiro"],
              ["to taste like", "ter gosto de"]
            ],
            grammarTitle: "Adjetivos para descrever comida",
            grammarExplain: "Usamos adjetivos depois do verbo 'to be' ou 'to taste' pra descrever sabores e características de pratos.",
            grammarExamples: ["This soup is delicious.", "It tastes a bit spicy."],
            commonMistakes: [
              "❌ 'This is delicious soup' (ordem errada) → ✅ 'This soup is delicious'",
              "❌ 'It taste spicy' → ✅ 'It tastes spicy'",
              "❌ 'This taste like sweet' → ✅ 'This tastes sweet'"
            ],
            dialogue: [
              ["A", "How's the homemade soup?"],
              ["B", "It's delicious! A bit spicy, but really tasty."],
              ["A", "Is the dessert sweet?"],
              ["B", "Yes, and it tastes like vanilla."]
            ],
            memoryTip: "'Homemade' = 'home' (casa) + 'made' (feito) — algo 'feito em casa'.",
            translation: [
              "Essa sopa está deliciosa.",
              "É um pouco picante.",
              "A comida caseira é a melhor.",
              "Isso tem gosto de baunilha.",
              "A sobremesa é bem doce."
            ]
          }
        ],
        quiz: [
          { q: "I need ___ flour. (afirmativa)", type: "fill", answer: "some" },
          { q: "Do you have ___ salt? (pergunta)", type: "fill", answer: "any" },
          { q: "___ the oven to 180°C. (instrução)", type: "fill", answer: "Preheat" },
          { q: "This soup ___ (be) delicious.", type: "fill", answer: "is" },
          { q: "Traduza: 'Eu preciso de farinha para essa receita.'", type: "translate", answer: "I need some flour for this recipe." },
          { q: "Traduza: 'Pré-aqueça o forno.'", type: "translate", answer: "Preheat the oven." },
          { q: "Traduza: 'Essa sopa está deliciosa.'", type: "translate", answer: "This soup is delicious." },
          { q: "Corrija: 'I need any flour.'", type: "correct", answer: "I need some flour." },
          { q: "Corrija: 'To preheat the oven.' (como instrução)", type: "correct", answer: "Preheat the oven." },
          { q: "Corrija: 'It taste spicy.'", type: "correct", answer: "It tastes spicy." }
        ]
      }
    ]
  },

  environment: {
    name: "Meio Ambiente e Sustentabilidade",
    icon: "🌱",
    color: "#2D6A4F",
    modules: [
      {
        id: "env_m1",
        title: "Cuidando do Planeta",
        days: [
          {
            id: "env_m1_d1",
            title: "Vocabulário ambiental",
            vocab: [
              ["environment", "meio ambiente"],
              ["pollution", "poluição"],
              ["climate change", "mudança climática"],
              ["to recycle", "reciclar"],
              ["waste", "lixo / resíduo"],
              ["renewable energy", "energia renovável"]
            ],
            grammarTitle: "Present Simple (fatos sobre o planeta)",
            grammarExplain: "Usamos o Present Simple para descrever fatos gerais e verdades sobre o meio ambiente.",
            grammarExamples: ["Plastic takes hundreds of years to decompose.", "Pollution affects the whole planet."],
            commonMistakes: [
              "❌ 'Plastic take years' → ✅ 'Plastic takes years'",
              "❌ 'Pollution affect the planet' → ✅ 'Pollution affects the planet'",
              "❌ 'We recycling every week' → ✅ 'We recycle every week'"
            ],
            dialogue: [
              ["A", "Why does pollution affect the whole planet?"],
              ["B", "Because climate change connects everything, even in different countries."],
              ["A", "Do you recycle at home?"],
              ["B", "Yes, and we try to use renewable energy too."]
            ],
            memoryTip: "'Renewable' tem 'new' (novo) — pense em energia que se 'renova' e nunca acaba.",
            translation: [
              "O plástico demora anos para decompor.",
              "A poluição afeta o planeta todo.",
              "Nós reciclamos em casa.",
              "A mudança climática é real.",
              "Energia renovável é o futuro."
            ]
          },
          {
            id: "env_m1_d2",
            title: "Ações sustentáveis no dia a dia",
            vocab: [
              ["to reduce", "reduzir"],
              ["to reuse", "reutilizar"],
              ["plastic bag", "sacola plástica"],
              ["to save water/energy", "economizar água/energia"],
              ["eco-friendly", "ecológico / sustentável"],
              ["single-use", "de uso único / descartável"]
            ],
            grammarTitle: "Should / shouldn't (ações sustentáveis)",
            grammarExplain: "Usamos 'should' e 'shouldn't' para recomendar ou desaconselhar ações relacionadas à sustentabilidade.",
            grammarExamples: ["You should reduce single-use plastic.", "We shouldn't waste water."],
            commonMistakes: [
              "❌ 'You should to reduce plastic' → ✅ 'You should reduce plastic'",
              "❌ 'We not should waste water' → ✅ 'We shouldn't waste water'",
              "❌ 'She should reuses the bag' → ✅ 'She should reuse the bag'"
            ],
            dialogue: [
              ["A", "What can I do to be more eco-friendly?"],
              ["B", "You should reduce single-use plastic and reuse bags."],
              ["A", "Should I save water too?"],
              ["B", "Definitely, and turn off lights to save energy."]
            ],
            memoryTip: "'Eco-friendly' = 'eco' (ecológico) + 'friendly' (amigável) — algo 'amigo do meio ambiente'.",
            translation: [
              "Você deveria reduzir o uso de plástico.",
              "Nós não deveríamos desperdiçar água.",
              "Reutilize as sacolas plásticas.",
              "Economize energia em casa.",
              "Isso é ecológico."
            ]
          },
          {
            id: "env_m1_d3",
            title: "Debatendo soluções",
            vocab: [
              ["solution", "solução"],
              ["to protect", "proteger"],
              ["endangered species", "espécie em extinção"],
              ["deforestation", "desmatamento"],
              ["to reforest", "reflorestar"],
              ["awareness", "conscientização"]
            ],
            grammarTitle: "First Conditional (soluções ambientais)",
            grammarExplain: "Usamos If + present simple, will + verbo para falar de soluções reais e possíveis para o meio ambiente.",
            grammarExamples: ["If we recycle more, we will reduce waste.", "If we don't act now, species will disappear."],
            commonMistakes: [
              "❌ 'If we will recycle more' → ✅ 'If we recycle more'",
              "❌ 'If we don't act, species disappear' (sem will) → ✅ 'If we don't act, species will disappear'",
              "❌ 'If we reforest, we helping' → ✅ 'If we reforest, we will help'"
            ],
            dialogue: [
              ["A", "What's the solution to deforestation?"],
              ["B", "If we reforest more areas, we will protect endangered species."],
              ["A", "Will awareness campaigns help too?"],
              ["B", "Yes, if more people know about it, they will act."]
            ],
            memoryTip: "'Endangered' tem 'danger' (perigo) — pense em espécies 'em perigo'.",
            translation: [
              "Se nós reciclarmos mais, reduziremos o lixo.",
              "Se não agirmos agora, espécies vão desaparecer.",
              "Nós precisamos proteger espécies em extinção.",
              "O desmatamento é um grande problema.",
              "A conscientização ajuda muito."
            ]
          }
        ],
        quiz: [
          { q: "Plastic ___ (take) years to decompose.", type: "fill", answer: "takes" },
          { q: "You ___ reduce single-use plastic. (recomendação)", type: "fill", answer: "should" },
          { q: "If we recycle more, we ___ (reduce) waste.", type: "fill", answer: "will reduce" },
          { q: "We ___ (not/waste) water. (recomendação negativa)", type: "fill", answer: "shouldn't waste" },
          { q: "Traduza: 'O plástico demora anos para decompor.'", type: "translate", answer: "Plastic takes years to decompose." },
          { q: "Traduza: 'Você deveria reduzir o uso de plástico.'", type: "translate", answer: "You should reduce single-use plastic." },
          { q: "Traduza: 'Se nós reciclarmos mais, reduziremos o lixo.'", type: "translate", answer: "If we recycle more, we will reduce waste." },
          { q: "Corrija: 'Plastic take years.'", type: "correct", answer: "Plastic takes years." },
          { q: "Corrija: 'You should to reduce plastic.'", type: "correct", answer: "You should reduce plastic." },
          { q: "Corrija: 'If we will recycle more.'", type: "correct", answer: "If we recycle more." }
        ]
      }
    ]
  },

  news: {
    name: "Notícias e Atualidades",
    icon: "📰",
    color: "#495867",
    modules: [
      {
        id: "news_m1",
        title: "Acompanhando as Notícias",
        days: [
          {
            id: "news_m1_d1",
            title: "Lendo manchetes",
            vocab: [
              ["headline", "manchete"],
              ["breaking news", "notícia de última hora"],
              ["source", "fonte"],
              ["reporter", "repórter"],
              ["to report", "reportar / noticiar"],
              ["article", "matéria / artigo"]
            ],
            grammarTitle: "Present Simple (fatos e manchetes)",
            grammarExplain: "Manchetes de notícias costumam usar o Present Simple mesmo para eventos recentes, para dar sensação de urgência.",
            grammarExamples: ["Company launches new product.", "The reporter covers the story live."],
            commonMistakes: [
              "❌ 'Company launch new product' → ✅ 'Company launches new product'",
              "❌ 'The reporter cover the story' → ✅ 'The reporter covers the story'",
              "❌ 'This article talk about...' → ✅ 'This article talks about...'"
            ],
            dialogue: [
              ["A", "Did you see the breaking news?"],
              ["B", "Yes, a reporter covers the story live right now."],
              ["A", "What's the source of that article?"],
              ["B", "It's from a reliable news source."]
            ],
            memoryTip: "'Breaking news' = notícia que está 'quebrando' a programação normal — algo urgente.",
            translation: [
              "Você viu a manchete de hoje?",
              "Essa é uma notícia de última hora.",
              "Qual é a fonte dessa matéria?",
              "O repórter está cobrindo a história.",
              "Esse artigo fala sobre economia."
            ]
          },
          {
            id: "news_m1_d2",
            title: "Dando opinião sobre notícias",
            vocab: [
              ["in my opinion", "na minha opinião"],
              ["to agree / disagree", "concordar / discordar"],
              ["issue", "questão / problema"],
              ["fake news", "notícia falsa"],
              ["reliable", "confiável"],
              ["biased", "tendencioso"]
            ],
            grammarTitle: "I think / I believe (opiniões sobre notícias)",
            grammarExplain: "Usamos 'I think' e 'I believe' para dar opiniões sobre notícias e questões atuais.",
            grammarExamples: ["I think this source is reliable.", "I believe that article is biased."],
            commonMistakes: [
              "❌ 'I think that is fake news it' → ✅ 'I think it is fake news'",
              "❌ 'I no agree with this' → ✅ 'I don't agree with this'",
              "❌ 'This is very bias' → ✅ 'This is very biased'"
            ],
            dialogue: [
              ["A", "Do you think this news source is reliable?"],
              ["B", "I believe it's a bit biased, honestly."],
              ["A", "I disagree, I think it's a real issue they're covering well."],
              ["B", "Maybe, but I always check if it's fake news first."]
            ],
            memoryTip: "'Reliable' tem 'rely' (confiar) — pense em algo em que você pode 'confiar'.",
            translation: [
              "Na minha opinião, essa fonte é confiável.",
              "Eu acredito que essa matéria é tendenciosa.",
              "Eu concordo com essa questão.",
              "Isso parece notícia falsa.",
              "Eu discordo dessa opinião."
            ]
          },
          {
            id: "news_m1_d3",
            title: "Discutindo diferentes pontos de vista",
            vocab: [
              ["point of view", "ponto de vista"],
              ["perspective", "perspectiva"],
              ["debate", "debate"],
              ["evidence", "evidência"],
              ["controversial", "controverso"],
              ["to consider", "considerar"]
            ],
            grammarTitle: "Might / Could (possibilidade em debates)",
            grammarExplain: "Usamos 'might' e 'could' para expressar possibilidade, útil em debates e opiniões incertas.",
            grammarExamples: ["This might be true, but we need more evidence.", "The situation could change soon."],
            commonMistakes: [
              "❌ 'This might to be true' → ✅ 'This might be true'",
              "❌ 'The situation could changes' → ✅ 'The situation could change'",
              "❌ 'It might be truth' → ✅ 'It might be true'"
            ],
            dialogue: [
              ["A", "What's your perspective on this controversial issue?"],
              ["B", "This might be true, but we need more evidence before deciding."],
              ["A", "The situation could change after the debate."],
              ["B", "I always consider different points of view first."]
            ],
            memoryTip: "'Controversial' tem 'controversy' — pense em algo que gera 'controvérsia', ou seja, opiniões diferentes.",
            translation: [
              "Isso pode ser verdade, mas precisamos de evidências.",
              "A situação pode mudar em breve.",
              "Qual é o seu ponto de vista?",
              "Esse assunto é controverso.",
              "Eu considero diferentes perspectivas."
            ]
          }
        ],
        quiz: [
          { q: "Company ___ (launch) new product. (manchete)", type: "fill", answer: "launches" },
          { q: "I ___ this source is reliable. (opinião)", type: "fill", answer: "think" },
          { q: "This ___ (might/be) true, but we need evidence.", type: "fill", answer: "might be" },
          { q: "The situation ___ (could/change) soon.", type: "fill", answer: "could change" },
          { q: "Traduza: 'Você viu a manchete de hoje?'", type: "translate", answer: "Did you see today's headline?" },
          { q: "Traduza: 'Na minha opinião, essa fonte é confiável.'", type: "translate", answer: "In my opinion, this source is reliable." },
          { q: "Traduza: 'A situação pode mudar em breve.'", type: "translate", answer: "The situation could change soon." },
          { q: "Corrija: 'Company launch new product.'", type: "correct", answer: "Company launches new product." },
          { q: "Corrija: 'This might to be true.'", type: "correct", answer: "This might be true." },
          { q: "Corrija: 'The situation could changes.'", type: "correct", answer: "The situation could change." }
        ]
      }
    ]
  },

  instruments: {
    name: "Instrumentos Musicais",
    icon: "🎸",
    color: "#9C6644",
    modules: [
      {
        id: "inst_m1",
        title: "Aprendendo Música",
        days: [
          {
            id: "inst_m1_d1",
            title: "Instrumentos musicais",
            vocab: [
              ["guitar", "violão / guitarra"],
              ["drums", "bateria"],
              ["piano / keyboard", "piano / teclado"],
              ["violin", "violino"],
              ["to play (an instrument)", "tocar (um instrumento)"],
              ["band", "banda"]
            ],
            grammarTitle: "Can (habilidades musicais)",
            grammarExplain: "Usamos 'can' para falar sobre habilidades musicais que temos ou não.",
            grammarExamples: ["I can play the guitar.", "She can't play the drums yet."],
            commonMistakes: [
              "❌ 'I can to play guitar' → ✅ 'I can play guitar'",
              "❌ 'She can plays drums' → ✅ 'She can play drums'",
              "❌ 'I can play the piano well' está correto, mas cuidado: '❌ I play can piano' → ✅ 'I can play piano'"
            ],
            dialogue: [
              ["A", "Can you play any instruments?"],
              ["B", "Yes, I can play the guitar and a little piano."],
              ["A", "Can you play in a band?"],
              ["B", "Not yet, but I'm learning drums too."]
            ],
            memoryTip: "'Band' em português também é 'banda' — praticamente igual!",
            translation: [
              "Eu sei tocar violão.",
              "Ela ainda não sabe tocar bateria.",
              "Você toca algum instrumento?",
              "Eu toco em uma banda.",
              "Ele sabe tocar violino."
            ]
          },
          {
            id: "inst_m1_d2",
            title: "Aprendendo a tocar",
            vocab: [
              ["lesson", "aula (de música)"],
              ["to practice", "praticar"],
              ["chord", "acorde"],
              ["note", "nota (musical)"],
              ["sheet music", "partitura"],
              ["to tune (an instrument)", "afinar (um instrumento)"]
            ],
            grammarTitle: "Present Continuous (aprendendo agora)",
            grammarExplain: "Usamos Present Continuous para falar de algo que está em processo de aprendizado atualmente.",
            grammarExamples: ["I'm learning to play the guitar.", "She's practicing chords every day."],
            commonMistakes: [
              "❌ 'I learning to play guitar' (sem 'am') → ✅ 'I'm learning to play guitar'",
              "❌ 'She practicing every day' → ✅ 'She's practicing every day'",
              "❌ 'I am tune my guitar' → ✅ 'I am tuning my guitar'"
            ],
            dialogue: [
              ["A", "Are you taking guitar lessons?"],
              ["B", "Yes, I'm learning new chords every week."],
              ["A", "Are you reading sheet music yet?"],
              ["B", "A little, and I'm tuning my guitar every day too."]
            ],
            memoryTip: "'Chord' soa como 'corda' — pense nas cordas do violão formando o acorde.",
            translation: [
              "Eu estou aprendendo a tocar violão.",
              "Ela está praticando acordes.",
              "Eu estou afinando meu instrumento.",
              "Essa é uma nota musical.",
              "Eu tenho aula de música toda semana."
            ]
          },
          {
            id: "inst_m1_d3",
            title: "Bandas e apresentações",
            vocab: [
              ["performance", "apresentação"],
              ["audience", "plateia"],
              ["stage", "palco"],
              ["rehearsal", "ensaio"],
              ["gig", "show (informal, tocada)"],
              ["to perform", "se apresentar"]
            ],
            grammarTitle: "Present Perfect (há quanto tempo)",
            grammarExplain: "Usamos have/has + been + verbo-ing (ou particípio) com 'for/since' para dizer há quanto tempo fazemos algo.",
            grammarExamples: ["I have played guitar for five years.", "She has performed on stage since she was ten."],
            commonMistakes: [
              "❌ 'I play guitar for five years' → ✅ 'I have played guitar for five years'",
              "❌ 'She has perform since' → ✅ 'She has performed since'",
              "❌ 'I have played guitar since five years' → ✅ 'I have played guitar for five years'"
            ],
            dialogue: [
              ["A", "How long have you played guitar?"],
              ["B", "I've played for five years. We have a rehearsal tonight."],
              ["A", "Have you ever performed for a big audience?"],
              ["B", "Yes, our band played a gig on a huge stage last year."]
            ],
            memoryTip: "'Gig' é uma gíria comum entre músicos pra 'show' — curta e fácil de lembrar.",
            translation: [
              "Eu toco violão há cinco anos.",
              "Ela se apresenta desde os dez anos.",
              "Nós temos ensaio hoje à noite.",
              "A plateia estava enorme.",
              "Nossa banda tocou num show ótimo."
            ]
          }
        ],
        quiz: [
          { q: "I ___ play the guitar. (habilidade)", type: "fill", answer: "can" },
          { q: "I ___ (learn) to play guitar right now.", type: "fill", answer: "am learning" },
          { q: "I have ___ (play) guitar for five years.", type: "fill", answer: "played" },
          { q: "___ long have you played guitar?", type: "fill", answer: "How" },
          { q: "Traduza: 'Eu sei tocar violão.'", type: "translate", answer: "I can play the guitar." },
          { q: "Traduza: 'Eu estou aprendendo a tocar violão.'", type: "translate", answer: "I am learning to play the guitar." },
          { q: "Traduza: 'Eu toco violão há cinco anos.'", type: "translate", answer: "I have played guitar for five years." },
          { q: "Corrija: 'I can to play guitar.'", type: "correct", answer: "I can play guitar." },
          { q: "Corrija: 'I learning to play guitar.'", type: "correct", answer: "I am learning to play guitar." },
          { q: "Corrija: 'I play guitar for five years.'", type: "correct", answer: "I have played guitar for five years." }
        ]
      }
    ]
  }
};
