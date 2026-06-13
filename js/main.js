/* ================================================================
   portfolio — js/main.js
   Рендеринг из CONTENT (info.js), переключение тем, лайтбокс, плеер
   ================================================================ */

(function () {
  "use strict";

  const C = CONTENT;

  /* ---------- HELPERS ---------- */

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function setHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  /* ---------- HERO ---------- */

  function renderHero() {
    const img = document.getElementById("hero-img");
    img.src = C.profile.image;
    img.alt = C.profile.imageAlt;
    setText("hero-name", C.profile.name);

    const links = C.links.items
      .map(
        (l) =>
          `<a class="hero__link" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`
      )
      .join("");
    setHTML("hero-links", links);
  }

  /* ---------- ABOUT ---------- */

  function renderAbout() {
    setText("about-title", C.about.title);
    const html = C.about.paragraphs.map((p) => `<p>${p}</p>`).join("");
    setHTML("about-content", html);
  }

  /* ---------- WHAT I DO ---------- */

  function renderWhatIDo() {
    setText("whatido-title", C.whatIDo.title);
    setText("whatido-intro", C.whatIDo.intro);
    setText("whatido-outro", C.whatIDo.outro);

    const tasks = C.whatIDo.tasks
      .map((t) => {
        if (typeof t === "string") return `<li>${t}</li>`;
        // объект с text + sub
        let subHtml = "";
        if (t.sub && t.sub.length) {
          subHtml = `<ul>${t.sub.map((s) => `<li>${s}</li>`).join("")}</ul>`;
        }
        return `<li>${t.text}${subHtml}</li>`;
      })
      .join("");
    setHTML("whatido-tasks", `<ul class="whatido__list">${tasks}</ul>`);
  }

  /* ---------- PROJECTS ---------- */

  function renderProjects() {
    setText("projects-title", C.projects.title);
    setText("projects-intro", C.projects.intro);

    const items = C.projects.items
      .map((p) => {
        let linkHtml = p.url
          ? `<a class="proj__link" href="${p.url}" target="_blank" rel="noopener noreferrer">${p.text}</a>`
          : `<span class="proj__name">${p.text}</span>`;

        let subHtml = "";
        if (p.sub && p.sub.length) {
          subHtml =
            `<ul class="proj__sublist">` +
            p.sub
              .map((s) => {
                if (typeof s === "string") return `<li>${s}</li>`;
                return `<li><a class="proj__sublink" href="${s.url}" target="_blank" rel="noopener noreferrer">${s.text}</a></li>`;
              })
              .join("") +
            `</ul>`;
        }
        return `<div class="proj__item">${linkHtml}${p.note ? `<span class="proj__note">${p.note}</span>` : ""}${subHtml}</div>`;
      })
      .join("");
    setHTML("projects-list", items);
  }

  /* ---------- EXPERIENCE ---------- */

  function renderExperience() {
    setText("experience-title", C.experience.title);
    setText("experience-intro", C.experience.intro);
    setHTML(
      "experience-list",
      C.experience.items.map((i) => `<li>${i}</li>`).join("")
    );
    setText("experience-outro", C.experience.outro);
  }

  /* ---------- LEARNING ---------- */

  function renderLearning() {
    setText("learning-title", C.learning.title);
    setText("learning-intro", C.learning.intro);

    const courses = C.learning.courses
      .map(
        (c) =>
          `<div class="course-card">
            <span class="course-card__date">${c.date}</span>
            <strong class="course-card__org">${c.title}</strong>
            <span class="course-card__desc">${c.desc}</span>
          </div>`
      )
      .join("");
    setHTML("learning-courses", courses);
  }

  /* ---------- SKILLS ---------- */

  function renderSkills() {
    setText("skills-title", C.skills.title);

    function tagList(label, items) {
      return `<div class="skills__group">
        <h3 class="skills__label">${label}</h3>
        <div class="skills__tags">${items.map((s) => `<span class="skill-tag">${s}</span>`).join("")}</div>
      </div>`;
    }

    const html =
      tagList(C.skills.intermediate.label, C.skills.intermediate.items) +
      tagList(C.skills.basic.label, C.skills.basic.items);
    setHTML("skills-grid", html);
  }

  /* ---------- WORK HISTORY ---------- */

  function renderWorkHistory() {
    setText("workhistory-title", C.workHistory.title);
    const items = C.workHistory.items
      .map(
        (w) =>
          `<div class="wh__item">
            <span class="wh__date">${w.date}</span>
            <strong class="wh__role">${w.title}</strong>
            <span class="wh__desc">${w.desc}</span>
          </div>`
      )
      .join("");
    setHTML("workhistory-list", items);
  }

  /* ---------- CERTIFICATES ---------- */

  function renderCertificates() {
    setText("certs-title", C.certificates.title);
    const images = C.certificates.images
      .map(
        (img) =>
          `<div class="cert-card" data-src="${img.src}" data-alt="${img.alt}">
            <img class="cert-card__img" src="${img.src}" alt="${img.alt}" loading="lazy">
          </div>`
      )
      .join("");
    setHTML("certs-grid", images);
  }

  /* ---------- LIGHTBOX ---------- */

  function initLightbox() {
    const lb = document.getElementById("lightbox");
    const lbImg = document.getElementById("lightbox-img");
    const lbClose = lb.querySelector(".lightbox__close");

    document.getElementById("certs-grid").addEventListener("click", (e) => {
      const card = e.target.closest(".cert-card");
      if (!card) return;
      lbImg.src = card.dataset.src;
      lbImg.alt = card.dataset.alt;
      lb.setAttribute("aria-hidden", "false");
    });

    lbClose.addEventListener("click", () => {
      lb.setAttribute("aria-hidden", "true");
    });

    lb.addEventListener("click", (e) => {
      if (e.target === lb) lb.setAttribute("aria-hidden", "true");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") lb.setAttribute("aria-hidden", "true");
    });
  }

  /* ---------- PLAYLIST + AUDIO ---------- */

  function renderPlaylist() {
    setText("playlist-title", C.playlist.title);
    setHTML("playlist-desc", C.playlist.paragraphs.map((p) => `<p>${p}</p>`).join(""));

    const bar = document.getElementById("audio-bar");
    const player = document.getElementById("audio-player");
    const titleSpan = document.getElementById("audio-track-title");
    const closeBtn = bar.querySelector(".audio-bar__close");

    const tracks = C.playlist.tracks
      .map(
        (t) =>
          `<div class="track-card" data-src="${t.src}" data-title="${t.num}. ${t.title}">
            <span class="track-card__num">${t.num}</span>
            <span class="track-card__title">${t.title}</span>
            <span class="track-card__dur">${t.duration}</span>
          </div>`
      )
      .join("");
    setHTML("playlist-tracks", tracks);

    /* ---- кастомный плеер UI ---- */
    const ap = document.getElementById("audio-player-ui");
    const btnPlay = ap.querySelector(".ap__play");
    const timeCurrent = document.getElementById("ap-current");
    const timeTotal = document.getElementById("ap-total");
    const progressFill = document.getElementById("ap-progress-fill");
    const progressInput = document.getElementById("ap-progress-input");
    const volumeIcon = document.getElementById("ap-volume-icon");
    const volumeInput = document.getElementById("ap-volume-input");

    function fmtTime(sec) {
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return m + ":" + (s < 10 ? "0" : "") + s;
    }

    function updateVolumeUI(val) {
      volumeInput.value = val * 100;
      if (val <= 0.01) volumeIcon.textContent = "🔇";
      else if (val < 0.5) volumeIcon.textContent = "🔉";
      else volumeIcon.textContent = "🔊";
    }

    /* play / pause */
    function setPlayingState(state) {
      ap.classList.toggle("ap--playing", state);
    }

    btnPlay.addEventListener("click", () => {
      if (!player.src) return;
      if (player.paused) {
        player.play().catch(() => {});
      } else {
        player.pause();
      }
    });

    player.addEventListener("play", () => setPlayingState(true));
    player.addEventListener("pause", () => setPlayingState(false));
    player.addEventListener("ended", () => setPlayingState(false));

    /* время / длительность */
    player.addEventListener("loadedmetadata", () => {
      timeTotal.textContent = fmtTime(player.duration);
      progressInput.max = Math.floor(player.duration * 1000);
    });

    player.addEventListener("timeupdate", () => {
      timeCurrent.textContent = fmtTime(player.currentTime);
      const pct = player.duration ? (player.currentTime / player.duration) * 100 : 0;
      progressFill.style.width = pct + "%";
      progressInput.value = Math.floor(player.currentTime * 1000);
    });

    /* перемотка (range input) */
    progressInput.addEventListener("input", () => {
      if (!player.duration) return;
      const t = progressInput.value / 1000;
      player.currentTime = t;
      timeCurrent.textContent = fmtTime(t);
      progressFill.style.width = (t / player.duration) * 100 + "%";
    });

    /* прогресс-бар: клик по обёртке */
    document.getElementById("ap-progress").addEventListener("click", (e) => {
      if (!player.duration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      const t = pct * player.duration;
      player.currentTime = t;
      progressInput.value = Math.floor(t * 1000);
      timeCurrent.textContent = fmtTime(t);
      progressFill.style.width = pct * 100 + "%";
    });

    /* громкость */
    volumeInput.addEventListener("input", () => {
      const val = volumeInput.value / 100;
      player.volume = val;
      updateVolumeUI(val);
    });

    /* выбор трека из плейлиста */
    document.getElementById("playlist-tracks").addEventListener("click", (e) => {
      const card = e.target.closest(".track-card");
      if (!card) return;
      player.src = card.dataset.src;
      titleSpan.textContent = card.dataset.title;
      bar.setAttribute("aria-hidden", "false");
      player.play().catch(() => {});
    });

    closeBtn.addEventListener("click", () => {
      player.pause();
      player.src = "";
      bar.setAttribute("aria-hidden", "true");
      setPlayingState(false);
      timeCurrent.textContent = "0:00";
      timeTotal.textContent = "0:00";
      progressFill.style.width = "0%";
      progressInput.value = 0;
    });
  }

  /* ---------- THEME SWITCHER ---------- */

  function initThemeSwitcher() {
    const html = document.documentElement;
    const saved = localStorage.getItem("portfolio-theme") || "terminal";
    html.setAttribute("data-theme", saved);

    const btns = document.querySelectorAll(".theme-btn");
    function setActive(theme) {
      btns.forEach((b) => b.classList.toggle("active", b.dataset.theme === theme));
    }
    setActive(saved);

    document.querySelector(".theme-switcher__btns").addEventListener("click", (e) => {
      const btn = e.target.closest(".theme-btn");
      if (!btn) return;
      const theme = btn.dataset.theme;
      html.setAttribute("data-theme", theme);
      localStorage.setItem("portfolio-theme", theme);
      setActive(theme);
    });
  }

  /* ---------- BOOT ---------- */

  function init() {
    renderHero();
    renderAbout();
    renderWhatIDo();
    renderProjects();
    renderExperience();
    renderLearning();
    renderSkills();
    renderWorkHistory();
    renderCertificates();
    renderPlaylist();
    initLightbox();
    initThemeSwitcher();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();