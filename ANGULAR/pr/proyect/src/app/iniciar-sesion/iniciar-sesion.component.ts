import { Component, OnInit } from '@angular/core';
import { service } from '../service/service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent implements OnInit {


  email='';
  password='';
  
  constructor(
    private readonly leer: service,
    private router: Router, 
    private data: DataService
  ) { }

    ver(){

      this.leer.ver(
        'http://localhost:1337/user?email=' + this.email + '&password=' + this.password)
        .subscribe((ver)=>{
          if(JSON.stringify(ver)== '[]'){
            alert('Datos incorrectos');
          }else{
            alert('Welcome')
            if(ver[0]["rol"] == 'Usuario normal' ){
              this.data.logueado = true;
              this.router.navigate(['/user/home']);
              
            }else{
              alert('Bienvenido Admin')
              this.data.logueado = true;
              this.router.navigate(['/home/admin']);
            }
          }
        })}



  ngOnInit(): void {
  }

  Form(formulario) {
    console.log(formulario);
    (
      'correo: ' +
        formulario.controls.email.value +
        'password: ' +
        formulario.controls.password.value
    );
  }
}
 
