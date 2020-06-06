import { Component, OnInit } from '@angular/core';
import { service } from '../service/service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  string;
  constructor(
    private readonly leer: service
  ) { }

  ngOnInit(): void {
    this.leer.ver('http://localhost:1337/productos').
    subscribe((result)=>{
      this.string = result;
    })
  }

}
