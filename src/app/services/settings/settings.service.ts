import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
  }

  guardarAjustes(ajustes: Ajustes) {
    localStorage.setItem('ajustes', JSON.stringify(ajustes));
  }

  cargarAjustes() {
    const tema =  localStorage.getItem('ajustes');
    if (tema) {
      this.ajustes = JSON.parse(tema);
    }

    const url = `assets/css/colors/${this.ajustes.tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
