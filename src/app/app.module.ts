import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { JuegoComponent } from './components/juego/juego.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { GameService } from './services/GameService';
import { StatisticsComponent } from './components/statistics/statistics.component';



@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    JuegoComponent,
    TableroComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
