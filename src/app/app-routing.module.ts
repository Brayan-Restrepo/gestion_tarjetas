import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { AsesoresComponent } from './pages/asesores/asesores.component';
import { HistorialConsumoComponent } from './pages/historial-consumo/historial-consumo.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClienteComponent
  },
  {
    path: 'asesores',
    component: AsesoresComponent
  },
  {
    path: 'consumos/:id',
    component: HistorialConsumoComponent
  },
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  { path: '**', redirectTo: 'clientes',  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
