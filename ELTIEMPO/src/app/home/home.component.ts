import { Component, inject } from '@angular/core';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';
import { FavsService } from '../favs.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TarjetaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private favs=inject(FavsService)
  getCasa(){
    return this.favs.getMiCiudad() 
  }

}
