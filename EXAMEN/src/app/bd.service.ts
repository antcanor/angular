import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdService {
  private url="https://my-json-server.typicode.com/antcanor/angular/"

  private songs=<any>[]
  private playlists=<any>[]
  
  constructor(private http:HttpClient) { 
    http.get(this.url+"songs").subscribe((JSON:any)=>{
      this.songs=JSON})
      http.get(this.url+"playlists").subscribe((JSON:any)=>{
        this.playlists=JSON})
  }


  getSongs(){
    return this.songs
  }

  getPlaylist(){
    return this.playlists
  }

  getCancionesDePlaylist(playlistId: number): string[] {
    let playlist = this.playlists.find((pl:any) => pl.id == playlistId);
    if (playlist) {
      return this.songs.filter((song:any) => playlist.songs.includes(song.id))
    } else {
      console.error('La playlist no fue encontrada.')
      return [];
    }
  }


  agregarCancionAPlaylist(cancionId: number, playlistId: number): void {
    let playlist = this.playlists.find((pl:any) => pl.id == playlistId)
    let cancion = this.songs.find((song:any) => song.id == cancionId)
    if (playlist && cancion) {
      playlist.songs.push(cancion.id)
    } 
  }
  
 

}




