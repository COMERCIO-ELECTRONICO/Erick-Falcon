import { service } from './../service/service';
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css']
})
export class RegistrateComponent implements OnInit {

  first_name = '';
  second_name= '';
  email= '';
  password= '';
  //
  rol;
  user;
  roles;
 //
  seleccion='';
  perfilid;
 
 
 constructor(
    private readonly registra: service
  ) { }

  ngOnInit(): void {
    this.registra.ver('http://localhost:1337/roles').subscribe((resultROL)=>{this.roles=resultROL})
  }

  registrar(){
    this.registra.ver('http://localhost:1337/user?email='+this.email)
  .subscribe((result1)=>{
    if(JSON.stringify(result1)!== '[]'){
      alert('Usuario existinte')
    }else{

      this.registra.registrar('http://localhost:1337/user',
      {
        primer_nom: this.first_name,
        segundo_nom: this.second_name,
        email: this.email,
        password: this.password,
        rol: 'Usuario normal'
      }).subscribe((resultado)=>{console.log(resultado)})
      alert('Usuario nuevo REGISTRADO')
    }
  })
    
  }

  Form(formulario) {
    console.log(formulario);
    alert(
      'nombre uno:'+
       formulario.controls.first_name.value+
       'nombre dos:'+
       formulario.controls.second_name.value+
      'correo: ' +
        formulario.controls.email.value +
        'password: ' +
        formulario.controls.password.value
    );
  }
  
  

}
