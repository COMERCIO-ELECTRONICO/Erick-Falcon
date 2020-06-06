import { Component, OnInit } from '@angular/core';
import { service } from '../service/service'


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  nombre_pro=''
  descripcion_pro=''
  imagen_pro=''
  precio_pro=''
  
  constructor(
    private readonly leer: service
  ) { }

  ngOnInit(): void {
  }

  guardarPro(){
    this.leer.registrar('http://localhost:1337/productos',
    {
      nombre_pro: this.nombre_pro,
      descripcion_pro: this.descripcion_pro,
      imagen: this.imagen_pro,
      precio_pro:this.precio_pro
    }).subscribe((result)=>{result})
    alert('Producto creado EXITOSO')
  }

  Form(formulario){
    console.log(formulario);
    alert(
      'nombre_pro:'+
       formulario.controls.nombre_pro.value+
       'descripcion_pro:'+
       formulario.controls.descripcion_pro.value+
      'imagen_pro: ' +
        formulario.controls.imagen_pro.value +
        'precio_pro: ' +
        formulario.controls.precio_pro.value  )
  }
  
}
