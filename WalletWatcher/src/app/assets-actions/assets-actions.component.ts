import { Component, Input, inject } from '@angular/core';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-assets-actions',
  standalone: true,
  imports: [],
  templateUrl: './assets-actions.component.html',
  styleUrl: './assets-actions.component.css'
})
export class AssetsActionsComponent {
@Input() asset: any;
private wallet=inject(WalletService)

removeAsset(){
  this.wallet.delart(this.asset)
}

addAsset(){
  this.wallet.incrUnits(this.asset)
}
decreAsset(){
  this.wallet.decreUnits(this.asset)
}

}
