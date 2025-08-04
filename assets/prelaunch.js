document.addEventListener('scroll', () => {
  const text = document.querySelector('.scroll-text');
  if (text) {
    text.style.transform = `translateY(${window.scrollY}px)`;
  }
});

const emailModal = document.querySelector('.email-modal');
const thankyouModal = document.querySelector('.thankyou-modal');
const nextButton = document.querySelector('.next-button');
const closeButtons = document.querySelectorAll('.modal .close');

nextButton?.addEventListener('click', () => {
  emailModal?.classList.add('open');
});

document.getElementById('email-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  emailModal?.classList.remove('open');
  thankyouModal?.classList.add('open');
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal')?.classList.remove('open');
  });
});
