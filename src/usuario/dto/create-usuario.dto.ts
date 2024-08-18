import { Aplicacion } from "src/aplicacion/entities/aplicacion.entity";

export class CreateUsuarioDto {

    public nombreUsuario: string;
    public email: string;
    public aplicacionesDescargadas: Aplicacion[];

    constructor(
        nombreUsuario: string,
        email: string,
        aplicacionesDescargadas: Aplicacion[],
    ){
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.aplicacionesDescargadas = aplicacionesDescargadas;
    }
}
