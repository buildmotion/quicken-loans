import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { RatesComponent } from './rates/rates.component';

@NgModule({
  imports: [CommonModule, AppRoutingModule, RouterModule],
  declarations: [RatesComponent],
})
export class ContactsAppModule {}
