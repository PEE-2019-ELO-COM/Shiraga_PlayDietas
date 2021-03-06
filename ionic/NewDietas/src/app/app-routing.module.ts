import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },  
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },

  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule'},
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'list', loadChildren: './list/list.module#ListPageModule'},
  
  // { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule', canActivate: [AuthGuard] },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  // { path: 'list', loadChildren: './list/list.module#ListPageModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
//   },
//   {
//     path: 'list',
//     loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
//   },
//   { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
//   { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
//   { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
//   { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' }
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}
