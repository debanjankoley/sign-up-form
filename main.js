const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
let passwordInputArray = [password, confirmPassword]

function toAddErrorClass() {
    if (password.value == '' || confirmPassword.value == '' || password.value !== confirmPassword.value) {
        passwordInputArray.forEach(input => input.classList.add('error'))
    } else {
        passwordInputArray.forEach(input => input.classList.remove('error'))
    }
}

toAddErrorClass()
passwordInputArray.forEach(input => input.addEventListener('change', toAddErrorClass))