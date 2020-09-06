import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContactsItemComponent } from './contacts-item/contacts-item.component';
import { ContactsLandingComponent } from './contacts-landing/contacts-landing.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [ContactsLandingComponent, ContactsListComponent, ContactsItemComponent],
})
export class ContactsAppModule {}
