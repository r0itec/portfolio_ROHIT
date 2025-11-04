window.addEventListener('DOMContentLoaded', () => {
  try {
    const projectContainer = document.getElementById('project-container');
    if (projectContainer && typeof projectData !== 'undefined') {
      projectData.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <p><b>Stack:</b> ${p.stack}</p>
          <a href="${p.link}" target="_blank" class="btn-outline">GitHub</a>
        `;
        projectContainer.appendChild(card);
      });
    }
  } catch (err) {
    console.warn('Project data not loaded:', err);
  }

  const sections = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.id === 'stack') {
          const techItems = entry.target.querySelectorAll('.tech-item');
          techItems.forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 120);
          });
        }
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  sections.forEach(s => observer.observe(s));

  const consoleInput = document.getElementById('console-input');
  const consoleOutput = document.getElementById('console-output');
  if (consoleInput) {
    consoleInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        const cmd = e.target.value.trim().toLowerCase();
        let res = '';
        if (cmd === 'whoami') res = 'Rohit — A creative full-stack developer exploring AI and design.';
        else if (cmd === 'projects') res = 'Check out my projects section above for cool builds!';
        else if (cmd === 'contact') res = 'Reach me through the contact form or GitHub.';
        else res = `Unknown command: ${cmd}`;
        consoleOutput.innerHTML += `<p>&gt; ${cmd}</p><p>${res}</p>`;
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
        e.target.value = '';
      }
    });
  }
});
