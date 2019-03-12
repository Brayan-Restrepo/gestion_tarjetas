import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import { ClienteComponent } from './pages/cliente/cliente.component';

import { HttpClientModule } from '@angular/common/http';
import { HistorialConsumoComponent } from './pages/historial-consumo/historial-consumo.component';
import { AsesoresComponent } from './pages/asesores/asesores.component';
//forms
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationsMessagesModule } from './validations-messages/validations-messages.module';
import { TarjetaPipe } from './pipes/tarjeta.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClienteComponent,
    HistorialConsumoComponent,
    AsesoresComponent,
    TarjetaPipe
  ],
  imports: [
    ValidationsMessagesModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
