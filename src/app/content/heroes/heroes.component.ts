import { Component } from '@angular/core';
import { Hero } from 'src/app/core/interface/hero.interface';
import { heroListMock } from 'src/app/core/mock/mock';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroList: Hero[] = heroListMock;

}
