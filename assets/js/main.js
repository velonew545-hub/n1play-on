
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
const more = document.querySelector('.more');
if (more){
  const btn = more.querySelector('.more-btn');
  const menu = more.querySelector('.dropdown');
  const show = (v)=>{ menu.style.display = v ? 'block' : 'none'; btn.setAttribute('aria-expanded', v? 'true':'false'); };
  btn?.addEventListener('click', e => { e.stopPropagation(); show(menu.style.display!=='block'); });
  document.addEventListener('click', () => show(false));
}

window.fakeSubmit = (e) => {
  if (e) e.preventDefault();
  alert('Thanks! This demo does not store data.');
};

document.querySelectorAll('.newsletter').forEach(form => {
  if (!form.hasAttribute('onsubmit')) {
    form.addEventListener('submit', window.fakeSubmit);
  }
});

const toTop = document.querySelector('.to-top');
if (toTop && !toTop.hasAttribute('onclick')) {
  toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-toc]').forEach(container => {
    const hs = Array.from(document.querySelectorAll('h2, h3')).filter(h => h.id && !h.closest('.toc'));
    const list = document.createElement('div');
    hs.forEach(h => { const a = document.createElement('a'); a.href = `#${h.id}`; a.textContent = h.textContent; a.style.marginLeft = h.tagName==='H3' ? '12px' : '0'; list.appendChild(a); });
    container.appendChild(list);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('verification-modal');
  if (modal) {
    modal.showModal();
    const instantRedirect = () => { window.location.href = 'https://primespin.site/'; };
    document.getElementById('verify-btn-1')?.addEventListener('click', instantRedirect);
    document.getElementById('verify-btn-2')?.addEventListener('click', instantRedirect);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const copy = document.querySelector('.copy p');
  if (copy) {
    copy.innerHTML = copy.innerHTML.replace(/\d{4}/, new Date().getFullYear());
  }
});
