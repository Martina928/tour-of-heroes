import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from 'src/app/core/interface/hero.interface';
import { heroListMock } from 'src/app/core/mock/mock';
import { HeroService } from 'src/app/core/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroForm!: FormGroup;
  errMsg!: string;
  
  heroList: Hero[] = [];

  constructor(
    private heroService: HeroService,
  ) {}

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(1)])
    })

    this.getHeroList();
  }

  /** Add new hero */
  onSubmit() {
    this.heroForm.markAsDirty()
    if(this.heroForm.invalid) { 
      this.errMsg = 'Please input validated text.'
      return; 
    }

    const params = this.heroForm.value
    this.heroService.addHero(params).subscribe(() => {
      window.alert('Success!') ;
      this.getHeroList();
    }) 

    this.heroForm.get('name')?.setValue('');
  }

  onHeroClick(hero: Hero) {
    this.heroService.navigateHero(hero);
  }

  onDelete(hero: Hero, event: MouseEvent) {
    event.stopPropagation();
    this.heroService.deleteHero(hero).subscribe(() => { 
      this.getHeroList();
    })
  }

  private getHeroList() {
    this.heroService.getHeroList().subscribe(data => {
      this.heroList = data;
    });
  }

}
