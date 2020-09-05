import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot([], { initialNavigation: 'enabled' }), SparkAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
