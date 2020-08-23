import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';


const routes: Routes = [
  { 
    path: 'products', 
    loadChildren: () => import('../products/products.module').then(m => m.ProductsModule) 
  },
  { 
    path: 'welcome', 
    loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomeModule) 
  },
  { 
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
    // component: AppComponent, 
  },
  // { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
