import { Routes } from '@angular/router';
import { BuscarComponent } from './buscar/buscar.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent ,
        title: 'Home page',
      },
      {
        path: 'buscar',
        component: BuscarComponent,
        title: 'Buscador',
      },
      {
        path: 'carrito',
        component:CarritoComponent ,
        title: 'Carrito',
      },
      {
        path: '**',
        component: Page404Component,
        title: 'Eror 404',
      },
];
