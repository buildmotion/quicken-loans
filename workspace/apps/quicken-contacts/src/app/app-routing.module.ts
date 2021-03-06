import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/site/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
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
  {
    path: 'contacts/rates',
    loadChildren: () => import('@valencia/quicken/micro-apps/contacts-app').then(m => m.ContactsAppModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true, useHash: false, scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
  ],
})
export class AppRoutingModule {}
