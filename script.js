window.addEventListener("DOMContentLoaded", () => {
  // ===== Projects: Cyber Terminal Cards =====
  const projectContainer = document.getElementById("project-container");
  if (projectContainer && typeof projectData !== "undefined") {
    projectData.forEach(p => {
      const card = document.createElement("div");
      card.className = "term-card";

      card.innerHTML = `
        <div class="term-header"><span class="prompt">&gt;</span> ${p.title}</div>
        <p class="term-desc">${p.description}</p>
        <div class="term-stack">${p.stack}</div>
        <a class="term-btn" href="${p.link}" target="_blank">[ view repo ]</a>
        <div class="scanline"></div>
      `;

      // subtle tilt
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const rotY = ((x / r.width) - 0.5) * 6;  // -3..3 deg
        const rotX = -((y / r.height) - 0.5) * 6;
        card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
      });

      projectContainer.appendChild(card);
    });
  }

  // ===== Fade-in observer =====
  const sections = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(s => observer.observe(s));
});
// Mouse Reactive Background Glow
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100 + "%";
  const y = (e.clientY / window.innerHeight) * 100 + "%";
  document.documentElement.style.setProperty("--x", x);
  document.documentElement.style.setProperty("--y", y);
});
// Typewriter Effect
const tw = document.getElementById("typewriter");
if (tw) {
  let text = tw.getAttribute("data-text");
  let i = 0;
  function type() {
    if (i <= text.length) {
      tw.innerText = text.slice(0, i);
      i++;
      setTimeout(type, 80);
    }
  }
  type();
}
