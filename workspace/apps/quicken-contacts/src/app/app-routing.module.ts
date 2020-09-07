import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@valencia/quicken/micro-apps/contacts-app').then(m => m.ContactsAppModule),
  },
  {
    path: 'contacts/landing',
    loadChildren: () => import('@valencia/quicken/micro-apps/contacts-app').then(m => m.ContactsAppModule),
  },
  {
    path: 'contacts/add',
    loadChildren: () => import('@valencia/quicken/micro-apps/contacts-app').then(m => m.ContactsAppModule),
  },
  {
    path: 'contacts/list',
    loadChildren: () => import('@valencia/quicken/micro-apps/contacts-app').then(m => m.ContactsAppModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
})
export class AppRoutingModule {}
