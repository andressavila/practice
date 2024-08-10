import { Component, OnInit } from '@angular/core';
// a- para utlizar los snipper de angular de despligue de la aplicacion components
@Component({
  selector: 'contar-app',
  template: `

<p> el neumro es : {{numero}}</p>

<button (click)="incrementar()"> +1</button>
<button (click)="decremento()"> -1</button>
<button (click)="reset()">eliminar</button>




  `
})

export class contarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

public numero: number =0;


incrementar () : void{
 this.numero +=1;

}
decremento() : void{

  this.numero-=1;
}
 reset() : void{
this.numero= 0;
this.reset()

 }


}
