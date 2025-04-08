import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OdeljenjeComponent } from './odeljenje/odeljenje.component';
import { ShowOdeljenjeComponent } from './odeljenje/show-odeljenje/show-odeljenje.component';
import { AddEditOdeljenjeComponent } from './odeljenje/add-edit-odeljenje/add-edit-odeljenje.component';
import { ZaposleniComponent } from './zaposleni/zaposleni.component';
import { ShowZaposleniComponent } from './zaposleni/show-zaposleni/show-zaposleni.component';
import { AddEditZaposleniComponent } from './zaposleni/add-edit-zaposleni/add-edit-zaposleni.component';
import { SharedService } from './shared.service';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OdeljenjeComponent,
    ShowOdeljenjeComponent,
    AddEditOdeljenjeComponent,
    ZaposleniComponent,
    ShowZaposleniComponent,
    AddEditZaposleniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
