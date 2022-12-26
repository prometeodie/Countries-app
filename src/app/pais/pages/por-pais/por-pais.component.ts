import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{
      cursor:pointer;
    }`
    ]
})
export class PorPaisComponent {

  termino: string = '';
  errBoolean: boolean = false;
  showTable: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  ocultarBarra: boolean = false;

  constructor(private paisServices: PaisService ) { }

  buscar( termino: string ){
    this.ocultarBarra = false;
    this.errBoolean = false;
    this.termino = termino;

    this.paisServices.buscarPais( this.termino )
    .subscribe(
      ( paises ) =>{
        this.paises = paises;
        this.showTable = true;
      },( err ) =>{
        this.errBoolean = true;
        this.paises = [];
      }
    );
  }

  sugerencias( termino: string ){
    this.errBoolean = false;
    this.termino = termino;
    this.ocultarBarra= true;

    this.paisServices.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos = paises.splice( 0, 5 ),
    (err) =>{this.paisesSugeridos = [];});

  }

}
