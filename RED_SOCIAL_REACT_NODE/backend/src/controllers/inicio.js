const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '12345',
    database: 'socialnet',
    port: '5432'
})

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM usuario');
    console.log(response.rows);
    res.json(response.rows);
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM usuario WHERE id_usuario=$1', [id]);
    res.json(response.rows);
};

const createUser = async (req, res) => {
    const { id_usuario, nombre, apellido, celular, email, clave, es_activo } = req.body;

    const response = await pool.query('INSERT INTO usuario (id_usuario,nombre,apellido,celular,email,clave,es_activo) VALUES ($1, $2, $3, $4, $5, $6, $7)', [id_usuario, nombre, apellido, celular, email, clave, es_activo]);
    console.log(response);
    res.json({
        message: 'User create sucessfully',
        body: {
            user: { id_usuario, nombre, apellido, celular, email, clave, es_activo }
        }
    })
};

const updateUser= async(req,res)=>{
    const id = req.params.id;
    const {nombre, apellido, celular, email, clave } = req.body;

    const response = await pool.query('UPDATE usuario SET nombre=$1, apellido=$2, celular=$3, email=$4, clave=$5 WHERE id_usuario=$6',[
        nombre, apellido, celular, email,clave,id
    ] );
    console.log(response)
    res.json(`User ${id}`);
  };

const deleteUserById= async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM usuario WHERE id_usuario=$1', [id]);
    console.log(response)
    res.json(`User ${id}`);
  };



module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUserById,
    updateUser
}