import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module1Page } from './module1.page';

const routes: Routes = [
  {
    path: '',
    component: Module1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module1PageRoutingModule {}
