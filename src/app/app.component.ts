import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listCias: any[] = [];

  agregarCita(cita: any){
    this.listCias.push(cita);
  }
  eiminarCitaListado(index: number){
    this.listCias.splice(index, 1)
  }
}
