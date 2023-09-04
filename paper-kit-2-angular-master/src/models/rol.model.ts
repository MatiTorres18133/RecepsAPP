
export class Rol {
    id:number;
    nombreRol:string;
    
    constructor( rol?: Rol ) {
        this.id = rol?.id ?? 0;
        this.nombreRol = rol?.nombreRol?? "";
    
       
      }
    
    
    }
    