import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrconstanciasPage } from './registrconstancias.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrconstanciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrconstanciasPageRoutingModule {}
