import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavsService {
  private favs:any[]
  
  constructor() {
    this.favs=JSON.parse(localStorage.getItem("favs")||"[]") 
     }

  addFav(cancion:any) {
    let a=this.isAlreadyInFavs(cancion)
    if(a){this.delfav(cancion)

    }else{this.favs.push(cancion)
      this.savetolocalfav()
    }
   
  }
  isAlreadyInFavs(cancion:any){
    return this.favs.find(a=>a.id==cancion.id)
    
  }
  delfav(cancion:any){
    let posicion = this.favs.findIndex(a=>a.id ==cancion.id)
    if(posicion>=0)
    {
      this.favs.splice(posicion,1)
      this.savetolocalfav()
    }
  }
  
  getFavs(){
    return this.favs
  }
  
  
  savetolocalfav(){
    localStorage.setItem("favs",JSON.stringify(this.favs))

  }

  
}
