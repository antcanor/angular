import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getcarritototal() {
    throw new Error('Method not implemented.');
  }
  getcarrito() {
    throw new Error('Method not implemented.');
  }

  private cart:Array<any>

  constructor() {
    this.cart=JSON.parse(localStorage.getItem("cart")||"[]")

  }

  addtocart(art:any)
  {

    let a = this.isAlreadyIncart(art)
    if(a)
    {
      a.unidades++
      this.savetolocal()
    }else{
      let newart={   
        id:art.id,
        cat:art.cat,
        fab:art.fab,
        nombre:art.nombre,
        imagen:art.imagen,
        precio:art.precio,
        unidades:1}
      this.cart.push(newart)
      this.savetolocal()
      }
      console.log(art)
    }
    getcart()
    {
      return this.cart
    }

    getcarritotal()
    {
      let total=0
      this.cart.forEach(a=>total += a.precio * a.unidades)
      return total
    }
  
    isAlreadyIncart(art:any){
      return this.cart.find(a=>a.id==art.id)
      this.savetolocal()
    }

    decreUnits(art:any){
    if(art.unidades>0)
    art.unidades--
    this.savetolocal()
    }
    incrUnits(art:any){
    art.unidades++
    this.savetolocal()
    }
    delart(art:any){
      let posicion = this.cart.findIndex(a=>a.id ==art.id)
      if(posicion>=0)
      {
        this.cart.splice(posicion,1)
        this.savetolocal()
      }
    }

    savetolocal(){
      localStorage.setItem("cart",JSON.stringify(this.cart))

    }
}
