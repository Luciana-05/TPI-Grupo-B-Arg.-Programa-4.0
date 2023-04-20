
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    alertPlaceholder.innerHTML = '';
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
    ].join('')
    alertPlaceholder.append(wrapper)
}

const validations = (event) => {
    event.preventDefault();
    const myForm = document.getElementById('contact-form');
    const form = Array.from(myForm);
    console.log(form);
    let errors = 0;
    for (let i = 0; i < form.length; i++) {
        if (form[i].required === true && form[i].value === '') {
            errors = errors + 1;
        }
    }
    console.log(errors);
    myForm.classList.add('was-validated');
    if (errors === 0) {
        appendAlert('¡Tu solicitud ha sido enviada!', 'success');
    } else {
        appendAlert('¡Hay campos sin completar!', 'danger')
    }
};
