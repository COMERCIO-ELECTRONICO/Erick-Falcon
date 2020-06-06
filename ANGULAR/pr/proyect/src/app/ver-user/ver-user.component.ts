import { Component, OnInit } from '@angular/core';
import { service } from '../service/service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ver-user',
  templateUrl: './ver-user.component.html',
  styleUrls: ['./ver-user.component.css']
})
export class VerUserComponent implements OnInit {

  string;
  constructor(
    private readonly leer: service,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.leer.ver('http://localhost:1337/user').
    subscribe((result)=>{
      this.string = result;
    })
  }


  editar(name){
    console.log('valor del name');
    console.log(name);
  }
  
  eliminar(name){
    this.leer.eliminar((`http://localhost:1337/user/${name.id}`)).subscribe();
    alert('Usuario eliminado EXITOSO')
}
}

