import { Component, OnInit } from '@angular/core';
import { Equipo, EquipoService } from '../services/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //variables
  ListarEquipo: Equipo[] = [];

  equipos: object = {}
  flagCallAPI: boolean = false;

  constructor(private EquipoService:EquipoService, private router:Router){}

  ngOnInit(): void{
    this.listarEquipo();
  }

  listarEquipo()
  {
    this.EquipoService.getEquipos().subscribe({
      next: (res) => {
        this.equipos = res;
        this.flagCallAPI = true;
        this.ListarEquipo=<any>res;
      },
      complete: () => {

      },
      error: () => {
      }
    });
  }

  eliminar(id:string)
  {
    this.EquipoService.deleteEquipo(id).subscribe({
      next: () => {
      window.location.reload();
    },
    complete: () => {

    },
    error: () =>  {
    }
  });

}

modificar(id:string){
  this.router.navigate(['/edit/'+id]);
}

}
