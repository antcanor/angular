import { Component, inject } from '@angular/core';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';
import { BdService } from '../bd.service';
import { PatronPipe } from '../patron.pipe';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [TarjetaComponent,PatronPipe],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  private bd = inject(BdService)
  nombre=""
  getResults()
    {
        return this.bd.getResults()
    }
    porNombre(){
      return this.bd.getCitiesByName(this.nombre)
    }
}
