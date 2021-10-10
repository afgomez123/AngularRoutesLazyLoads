import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';

import { EditarComponent } from './pages/editar/editar.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

@NgModule({
  declarations: [
    EditarComponent,
    NuevoComponent,
    ListadoComponent,
    UsuariosComponent,
  ],
  imports: [CommonModule, UsuariosRoutingModule],
})
export class UsuariosModule {}
