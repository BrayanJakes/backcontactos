import {Request, Response} from 'express';
import agendaModel from '../models/contacto.model';
import { Agenda } from '../interfaces/contacto.interface';

export const listarAgenda = async (req: Request, res: Response) => {
       
       
        await agendaModel.find((err, resp: Agenda) => {

            if(err){
                return res.status(500).json({
                    ok: false,
                    mensage: 'Error en DB',
                    err
                })
            }
            return res.json({
                ok: true,
                mensage: 'Contactos en DB activos',
                Agenda: resp
            })

        }) 
}


export const crearAgenda = async (req: Request, res: Response) => {
       
   const agenda: Agenda = req.body;
   const newAgenda = new agendaModel(agenda);
   await newAgenda.save((err, save) => {
    if(err){
        return res.status(500).json({
            ok: false,
            mensage: 'Error en DB',
            err
        })
    }

     res.json({
        ok: true,
        mensage: 'Contacto Guardado',
        agenda: save
    })
   })
   
}


export const actualizarContacto = async (req: Request, res: Response) => {
       
    const contacto: Agenda = req.body;
    const { id } = req.params;
    await agendaModel.findByIdAndUpdate(id, contacto, (err, resp) => {
        if(err){
                return res.status(500).json({
                    ok: false,
                    mensage: 'Error en DB',
                    err
                })
            }
        
            res.json({
                ok: true,
                mensage: 'Contacto Actualizado'
            })
        })
    
    
    
}


export const eliminarContacto = async (req: Request, res: Response) => {
       

    const { id } = req.params;
    await agendaModel.findByIdAndRemove(id, (err, resp) => {
        if(err){
                return res.status(500).json({
                    ok: false,
                    mensage: 'Error en DB',
                    err
                })
            }
        
            res.json({
                ok: true,
                mensage: 'Contacto Eliminado'
            })
        })
    
    
    
}


export const eliminarSeleccionados = async (req: Request, res: Response) => {
       

    const body: {id: string;}[] = req.body;
    console.log(body);

  
    body.forEach(async (id) => {
        await agendaModel.findByIdAndRemove(id, (err, resp) => {
            if(err){
                    return res.status(500).json({
                        ok: false,
                        mensage: 'Error en DB',
                        err
                    })
                }
            })


    })

    res.json({
        ok: true,
        mensaje: 'Contactos Eliminados'
    })

        
   

   
    
    
    
}