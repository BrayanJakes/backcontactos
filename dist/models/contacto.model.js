"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const agendaSchema = new mongoose_1.Schema({
    nombre: { type: String },
    email: { type: String },
    telefono: { type: String, unique: true },
    grupo: { type: String },
});
const agendaModel = mongoose_1.model('agenda', agendaSchema);
exports.default = agendaModel;
