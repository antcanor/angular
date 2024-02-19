import { Component, inject } from '@angular/core';
import { BdService } from '../bd.service';
import { PlayComponent } from '../play/play.component';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [PlayComponent, TarjetasComponent],
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.css'
})
export class PlaylistsComponent {
  private bd=inject(BdService)
   canciones=<any>[]
  getPlaylists(){
    return this.bd.getPlaylist()
  }
  mostrarCanciones(id:number){
    this.canciones= this.bd.getCancionesDePlaylist(id)
  }

}
