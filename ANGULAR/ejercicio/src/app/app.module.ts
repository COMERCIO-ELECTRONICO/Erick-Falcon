import { LoginService } from './services/login.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoEncontradoComponent,
    IniciarSesionComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    MatInputModule,
    AutoCompleteModule,
    UsuarioModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
