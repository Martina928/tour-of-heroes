import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING_PATH } from 'src/app/core/const/routing-path.const';
import { Hero } from 'src/app/core/interface/hero.interface';
import { heroListMock } from 'src/app/core/mock/mock';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroList: Hero[] = heroListMock;

  constructor(
    private router: Router,
  ) {}

  onHeroClick(heroId: number) {
    this.router.navigate([ROUTING_PATH.DETAIL], { queryParams: { id: heroId } })
  }

  onDelete(heroId: number) {
    this.heroList = this.heroList.filter((hero) => hero.id !== heroId)
  }

}
