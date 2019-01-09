import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      BuscadorComponent,
      HeaderComponent,
      ServiciosComponent,
      AcercaComponent,
      ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
