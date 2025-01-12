import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseLocation } from '../house-location';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-house-location',
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="houseLocation.photo"
        alt="Exterior photo of {{ houseLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ houseLocation.name }}</h2>
      <p class="listing-location">{{ houseLocation.city }}, {{ houseLocation.state }}</p>
      <a [routerLink]="['/details', houseLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./house-location.component.css'],
})
export class HouseLocationComponent {

  @Input() houseLocation!: HouseLocation;
}
