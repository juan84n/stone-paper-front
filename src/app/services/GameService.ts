import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';


import { Statistic } from "../dominio/Statistic";

@Injectable()
export class GameService{

    API_URL:String = "http://localhost:9000";

    constructor(private http: HttpClient) {
    }

    save(statistic:Statistic){
        return this.http.post<Statistic>(`${this.API_URL}/api/stone-paper/statistics`, statistic)
        .pipe(map(res => res));
    }
    findAll(){
        return this.http.get<Statistic[]>(`${this.API_URL}/api/stone-paper/statistics`)
        .pipe(map(res => res));
    }
}