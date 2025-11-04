window.addEventListener("DOMContentLoaded", () => {
  // Project rendering
  const projectContainer = document.getElementById("project-container");
  if (projectContainer && typeof projectData !== "undefined") {
    projectData.forEach(p => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <p><b>Stack:</b> ${p.stack}</p>
        <a href="${p.link}" target="_blank" class="btn-outline">GitHub</a>`;
      projectContainer.appendChild(card);
    });
  }

  // Fade-in animations
  const sections = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(s => observer.observe(s));

  // Dev Console
  const input = document.getElementById("console-input");
  const output = document.getElementById("console-output");
  if (input) {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const cmd = input.value.trim().toLowerCase();
        let res = "";
        if (cmd === "whoami") res = "Rohit — Creative developer exploring AI & design.";
        else if (cmd === "projects") res = "See my projects above 👆";
        else if (cmd === "contact") res = "Use the contact section or LinkedIn below!";
        else res = `Unknown command: ${cmd}`;
        output.innerHTML += `<p>&gt; ${cmd}</p><p>${res}</p>`;
        output.scrollTop = output.scrollHeight;
        input.value = "";
      }
    });
  }
});
