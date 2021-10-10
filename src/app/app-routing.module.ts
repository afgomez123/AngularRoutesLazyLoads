import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

//charge lazy loading
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./productos/productos.module').then((m) => m.ProductosModule),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
