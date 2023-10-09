import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url='http://localhost:3000/api';

  //url de la api

  constructor(private http: HttpClient) { }

  //Traer lista de equipos

  getEquipos(){
    console.log('OK');
    return this.http.get(`http://localhost:3000/api/`);
  }

  //Traer un equipo
  getUnEquipo(id:string){
    return this.http.get(this.url+'/'+id);
  }

  //Ingresar un Equipo
  addEquipo(equipo:Equipo){
    return this.http.post(this.url, equipo);
  }

  //Eliminar un equipo
  deleteEquipo(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar

  editEquipo(equipo:Equipo, id?:string,){
    return this.http.put(this.url+'/'+id, equipo);

  }
}

export interface Equipo{
  id_equipo?:string;
  nombre?:string;
  logo?:string;
}