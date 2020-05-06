"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grupo_controllers_1 = require("../controllers/grupo.controllers");
const app = express_1.Router();
app.get('/', grupo_controllers_1.listarGrupo);
app.post('/', grupo_controllers_1.crearGrupo);
app.delete('/:id', grupo_controllers_1.eliminarGrupo);
exports.default = app;
