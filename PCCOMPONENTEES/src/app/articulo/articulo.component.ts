import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {
  @Input() articulo:any
  
  cartserv=inject(CartService)

  addtocart()
  {
    this.cartserv.addtocart(this.articulo)
  }
}
