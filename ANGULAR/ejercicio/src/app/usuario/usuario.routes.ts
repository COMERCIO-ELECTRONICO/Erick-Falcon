import { InfoUserComponent } from './info-user/info-user.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const rutas :Routes = [
    {
        path: ':nombre/info',
        component: InfoUserComponent
    }
]


@NgModule({
  imports: [ RouterModule.forChild(rutas) ],
  providers: [],
  exports: [RouterModule],
})

export class UsuarioRoutes {}
