import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { CrossCuttingModule } from './modules/cross-cutting/cross-cutting.module';
import { SharedModule } from './modules/shared/shared.module';
import { RouterModule } from '@angular/router';
import { SiteModule } from './modules/site/site.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    CoreModule,
    SharedModule,
    CrossCuttingModule.forRoot(),
    BrowserModule,
    SparkAngularModule,
    AppRoutingModule,
    SiteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
