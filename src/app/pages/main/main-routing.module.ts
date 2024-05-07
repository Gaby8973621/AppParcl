import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      { 
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfilePageModule),
      },
      {
        path: 'registrconstancias',
        loadChildren: () => import('./registrconstancias/registrconstancias.module').then( m => m.RegistrconstanciasPageModule)
      },
      {
        path: 'detall-constancia',
        loadChildren: () => import('./detall-constancia/detall-constancia.module').then( m => m.DetallConstanciaPageModule)
      },
      {
        path: 'grafico',
        loadChildren: () => import('./grafico/grafico.module').then( m => m.GraficoPageModule)
      },
      {
        path: 'docente',
        loadChildren: () => import('./docente/docente.module').then( m => m.DocentePageModule)
      },
      {
        path: 'notas',
        loadChildren: () => import('./notas/notas.module').then( m => m.NotasPageModule)
      }
    ],
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
