import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';
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

  constructor() { }

  ngOnInit(): void {
    this.displayList = this.heroList.slice(0, 4);
  }

}
