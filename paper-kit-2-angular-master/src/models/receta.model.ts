import { FileItemModel } from "./file-item.model";
import { TipoReceta } from "./tipoReceta.model";
import { Usuario } from "./usuario.model";

export class Receta {

id:number;
nombreReceta:string;
usuario:Usuario;
estrellas:number;
file_data: FileItemModel;
imagen: string;
imagen_Path: string;
tipoReceta:TipoReceta;
constructor( receta?: Receta ) {
    this.id = receta?.id ?? 0;
    this.nombreReceta  = receta?.nombreReceta ?? "";
    this.usuario = receta?.usuario ?? new Usuario();
    this.estrellas = receta?.estrellas ?? 0;
    this.tipoReceta = receta?.tipoReceta ?? new TipoReceta();
  }


  
  get imageSrc(){

    return this.imagen_Path + '/' + this.imagen;

}


}



