window.addEventListener("DOMContentLoaded", () => {

  // Project Rendering (Flip Cards)
  const projectContainer = document.getElementById("project-container");
  if (projectContainer && typeof projectData !== "undefined") {

    projectData.forEach(p => {
      const card = document.createElement("div");
      card.className = "flip-card";

      card.innerHTML = `
        <div class="flip-inner">

          <div class="flip-front">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
          </div>

          <div class="flip-back">
            <h4>Tech Used</h4>
            <p>${p.stack}</p>
            <a href="${p.link}" target="_blank">View Repository</a>
          </div>

        </div>
      `;

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
  }, { threshold: 0.2 });

  sections.forEach(s => observer.observe(s));
});
