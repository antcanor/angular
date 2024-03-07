import { Component, inject } from '@angular/core';
import { WalletService } from '../wallet.service';
import { CurrencyPipe } from '@angular/common';
import { AssetQuantityComponent } from '../asset-quantity/asset-quantity.component';
import { AssetsActionsComponent } from '../assets-actions/assets-actions.component';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CurrencyPipe, AssetQuantityComponent, AssetsActionsComponent],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css'
})
export class WalletComponent {
 private wallet=inject(WalletService);

 getWallet(){
    return this.wallet.getWallet();
 }
 getTotal(){
    return this.wallet.getTotal();
 }
}
