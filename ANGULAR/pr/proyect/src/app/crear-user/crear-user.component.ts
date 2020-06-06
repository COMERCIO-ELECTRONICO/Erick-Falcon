import { Component, OnInit } from '@angular/core';
import { service } from './../service/service';

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.css']
})
export class CrearUserComponent implements OnInit {

  first_name=''
  second_name=''
  email=''
  password=''
  rol=''



  constructor(
    private readonly registra: service
  ) { }

  ngOnInit(): void {
  }

  registrar(){
    this.registra.registrar('http://localhost:1337/user',
      {
        primer_nom: this.first_name,
        segundo_nom: this.second_name,
        email: this.email,
        password: this.password,
        rol: this.rol
      }).subscribe((resultado)=>{console.log(resultado)})
      alert('Usuario nuevo REGISTRADO')
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
