import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [ 
{path:'home', component: HomeComponent, title:'Home'},
{path:'search', component:BuscadorComponent, title:'Buscador'},
{path:'fav', component:FavoritosComponent, title:'Favoritos'},
{path:'', component:HomeComponent, title:'Home'},
{path:'**', component:ErrorComponent, title:'Error'}]
