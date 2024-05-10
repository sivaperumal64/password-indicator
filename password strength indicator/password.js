const password = document.getElementById('password');
const meter = document.querySelector('.strength-bar');
const text = document.querySelector('#strength-text span');

password.addEventListener('input', function () {
    const val = password.value;
    const result = zxcvbn(val);


    meter.style.width = `${result.score * 25}%`;


    switch (result.score) {
        case 0:
            text.textContent = 'Very Weak';
            break;
        case 1:
            text.textContent = 'Weak';
            break;
        case 2:
            text.textContent = 'Fair';
            break;
        case 3:
            text.textContent = 'Strong';
            break;
        case 4:
            text.textContent = 'Very Strong';
            break;
        default:
            text.textContent = '';
    }
});
