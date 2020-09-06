import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'landing', loadChildren: () => import('../landing/landing.module').then(m => m.LandingModule) },
  { path: 'list', loadChildren: () => import('../list/list.module').then(m => m.ListModule) },
  { path: 'item/edit:id', loadChildren: () => import('../item/item.module').then(m => m.ItemModule) },
  { path: 'add', loadChildren: () => import('../add/add.module').then(m => m.AddModule) },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AppRoutingModule {}
