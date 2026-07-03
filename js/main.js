  const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  const mt=document.getElementById('menuToggle'),ov=document.getElementById('siteMenu'),root=document.documentElement;
  function focusable(){return [...ov.querySelectorAll('a,button')].filter(el=>!el.hidden)}
  function openMenu(){ov.hidden=false;requestAnimationFrame(()=>{ov.classList.add('open');const f=focusable()[0];if(f)f.focus()});mt.setAttribute('aria-expanded','true');mt.setAttribute('aria-label','Close menu');root.classList.add('menu-open')}
  function closeMenu(){ov.classList.remove('open');mt.setAttribute('aria-expanded','false');mt.setAttribute('aria-label','Open menu');root.classList.remove('menu-open');setTimeout(()=>{if(!ov.classList.contains('open'))ov.hidden=true},340);mt.focus()}
  mt.addEventListener('click',()=>mt.getAttribute('aria-expanded')==='true'?closeMenu():openMenu());
  ov.addEventListener('click',e=>{if(e.target===ov)closeMenu()});
  ov.querySelectorAll('.menu-link').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{
    if(mt.getAttribute('aria-expanded')!=='true')return;
    if(e.key==='Escape'){closeMenu();return}
    if(e.key==='Tab'){
      const f=focusable();
      if(!f.length)return;
      const first=f[0],last=f[f.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
    }
  });
