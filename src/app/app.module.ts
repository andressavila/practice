import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { contarComponent } from './conter/conter.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { DbzModule } from './dbz/dbz.module';
import { CommonModule } from '@angular/common';
//mport { ListpersonajeComponent } from './src/app/dbz/components/listpersonaje/listpersonaje.component';
//import { ListComponent } from './src/app/dbz/components/list/list.component';






// definimos los componenetes que creamos
@NgModule({
  declarations: [
     AppComponent,
    //  ListComponent,
    //  ListpersonajeComponent,
    // contarComponent,
    // HeroComponent,
    // ListComponent,
    // MainpagesComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DbzModule,





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// tambien podemos crear modulos independientes en nuestra aplicacion
// y solo exportar el  modulo al principal teendo la clase exportadora y en
// ngmodule detro del fichero que se exporta
// para meneja el modulo creado de los componentes que tenemos aplicamos
// export: [] y exportamos nuestro componente
//


// cuando realizamos este cambio tenemos que importar el commmodule en nuestro
// modulo que creamos.
