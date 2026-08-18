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
      }
    ]
  }
};
