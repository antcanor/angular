import { Component, Input, inject } from '@angular/core';
import { FavsService } from '../favs.service';

@Component({
  selector: 'app-icono-casa',
  standalone: true,
  imports: [],
  templateUrl: './icono-casa.component.html',
  styleUrl: './icono-casa.component.css'
})
export class IconoCasaComponent {
  @Input() ciudad:any
  private favs=inject(FavsService)
  setCityAtHome(){
    this.favs.setCityAtHome(this.ciudad)
  }


}
