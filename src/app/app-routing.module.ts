import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buscador', component: BuscadorComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
