import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../interface/hero.interface';
import { heroListMock } from '../mock/mock';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private msgService: MessageService) { }

  // get list -> async
  getHeroList(): Observable<Hero[]> {
    const heroList = of(heroListMock)
    this.msgService.addMsg('Service info: Fetched heroes!')
    return heroList;
  }
}
