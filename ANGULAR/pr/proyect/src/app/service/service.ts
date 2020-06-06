import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()

export class service {
    constructor(
        private readonly metodos: HttpClient 
    ){}

    registrar(url: string, datos){
        return this.metodos.post(url, datos)
    }

    ver(url: string){
        return this.metodos.get(url)
    }

    editar(url: string, dataAEditar) { // editar
        return this.metodos.put(url, dataAEditar);
    
    }
    eliminar(url: string) { // eliminar
        return this.metodos.delete(url);
      }

}



 