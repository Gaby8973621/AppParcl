import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallConstanciaPage } from './detall-constancia.page';

const routes: Routes = [
  {
    path: '',
    component: DetallConstanciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallConstanciaPageRoutingModule {}
