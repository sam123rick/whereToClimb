import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseLocationComponent } from '../house-location/house-location.component';
import { HouseLocation } from '../house-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HouseLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-house-location 
      *ngFor="let houseLocation of filteredLocationList"
      [houseLocation]="houseLocation">
    </app-house-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {

  houseLocationList: HouseLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HouseLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HouseLocation[]) => {
      this.houseLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.houseLocationList;
      return;
    }
    this.filteredLocationList = this.houseLocationList.filter((houseLocation) =>
      houseLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }

}
