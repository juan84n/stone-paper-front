export class Player{
    name:string;
    currentTurn:boolean;
    currentMovement:string;
    wins:Number;

    constructor(){
        this.name = "";
        this.currentTurn = false;
        this.currentMovement = "";
        this.wins = 0;
    }

}