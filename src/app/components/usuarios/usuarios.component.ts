import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from '../../dominio/Player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @Output() gameStarted: EventEmitter<any>;
  player1:Player;
  player2:Player;

  constructor(private router:Router) { 
    this.gameStarted = new EventEmitter();
    this.player1 = new Player();
    this.player2 = new Player();
  }

  ngOnInit() {
  }

  startGame(formUsuario){
    if(formUsuario.valid){
      var objectStarted = {
        isStarted: true,
        player1: this.player1,
        player2: this.player2
      }
      this.gameStarted.emit(objectStarted);
    }
  }

  showStatistics(){
    this.router.navigate(['/statistics'])
  }

}
