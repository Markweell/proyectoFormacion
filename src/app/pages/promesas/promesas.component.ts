import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {

  constructor() {  }

  ngOnInit() {
    const promesa = this.contarTres();

    promesa.then(
      (mensaje) => console.log('terminó', mensaje)
      ).catch(error => console.log('Error en la promesa', error));
  }
  contarTres(): Promise<any> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval(() => {

        contador += 1;
        console.log('Contador', contador);

        if (contador === 3) {
          resolve('ok');
          // reject();
          clearInterval(intervalo);
        }

      }, 1000);
    });
  }

}
