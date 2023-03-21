import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { API } from '../const/global-const.const';
import { ROUTING_PATH } from '../const/routing-path.const';
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
    private router: Router,
    private msgService: MessageService,
    private http: HttpClient
  ) { }

  /** navigate  hero to edit page */
  navigateHero(hero: Hero) {
    this.selectedHero = hero;
    this.msgService.addMsg(`My Heroes: Selected hero, id: ${hero.id}.`);
    this.router.navigate([ROUTING_PATH.DETAIL], { queryParams: { id: hero.id } });
  }

  /** GET */
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

  /** POST */
  addHero(params: any): Observable<any> {
    const url = this.db + API.JSON;
    this.msgService.addMsg(`Service info: Added hero, name: ${params.name}.`);
    return this.http.post(url, params);
  }

  /** DELETE */
  deleteHero(params: any): Observable<any> {
    const url = this.db + '/' + params.id + API.JSON;
    this.msgService.addMsg(`Service info: Deleted hero, name: ${params.name}.`);
    return this.http.delete(url);
  }

  /** PATCH */
  editHero(params: any, id?: string): Observable<any> {
    const url = this.db + '/' + id + API.JSON;
    this.msgService.addMsg(`Service info: Edited hero, name: ${params.name}.`);
    return this.http.patch(url, params)
  }
}
