import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsItemComponent } from '../contacts-item/contacts-item.component';
import { ContactsLandingComponent } from '../contacts-landing/contacts-landing.component';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';

const routes: Routes = [
  {
    path: 'landing',
    component: ContactsLandingComponent,
  },
  {
    path: 'list',
    component: ContactsListComponent,
  },
  {
    path: 'item:id',
    component: ContactsItemComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AppRoutingModule {}
