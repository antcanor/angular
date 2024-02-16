import { Component, Input, inject } from '@angular/core';
import { BdcomponentesService } from '../bdcomponentes.service';
import { ArticuloComponent } from '../articulo/articulo.component';
import { PieComponent } from '../pie/pie.component';
import { PatronPipe } from '../pipe/patron.pipe';
import { FiltrofabPipe } from '../pipe/filtrofab.pipe';
import { FiltrocatPipe } from '../pipe/filtrocat.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [ArticuloComponent, PatronPipe, FiltrofabPipe,FiltrocatPipe, FormsModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  private bd=inject(BdcomponentesService)

  // articuloparamostrar =this.getArticulos
  articulosparamostrar =this.bd.getArticulos()
  patron=""
  cat=0
  fab=0
categoria: any;

borrarfiltros(){
this.patron=""
this.cat=0
this.fab=0
}

getFabricantes() {
  return this.bd.getfabricantes()
}
getProcesadores() {
  return this.bd.getProcesadores()
}
  getArticulos() {
    return this.bd.getArticulos()
  }

   


}
