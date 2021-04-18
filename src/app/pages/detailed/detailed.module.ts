import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailedPageRoutingModule } from './detailed-routing.module';

import { DetailedPage } from './detailed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailedPageRoutingModule
  ],
  declarations: [DetailedPage]
})
export class DetailedPageModule {}
