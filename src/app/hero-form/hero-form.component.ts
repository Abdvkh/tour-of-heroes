import { Component } from '@angular/core';
import { HeroModel } from '../Hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new HeroModel(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit(): void { this.submitted = true; }

  newHero(): void {
    this.model = new HeroModel(42, '', '');
  }
}
