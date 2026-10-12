document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');

  if(!contactForm)return;

  contactForm.addEventListener('submit',function (e)
  {
    e.preventDefault();

    const nameInput = contactForm.querySelector('input[type="text"]').value.trim();
    const emailInput = contactForm.querySelector('input[type="email"]').value.trim();
    const messageInput = contactForm.querySelector('textarea').value.trim();
  

  if (nameInput === ""||messageInput ===""){
    alert('لطفا تمامی فیلدهای الزامی را تکمیل کنید.');
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput)){
    alert('لطفا یک ایمیل معتبر وارد کنید.');
    return;
  }
  alert('پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.');
  contactForm.reset();
});
});
const counters = document.querySelectorAll(".stat-number");

function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow( 1 - progress, 3);
    const value = Math.floor(eased * target);
    el.textContent = value.toLocaleString("fa-IR");
    if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      obs.unobserve(entry.target);
    }
  });
} , { threshold: 0.5});

counters.forEach(c => observer.observe(c));

const tlItems = document.querySelectorAll(".timeline-item");
const tlObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
      tlObserver.unobserve(e.target);
    }
  });
}, { threshold:0.2});
tlItems.forEach((i) => tlObserver.observe(i));

const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');
menuIcon.addEventListener('click' , () =>{
  navList.classList.toggle('active')
});
