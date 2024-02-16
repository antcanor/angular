import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { ArticuloCarritoComponent } from '../articulo-carrito/articulo-carrito.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [ArticuloCarritoComponent, CurrencyPipe],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  private cartserv= inject(CartService)

  getcarrito()
  {
    return this.cartserv.getcart()
  }

  getcarritotal(){
    return this.cartserv.getcarritotal()
  }
}
