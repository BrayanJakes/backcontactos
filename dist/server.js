"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const conexion_1 = __importDefault(require("./conexion"));
// Routes
const contacto_routes_1 = __importDefault(require("./routes/contacto.routes"));
const grupo_routes_1 = __importDefault(require("./routes/grupo.routes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.puerto = Number(process.env.PORT) || 4000;
        this.config();
        this.conexionDB();
        this.routes();
    }
    //Configuraciones
    config() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    //Conexion a la base de datos
    conexionDB() {
        conexion_1.default();
    }
    //Rutas
    routes() {
        this.app.use('/api/contacto', contacto_routes_1.default);
        this.app.use('/api/grupo', grupo_routes_1.default);
    }
    //Inicia El server
    start() {
        this.app.listen(this.puerto, () => console.log('Server en el puerto', this.puerto));
    }
}
exports.default = Server;
