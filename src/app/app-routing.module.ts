import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';

const routes: Routes = [
  {path: '', component: LandingComponent },
  {path: 'inventory', component: InventoryListComponent },
  { path: 'inventory/input', component: AddInventoryComponent },
  { path: 'inventory/input/:productname', component: AddInventoryComponent },
  { path: 'inventory/:name', component: InventoryDetailComponent }
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LandingComponent, InventoryListComponent, AddInventoryComponent, InventoryDetailComponent] ;
