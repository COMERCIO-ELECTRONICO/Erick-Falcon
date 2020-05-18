import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'prueba1';

    titulo = 'Soy tu padre';
    nombreBoton = 'Alerta';
    imagen = 'https://http2.mlstatic.com/baraja-madisonist-playing-cards-daniel-madison-D_NQ_NP_709293-MPE27934094655_082018-F.webp';
    obtenerRespuestaHijo(evento) {
        console.log(evento)
    }


}
