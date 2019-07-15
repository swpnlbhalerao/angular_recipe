import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedeModule } from './shared/shared-module';
import { CoreModule } from './core-module';
import { StoreModule } from '@ngrx/store'
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({shoppinglist:shoppingListReducer}),
    ReactiveFormsModule,
    HttpClientModule,
    SharedeModule,
    CoreModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
