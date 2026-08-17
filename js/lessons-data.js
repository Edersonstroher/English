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
      }
    ]
  }
};
