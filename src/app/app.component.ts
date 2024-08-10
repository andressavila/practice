import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   public title: string = 'mi primera apps';

public conter:number = 1;

// contador


incrementar(): void{


  // con este operador podemos suamr de froma abreviada
  this.conter +=1;
}

decremento(): void{
// con este operador podemos restar de froma abreviada
  this.conter-=1;

}

// aqui en este metodo me esta resetiando
//el numero y los esta inicializando en 10 o en el valor que usted quiera
 reset (){

  this.conter =0;
  this.reset()

 }



}
