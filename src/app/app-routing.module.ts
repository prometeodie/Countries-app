import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent }    from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent }  from './pais/pages/por-region/por-region.component';
import { VerPaisComponent }    from './pais/pages/ver-pais/ver-pais.component';



//Forma de generar rutas para decirla a la app que componente necesito con cada opcion.
// importar Routes de @angular/router
 const routes: Routes = [
    {
        //ruta principal
        path:'',
        component: PorPaisComponent,
        pathMatch: 'full' 
    },
    {
        path:'region',
        component: PorRegionComponent

    },
    {
        path:'capital',
        component: PorCapitalComponent

    },
    {
        path:'pais/:id',
        component: VerPaisComponent
    },
    {
        // escepcion por si el usuario pone alguna ruta que no sean las 
        //anteriores lo redirecciona a la ruta principal
        path: '**',
        redirectTo: ''
    }
];


@NgModule({
     imports:[
        //importar el RouterModule con nuestras rutas creadas, como son rutas principales va el forRoot
        //si no va el forRootChildren
        RouterModule.forRoot( routes )
    ],
    exports:[
        //lo debo exportar para poder usarlo en el resto de la APP
        RouterModule
    ]
})
export class AppRoutingModule{}