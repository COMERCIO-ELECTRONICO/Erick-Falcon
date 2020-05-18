//Llaves {}[]
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent implements OnInit {
    @Input() titulo: string;
    @Input() nombreBoton: string;
    @Input() imagenPath: string;

    @Output() saludoHijo = new EventEmitter();

    fecha = new Date();
    sueldo: number = 500;

  constructor() { }

  ngOnInit(): void {
  }

    saludar() {
        alert('Holiiii');
        this.saludoHijo.emit('Saludo de tu hijo');
    }
}
