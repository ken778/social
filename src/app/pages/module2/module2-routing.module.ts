import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module2Page } from './module2.page';

const routes: Routes = [
  {
    path: '',
    component: Module2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module2PageRoutingModule {}
