"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const grupoSchema = new mongoose_1.Schema({
    nombre: { type: String, unique: true }
});
const grupoModel = mongoose_1.model('grupo', grupoSchema);
exports.default = grupoModel;
