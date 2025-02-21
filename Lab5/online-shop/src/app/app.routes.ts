import { Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
    title: 'Main Menu page',
  },
  {
    path: 'categories/:categoryId/details/:productId',
    component: ProductDetailsComponent,
    title: 'Details',
  },
  {
    path: 'categories/:categoryId',
    component: ProductListComponent,
    title: 'Category',
  },
];
