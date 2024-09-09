/*
const user = document.getElementById('user');
const password = document.getElementById('password');
const button = document.getElementById('button');

button.addEventListener('click', (e)=>{
    e.preventDefault();
    let userValue = user.value;
    let passwordValue = password.value;

    localStorage.setItem('user', userValue);
    localStorage.setItem('password', passwordValue);

    alert('Se agrego de manera correcta el usuario');
})
*/

const user = document.getElementById('user');
const password = document.getElementById('password');
const button = document.getElementById('button');

button.addEventListener('click', (e)=>{
    e.preventDefault();

    let userValue = user.value;
    let passwordValue = password.value;

    let userL = localStorage.getItem('user');
    let passL = localStorage.getItem('password');


    if(userValue === userL && passwordValue === passL){
        alert('Tu Usuario es correcto')
    }else{
        alert('Tu Usuario no es correcto')
    }
})