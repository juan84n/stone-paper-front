import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Player } from '../../dominio/Player';
import { Game } from '../../dominio/Game';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  @Output() playedDone:EventEmitter<String>;
  @Input() player:Player;
  @Input() score:Game[];
  movements = ["stone","paper","scissor"];
  hide:Boolean;

  constructor() { 
    this.playedDone = new EventEmitter();
    this.player = new Player();
    this.hide = true;
  }

  ngOnInit() {
  }

  onChange(technology) {
    console.log(technology);
    this.hide = false;
  }

  makePlayed(played:string){
      this.playedDone.emit(played);
  }

}
