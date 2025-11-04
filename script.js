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

  // Intersection Observer for fade-ins
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

  // Console interaction
  const consoleInput = document.getElementById("console-input");
  const consoleOutput = document.getElementById("console-output");
  if (consoleInput) {
    consoleInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        const cmd = this.value.trim().toLowerCase();
        let res = "";
        if (cmd === "whoami") res = "Rohit — Creative full-stack developer exploring AI & design.";
        else if (cmd === "projects") res = "Explore my projects section above 👆";
        else if (cmd === "contact") res = "Reach out via the contact form or links below!";
        else res = `Unknown command: ${cmd}`;
        consoleOutput.innerHTML += `<p>&gt; ${cmd}</p><p>${res}</p>`;
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
        this.value = "";
      }
    });
  }
});
