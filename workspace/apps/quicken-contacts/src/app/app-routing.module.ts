import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contacts/landing',
    loadChildren: () => import('@valencia/quicken/micro-apps/contacts-app').then(m => m.ContactsAppModule),
  },
];

@NgModule({
  declarations: [],
  imports: [],
})
export class AppRoutingModule {}
