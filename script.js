// FAQ expand/collapse
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(btn => {
  btn.addEventListener('click', function() {
    // Close others
    faqQuestions.forEach(b => {
      if (b !== btn) b.classList.remove('active');
      if (b !== btn && b.nextElementSibling) b.nextElementSibling.style.display = 'none';
    });
    // Toggle this one
    btn.classList.toggle('active');
    const answer = btn.nextElementSibling;
    if (btn.classList.contains('active')) {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  });
});
// Prevent default on email forms
const emailForms = document.querySelectorAll('.email-form');
emailForms.forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('This is a demo. No backend is connected.');
  });
}); 