import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import( '../app/pages/home/home.module' ).then( ( m ) => m.HomeModule ),
  },
  {
    path: 'search', component: SearchPageComponent
  },
  {
    path: 'item', component: ItemPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
