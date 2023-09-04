export class TipoIngrediente {
    id:number;
    tipo:string;
  
    
    constructor( tipoIngrediente?: TipoIngrediente ) {

        this.id = tipoIngrediente?.id ?? 0;
        this.tipo = tipoIngrediente?.tipo ?? "";
    
    }
    
    
    }
    