import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { CrossCuttingModule } from './modules/cross-cutting/cross-cutting.module';
import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './modules/core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,
    CrossCuttingModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    SparkAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
