import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavsService {
  private favs:any[]
  private miciudad:any
  constructor() {
    this.favs=JSON.parse(localStorage.getItem("favs")||"[]") 
    this.miciudad=JSON.parse(localStorage.getItem("miciudad")||"[]") }

  addFav(city:any) {
    let a=this.isAlreadyInFavs(city)
    if(a){this.delfav(city)

    }else{this.favs.push(city)
      this.savetolocalfav()
    }
   
  }
  isAlreadyInFavs(city:any){
    return this.favs.find(a=>a.id==city.id)
    this.savetolocalfav()
  }
  delfav(city:any){
    let posicion = this.favs.findIndex(a=>a.id ==city.id)
    if(posicion>=0)
    {
      this.favs.splice(posicion,1)
      this.savetolocalfav()
    }
  }
  setCityAtHome(city:any) {
    if (city) {
      this.miciudad = city
      this.savetolocalcity()
    }
  }
  getMiCiudad(){
    return this.miciudad
  }
  getFavs(){
    return this.favs
  }
  
  




  savetolocalfav(){
    localStorage.setItem("favs",JSON.stringify(this.favs))

  }

  savetolocalcity(){
    localStorage.setItem("miciudad",JSON.stringify(this.miciudad))

  }
}
