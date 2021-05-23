import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module2PageRoutingModule } from './module2-routing.module';

import { Module2Page } from './module2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module2PageRoutingModule
  ],
  declarations: [Module2Page]
})
export class Module2PageModule {}
