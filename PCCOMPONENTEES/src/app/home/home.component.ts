import { Component } from '@angular/core';
import { ArticuloComponent } from '../articulo/articulo.component';
import { BdcomponentesService } from '../bdcomponentes.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ArticuloComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private bd:BdcomponentesService)
  {
    
  }

  getartiuclomasrecientes()
  {
    return this.bd.getArticulos().slice(0,3);
  }
}
