import { Aplicacion } from "src/aplicacion/entities/aplicacion.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { clasificacionStar } from "./clasificacionStar";

export class Resenha {

    public id: number;
    public usuario: Usuario;
    public aplicacion: Aplicacion;
    public calificacion: clasificacionStar;
    public texto: String;
    public fecha: Date;

    constructor(
        id: number,
        usuario: Usuario,
        aplicacion: Aplicacion,
        calificacion: clasificacionStar,
        texto: string,
        fecha: Date,
    ){
        this.id = id;
        this.usuario = usuario;
        this.aplicacion = aplicacion;
        this.calificacion = calificacion;
        this.texto = texto;
        this.fecha = fecha;
    }
}
