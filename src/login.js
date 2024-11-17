
const user = document.getElementById('userName');
const password = document.getElementById('password');
const button = document.getElementById('button');

button.addEventListener('click', (e)=>{
    e.preventDefault();

    let userValue = user.value;
    let passwordValue = password.value;
    getUsuario(userValue,passwordValue);
    
})

async function getUsuario(username,pass) {
    const data = await fetch('http://localhost:3000/usuarios');
    const result = await data.json();
    result.forEach((resp) =>{
        if (resp.userName === username && resp.password === pass) {
            alert('El usuario es correcto');
            location.href = 'http://localhost:5173/pages/nav.html';
            return;
        }
        return;
    })
    alert('no se encontro el usuario');
    location.href = 'http://localhost:5173/pages/login.html';
    return;
}