import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      //* configuration options
      // preloadingStrategy: PreloadAllModules, //* load all modules even lazy
      // enableTracing: true, //* log all navigation events (for debugging)
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
