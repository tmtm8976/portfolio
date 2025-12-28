// Minimal interactivity: dynamic year, LinkedIn placeholder, simple tabs
(function(){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Optionally set LinkedIn URL via query param ?linkedin=...
  const params = new URLSearchParams(location.search);
  const linkedin = params.get('linkedin');
  if (linkedin) {
    const a1 = document.getElementById('linkedin-link');
    const a2 = document.getElementById('linkedin-card');
    [a1,a2].forEach(a=>{ if(a){ a.href = linkedin; a.textContent = linkedin.replace(/^https?:\/\//,''); }});
  }

  // Tabs: Experience / Projects / Skills
  const tablist = document.querySelector('.tabs');
  if (tablist) {
    const tabs = Array.from(tablist.querySelectorAll('.tab'));
    const panels = Array.from(document.querySelectorAll('.panel'));
    const activate = (id)=>{
      tabs.forEach(t=>{
        const on = t.id === id;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      panels.forEach(p=>{
        const on = 'panel-' + id.replace('tab-','') === p.id;
        p.classList.toggle('show', on);
      });
    };
    tabs.forEach(t=>{
      t.addEventListener('click', ()=>activate(t.id));
      t.addEventListener('keydown', (e)=>{
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(t.id); }
      });
    });
  }
})();
