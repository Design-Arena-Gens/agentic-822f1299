const contactForm = document.querySelector('#contactForm');
const formNote = document.querySelector('#formNote');
const modal = document.querySelector('#successModal');
const closeModal = document.querySelector('#closeModal');
const yearSpan = document.querySelector('#year');

const setCurrentYear = () => {
  const now = new Date();
  if (yearSpan) {
    yearSpan.textContent = now.getFullYear();
  }
};

const openModal = () => {
  if (modal) {
    modal.hidden = false;
    modal.setAttribute('aria-modal', 'true');
  }
};

const hideModal = () => {
  if (modal) {
    modal.hidden = true;
    modal.removeAttribute('aria-modal');
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  if (formNote) {
    formNote.textContent = 'Submitting…';
  }

  // Simulate async submit with optimistic UI.
  setTimeout(() => {
    if (formNote) {
      formNote.textContent = 'We’ll reply within one business day.';
    }
    event.target.reset();
    openModal();
  }, 800);
};

const handleClickOutside = (event) => {
  if (modal && !modal.hidden) {
    const content = modal.querySelector('.modal__content');
    if (content && !content.contains(event.target)) {
      hideModal();
    }
  }
};

const handleEscape = (event) => {
  if (event.key === 'Escape') {
    hideModal();
  }
};

setCurrentYear();

if (contactForm) {
  contactForm.addEventListener('submit', handleSubmit);
}

if (closeModal) {
  closeModal.addEventListener('click', hideModal);
}

document.addEventListener('click', handleClickOutside);
document.addEventListener('keydown', handleEscape);
