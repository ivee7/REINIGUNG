const formTextarea = document.getElementById('form-textarea');
const characterCounter = document.getElementById('character-counter');

formTextarea.addEventListener('focus', () => {
    characterCounter.style.opacity = 1;
})

formTextarea.addEventListener('blur', () => {
    characterCounter.style.opacity = 0;
})

formTextarea.addEventListener('input', () => {
    const typed = formTextarea.value.length;

    characterCounter.textContent = `${typed} / 250`;
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
               method: 'POST',
               body: formData
           });
           if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
           } else {
                form.classList.remove('_sending');
                alert('Ошибка');
           }
        }
    }

    function formValidate(form) {
        let error = 0;

        const formReq = document.querySelectorAll('._req');
        const blankText = document.querySelectorAll('.form__blank-input-text');
        const invalidEmail = document.querySelector('.form__gap_email');

        for (let i = 0; i < formReq.length; i++) {
            const field = formReq[i];
            const necField = blankText[i];
            formRemoveError(field, necField);
            invalEmailRemoveError(field, invalidEmail);

            if (field.value !== '' && field.classList.contains('form__email-input')) {
                if (emailTest(field)) {
                    invalEmailAddError(field, invalidEmail);
                    error++;
                }
            } else if (field.value === '') {
                formAddError(field, necField);
                error++;
            }
        }

        return error;
    }

    function formAddError(field, necField) {
        field.parentElement.classList.add('form__input-wrapper_wrong');
        necField.classList.add('form__blank-input-text_error');
    }

    function formRemoveError(field, necField) {
        field.parentElement.classList.remove('form__input-wrapper_wrong');
        necField.classList.remove('form__blank-input-text_error');
    }

    function invalEmailAddError(field, invalidEmail) {
        field.parentElement.classList.add('form__input-wrapper_wrong');
        invalidEmail.classList.add('form__inavalid-email');
    }

    function invalEmailRemoveError(field, invalidEmail) {
        field.parentElement.classList.remove('form__input-wrapper_wrong');
        invalidEmail.classList.remove('form__inavalid-email');
    }

    function emailTest(field) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field.value);
    }
});