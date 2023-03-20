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
  db: string = API.HOST + API.HEROES;
  selectedHero!: Hero;

  constructor(
    private msgService: MessageService,
    private http: HttpClient
  ) { }

  // get list -> async
  getHeroList(): Observable<Hero[]> {
    const url = this.db + API.JSON;
    return this.http.get(url).pipe(
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
    const url = this.db + API.JSON;
    this.msgService.addMsg(`Service info: Added hero, name: ${params.name}.`);
    return this.http.post(url, params);
  }

  deleteHero(params: any) {
    const url = this.db + '/' + params.id + API.JSON;
    this.msgService.addMsg(`Service info: Deleted hero, name: ${params.name}.`);
    return this.http.delete(url);
  }

  editHero(params: any, id?: string) {
    const url = this.db + '/' + id + API.JSON;
    this.msgService.addMsg(`Service info: Edited hero, name: ${params.name}.`);
    return this.http.patch(url, params)
  }
}
