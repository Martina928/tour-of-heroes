import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { API } from '../const/global-const.const';
import { Hero } from '../interface/hero.interface';
import { heroListMock } from '../mock/mock';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url: string = API.HOST + API.HEROES;

  constructor(
    private msgService: MessageService,
    private http: HttpClient
  ) { }

  // get list -> async
  getHeroList(): Observable<Hero[]> {
    return this.http.get(this.url).pipe(
      map((res: any) => {
        const list: Hero[] = [];
        for(const key in res) {
          list.push({id: key, name: res[key].name})
        }
        this.msgService.addMsg('Service info: Fetched heroes!')
        return list;
      })
    )
    // const heroList = of(heroListMock)
    // this.msgService.addMsg('Service info: Fetched heroes!')
    // return heroList;
  }

  addHero(params: any) {
    this.msgService.addMsg(`Service info: Added hero, name: ${params.name}.`);
    return this.http.post(this.url, params);
  }
}
