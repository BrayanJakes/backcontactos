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
const contacto_model_1 = __importDefault(require("../models/contacto.model"));
exports.listarAgenda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield contacto_model_1.default.find((err, resp) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensage: 'Error en DB',
                err
            });
        }
        return res.json({
            ok: true,
            mensage: 'Contactos en DB activos',
            Agenda: resp
        });
    });
});
exports.crearAgenda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const agenda = req.body;
    const newAgenda = new contacto_model_1.default(agenda);
    yield newAgenda.save((err, save) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensage: 'Error en DB',
                err
            });
        }
        res.json({
            ok: true,
            mensage: 'Contacto Guardado',
            agenda: save
        });
    });
});
exports.actualizarContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacto = req.body;
    const { id } = req.params;
    yield contacto_model_1.default.findByIdAndUpdate(id, contacto, (err, resp) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensage: 'Error en DB',
                err
            });
        }
        res.json({
            ok: true,
            mensage: 'Contacto Actualizado'
        });
    });
});
exports.eliminarContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield contacto_model_1.default.findByIdAndRemove(id, (err, resp) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensage: 'Error en DB',
                err
            });
        }
        res.json({
            ok: true,
            mensage: 'Contacto Eliminado'
        });
    });
});
exports.eliminarSeleccionados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log(body);
    body.forEach((id) => __awaiter(void 0, void 0, void 0, function* () {
        yield contacto_model_1.default.findByIdAndRemove(id, (err, resp) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensage: 'Error en DB',
                    err
                });
            }
        });
    }));
    res.json({
        ok: true,
        mensaje: 'Contactos Eliminados'
    });
});
