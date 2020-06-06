import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { service } from '../service/service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  id;
  contenedor;
  nombre='';
  descripcion='';
  precio='';
  imagen='';

  constructor(
    private rout: ActivatedRoute,
    private router: Router,
    private readonly service: service
  ) { }

  ngOnInit(): void {
  this.contenedor = this.rout.snapshot.paramMap.get('id')
  this.service.ver('http://localhost:1337/productos?id='+this.contenedor)
  .subscribe((result)=>{
    console.log(result[0]['id'])
    this.id=result[0]['id']
    this.nombre=result[0]['nombre_pro']
    this.descripcion=result[0]['descripcion_pro']
    this.precio=result[0]['precio_pro']
    this.imagen=result[0]['imagen']
  })
  
}

guardar(){
  this.service.editar('http://localhost:1337/productos/'+this.id,{
    nombre_pro:this.nombre,
    descripcion_pro:this.descripcion,
    precio_pro:this.precio,
    imagen:this.imagen
    }).subscribe((result)=>{})
    alert('Producto editado EXITOSO');
  
}

}
