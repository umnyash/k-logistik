function initRequestForm(
  formElement,
  setTelFieldMask,
  sendData,
  openModal,
  showAlert,
  onSuccess = () => {},
) {
  const submitButtonElement = formElement.querySelector('.request-form__submit-button');
  const nameFieldElement = formElement.querySelector('.request-form__item--name .text-field__control');
  const telFieldElement = formElement.querySelector('.request-form__item--tel .text-field__control');
  const telFieldControlElement = formElement.querySelector('.request-form__item--tel .text-field__control');

  setTelFieldMask(telFieldControlElement);

  nameFieldElement.setAttribute('data-pristine-pattern', '/^[a-zа-яЁё -]+$/i');
  nameFieldElement.dataset.pristineRequiredMessage = 'Заполните это поле.';
  nameFieldElement.dataset.pristinePatternMessage = 'Допустимы только буквы, дефисы и пробелы.';

  telFieldElement.dataset.pristineRequiredMessage = 'Заполните это поле.';
  telFieldElement.dataset.pristineEmailMessage = 'Введите корректный номер телефона.';

  const actionUrl = formElement.getAttribute('action');

  const pristine = new Pristine(formElement, {
    classTo: 'request-form__item',
    errorClass: 'invalid',
    errorTextParent: 'request-form__item',
    errorTextTag: 'p',
    errorTextClass: 'prompt-text',
  });

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      submitButtonElement.disabled = true;
      submitButtonElement.classList.add('button--pending');

      sendData(
        actionUrl,
        new FormData(evt.target),
        () => {
          onSuccess();
          showAlert(openModal, {
            heading: 'Заявка оставлена',
            text: 'Спасибо! Данные успешно отправлены.',
          });
          formElement.reset();
        },
        () => {
          showAlert(openModal, {
            status: 'error',
            heading: '❌ Не удалось оставить заявку',
            text: 'Проверьте подключение к интернету и попробуйте снова.'
          });
        },
        () => {
          submitButtonElement.disabled = false;
          submitButtonElement.classList.remove('button--pending');
        }
      );
    } else {
      formElement.classList.remove('shake');
      setTimeout(() => formElement.classList.add('shake'), 50);
    }
  });

  return pristine;
}

export { initRequestForm };
