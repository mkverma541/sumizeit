// Select all steps and images
const steps = document.querySelectorAll('.Steps_steps-section__step__1gZnH');
const images = document.querySelectorAll('.Steps_steps-section__image__Vv7f0');

window.addEventListener('scroll', () => {
  steps.forEach((step, index) => {
    const rect = step.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.3) {
      steps.forEach((el) => el.classList.remove('active'));
      images.forEach((img) => img.classList.remove('active'));

      step.classList.add('active');
      images[index].classList.add('active');
    }
  });
});
