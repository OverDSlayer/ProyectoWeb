const $button = document.getElementById('register')
//obtener html mediante el dom
const $name = document.getElementById('name');
const $lastName = document.getElementById('lastName');
const $dateNac = document.getElementById('dateNac');
const $telefono = document.getElementById('telefono');
const $email = document.getElementById('email');
const $userName = document.getElementById('userName');
const $password = document.getElementById('password');
const $passwordTwo = document.getElementById('passwordTwo');




//add funcionalidad
$button.addEventListener('click', (e)=>{
    e.preventDefault();
    //verificar la coincidencia de las contrasenas
    if(password !== passwordTwo){
        return alert('las contrasenas deben ser iguales')
    }
})

    