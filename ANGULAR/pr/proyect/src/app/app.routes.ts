import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { UserComponent } from './user/user.component';
import { ADMINComponent } from './admin/admin.component';
import { VerUserComponent } from './ver-user/ver-user.component';
import { CrearUserComponent } from './crear-user/crear-user.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ProductosComponent } from './productos/productos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarritoComponent } from './carrito/carrito.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const rutas: Routes = [
    {
        path: 'inicio',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: IniciarSesionComponent
    },
    {
        path: 'registrate',
        component: RegistrateComponent
    },
    //Admin
    {
        path: 'home/admin',
        component: ADMINComponent,
        canActivate: [AuthGuard]
        
    },
    {
        path: 'admin/product',
        component: CrearProductoComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'admin/ver-product',
        component: VerProductoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/creat-user',
        component: CrearUserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/ver-user',
        component: VerUserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/edit/producto/:id',
        component: EditarProductoComponent,
        canActivate: [AuthGuard]
        
    },
    {
        path: 'admin/edit/user/:id',
        component: EditarUsuarioComponent,
        canActivate: [AuthGuard]
    },
      //Fin admin
      //USER
    {
        path: 'user/home',
        component: UserComponent,
        canActivate: [AuthGuard]
        
    },
    {
        path: 'user/productos',
        component: ProductosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user/carrito',
        component: CarritoComponent,
        canActivate: [AuthGuard]
    },
    //fin USER
    {
        path: 'quienes_somos',
        component: QuienesSomosComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(rutas)
    ],
    providers: [],
    exports: [RouterModule]
})

export class AppRoutes{}