import { Component, OnInit } from '@angular/core';
import { person } from '../interfaces/person.interface';

@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: '../pages/main-pages.components.html'
})

export class mainComponent implements OnInit {
  constructor() { }



  ngOnInit() { }


  // definimos la interface que estan dentro del areglo
      public caracteres : person [] = [
        {
          name: 'mayinbool',
          power : 20.000,
        },
        {
          name:'bulma',
          power : 5.000,
        },
        {
          name:'vegeta',
          power : 50.000,
        }
      ];






}



