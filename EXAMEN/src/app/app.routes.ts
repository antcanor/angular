import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

export const routes: Routes = [
    {path:'inicio', component:InicioComponent, title:'Inicio' },
    {path:'playlists', component:PlaylistsComponent, title:'Playlists' },
    {path:'favoritos', component:FavoritosComponent, title:'Favoritos' }
];
