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

    //Recuperacion de los valores del html
    let name = $name.value;
    let lastName = $lastName.value;
    let dateNac = $dateNac.value;
    let telefono = $telefono.value;
    let email = $email.value
    let userName = $userName.value;
    let password = $password.value;
    let passwordTwo = $passwordTwo.value;
    //obtener los datos del localstorage o obtener una lista vacia
    const USERS = JSON.parse(localStorage.getItem('users')) || [];

    //verificar si el email del usuario ya se encuentra registrado
    const isUserRegistred = USERS.find(element => element.email === email);
    if(isUserRegistred){
        return alert("El correo electronico se encuentra registrado");
    }

    //verificar la coincidencia de las contrasenas
    if(password !== passwordTwo){
        return alert('las contrasenas deben ser iguales')
    }

    //agregar los datos en el formato JSON a la lista
    USERS.push({
        name: name,
        lastName: lastName,
        dateNac: dateNac,
        telefono: telefono,
        email: email,
        userName: userName,
        password: password
    })

    //agregar los datos al localstorage
    localStorage.setItem('users', JSON.stringify(USERS));
    alert('El usuario se registro de manera correcta')
    //redireccion al login
    window.location.href = 'login.html';
})