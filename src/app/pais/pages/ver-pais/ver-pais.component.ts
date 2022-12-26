import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    // "activateRoute" sirve para escuchar los cambios en el url
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
     ) { }

  ngOnInit(): void {

    

    //TODO:preguntar a nico como se conecta params para sacar los datos que trae ese 
    
    //forma corta, retornando un observable.con switchMap retorno un observable
    this.activatedRoute.params
    .pipe(
      switchMap( ( {id} ) => this.paisService.getPaisPorCodigo( id )),
      tap( resp => console.log( resp ))
    )
    .subscribe( pais  => this.pais = pais );


    // this.activatedRoute.params
    // .subscribe( ({id}) =>{
    //   console.log(id);

    // this.paisService.getPaisPorCodigo( id )
    // .subscribe( console.log )
    // });

  }

}
