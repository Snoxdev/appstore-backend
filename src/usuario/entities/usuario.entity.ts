import { ApiProperty } from "@nestjs/swagger";
import { Aplicacion } from "src/aplicacion/entities/aplicacion.entity";

export class Usuario {
    @ApiProperty()
    public nombreUsuario: string;
    @ApiProperty()
    public email: string;
    @ApiProperty()
    public password: string;
    @ApiProperty()
    public aplicacionesDescargadas: Aplicacion[];

    constructor(
        nombreUsuario: string,
        email: string,
        password: string,
        aplicacionesDescargadas: Aplicacion[],
    ){
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
        this.aplicacionesDescargadas = aplicacionesDescargadas;
    }
}
