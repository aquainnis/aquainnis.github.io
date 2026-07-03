  const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  const mt=document.getElementById('menuToggle'),ov=document.getElementById('siteMenu'),root=document.documentElement;
  function openMenu(){ov.hidden=false;requestAnimationFrame(()=>ov.classList.add('open'));mt.setAttribute('aria-expanded','true');mt.setAttribute('aria-label','Close menu');root.classList.add('menu-open')}
  function closeMenu(){ov.classList.remove('open');mt.setAttribute('aria-expanded','false');mt.setAttribute('aria-label','Open menu');root.classList.remove('menu-open');setTimeout(()=>{if(!ov.classList.contains('open'))ov.hidden=true},340)}
  mt.addEventListener('click',()=>mt.getAttribute('aria-expanded')==='true'?closeMenu():openMenu());
  ov.addEventListener('click',e=>{if(e.target===ov)closeMenu()});
  ov.querySelectorAll('.menu-link').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mt.getAttribute('aria-expanded')==='true')closeMenu()});
