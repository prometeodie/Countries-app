import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  //se puede poner css especifico en cada componente
  //en este caso se coloco el cursor de la manito en todos los li
  //que componen el sidebar component.html
  styles: [
  `li{
    cursor: pointer;
  }`
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
