import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'; 

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canMatch: [AuthGuard],
    canActivate: [AuthGuard] 
  },
  {
    path: 'menu-ppal',
    loadChildren: () => import('./menu-ppal/menu-ppal.module').then(m => m.MenuPpalPageModule),
    canMatch: [AuthGuard],
    canActivate: [AuthGuard] 
  },
  {
    path: 'crear-receta',
    loadChildren: () => import('./crear-receta/crear-receta.module').then(m => m.CrearRecetaPageModule),
    canMatch: [AuthGuard],
    canActivate: [AuthGuard] 
  },
  {
    path: 'buscar-receta',
    loadChildren: () => import('./buscar-receta/buscar-receta.module').then(m => m.BuscarRecetaPageModule),
    canMatch: [AuthGuard],
    canActivate: [AuthGuard] 
  },
  {
    path: 'ingresar-ingredientes',
    loadChildren: () => import('./ingresar-ingredientes/ingresar-ingredientes.module').then(m => m.IngresarIngredientesPageModule),
    canMatch: [AuthGuard],
    canActivate: [AuthGuard] 
  },
  {
    path: 'ing-ingr',
    loadChildren: () => import('./ing-ingr/ing-ingr.module').then(m => m.IngIngrPageModule),
    canMatch: [AuthGuard],
    canActivate: [AuthGuard] 
  },
  // otras rutas 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


