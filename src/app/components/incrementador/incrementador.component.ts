import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.scss']
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress', { static: false }) txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 40;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  masValor() {
    if (this.progreso < 100) {
      this.setProgreso(this.progreso + 5);
    }
  }
  menosValor() {
    if (this.progreso > 0) {
      this.setProgreso(this.progreso - 5);
    }
  }
  onChange(newValue: number) {
    if (newValue <= 0 ) {
      this.setProgreso(0);
      this.txtProgress.nativeElement.value = 0;
    } else if (newValue > 100 ) {
      this.setProgreso(100);
      this.txtProgress.nativeElement.value = 100;
    } else {
      this.setProgreso(newValue);
    }
  }

  setProgreso(newValue: number) {
    this.progreso = newValue;
    this.cambioValor.emit(this.progreso);
  }

}
