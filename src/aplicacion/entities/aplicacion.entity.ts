import { ApiProperty } from "@nestjs/swagger";
import { sisOperativo } from "./sisOperativo";

export class Aplicacion {
    @ApiProperty()
    public id: number;
    @ApiProperty()
    public nombre: string;
    @ApiProperty()
    public precio: number;
    @ApiProperty({enum: ['Android', 'IOS']})
    public sistemaOperativo: sisOperativo; //(sistema operativo compatible: "Android", "iOS")
    @ApiProperty()
    public calificacion: number;
    @ApiProperty()
    public tamanho: number;
    @ApiProperty()
    public version: string;
    @ApiProperty()
    public descargas: number;

    constructor (
        id: number,
        nombre: string,
        precio: number,
        sistemaOperativo: sisOperativo,
        calificacion: number, 
        tamanho: number,
        version: string,
        descargas: number,
    ){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.sistemaOperativo = sistemaOperativo;
        this.calificacion = calificacion; 
        this.tamanho = tamanho;
        this.version = version;
        this.descargas = descargas; 
    }

    

}
