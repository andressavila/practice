

import { Component, Input, input, OnInit } from '@angular/core';
import { person } from '../../interfaces/person.interface';

@Component({
  selector: 'app-list-person',
  templateUrl: '../list-person/list-person.component.html'
})

export class ListPersonComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
// comunicacaion entre padre e hijo con la property input de angular

// implementacion de la misma

@Input()
public personlist : person []=[
  {
    name: 'trunks',
    power: 1.00
  }
]

}
