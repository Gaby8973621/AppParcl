import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallConstanciaPageRoutingModule } from './detall-constancia-routing.module';

import { DetallConstanciaPage } from './detall-constancia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallConstanciaPageRoutingModule
  ],
  declarations: [DetallConstanciaPage]
})
export class DetallConstanciaPageModule {}
