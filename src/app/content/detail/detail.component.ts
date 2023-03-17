import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/core/interface/hero.interface';
import { heroListMock } from 'src/app/core/mock/mock';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  heroList: Hero[] = heroListMock;
  hero: Hero | undefined;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
  ) {
    const heroId = this.route.snapshot.queryParams['id'];
    this.hero = this.heroList.find((hero) => hero.id === heroId)
    console.log(this.hero)
  }

  ngOnInit(): void {
    
  }

  goBack() {
    this.location.back();
  }

}
