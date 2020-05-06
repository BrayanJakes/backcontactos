"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grupo_model_1 = __importDefault(require("../models/grupo.model"));
exports.listarGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield grupo_model_1.default.find((err, resp) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensage: 'Error en DB',
                err
            });
        }
        return res.json({
            ok: true,
            mensage: 'Grupos en DB activos',
            grupo: resp
        });
    });
});
exports.crearGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const grupo = req.body;
    const newGrupo = new grupo_model_1.default(grupo);
    yield newGrupo.save((err, save) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensage: 'Error en DB',
                err
            });
        }
        res.json({
            ok: true,
            mensage: 'grupo Guardado',
            grupo: save
        });
    });
});
exports.eliminarGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield grupo_model_1.default.findByIdAndRemove(id, (err, resp) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensage: 'Error en DB',
                err
            });
        }
        res.json({
            ok: true,
            mensage: 'Grupo Eliminado'
        });
    });
});
