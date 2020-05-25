import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  valorAutocomplete = '';
  sugerencias = ['kevin', 'cachetes', 'orlando'];
  correo = '';
  password = '';
  seleccionadoValor;

  constructor() {}

  ngOnInit(): void {}

  buscarSugerencia(evento) {
    console.log(evento.query);
    if (evento.query !== '' ){
      this.sugerencias = ['david', 'erick', 'madison'];
    } else{
      this.sugerencias = ['david', 'erick', 'madison'];
    }
  }

  valorSeleccionado(evento) {
    console.log(evento);
    this.seleccionadoValor = evento;
  }

  ingresar(){

    if (this.password = "1234"){
      alert(this.correo);
    }else{
      alert("No existe");

    }
  }
}