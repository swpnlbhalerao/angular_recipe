import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingModule } from './shopping-list/shopping-module';
import { RecipesModule } from './recipes/recipes-module';
import { SharedeModule } from './shared/shared-module';
import { CoreModule } from './core-module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedeModule,
    CoreModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
