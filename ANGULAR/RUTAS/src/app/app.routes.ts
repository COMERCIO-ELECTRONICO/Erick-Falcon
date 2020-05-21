  
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./inicio/home/home.component";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { NoEncontradoComponent } from "./inicio/no-encontrado/no-encontrado.component";

const rutas: Routes = [
    {
        path: 'inicio',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'usuario',
        loadChildren: () => import('./usuario/usuario.module')
        .then(m => m.UsuarioModule)
    },

    {
        path: 'deber',
        loadChildren: () => import('./deber/deber.module')
            .then(db => db.DeberModule)

    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: HomeComponent
    },
    {
        path: '**',
        component: NoEncontradoComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    providers: [],
    declarations: [],
    exports: [RouterModule]
})

export class AppRoutesComponent {

}
