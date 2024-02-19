import { Component, inject } from '@angular/core';
import { BdService } from '../bd.service';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { NombrePipePipe } from '../nombre-pipe.pipe';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [TarjetasComponent, NombrePipePipe],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  patron=""
  private bd=inject(BdService)
  
  getSongs(){
    return this.bd.getSongs()
  }

}
