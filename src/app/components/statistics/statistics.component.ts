import { Component, OnInit } from '@angular/core';
import { Statistic } from '../../dominio/Statistic';
import { GameService } from '../../services/GameService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  list:Statistic[];
  constructor(private gameService:GameService, private route: Router) {
   }

  ngOnInit() {
    this.list = new Array<Statistic>();
    this.gameService.findAll().subscribe(list => {
      console.log("la lista es", list);
      this.list = list
    });
  }

  backGame(){
    this.route.navigate(['/']);
  }

}
