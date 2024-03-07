import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BdService {

  //private response:any[] = []
  private url = "http://api.openweathermap.org/data/2.5/"
	private apiKey = "b95c7a07a05cc991d7783a424ab26007"
  private resultados=<any>[]

  constructor(private http:HttpClient) { }

  getResults() {
    return this.resultados
  }
  Murcia(){
  this.http.get(this.url + "find?q=murcia" + "&appid=" + this.apiKey).subscribe(
    (JSON:any)=>{
      let response:any=JSON
      this.resultados= response.list
    }
  )}
  getCitiesByName(name:string) {
    return this.http.get(this.url + "find?q=" + name + "&appid=" + this.apiKey).subscribe(
      (JSON:any)=>{
        let response:any=JSON
        this.resultados= response.list
      })
  }

}
  
