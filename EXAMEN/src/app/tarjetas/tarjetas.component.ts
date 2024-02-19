import { Component, Input } from '@angular/core';
import { IconoFavComponent } from '../icono-fav/icono-fav.component';
import { IconoCasaComponent } from '../icono-casa/icono-casa.component';

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [IconoFavComponent, IconoCasaComponent],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css'
})
export class TarjetasComponent {
@Input() cancion: any
}
