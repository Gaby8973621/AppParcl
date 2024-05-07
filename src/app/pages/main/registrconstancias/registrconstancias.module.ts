import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrconstanciasPageRoutingModule } from './registrconstancias-routing.module';

import { RegistrconstanciasPage } from './registrconstancias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrconstanciasPageRoutingModule
  ],
  declarations: [RegistrconstanciasPage]
})
export class RegistrconstanciasPageModule {}
