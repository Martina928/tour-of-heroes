import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() name!: string;
  @Input() id!: string;

  constructor(
    private location: Location,

  ) {}

  goBack() {
    this.location.back();
  }

}
