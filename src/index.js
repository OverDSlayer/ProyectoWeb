import express from 'express';
import bodyParser from 'body-parser';
import { getConnection } from './database.js';
import cors from 'cors';
/*--------------------------------------------*/
const puerto = 3000
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
/*--------------------------------------------*/

app.use(cors());
/*--------------------------------------------*/
//todo lo que tenga que ver para los end points de peliculas 
app.get('/peliculas', async (req, res) => {

    const connect = await getConnection();
    const [response] = await connect.query("SELECT * FROM peliculas;");
    res.json(response)
})
//buscar peliculas por id
app.get('/peliculas/:id', async (req, res) => {
    const connect = await getConnection();
    const { id } = req.params
    const [response] = await connect.query("SELECT * FROM peliculas WHERE id = ?;", [id]);
    res.json(response)
});
/*--------------------------------------------*/

app.get('/for-peliculas', async (req, res) => {
    const connect = await getConnection();
    const [response] = await connect.query("SELECT * FROM peliculas LIMIT 4;");
    res.json(response)
})
/*------------------------------------------*/
//Todo lo que tenga que ver con los end points de usuarios
app.get('/usuarios', async (req, res) => {
    const connect = await getConnection();
    const [response] = await connect.query("SELECT *  from usuarios;");
    res.json(response)
})

//post para subir usuarios
app.post('/usuarios/subir', async (req, res) => {
    const connect = await getConnection();
    const {name, lastName,dateNac,telefono,userName,email,password } = req.body;
    try {
        const [response] = await connect.query("INSERT INTO usuarios(nombres, apellidos, fechaNac, telefono, userName,correo, password) VALUES(?,?,?,?,?,?,?);", [name, lastName,dateNac,telefono,userName,email,password]);
        res.redirect('http://localhost:5173/pages/login.html');
    } catch(e) {
        console.log(e)
        res.redirect('http://localhost:5173/pages/registro.html');
    }
});

/*
//post para poder actualizar usuarios
app.put('/api/update', async (req, res) => {
    const connect = await getConnection();
    const { id, name, password } = req.body;
    try {
        const [response] = await connect.query(`
            UPDATE users
            SET name = ?,
            password = ?
            WHERE id = ?;
            `, [name, password, id]);
        res.status(200);
        res.redirect('http://localhost:5173/pages/form.html');
    } catch (error) {
        res.status(404)
        alert(error)
        res.redirect('http://localhost:5173/pages/form.html');
    }
});
*/
app.listen(puerto, () => {
    console.log("escuchando en el puerto: " + puerto);
});