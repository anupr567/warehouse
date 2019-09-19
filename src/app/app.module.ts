import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component' ;


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InventoryListComponent,
    AddInventoryComponent,
    InventoryDetailComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
