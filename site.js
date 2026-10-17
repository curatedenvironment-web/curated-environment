document.querySelectorAll('.hero video').forEach(v=>{v.play().catch(()=>{})});
const b=document.querySelector('.snd');
b.addEventListener('click',()=>{const on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',on);
 const v=[...document.querySelectorAll('.hero video')].find(x=>getComputedStyle(x).display!=='none');
 const t=v.currentTime;v.src=on?v.dataset.sound:v.dataset.muted;v.muted=!on;v.currentTime=t;v.play().catch(()=>{});});
// review helper: ?only=<section id> shows just that section (used for screenshots)
const only=new URLSearchParams(location.search).get('only');
if(only){document.querySelectorAll('body>section,body>p.intro').forEach(s=>{if(s.id!==only)s.style.display='none'});document.querySelector('header').style.position='static';document.querySelector('header').style.mixBlendMode='normal';document.querySelector('header').style.color='#2a2724';document.querySelector('.spread,.center')&&(document.getElementById(only).style.marginTop='40px')}
const hd=document.querySelector('header'),hero=document.querySelector('.hero');
const upd=()=>hd.classList.toggle('solid',scrollY>hero.offsetHeight-60);addEventListener('scroll',upd);upd();
