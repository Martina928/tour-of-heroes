import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/core/interface/hero.interface';
import { heroListMock } from 'src/app/core/mock/mock';
import { HeroService } from 'src/app/core/service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayList: Hero[] = [];
  searchList: Hero[] = [];
  keyWord: string = '';

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHeroList();
  }

  onHeroClick(hero: Hero) {
    this.heroService.navigateHero(hero);
  }

  onSearch() {
    if(this.keyWord === '') { 
      this.searchList = [];
      return ; 
    }
    this.heroService.getHeroList().subscribe(data => {
      this.searchList = data.filter(item => {
        return item.name.replace(/\s/g, '').toLowerCase().includes(this.keyWord.replace(/\s/g, '').toLowerCase());
      })
    });
  }

  private getHeroList() {
    this.heroService.getHeroList().subscribe(data => {
      this.displayList = data.slice(0, 4);
    });
  }
}
