import {Schema, model} from 'mongoose';

const agendaSchema = new Schema({

    nombre: {type: String},
    email: {type: String},
    telefono: {type: String, unique: true},
    grupo: {type: String},


})

const agendaModel = model('agenda', agendaSchema);

export default agendaModel;