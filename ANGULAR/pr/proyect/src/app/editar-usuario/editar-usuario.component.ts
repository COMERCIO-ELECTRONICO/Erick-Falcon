import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { service } from '../service/service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  id;
  contenedor;
  nombreUno='';
  nombreDos='';
  email='';
  password='';
  rol='';


  constructor(
    private rout: ActivatedRoute,
    private router: Router,
    private readonly service: service
  ) { }

  ngOnInit(): void {
    this.contenedor = this.rout.snapshot.paramMap.get('id')
  this.service.ver('http://localhost:1337/user?id='+this.contenedor)
  .subscribe((result)=>{
    console.log(result[0]['id'])
    this.id=result[0]['id']
    this.nombreUno=result[0]['primer_nom']
    this.nombreDos=result[0]['segundo_nom']
    this.email=result[0]['email']
    this.password=result[0]['password']
    this.rol=result[0]['rol']
  })
  }

  guardar(){
    this.service.editar('http://localhost:1337/user/'+this.id,{
      primer_nom:this.nombreUno,
      segundo_nom:this.nombreDos,
      email:this.email,
      password:this.password,
      rol:this.rol,
      }).subscribe((result)=>{})
      alert('Usuario editado EXITOSO')
    
  }

}
