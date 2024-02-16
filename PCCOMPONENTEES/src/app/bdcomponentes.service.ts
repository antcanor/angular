import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdcomponentesService {
  private categorias:any
   private fabricantes:any =[]
  private articulos:any =[]
  private urlbase:string="https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/"

  constructor(private http:HttpClient) { 
  this.categorias=[]
  http.get(this.urlbase +"categorias").subscribe(JSON=>{
  this.categorias=JSON
  })
    http.get(this.urlbase +"fabricantes").subscribe(JSON=>{
  this.fabricantes=JSON
  })
    http.get(this.urlbase +"articulos").subscribe(JSON=>{
  this.articulos=JSON
  })
  }
  
    getfabricantes() {
      return this.fabricantes
    }
    getProcesadores() {
      return this.categorias
    }
    getArticulos() {
      return this.articulos
    }
    getarticulo(i:number)
    {
      if(i>=0 && i< this.articulos.length)
      {
        return this.articulos[i]
      }
      else
      {
      return undefined
      }
    }

    // getarticuloporid(id:number)
    // {
    //   return this.articulos.find(art => art.id == id)
    // }

    
}
