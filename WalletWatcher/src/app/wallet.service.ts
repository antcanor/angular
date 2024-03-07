import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private wallet:Array<any>
  constructor() { this.wallet=JSON.parse(localStorage.getItem("wallet")||"[]") }

  addToWallet(coin:any){
    let a=this.isAlreadyInWallet(coin)
    if(a){
      a.unidades++
      this.savetolocal()
    }else{
      let newCoin={
        id:coin.id,
        name:coin.name,
        symbol:coin.symbol,
        img:coin.img,
        price:coin.price,
        unidades:1
      }
      this.wallet.push(newCoin)
      this.savetolocal()
    }
  }
  getWallet(){
    return this.wallet 
  }
  getTotal(){
    let total=0
    this.wallet.forEach(a=>total += a.price * a.unidades)
    return total
  }
  isAlreadyInWallet(coin:any){
    return this.wallet.find(a=>a.id==coin.id)
  }
  decreUnits(coin:any){
    if(coin.unidades>0)
    coin.unidades--
    this.savetolocal()
    }
    incrUnits(coin:any){
    coin.unidades++
    this.savetolocal()
    }
    delart(coin:any){
      let posicion = this.wallet.findIndex(a=>a.id ==coin.id)
      if(posicion>=0)
      {
        this.wallet.splice(posicion,1)
        this.savetolocal()
      }
    }

    savetolocal(){
      localStorage.setItem("wallet",JSON.stringify(this.wallet))

    }
    
  }

