let n1 = document.querySelector('#password');
let n2 = document.querySelector('#retype_password');
let res = document.querySelector('#verfication_status');

function verify() {
let pass = p1.value;
// cehck length
if (pass.length < 8 || pass.length > 20) {
    res.innerTest = "Password is too short or too long";
    res.classList.add('status-error');
    res.classList.remove('status-success');
}
else {
    res.innerText= 'Password is OK';
    res.classList.add('status-success');
    res.classList.remove('status-error');
}
}

// check the existent of an upper case letter