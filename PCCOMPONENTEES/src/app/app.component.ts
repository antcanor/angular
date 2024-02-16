import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PieComponent } from './pie/pie.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CarritoComponent } from './carrito/carrito.component';
import { Page404Component } from './page404/page404.component';
import { ArticuloComponent } from './articulo/articulo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CabeceraComponent,NavbarComponent,PieComponent,BuscarComponent,CarritoComponent,Page404Component,ArticuloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '4.jpcomponentes';
}
