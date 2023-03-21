import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/core/interface/hero.interface';
import { heroListMock } from 'src/app/core/mock/mock';
import { HeroService } from 'src/app/core/service/hero.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  editForm!: FormGroup;
  errMsg!: string;
  
  hero!: Hero;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.hero = this.heroService.selectedHero;

    this.editForm = new FormGroup({
      name: new FormControl(this.hero?.name ?? '', [Validators.required, Validators.minLength(1)])
    })
  }

  goBack() {
    this.location.back();
  }

  onSubmit(id?: string) {
    this.editForm.markAsDirty();
    if(this.editForm.invalid) {
      this.errMsg = 'Please input validated text.';
      return;
    }

    const params = this.editForm.value;
    this.heroService.editHero(params, id).subscribe(() => {
      window.alert('Success!');
      this.hero.name = params.name;
    })
  }

}
