import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditarComponent } from './pages/editar/editar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'editar',
        component: EditarComponent,
      },
      {
        path: 'listado',
        component: ListadoComponent,
      },
      {
        path: 'nuevo',
        component: NuevoComponent,
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
      },
      { path: '**', redirectTo: 'nuevo' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UsuariosRoutingModule {}
