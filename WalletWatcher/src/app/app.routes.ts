import { Routes } from '@angular/router';
import { WalletComponent } from './wallet/wallet.component';
import { Error404Component } from './error404/error404.component';
import { MarketComponent } from './market/market.component';

export const routes: Routes = [
    {path:"market", component:MarketComponent, title:"Market"},
    {path:"", component:MarketComponent, title:"Market"},
    {path:"wallet", component:WalletComponent, title:"MyWallet"},
    {path:"credits", component:Error404Component,title:"Creditos"},
    {path:"**", component:Error404Component,title:"Error"}
];
