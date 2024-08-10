import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',  // le puede cambair el nombre de todo los
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {


  public titulo : string = 'personal';
  public name: string = 'pedro';
  public lasname: string = 'camacho';
  public cargo: string = 'coordinador de patio';
  public jefe : string = 'juan david';

// los get son propiedades en las cual modificamos
get nombrename(): string {

  return this.name.toUpperCase();
}


// concatenacion del metodo de las operaciones de los nombres y lo imprimimos
// dentro de las etiquetas html
getnamedescripcion(): string {

  // estas son cadenas de concaternacion de los string
return `${this.name} - ${this.lasname}-${this.cargo} -${this.jefe}`;

}



cambiararea() : void {

  this.cargo = 'pastarna';


}
 cambiarjefe(): void {
 this.jefe = 'lopes caceres';

 }


}
