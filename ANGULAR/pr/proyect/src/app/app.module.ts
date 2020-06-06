import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HttpClientModule } from '@angular/common/http';
import { service } from './service/service';
import { FormsModule } from '@angular/forms';
import { ADMINComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';
import { CrearUserComponent } from './crear-user/crear-user.component';
import { VerUserComponent } from './ver-user/ver-user.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    QuienesSomosComponent,
    RegistrateComponent,
    IniciarSesionComponent,
    ProductosComponent,
    CarritoComponent,
    ADMINComponent,
    UserComponent,
    CrearProductoComponent,
    VerProductoComponent,
    CrearUserComponent,
    VerUserComponent,
    EditarProductoComponent,
    EditarUsuarioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutes,
    HttpClientModule,
    FormsModule

  ],
  providers: [service],
  bootstrap: [AppComponent]
})
export class AppModule { }
