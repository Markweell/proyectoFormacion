import { NgModule } from '@angular/core';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    GraficoDonaComponent,
    IncrementadorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ChartsModule,
  ],
  exports: [
    GraficoDonaComponent,
    IncrementadorComponent
  ],
})
export class ComponentsModule { }
