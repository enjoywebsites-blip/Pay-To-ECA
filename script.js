(() => {
 document.documentElement.classList.add('js-motion');
 const button=document.querySelector('.menu'), nav=document.querySelector('#nav');
 const close=()=>{if(!button||!nav)return;button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open navigation');nav.classList.remove('open');};
 if(button&&nav){button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open);});nav.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});document.addEventListener('click',e=>{if(nav.classList.contains('open')&&!nav.contains(e.target)&&!button.contains(e.target))close();});window.addEventListener('resize',()=>{if(innerWidth>760)close();});}
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches, reveals=[...document.querySelectorAll('.reveal')];
 if('IntersectionObserver'in window&&!reduce){const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}}),{threshold:.12,rootMargin:'0px 0px -30px 0px'});reveals.forEach(el=>obs.observe(el));}else reveals.forEach(el=>el.classList.add('visible'));
 const links=[...document.querySelectorAll('#nav a[href^="#"]')], sections=[...document.querySelectorAll('main section[id]')];
 if('IntersectionObserver'in window){const so=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;links.forEach(a=>{if(a.hash==='#'+e.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}),{rootMargin:'-25% 0px -65% 0px'});sections.forEach(s=>so.observe(s));}
 const sticky=document.querySelector('.sticky-buy'),hero=document.querySelector('.hero');
 if(sticky&&hero&&'IntersectionObserver'in window){const st=new IntersectionObserver(entries=>sticky.classList.toggle('shown',!entries[0].isIntersecting&&innerWidth<=760),{threshold:.04});st.observe(hero);window.addEventListener('resize',()=>sticky.classList.toggle('shown',innerWidth<=760&&scrollY>hero.offsetHeight*.65));}
 const faqs=[...document.querySelectorAll('.faq-list details')];faqs.forEach(item=>item.addEventListener('toggle',()=>{if(item.open)faqs.forEach(other=>{if(other!==item)other.open=false;});}));
})();
