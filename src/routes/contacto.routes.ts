import {Router} from 'express';
import { listarAgenda, crearAgenda, actualizarContacto, eliminarContacto, eliminarSeleccionados } from '../controllers/contacto.controllers';


const app = Router();

app.get('/', listarAgenda);
app.post('/', crearAgenda);
app.put('/:id', actualizarContacto);
app.delete('/:id', eliminarContacto);
app.post('/eliminarSeleccionados', eliminarSeleccionados);


export default app;
