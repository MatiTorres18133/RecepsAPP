import { Rol } from "./rol.model";

export class Usuario {

    id:number;
    nombre:string;
    apellido:string;
    password:string;
    token:string;
    fe_Creacion:Date;
    rol:Rol;
    correo:string;
    activo:boolean;
    
    
    constructor( usuario?: Usuario ) {
        this.id = usuario?.id ?? 0;
        this.nombre = usuario?.nombre ?? "";
        this.apellido = usuario?.apellido ?? "";
        this.rol = usuario?.rol ?? new Rol();
        this.password = usuario?.password ?? "";
        this.token = usuario?.token ?? "";
        this.fe_Creacion = usuario?.fe_Creacion ?? new Date();
        this.correo= usuario?.correo??"";
        this.activo = usuario?.activo ?? false;
      }
    
    
    }
    