import { Component,inject } from '@angular/core';
import { MarketDataService } from '../market-data.service';
import { CoinCardComponent } from '../coin-card/coin-card.component';
import { PatronPipe } from '../patron.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-market',
  standalone: true,
  imports: [CoinCardComponent, PatronPipe,FormsModule],
  templateUrl: './market.component.html',
  styleUrl: './market.component.css'
})
export class MarketComponent {
  private market=inject(MarketDataService)
  patron=""
  getData(){
    return this.market.getMarket()
  }


}
