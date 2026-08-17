// ============================================================
// APP.JS — Lógica principal do Sistema de Inglês
// ============================================================

const PASS_SCORE = 0.7; // 70% para desbloquear o próximo módulo
let currentUser = null;
let currentTheme = null;
let progressCache = {}; // { "themeId_moduleId_dayId": status }

const root = document.getElementById("app");

// ---------- BOOT ----------
async function boot() {
  const { data } = await db.auth.getSession();
  if (data.session) {
    currentUser = data.session.user;
    await loadProgress();
    renderThemeSelect();
  } else {
    renderAuth();
  }
}

db.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_OUT") {
    currentUser = null;
    renderAuth();
  }
});

// ---------- AUTH SCREEN ----------
function renderAuth(mode = "login") {
  root.innerHTML = `
    <div class="auth-wrap">
      <div class="brand">
        <span class="brand-mark">路</span>
        <h1>English Path</h1>
        <p>Aprenda inglês em família, no seu ritmo.</p>
      </div>
      <div class="auth-card">
        <div class="tabs">
          <button class="tab ${mode === "login" ? "active" : ""}" data-mode="login">Entrar</button>
          <button class="tab ${mode === "signup" ? "active" : ""}" data-mode="signup">Criar conta</button>
        </div>
        <form id="auth-form">
          ${mode === "signup" ? `<label>Nome<input type="text" id="name" required placeholder="Seu nome"></label>` : ""}
          <label>E-mail<input type="email" id="email" required placeholder="voce@email.com"></label>
          <label>Senha<input type="password" id="password" required placeholder="••••••••" minlength="6"></label>
          <button type="submit" class="btn-primary">${mode === "signup" ? "Criar conta" : "Entrar"}</button>
        </form>
        <p class="auth-msg" id="auth-msg"></p>
      </div>
    </div>
  `;

  root.querySelectorAll(".tab").forEach(t => t.addEventListener("click", () => renderAuth(t.dataset.mode)));

  document.getElementById("auth-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const msg = document.getElementById("auth-msg");
    msg.textContent = "Um momento...";

    if (mode === "signup") {
      const name = document.getElementById("name").value.trim();
      const { data, error } = await db.auth.signUp({
        email, password,
        options: { data: { display_name: name } }
      });
      if (error) { msg.textContent = translateAuthError(error.message); return; }
      if (data.user && !data.session) {
        msg.textContent = "Conta criada! Verifique seu e-mail para confirmar antes de entrar.";
        return;
      }
      currentUser = data.user;
    } else {
      const { data, error } = await db.auth.signInWithPassword({ email, password });
      if (error) { msg.textContent = translateAuthError(error.message); return; }
      currentUser = data.user;
    }
    await loadProgress();
    renderThemeSelect();
  });
}

function translateAuthError(msg) {
  if (msg.includes("Invalid login credentials")) return "E-mail ou senha incorretos.";
  if (msg.includes("already registered")) return "Este e-mail já tem uma conta.";
  if (msg.includes("Password should be")) return "A senha precisa ter pelo menos 6 caracteres.";
  return "Algo deu errado: " + msg;
}

// ---------- PROGRESS ----------
async function loadProgress() {
  const { data, error } = await db.from("progress").select("*").eq("user_id", currentUser.id);
  progressCache = {};
  if (!error && data) {
    data.forEach(row => {
      progressCache[`${row.theme_id}_${row.module_id}_${row.day_id}`] = row.status;
    });
  }
}

function getStatus(themeId, moduleId, dayId) {
  return progressCache[`${themeId}_${moduleId}_${dayId}`] || null;
}

async function setStatus(themeId, moduleId, dayId, status) {
  progressCache[`${themeId}_${moduleId}_${dayId}`] = status;
  await db.from("progress").upsert({
    user_id: currentUser.id,
    theme_id: themeId,
    module_id: moduleId,
    day_id: dayId,
    status,
    updated_at: new Date().toISOString()
  }, { onConflict: "user_id,theme_id,module_id,day_id" });
}

// Regra de desbloqueio: o 1º dia do 1º módulo sempre está liberado.
// Um dia libera quando o dia anterior foi 'completed'.
// O quiz de um módulo libera quando todos os dias do módulo estão 'completed'.
// O próximo módulo libera quando o quiz do módulo anterior foi aprovado (>=70%).
function isDayUnlocked(theme, moduleIndex, dayIndex) {
  const module = theme.modules[moduleIndex];
  if (moduleIndex === 0 && dayIndex === 0) return true;
  if (dayIndex > 0) {
    const prevDay = module.days[dayIndex - 1];
    return getStatus(currentThemeId, module.id, prevDay.id) === "completed";
  }
  // primeiro dia de um módulo > 0: depende do quiz do módulo anterior ter sido aprovado
  const prevModule = theme.modules[moduleIndex - 1];
  return getStatus(currentThemeId, prevModule.id, "QUIZ") === "completed";
}

function isQuizUnlocked(theme, moduleIndex) {
  const module = theme.modules[moduleIndex];
  return module.days.every(d => getStatus(currentThemeId, module.id, d.id) === "completed");
}

let currentThemeId = null;

// ---------- THEME SELECT ----------
function renderThemeSelect() {
  const cards = Object.entries(LESSONS).map(([id, theme]) => {
    const totalDays = theme.modules.reduce((s, m) => s + m.days.length, 0);
    const doneDays = theme.modules.reduce((s, m) => s + m.days.filter(d => getStatus(id, m.id, d.id) === "completed").length, 0);
    return `
      <button class="theme-card" data-theme="${id}" style="--accent:${theme.color}">
        <span class="theme-icon">${theme.icon}</span>
        <span class="theme-name">${theme.name}</span>
        <span class="theme-progress">${doneDays}/${totalDays} lições concluídas</span>
      </button>
    `;
  }).join("");

  root.innerHTML = `
    <div class="topbar">
      <span class="topbar-title">English Path</span>
      <span class="topbar-user">${currentUser.user_metadata?.display_name || currentUser.email}
        <button id="logout" class="link-btn">Sair</button>
      </span>
    </div>
    <div class="page">
      <h2>Escolha um tema para praticar</h2>
      <p class="subtitle">Cada tema tem sua própria trilha de módulos e progresso independente.</p>
      <div class="theme-grid">${cards}</div>
    </div>
  `;

  document.getElementById("logout").addEventListener("click", async () => { await db.auth.signOut(); });
  root.querySelectorAll(".theme-card").forEach(c =>
    c.addEventListener("click", () => { currentThemeId = c.dataset.theme; renderPath(); })
  );
}

// ---------- PATH (TRILHA DE MÓDULOS) ----------
function renderPath() {
  const theme = LESSONS[currentThemeId];
  const modulesHtml = theme.modules.map((module, mi) => {
    const daysHtml = module.days.map((day, di) => {
      const unlocked = isDayUnlocked(theme, mi, di);
      const status = getStatus(currentThemeId, module.id, day.id);
      const cls = status === "completed" ? "node done" : unlocked ? "node open" : "node locked";
      return `<button class="${cls}" data-module="${mi}" data-day="${di}" ${unlocked ? "" : "disabled"}>
        <span class="node-icon">${status === "completed" ? "✓" : unlocked ? "●" : "🔒"}</span>
        <span class="node-label">${day.title}</span>
      </button>`;
    }).join("<span class='connector'></span>");

    const quizUnlocked = isQuizUnlocked(theme, mi);
    const quizStatus = getStatus(currentThemeId, module.id, "QUIZ");
    const quizCls = quizStatus === "completed" ? "node done quiz" : quizUnlocked ? "node open quiz" : "node locked quiz";

    return `
      <div class="module-block">
        <h3>${module.title}</h3>
        <div class="path-row">
          ${daysHtml}
          <span class="connector"></span>
          <button class="${quizCls}" data-module="${mi}" data-quiz="1" ${quizUnlocked ? "" : "disabled"}>
            <span class="node-icon">${quizStatus === "completed" ? "✓" : quizUnlocked ? "📝" : "🔒"}</span>
            <span class="node-label">Quiz do módulo</span>
          </button>
        </div>
      </div>
    `;
  }).join("");

  root.innerHTML = `
    <div class="topbar">
      <button class="link-btn" id="back">← Temas</button>
      <span class="topbar-title" style="color:${theme.color}">${theme.icon} ${theme.name}</span>
      <span></span>
    </div>
    <div class="page">${modulesHtml}</div>
  `;

  document.getElementById("back").addEventListener("click", renderThemeSelect);
  root.querySelectorAll(".node:not(.locked)").forEach(n => {
    n.addEventListener("click", () => {
      const mi = Number(n.dataset.module);
      if (n.dataset.quiz) renderQuiz(mi);
      else renderDay(mi, Number(n.dataset.day));
    });
  });
}

// ---------- DAY LESSON ----------
function renderDay(moduleIndex, dayIndex) {
  const theme = LESSONS[currentThemeId];
  const module = theme.modules[moduleIndex];
  const day = module.days[dayIndex];

  root.innerHTML = `
    <div class="topbar">
      <button class="link-btn" id="back">← Trilha</button>
      <span class="topbar-title" style="color:${theme.color}">${day.title}</span>
      <span></span>
    </div>
    <div class="page lesson">
      <section class="card">
        <h3>📖 Vocabulário</h3>
        <table class="vocab-table">
          ${day.vocab.map(([en, pt]) => `<tr><td>${en}</td><td>${pt}</td></tr>`).join("")}
        </table>
      </section>

      <section class="card">
        <h3>🔤 ${day.grammarTitle}</h3>
        <p>${day.grammarExplain}</p>
        <ul class="examples">${day.grammarExamples.map(e => `<li>${e}</li>`).join("")}</ul>
        <div class="mistakes">
          <strong>Erros mais comuns:</strong>
          <ul>${day.commonMistakes.map(m => `<li>${m}</li>`).join("")}</ul>
        </div>
      </section>

      <section class="card">
        <h3>🗣️ Diálogo modelo</h3>
        ${day.dialogue.map(([who, line]) => `<p class="dialogue-line"><b>${who}:</b> ${line}</p>`).join("")}
      </section>

      <section class="card tip">
        <h3>🔑 Truque de memorização</h3>
        <p>${day.memoryTip}</p>
      </section>

      <section class="card">
        <h3>✍️ Pratique a tradução</h3>
        <p class="hint">Escreva sua tentativa antes de revelar a sugestão — é assim que fixa melhor.</p>
        ${day.translation.map((pt, i) => `
          <div class="translate-item">
            <p>${i + 1}. ${pt}</p>
            <input type="text" placeholder="Sua tradução em inglês..." data-idx="${i}">
            <button class="reveal-btn" data-idx="${i}">Ver sugestão</button>
            <p class="reveal-answer hidden" id="reveal-${i}"></p>
          </div>
        `).join("")}
      </section>

      <button class="btn-primary complete-btn" id="complete">Marcar dia como concluído ✓</button>
    </div>
  `;

  document.getElementById("back").addEventListener("click", renderPath);
  root.querySelectorAll(".reveal-btn").forEach(b => {
    b.addEventListener("click", () => {
      const i = b.dataset.idx;
      const el = document.getElementById(`reveal-${i}`);
      el.textContent = "💡 Sugestão: (tente formar a frase com o vocabulário e a gramática de hoje)";
      el.classList.remove("hidden");
    });
  });

  document.getElementById("complete").addEventListener("click", async () => {
    await setStatus(currentThemeId, module.id, day.id, "completed");
    renderPath();
  });
}

// ---------- QUIZ ----------
function renderQuiz(moduleIndex) {
  const theme = LESSONS[currentThemeId];
  const module = theme.modules[moduleIndex];
  const quiz = module.quiz;

  root.innerHTML = `
    <div class="topbar">
      <button class="link-btn" id="back">← Trilha</button>
      <span class="topbar-title" style="color:${theme.color}">📝 Quiz — ${module.title}</span>
      <span></span>
    </div>
    <div class="page">
      <p class="hint">Responda as 10 perguntas. As respostas certas só aparecem depois de você enviar tudo. Você precisa de 70% ou mais para liberar o próximo módulo.</p>
      <form id="quiz-form">
        ${quiz.map((item, i) => `
          <div class="quiz-item" id="quiz-item-${i}">
            <p><b>${i + 1}.</b> ${item.q}</p>
            <input type="text" name="q${i}" placeholder="Sua resposta..." autocomplete="off">
          </div>
        `).join("")}
        <button type="submit" class="btn-primary">Corrigir quiz</button>
      </form>
      <div id="quiz-result"></div>
    </div>
  `;

  document.getElementById("back").addEventListener("click", renderPath);

  document.getElementById("quiz-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    let score = 0;
    quiz.forEach((item, i) => {
      const input = document.querySelector(`[name="q${i}"]`);
      const given = input.value.trim().toLowerCase();
      const correct = item.answer.trim().toLowerCase();
      const isRight = given === correct;
      if (isRight) score++;
      const el = document.getElementById(`quiz-item-${i}`);
      el.classList.add(isRight ? "correct" : "incorrect");
      const answerNote = document.createElement("p");
      answerNote.className = "quiz-answer";
      answerNote.textContent = isRight ? "✓ Correto!" : `✗ Resposta esperada: "${item.answer}"`;
      el.appendChild(answerNote);
      input.disabled = true;
    });

    const pct = score / quiz.length;
    const passed = pct >= PASS_SCORE;

    await db.from("quiz_results").insert({
      user_id: currentUser.id, theme_id: currentThemeId, module_id: module.id,
      score, total: quiz.length, passed
    });

    if (passed) await setStatus(currentThemeId, module.id, "QUIZ", "completed");

    document.getElementById("quiz-result").innerHTML = `
      <div class="result-box ${passed ? "pass" : "fail"}">
        <h3>${passed ? "🎉 Você passou!" : "Quase lá!"}</h3>
        <p>Você acertou ${score} de ${quiz.length} (${Math.round(pct * 100)}%).</p>
        <p>${passed ? "O próximo módulo foi liberado." : `Você precisa de ${Math.round(PASS_SCORE * 100)}% para liberar o próximo módulo. Revise o conteúdo e tente de novo.`}</p>
        <button class="btn-primary" id="back-to-path">Voltar para a trilha</button>
      </div>
    `;
    document.getElementById("back-to-path").addEventListener("click", renderPath);
    document.querySelector(".btn-primary[type=submit]") && (document.querySelector("#quiz-form button[type=submit]").disabled = true);
  });
}

boot();
