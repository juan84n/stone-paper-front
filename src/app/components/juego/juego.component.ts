import { Component, OnInit } from '@angular/core';
import { Player } from '../../dominio/Player';
import { Game } from '../../dominio/Game';
import { GameService } from '../../services/GameService';
import { Statistic } from '../../dominio/Statistic';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  isGameStarted: any;
  player1:Player;
  player2:Player;
  playedDone:String;
  currentPlayer:Player;
  score:Game[];
  round:number;
  gameWinner:Player;

  constructor (private gameService:GameService) {
    this.initGame();
   }

  ngOnInit() {
  }

  initGame (){
    this.isGameStarted = {
      isStarted: false,
      player1:{},
      player2:{}
    };
    this.round = 0;
    this.score = new Array<Game>();
    this.gameWinner = new Player();
  }

  startGame (isGameStarted: any){
    this.isGameStarted = isGameStarted;
    this.currentPlayer = this.isGameStarted.player1;
    this.round++;
    console.log("El juego ha sido iniciado",this.isGameStarted);
  }
  getPlayed (played:string){
    this.playedDone = played;
    this.currentPlayer.currentMovement = played;
    //console.log("Jugada hecha por ", this.currentPlayer, this.isGameStarted);
    if(this.currentPlayer == this.isGameStarted.player1){
      this.currentPlayer = this.isGameStarted.player2;
    }else{
      this.checkWinnerRound();
      this.currentPlayer = this.isGameStarted.player1;
      this.round++;
    }
  }

  checkWinnerRound (){
    var game = new Game();
    if((this.isGameStarted.player1.currentMovement === "stone" && this.isGameStarted.player2.currentMovement === "scissor")||
    (this.isGameStarted.player1.currentMovement === "scissor" && this.isGameStarted.player2.currentMovement === "paper")||
    (this.isGameStarted.player1.currentMovement === "paper" && this.isGameStarted.player2.currentMovement === "stone")){
     this.isGameStarted.player1.wins++;
     game.playerWinner = this.isGameStarted.player1;
     game.round = this.round;
   }
   if((this.isGameStarted.player2.currentMovement === "stone" && this.isGameStarted.player1.currentMovement === "scissor")||
   (this.isGameStarted.player2.currentMovement === "scissor" && this.isGameStarted.player1.currentMovement === "paper")||
   (this.isGameStarted.player2.currentMovement === "paper" && this.isGameStarted.player1.currentMovement === "stone") ){
    this.isGameStarted.player2.wins++;
     game.playerWinner = this.isGameStarted.player2;
     game.round = this.round;
   }
   this.score.push(game);
   this.checkWinnerWholeGame();
   //console.log("el game es", game, " y el score es", this.score);
  }

  checkWinnerWholeGame (){
    console.log ("player 1 wins ",this.isGameStarted.player1.wins, " player 2 wins ",this.isGameStarted.player2.wins);
    if(this.isGameStarted.player1.wins === 3){
      this.gameWinner = this.isGameStarted.player1;
      this.isGameStarted.isStarted = false;
      console.log ("el ganador es ", this.gameWinner);
      this.saveStatistics();
    }else if(this.isGameStarted.player2.wins === 3){
      this.gameWinner = this.isGameStarted.player2;
      this.isGameStarted.isStarted = false;
      console.log ("el ganador es ", this.gameWinner);
      this.saveStatistics();
    }
  }

  saveStatistics(){
    var statistic: Statistic = {
      id: 0,
      namePlayer1: this.isGameStarted.player1.name,
      namePlayer2: this.isGameStarted.player2.name,
      winner: this.gameWinner.name
    }
    this.gameService.save(statistic)
    .subscribe(statistic => {
      console.log(statistic);
    })  
  }
}
