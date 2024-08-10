import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainComponent } from './pages/main-pages.component';

import { AddPersonComponent } from './components/add-person/add-person.component';
import { ListPersonComponent } from './components/list-person/list-person.component';



@NgModule({
  declarations: [
    mainComponent,
  ListPersonComponent,
    AddPersonComponent
  ],
  imports: [
    CommonModule,


  ],
  exports: [
    mainComponent,

  ]

})
export class DbzModule {


  // exports nos srive para dar a conocer un componente al mundo exterior
  // exports:[ mas los componentes de nesitamos agregar]

 }
