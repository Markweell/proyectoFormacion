import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcripcion: Subscription;
  constructor() { }

  ngOnInit() {
    this.subcripcion =   this.regresaObservable()
    .pipe(retry(2)).subscribe(
      num => {console.log('Respuesta subscribe:  ', num); },
      error => {console.error('Error en el observable', error); },
      () => console.log('El observador terminó!')
      );
  }
  ngOnDestroy() {
    console.log('Cerrando la página');
    this.subcripcion.unsubscribe();
  }
  regresaObservable(): Observable<object> {
    return new Observable( observer => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador ++;
        const salida = {
          valor: contador
        };

        observer.next( salida );
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if (contador === 2) {
        //   clearInterval(intervalo);
        //   observer.error('Auxilio!');
        // }

      }, 1000);
    } ).pipe(
      map(resp => resp['valor']),
      filter( (valor, index) => {
        console.log('filter', valor, index);
        if ( (valor % 2 ) === 1 ) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
        })
      );
  }

}
