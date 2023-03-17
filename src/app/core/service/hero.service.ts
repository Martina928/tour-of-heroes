import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API } from '../const/global-const.const';
import { Hero } from '../interface/hero.interface';
import { heroListMock } from '../mock/mock';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private msgService: MessageService,
    private http: HttpClient
  ) { }

  // get list -> async
  getHeroList(): Observable<Hero[]> {
    const heroList = of(heroListMock)
    this.msgService.addMsg('Service info: Fetched heroes!')
    return heroList;
  }

  addHero(params: any) {
    const url = API.HOST + API.HEROES;
    return this.http.post(url, params);
  }
}
