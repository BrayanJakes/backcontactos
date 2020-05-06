import {Schema, model} from 'mongoose';

const grupoSchema = new Schema({

    nombre: {type: String, unique: true}


})

const grupoModel = model('grupo', grupoSchema);

export default grupoModel;