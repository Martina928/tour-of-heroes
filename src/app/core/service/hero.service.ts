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
  getHeroList(): Observable<any> {
    return this.http.get(this.url).pipe(
      map((res) => {
        console.log(res)

        const list: Hero[] = [];
        for(const key in res) {
        console.log(res)
            // list.push({id: key, ...res[key]})
          
          console.log(key)
        }
        return list;
      })
    )
    // const heroList = of(heroListMock)
    // this.msgService.addMsg('Service info: Fetched heroes!')
    // return heroList;
  }

  addHero(params: any) {
    return this.http.post(this.url, params);
  }
}
