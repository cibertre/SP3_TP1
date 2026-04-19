import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30 } from '../services/superheroesService.mjs';
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';
import SuperHero from '../models/SuperHero.mjs';

export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const {id} = req.params;
        const superheroe = await obtenerSuperheroePorId(id);
        if (!superheroe) {
            return res.status(404).send({mensaje: 'Superheroe no encontrado'});
        }
        const superheroeFormateado = renderizarSuperheroe (superheroe);
        res.status(200).json(superheroeFormateado);
        } 
        catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener el superheroe', error: error.message});
        }
     
    
}

export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes ();
        const superheroesFormateados = renderizarListaSuperheroes (superheroes);
        res.status(200).json(superheroesFormateados);
        }
        catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los superheroes', error: error.message });
        }
    }

export async function buscarSuperheroesPorAtributoController (req, res) {
    try {
        const {atributo, valor} = req.params;
        const superheroes = await buscarSuperheroesPorAtributo (atributo, valor);
        if (superheroes.length === 0) {
            return res.status(404).send({mensaje: 'No se encontraron superheroes con ese atributo'});
        }
            const superheroesFormateados = renderizarListaSuperheroes(superheroes);
            res.status(200).json(superheroesFormateados);
        } 
        catch (error) {
            res.status(500).send({mensaje: 'Error al buscar los superheroes', error: error.message});
        }
        }
    
        export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
            try{
                const superheroes = await obtenerSuperheroesMayoresDe30();
                if(superheroes.length === 0) {
                    return res.status(404).send({mensaje: 'No se encontraron superheroes mayores de 30 años'});
         }
                const superheroesFormateados = renderizarListaSuperheroes(superheroes);
                res.status(200).json(superheroesFormateados);
            } 
            catch (error) {
                res.status(500).send({mensaje: 'Error al obtener superheroes mayores de 30', error: error.message});
            }
        }
        export const crearSuperheroeController = async (req, res) => {
    try {
        const nuevoHeroe = new SuperHero(req.body);

        const heroeGuardado = await nuevoHeroe.save();

        res.status(201).json(heroeGuardado);
    } catch (error) {
        console.log(error); // 👈 AGREGÁ ESTO
        res.status(500).json({ mensaje: "Error al crear el superheroe" });
    }
    }
        export const actualizarSuperheroeController = async (req, res) => {
    try {
        const { id } = req.params;
        const heroeActualizado = await SuperHero.findByIdAndUpdate(
            id,
            req.body,
            { new: true } // devuelve el actualizado
        );

        res.status(200).json(heroeActualizado);
        } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar el superheroe" });
        }
}
export const borrarSuperheroePorIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const heroeEliminado = await SuperHero.findByIdAndDelete(id);

        res.status(200).json(heroeEliminado);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al borrar el superheroe" });
    }
}
export const borrarSuperheroePorNombreController = async (req, res) => {
    try {
        const { nombre } = req.params;

        const heroeEliminado = await SuperHero.findOneAndDelete({ nombre });

        res.status(200).json(heroeEliminado);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al borrar el superheroe" });
    }
};
        



    
            




    
        
    


