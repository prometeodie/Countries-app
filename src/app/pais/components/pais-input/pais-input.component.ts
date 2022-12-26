import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder : string = '';

  debouncer: Subject<string> = new Subject();


   termino:string = '';

  constructor() { }

  ngOnInit() {

    this.debouncer
    .pipe(
      //tiempo que tarda en imprimir a partir que el usuaio deja de apretar teclas
      debounceTime( 300 ))
    .subscribe( valor => {
      //tambien se puede hacer con el termino ya que esta asociado
      this.onDebounce.emit( valor );
    } );
  }


  buscar(){

    this.onEnter.emit( this.termino );
  }
  
  //ACLARACION:se puede sacar el valor desde el evento como se muestra ahi abajo
  //o se puede usar en este caso el termino por que lo tenemos asociado en el imput.
  teclaPresionada(evento: any){
    // const valor = evento.target.value;
    this.debouncer.next( this.termino );
    

    // cada vez que se presiona una tecla se manda a llamar el next y como esta suscrito en el
    //ngOnInit va a recibir el nuevo valor y eso es lo que va a imprimir en el metodo "buscar()"

    //Lo hacemos de la forma con el debouncer para hacerlo por un observable y poder usar operadore de "rxjs"
  }

}
