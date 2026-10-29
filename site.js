document.querySelectorAll('.hero video').forEach(v=>{v.play().catch(()=>{})});
const b=document.querySelector('.snd');
const tone=new Audio();tone.loop=true;tone.preload='none';
tone.src=tone.canPlayType('audio/mp4')?'video/love_528.m4a':'video/love_528.mp3';
const setState=on=>{b.setAttribute('aria-pressed',on);b.classList.toggle('playing',on);b.setAttribute('aria-label',on?'Pause love frequency (528 Hz)':'Play love frequency (528 Hz)')};
b.addEventListener('click',()=>{if(tone.paused){b.classList.add('loading');tone.play().then(()=>setState(true)).catch(()=>setState(false)).finally(()=>b.classList.remove('loading'))}else{tone.pause();setState(false)}});
tone.addEventListener('pause',()=>setState(false));
// review helper: ?only=<section id> shows just that section (used for screenshots)
const only=new URLSearchParams(location.search).get('only');
if(only){document.querySelectorAll('body>section,body>p.intro').forEach(s=>{if(s.id!==only)s.style.display='none'});document.querySelector('header').style.position='static';document.querySelector('header').style.mixBlendMode='normal';document.querySelector('header').style.color='#2a2724';document.querySelector('.spread,.center')&&(document.getElementById(only).style.marginTop='40px')}
const hd=document.querySelector('header'),hero=document.querySelector('.hero');
const upd=()=>hd.classList.toggle('solid',scrollY>hero.offsetHeight-60);addEventListener('scroll',upd);upd();
