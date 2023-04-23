
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
    let errors = 0;
    for (let i = 0; i < form.length; i++) {
        if (form[i].required === true && form[i].value === '') {
            errors = errors + 1;
        }
    }
    console.log(errors);
    myForm.classList.add('was-validated');
    if (errors === 0) {
        const data = {};
        for (let i = 0; i < form.length; i++) {
            console.log(form[i].value, form[i].id);
            data[form[i].id] = form[i].value;
        }
        const URL = 'https://reqres.in/api/users';
        const request = window.fetch(URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(
            response => response.json()
                .then(data => {
                    console.log(data);
                    appendAlert(`¡Tu solicitud ha sido enviada! - Fecha de ingreso del registro: ${data.createdAt}, con el ID número ${data.id}`, 'success');
                })
        );
    } else {
        appendAlert('¡Hay campos sin completar!', 'danger')
    }
};
const loginValidator = (event) => {
    event.preventDefault();
    const myForm = document.getElementById('login-form');
    const form = Array.from(myForm);
    let errors = 0;
    for (let i = 0; i < form.length; i++) {
        if (form[i].required === true && form[i].value === '') {
            errors = errors + 1;
        }
    }
    console.log(errors);
    myForm.classList.add('was-validated');
    if (errors === 0) {
        window.location.href = 'profiles.html';
    }
};