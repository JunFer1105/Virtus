const express = require('express');
const db = require('../database');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('profile/profile');
});

router.get('/editar', async (req, res) => {
    const instituciones = await db.query("SELECT * FROM institucion_educativa");
    const ciclos = await db.query("SELECT * FROM ciclo_propedeutico");
    const areas = await db.query("SELECT * FROM area");
    
    res.render('profile/profileEdit', { instituciones, ciclos, areas });
});

router.post('/editar', async (req, res) => {
    const formulario = req.body;

    const infoParaDB = {
        k_cedula : formulario.cedula,
        n_nombre : formulario.nombre,
        o_genero : formulario.selecGenero,
        n_email : formulario.correo
    };

    if(formulario.inst == 'Si'){
        infoParaDB.fk_id_institucion = formulario.otroInstitucion;
    }else{
        infoParaDB.fk_id_institucion = formulario.selecInstitucion
    }


    if(formulario.area == 'Si'){
        infoParaDB.k_id_area = formulario.otroArea;
    }else{
        infoParaDB.k_id_area = formulario.selecArea;
    }


    if(formulario.cicl == 'Si'){
        infoParaDB.k_id_ciclo = formulario.otroCiclo;
    }else{
        infoParaDB.k_id_ciclo = formulario.selecInstitucion;
    }
    
    console.log(formulario);
    res.redirect('/perfil');
});

module.exports = router;