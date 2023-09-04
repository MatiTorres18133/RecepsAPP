import { Receta } from "./receta.model";
import { TipoIngrediente } from "./tipoIngrediente.model";
import { TipoReceta } from "./tipoReceta.model";


export class Ingrediente {
    id:number;
    nombre:string;
    cantidad:number;
    receta:Receta;
    tipo:TipoIngrediente;
    constructor( ingrediente?: Ingrediente ) {
    this.id = ingrediente?.id ?? 0;
    this.nombre = ingrediente?.nombre ?? "";
    this.cantidad = ingrediente.cantidad ?? 0;
    this.receta = ingrediente.receta?? new Receta();
    this.tipo = ingrediente?.tipo ?? new TipoIngrediente();

      }
    
    
    }
    