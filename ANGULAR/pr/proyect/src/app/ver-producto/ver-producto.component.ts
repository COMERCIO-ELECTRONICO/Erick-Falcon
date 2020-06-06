import { Component, OnInit } from '@angular/core';
import { service } from '../service/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})

export class VerProductoComponent implements OnInit {


  string;
  constructor(
    private readonly leer: service,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.leer.ver('http://localhost:1337/productos').
    subscribe((result)=>{
      this.string = result;
    })

    
  }

    editar(name){
      console.log('valor del name');
    console.log(name);
    }

    eliminar(name){
      this.leer.eliminar((`http://localhost:1337/productos/${name.id}`))
      .subscribe();
      this.router.navigate(['/admin/ver-product']);
      alert('Producto eliminado EXITOSO')
    }
}
