import {Request, Response} from 'express';
import grupoModel from '../models/grupo.model';

export const listarGrupo = async (req: Request, res: Response) => {
       
       
        await grupoModel.find((err, resp) => {

            if(err){
                return res.status(500).json({
                    ok: false,
                    mensage: 'Error en DB',
                    err
                })
            }
            return res.json({
                ok: true,
                mensage: 'Grupos en DB activos',
                grupo: resp
            })

        }) 
}


export const crearGrupo = async (req: Request, res: Response) => {
       
   const grupo = req.body;
   const newGrupo = new grupoModel(grupo);
   await newGrupo.save((err, save) => {
    if(err){
        return res.status(500).json({
            ok: false,
            mensage: 'Error en DB',
            err
        })
    }

     res.json({
        ok: true,
        mensage: 'grupo Guardado',
        grupo: save
    })
   })
   
}




export const eliminarGrupo = async (req: Request, res: Response) => {
       

    const { id } = req.params;
    await grupoModel.findByIdAndRemove(id, (err, resp) => {
        if(err){
                return res.status(500).json({
                    ok: false,
                    mensage: 'Error en DB',
                    err
                })
            }
        
            res.json({
                ok: true,
                mensage: 'Grupo Eliminado'
            })
        })
    
    
    
}

