function initRequestModal(
  modalElement,
  initRequestForm,
  setTelFieldMask,
  sendData,
  openModal,
  closeModal,
  showAlert
) {
  const formElement = modalElement.querySelector('.request-form');

  const pristine = initRequestForm(
    formElement,
    setTelFieldMask,
    sendData,
    openModal,
    showAlert,
    () => {
      closeModal(modalElement);
    },
  );

  document.querySelectorAll('[data-modal-opener="request"]').forEach((openerElement) => {
    openerElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      pristine.reset();
      formElement.reset();
      formElement.classList.remove('shake');
      openModal(modalElement);
      setTimeout(() => {
        formElement.querySelector('input').focus();
      }, 300);
    });
  });
}

export { initRequestModal };
