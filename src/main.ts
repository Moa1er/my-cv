import "./styles.css";
import { experiences, projects } from "./data";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) throw new Error("App root not found");

const renderProjectVisual = (type: string) => {
  if (type === "tracking") {
    return `<div class="project-visual pitch" aria-hidden="true">
      <span class="pitch-line pitch-line--half"></span><span class="pitch-circle"></span>
      <i style="--x:18%;--y:22%;--d:0s"></i><i style="--x:36%;--y:72%;--d:.4s"></i>
      <i style="--x:71%;--y:34%;--d:.8s"></i><i style="--x:82%;--y:68%;--d:1.2s"></i>
      <b class="track track--one"></b><b class="track track--two"></b>
    </div>`;
  }

  if (type === "jepa") {
    return `<div class="project-visual latent" aria-hidden="true">
      ${Array.from({ length: 16 }, (_, index) => `<i style="--i:${index}"></i>`).join("")}
      <span>?</span><b>predict</b>
    </div>`;
  }

  return `<div class="project-visual canonical" aria-hidden="true">
    <span class="canonical-shape canonical-shape--a"></span>
    <span class="canonical-arrow">→</span>
    <span class="canonical-shape canonical-shape--b"></span>
    <b>θ → 0°</b>
  </div>`;
};

app.innerHTML = `
  <div class="noise" aria-hidden="true"></div>
  <div class="cursor-dot" aria-hidden="true"></div>
  <div class="cursor-ring" aria-hidden="true"></div>
  <div class="page-progress" aria-hidden="true"><span></span></div>

  <header class="site-header">
    <a class="brand magnetic" href="#top" aria-label="Back to top">
      <span>AG</span><i></i>
    </a>
    <nav aria-label="Primary navigation">
      <a href="#work">Projects</a>
      <a href="#experience">Timeline</a>
      <a href="#contact">Contact</a>
    </nav>
    <button class="command-trigger magnetic" type="button" aria-label="Open quick navigation" aria-haspopup="dialog">
      <span>Jump</span><kbd>/</kbd>
    </button>
  </header>

  <main id="top">
    <section class="hero section-shell" aria-labelledby="hero-title">
      <div class="hero-status mono reveal">
        <span>Delft, NL · 52.01° N</span>
      </div>

      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow reveal">Software engineer · AI researcher</p>
          <h1 id="hero-title" class="reveal">Aghilès Gasselin</h1>
          <div class="hero-lower reveal">
            <p class="hero-bio">
              I build things to make life work better/faster for other people (also me!) and I love doing it.
              During a past software internship, I'd stay late at the office purely because the problem was too interesting to leave. 
              After 1.5 years at Deloitte, I craved that thrill again, so I co-founded two startups on the side (including Acquiso, and a new one currently in the works) where I could build without stopping. 
              I spend a big part of my days optimising what is around me, flying FPV drones (and spending half the time repairing them), and studying/learning about biology as a second hobby. 
              I want to build things that are difficult, useful, and slightly obsessive :). Especially in AI, where the possibilities to create impact are infinite.
            </p>
            <p class="hero-credentials">MSc AI @ TU Delft · Full-stack systems, computer vision, data security · <span class="work-rights"><i class="dot"></i> EU + Canada work rights</span></p>
            <div class="hero-actions">
              <a class="button button--primary magnetic" href="#work">Explore projects <span>↘</span></a>
              <a class="text-link magnetic" href="mailto:aghiles.gasselin@gmail.com">Start a conversation <span>↗</span></a>
            </div>
          </div>
        </div>

        <div class="hero-education reveal">
          <div class="edu-card">
            <span class="edu-date">2025 — 2027 / DELFT, NL</span>
            <h3>MSc · Data Science & AI</h3>
            <p class="edu-school">TU Delft</p>
            <div class="edu-tags"><span>Visual computing</span><span>Advanced ML</span><span>Generative modeling</span></div>
          </div>
          <div class="edu-card">
            <span class="edu-date">2019 — 2024 / MONTRÉAL, CA</span>
            <h3>BEng · Software Engineering</h3>
            <p class="edu-school">Polytechnique Montréal</p>
            <div class="edu-tags"><span>Software systems</span><span>Robotics</span><span>Security</span></div>
          </div>
        </div>
      </div>

      <div class="hero-index mono reveal">
        <div></div>
        <span>01 — 03</span>
      </div>
    </section>

    <section id="work" class="projects section-shell" aria-labelledby="work-title">
      <div class="section-heading reveal">
        <h2 id="work-title">Selected <em>projects.</em></h2>
      </div>
      <div class="project-list">
        ${projects
          .map(
            (project) => `
          <article class="project-card tilt reveal" data-project="${project.visual}">
            <div class="project-meta mono">
              <span>${project.index}</span>
              <span>${project.label}</span>
            </div>
            <div class="project-grid">
              <div class="project-copy">
                <h3>${project.title}</h3>
                <p class="project-lead">${project.description}</p>
                <ul>${project.proof.map((item) => `<li>${item}</li>`).join("")}</ul>
                <div class="tags">${project.tech.map((item) => `<span>${item}</span>`).join("")}</div>
              </div>
              ${renderProjectVisual(project.visual)}
            </div>
            <a class="project-link magnetic" href="${project.url}" target="_blank" rel="noreferrer" aria-label="Open ${project.shortTitle} on GitHub">
              <span>Open repository</span><b>↗</b>
            </a>
          </article>`,
          )
          .join("")}
      </div>
    </section>

    <section id="experience" class="experience section-shell" aria-labelledby="experience-title">
      <div class="experience-intro reveal">
        <h2 id="experience-title">Work <em>experience.</em></h2>
      </div>
      <div class="timeline">
        ${experiences
          .map(
            (job, index) => `
          <article class="timeline-item reveal">
            <div class="timeline-marker"><span>${String(index + 1).padStart(2, "0")}</span></div>
            <div class="timeline-top mono">
              <span>${job.dates}</span><span>${job.location}</span>
            </div>
            <div class="timeline-main">
              <div>
                <p class="timeline-signal">${job.signal}</p>
                <h3>${job.company}</h3>
                <p class="timeline-role">${job.role}</p>
              </div>
              <div>
                <ul>${job.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
                <div class="tags">${job.tech.map((item) => `<span>${item}</span>`).join("")}</div>
              </div>
            </div>
          </article>`,
          )
          .join("")}
      </div>
      <a class="paper-callout tilt reveal" href="https://www.nature.com/articles/s41597-025-04438-6" target="_blank" rel="noreferrer">
        <span class="mono">Published research / Scientific Data</span>
        <strong>Genome-scale CRISPR knockout screening of CHO cells</strong>
        <b>Read paper ↗</b>
      </a>
    </section>

    <section class="offscreen section-shell" aria-labelledby="offscreen-title">
      <div class="offscreen-layout">
        <div class="offscreen-info reveal">
          <h2 id="offscreen-title">Outside <em>work.</em></h2>
          <p class="offscreen-lead">Beyond building software systems, I'm driven by hands-on execution, continuous learning, and creative outlets.</p>
          <div class="languages-inline">
            <span class="mono">Languages:</span>
            <strong>FR</strong> <span>Native</span> · 
            <strong>EN</strong> <span>C2</span> · 
            <strong>KO</strong> <span>A2</span>
          </div>
        </div>
        <div class="offscreen-hobbies reveal">
          <div class="hobby-pill hobby-pill--music">
            <span class="hobby-icon">🎵</span>
            <div class="hobby-text">
              <h4>Sound</h4>
              <p>Guitar & Piano study</p>
            </div>
          </div>
          <div class="hobby-pill hobby-pill--drone">
            <span class="hobby-icon">🛸</span>
            <div class="hobby-text">
              <h4>FPV Flight</h4>
              <p>Building & repairing drones</p>
            </div>
          </div>
          <div class="hobby-pill hobby-pill--sports">
            <span class="hobby-icon">🏃</span>
            <div class="hobby-text">
              <h4>Athletics</h4>
              <p>Hiking, basketball, badminton</p>
            </div>
          </div>
          <div class="hobby-pill hobby-pill--chess">
            <span class="hobby-icon">♟️</span>
            <div class="hobby-text">
              <h4>Strategy</h4>
              <p>Chess & board games</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer id="contact" class="footer section-shell">
    <div class="footer-top reveal">
      <p class="section-kicker"><span>→</span> Open channel</p>
      <h2>Have a hard problem?</h2>
      <a class="footer-email magnetic" href="mailto:aghiles.gasselin@gmail.com">aghiles.gasselin@gmail.com <span>↗</span></a>
    </div>
    <div class="footer-bottom mono">
      <span>© ${new Date().getFullYear()} Aghilès Gasselin</span>
      <div><a href="https://github.com/Moa1er" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/aghiles-gasselin/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      <button id="print-cv" type="button">Print CV ↗</button>
      <a href="#top">Top ↑</a>
    </div>
  </footer>

  <dialog class="command-menu" aria-labelledby="command-title">
    <form method="dialog"><button aria-label="Close quick navigation">×</button></form>
    <p id="command-title" class="mono">QUICK JUMP</p>
    <nav>
      <a href="#work"><span>01</span>Selected projects <kbd>W</kbd></a>
      <a href="#experience"><span>02</span>Experience <kbd>E</kbd></a>
      <a href="#contact"><span>03</span>Contact <kbd>C</kbd></a>
    </nav>
    <small class="mono">ESC TO CLOSE</small>
  </dialog>
  <div class="toast" role="status" aria-live="polite">signal copied.</div>
`;

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const setupReveal = () => {
  const elements = document.querySelectorAll<HTMLElement>(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  elements.forEach((element) => observer.observe(element));
};

const setupHeroWords = () => {
  if (reducedMotion) return;
  const target = document.querySelector<HTMLElement>("#hero-verb");
  if (!target) return;
  const words = ["SEE", "REASON", "SHIP"];
  let index = 0;
  window.setInterval(() => {
    target.classList.add("is-changing");
    window.setTimeout(() => {
      index = (index + 1) % words.length;
      target.textContent = words[index];
      target.classList.remove("is-changing");
    }, 260);
  }, 2300);
};

const setupCommandMenu = () => {
  const dialog = document.querySelector<HTMLDialogElement>(".command-menu");
  const trigger = document.querySelector<HTMLButtonElement>(".command-trigger");
  if (!dialog || !trigger) return;
  const open = () => (dialog.open ? dialog.close() : dialog.showModal());
  trigger.addEventListener("click", open);
  dialog.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => dialog.close()));
  window.addEventListener("keydown", (event) => {
    if (event.key === "/" && !(event.target instanceof HTMLInputElement)) {
      event.preventDefault();
      open();
    }
    const shortcuts: Record<string, string> = { w: "#work", e: "#experience", c: "#contact" };
    if (dialog.open && shortcuts[event.key.toLowerCase()]) {
      dialog.close();
      document.querySelector(shortcuts[event.key.toLowerCase()])?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    }
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
};

const setupPointerEffects = () => {
  if (reducedMotion || !window.matchMedia("(pointer: fine)").matches) return;
  const dot = document.querySelector<HTMLElement>(".cursor-dot");
  const ring = document.querySelector<HTMLElement>(".cursor-ring");
  if (!dot || !ring) return;
  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener("pointermove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });
  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(animateRing);
  };
  animateRing();

  document.querySelectorAll<HTMLElement>("a, button").forEach((element) => {
    element.addEventListener("mouseenter", () => document.body.classList.add("is-hovering"));
    element.addEventListener("mouseleave", () => document.body.classList.remove("is-hovering"));
  });

  document.querySelectorAll<HTMLElement>(".tilt").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      card.style.setProperty("--rx", `${y * -3.5}deg`);
      card.style.setProperty("--ry", `${x * 4.5}deg`);
      card.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
      card.style.setProperty("--my", `${(y + 0.5) * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
};

const setupCanvas = () => {
  if (reducedMotion) return;
  const canvas = document.querySelector<HTMLCanvasElement>("#signal-field");
  const context = canvas?.getContext("2d");
  if (!canvas || !context) return;
  type Point = { x: number; y: number; vx: number; vy: number; size: number };
  let points: Point[] = [];
  let width = 0;
  let height = 0;
  const pointer = { x: -1000, y: -1000 };

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    points = Array.from({ length: Math.min(56, Math.floor(width / 24)) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      size: Math.random() * 1.2 + 0.4,
    }));
  };

  const draw = () => {
    context.clearRect(0, 0, width, height);
    points.forEach((point, index) => {
      point.x += point.vx;
      point.y += point.vy;
      if (point.x < 0 || point.x > width) point.vx *= -1;
      if (point.y < 0 || point.y > height) point.vy *= -1;
      const pointerDistance = Math.hypot(point.x - pointer.x, point.y - pointer.y);
      if (pointerDistance < 150) {
        point.x += (point.x - pointer.x) * 0.006;
        point.y += (point.y - pointer.y) * 0.006;
      }
      context.fillStyle = "rgba(216, 255, 62, .35)";
      context.beginPath();
      context.arc(point.x, point.y, point.size, 0, Math.PI * 2);
      context.fill();
      points.slice(index + 1).forEach((other) => {
        const distance = Math.hypot(point.x - other.x, point.y - other.y);
        if (distance < 110) {
          context.strokeStyle = `rgba(216, 255, 62, ${0.08 * (1 - distance / 110)})`;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      });
    });
    requestAnimationFrame(draw);
  };

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });
  resize();
  draw();
};

const setupScroll = () => {
  const progress = document.querySelector<HTMLElement>(".page-progress span");
  const header = document.querySelector<HTMLElement>(".site-header");
  const count = document.querySelector<HTMLElement>("[data-count]");
  let counted = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    progress?.style.setProperty("transform", `scaleX(${ratio})`);
    header?.classList.toggle("is-scrolled", window.scrollY > 40);
    if (!counted && count) {
      const bounds = count.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.9) {
        counted = true;
        const target = Number(count.dataset.count ?? 0);
        const start = performance.now();
        const tick = (now: number) => {
          const elapsed = Math.min((now - start) / 1200, 1);
          count.textContent = String(Math.round(target * (1 - Math.pow(1 - elapsed, 3))));
          if (elapsed < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
};

document.querySelector<HTMLButtonElement>("#print-cv")?.addEventListener("click", () => window.print());
setupReveal();
setupHeroWords();
setupCommandMenu();
setupPointerEffects();
setupCanvas();
setupScroll();
