import { Component, Input, inject } from '@angular/core';
import { WalletService } from '../wallet.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-coin-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './coin-card.component.html',
  styleUrl: './coin-card.component.css'
})
export class CoinCardComponent {
@Input() coin:any

private wallet=inject(WalletService)

addToWallet(){
  this.wallet.addToWallet(this.coin)
}
isAlreadyInWallet(){
  return this.wallet.isAlreadyInWallet(this.coin)
}

}
