import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    crearSuperheroeController,
    actualizarSuperheroeController,
    borrarSuperheroePorIdController,
    borrarSuperheroePorNombreController,
} from '../controllers/superheroesController.mjs';

const router = express.Router();

// M E T O D O S HTTP CRUD - Create, Read, Update, Delete //

// Rutas get LEER u OBTENER //

router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller); // Estatica // 
router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

// Rutas post CREAR //
router.post('/heroes', crearSuperheroeController);

// Rutas put Actualizar //

router.put('/heroes/:id', actualizarSuperheroeController);

// Rutas delete Borrar //

router.delete('/heroes/:id', borrarSuperheroePorIdController);
router.delete('/heroes/nombre/:nombre', borrarSuperheroePorNombreController);


export default router;



