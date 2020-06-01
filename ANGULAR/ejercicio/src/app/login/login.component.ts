import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { LoginService } from '../services/login.service';

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

  constructor( private readonly _router: Router, 
    private readonly _loginService: LoginService ) {}

  ngOnInit(): void {
    this._loginService
    .metodoGet('http://localhost:1337/usuario')
    .subscribe((resultadoMetodoGet) => {
      console.log('Respuest de Get');
      console.log(resultadoMetodoGet);
    });
  }

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
    console.log(this.valorAutocomplete)
    if (this.password = "1234"){
      alert(this.correo);

    if (this.seleccionadoValor === 'david'){
      alert('es estudiante')
      this._router.navigate(['/estudiante','perfil'])
    }if(this.password='5678'){
      alert(this.correo);
      if(this.seleccionadoValor === 'madison'){
        alert('es maestro')
      this._router.navigate(['/profesor','perfil'])
      }
    }
    }else{
      alert("No existe");

    }
  }
}