(function(){
  const savedTheme = localStorage.getItem('dead-switch-theme');
  if(savedTheme === 'light') document.body.classList.add('light-theme');
  const themeBtn = document.querySelector('[data-theme-toggle]');
  function updateThemeText(){ if(themeBtn) themeBtn.textContent = document.body.classList.contains('light-theme') ? 'Dark Theme' : 'Light Theme'; }
  if(themeBtn){themeBtn.addEventListener('click',()=>{document.body.classList.toggle('light-theme');localStorage.setItem('dead-switch-theme',document.body.classList.contains('light-theme')?'light':'dark');updateThemeText();});updateThemeText();}
  const menu = document.querySelector('[data-menu-panel]');
  const backdrop = document.querySelector('[data-menu-backdrop]');
  const openBtn = document.querySelector('[data-menu-open]');
  const closeBtn = document.querySelector('[data-menu-close]');
  function setMenu(open){ if(menu) menu.classList.toggle('open', open); if(backdrop) backdrop.classList.toggle('open', open); if(openBtn) openBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  if(openBtn) openBtn.addEventListener('click',()=>setMenu(true));
  if(closeBtn) closeBtn.addEventListener('click',()=>setMenu(false));
  if(backdrop) backdrop.addEventListener('click',()=>setMenu(false));
  document.addEventListener('keydown',e=>{ if(e.key === 'Escape') setMenu(false); });
  const search = document.querySelector('[data-search]');
  if(search){search.addEventListener('input',()=>{const q=search.value.toLowerCase().trim();document.querySelectorAll('[data-filter-card]').forEach(card=>{card.classList.toggle('hide', q && !card.textContent.toLowerCase().includes(q));});});}
})();
