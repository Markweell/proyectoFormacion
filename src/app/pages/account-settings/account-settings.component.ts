
import { Component, OnInit, Inject, ElementRef, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  constructor(private settingService: SettingsService, @Inject(DOCUMENT) private _document, private renderer: Renderer2) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, elemento: ElementRef) {
    this.checkear(elemento);
    const url = `assets/css/colors/${tema}.css`;
    this.settingService.guardarAjustes(
      {
        temaUrl: url,
        tema
      }
    );
    this.settingService.cargarAjustes();
  }
  checkear(elemento: ElementRef) {
    const selector = this._document.getElementsByClassName('selector');
    for (const item of selector) {
      this.renderer.removeClass(item, 'working');
    }
    this.renderer.addClass(elemento, 'working');
  }
  colocarCheck() {
    const selector = this._document.getElementsByClassName('selector');
    const tema = this.settingService.ajustes.tema;
    for (const item of selector) {
      if (item.getAttribute('data-theme') === tema){
        this.renderer.addClass(item, 'working');
        break;
      }
    }
  }
}

