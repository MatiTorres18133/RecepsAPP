

export class PasosASeguir {

id:number;
paso:number;
descripcion:string;
recetaId:number;

constructor( pasosASeguir?: PasosASeguir ) {
    this.id = pasosASeguir?.id ?? 0;
    this.paso = pasosASeguir?.paso ?? 0;
    this.descripcion = pasosASeguir?.descripcion ?? "";
    this.recetaId = pasosASeguir?.recetaId ?? 0;
    
  }


}
