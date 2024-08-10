import { Component } from '@angular/core';
@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {



  public empleadosname : string [] = ['juan', 'camila','deisy','camilo','jhonatan'];
public delempleado?: string;

  elemianritems(): void {
// implemntamos el shift() para remover el primer elemento en el array
// implemntamos el pop() para remover el ultimo elemento en el array

     //this.empleadosname.shift()
       this.delempleado =  this.empleadosname.pop();

       // siempre se maneja this dentro del metodo a comparar
  }




}
