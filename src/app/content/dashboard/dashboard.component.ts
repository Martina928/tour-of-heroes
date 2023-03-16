import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';
import { ROUTING_PATH } from 'src/app/core/const/routing-path.const';
import { Hero } from 'src/app/core/interface/hero.interface';
import { heroListMock } from 'src/app/core/mock/mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroList: Hero[] = heroListMock;
  displayList: Hero[] = [];
  searchList: Hero[] = [];
  keyWord: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.displayList = this.heroList.slice(0, 4);
  }

  onHeroClick(heroId: number) {
    this.router.navigate([ROUTING_PATH.DETAIL], { queryParams: { id: heroId } })
  }

}
