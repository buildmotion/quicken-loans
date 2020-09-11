import { NgModule } from '@angular/core';

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import { CommonModule } from '@angular/common';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';

@NgModule({
  declarations: [AddComponent],
  imports: [CommonModule, AddRoutingModule, SparkAngularModule],
})
export class AddModule {}
