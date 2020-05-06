import {Router} from 'express';
import { listarGrupo, crearGrupo, eliminarGrupo } from '../controllers/grupo.controllers';


const app = Router();

app.get('/', listarGrupo);
app.post('/', crearGrupo);
app.delete('/:id', eliminarGrupo);


export default app;
