import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap2Component } from './baitap2.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { SliderComponent } from './slider/slider.component';
import { IndexcontentComponent } from './indexcontent/indexcontent.component';
import { ItemComponent } from './item/item.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: 'demo', component: Baitap2Component }];
@NgModule({
  declarations: [
    Baitap2Component,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    SliderComponent,
    IndexcontentComponent,
    ItemComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  // exports: [Baitap2Component],
})
export class Baitap2Module {}
