import { Injectable } from '@angular/core';
import { HouseLocation } from './house-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HouseLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HouseLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
