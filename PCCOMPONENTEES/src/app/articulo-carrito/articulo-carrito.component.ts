import { Component, Input, inject } from '@angular/core';
import { CarritoComponent } from '../carrito/carrito.component';
import { CartService } from '../cart.service';
import { CurrencyPipe } from '@angular/common';
import { ArticuloComponent } from '../articulo/articulo.component';

@Component({
  selector: 'app-articulo-carrito',
  standalone: true,
  imports: [CurrencyPipe, ArticuloComponent ],
  templateUrl: './articulo-carrito.component.html',
  styleUrl: './articulo-carrito.component.css'
})
export class ArticuloCarritoComponent {
  @Input() art:any
  private cartserv=inject(CartService)

  addtocart(){
    this.cartserv.addtocart(this.art)
  }
  
  decreUnits() {this.cartserv.decreUnits(this.art)}
  incrUnid(){this.cartserv.incrUnits(this.art)}
  borrarArticulo(){this.cartserv.delart(this.art)}

}
