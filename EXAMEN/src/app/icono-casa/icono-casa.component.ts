import { Component, Input, inject } from '@angular/core';

import { BdService } from '../bd.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-icono-casa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './icono-casa.component.html',
  styleUrl: './icono-casa.component.css'
})
export class IconoCasaComponent {
  @Input() cancion:any
  private bd=inject(BdService)
  
  playlistSeleccionada: number=0;
 
  getPlaylists(){
    return this.bd.getPlaylist()
  }
  
  agregarCancionAPlaylist(cancion: number): void {
    this.bd.agregarCancionAPlaylist(cancion, this.playlistSeleccionada)
  }


}
