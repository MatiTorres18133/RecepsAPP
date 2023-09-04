import { Usuario } from "./usuario.model";

export class TipoReceta {

id:number;
tipo:string;

constructor( tipoReceta?: TipoReceta ) {
    
    this.id = tipoReceta?.id ?? 0;
    this.tipo = tipoReceta?.tipo ?? "";
   
  }


}
