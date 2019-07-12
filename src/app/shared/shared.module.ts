import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BreadcrumbsComponent, HeaderComponent, NopagefoundComponent, SidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [BreadcrumbsComponent, HeaderComponent, NopagefoundComponent, SidebarComponent],
  providers: [],
})

export class SharedModule { }
