import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ROUTING_PATH } from 'src/app/core/const/routing-path.const';
import { Hero } from 'src/app/core/interface/hero.interface';
import { heroListMock } from 'src/app/core/mock/mock';
import { HeroService } from 'src/app/core/service/hero.service';
import { MessageService } from 'src/app/core/service/message.service';

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
    private router: Router,
    private heroService: HeroService,
    private msgService: MessageService,
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
    this.msgService.addMsg(`My Heroes: Selected hero, id: ${hero.id}.`)
    this.router.navigate([ROUTING_PATH.DETAIL], { queryParams: { id: hero.id } })
  }

  onDelete(hero: Hero) {
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
