import { Component} from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  errBoolean: boolean = false;
  showTable: boolean = false;
  paises: Country[] = [];

  constructor(private paisServices: PaisService ) { }

  buscar( termino: string ){
    this.errBoolean = false;
    this.termino = termino;
    this.paisServices.buscarCapital( this.termino )
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

}

