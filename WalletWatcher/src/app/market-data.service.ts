import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {
  private url="https://my-json-server.typicode.com/antcanor/angular/cripto"
  private marketdata=<any>[]
  constructor(private http:HttpClient) { 
    http.get(this.url).subscribe(JSON=>{
      this.marketdata=JSON})
  }

  getMarket(){
    return this.marketdata;
  }


}
