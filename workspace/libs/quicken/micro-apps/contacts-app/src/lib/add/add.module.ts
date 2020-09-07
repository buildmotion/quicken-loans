import { NgModule } from '@angular/core';

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AddComponent],
  imports: [CommonModule, AddRoutingModule],
})
export class AddModule {}
