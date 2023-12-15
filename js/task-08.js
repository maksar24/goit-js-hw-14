const userForm = document.querySelector('.login-form');

userForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const {email, password} = event.currentTarget;

    if (email.value.length === 0 || password.value.length === 0) {
        return alert('Please fill in all the fields!')
    }
    const formData = new FormData(event.currentTarget)
    const data = {};

    formData.forEach((value, key) => data[key] = value);
    event.currentTarget.reset();
    console.log(data);
};