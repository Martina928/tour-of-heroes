import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING_PATH } from '../const/routing-path.const';
import { Menu } from '../model/menu.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  ROUTING_PATH = ROUTING_PATH;
  title = 'Tour of Heroes'
  displayMenuList: Menu[] = [
    // { label: 'Home', router: ROUTING_PATH.HOME },
    { label: 'Dashboard', router: ROUTING_PATH.DASHBOARD },
    { label: 'Heroes', router: ROUTING_PATH.HEROES },
  ]

  constructor(public router: Router) {}

  onMenuClick(route: string) {
    this.router.navigate([route])
  }

}
