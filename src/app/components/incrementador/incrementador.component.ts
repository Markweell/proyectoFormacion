import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.scss']
})
export class IncrementadorComponent implements OnInit {
  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 40;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  masValor() {
    if (this.progreso < 100) {
      this.progreso += 5;
    }
    this.cambioValor.emit(this.progreso);
  }
  menosValor() {
    if (this.progreso > 0) {
      this.progreso -= 5;
    }
    this.cambioValor.emit(this.progreso);
  }


}
