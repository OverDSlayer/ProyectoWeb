
const user = document.getElementById('userName');
const password = document.getElementById('password');
const button = document.getElementById('button');

button.addEventListener('click', (e)=>{
    e.preventDefault();

    let userValue = user.value;
    let passwordValue = password.value;

    const USERS = JSON.parse(localStorage.getItem('users')) || []

    const esCorrecto = USERS.find(element => element.userName === userValue && element.password === passwordValue)
    if (esCorrecto) {
        window.location.href = 'peliculas.html'
        return alert('El usuario es correcto');
    }else{
        return alert('El usuario es incorrecto');
    }
})