import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { JuegoComponent } from './components/juego/juego.component';
import { StatisticsComponent } from './components/statistics/statistics.component';


const APP_ROUTES: Routes = [
  { path: '', component: JuegoComponent },
  { path:'statistics', component: StatisticsComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});