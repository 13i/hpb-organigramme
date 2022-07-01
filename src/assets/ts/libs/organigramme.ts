/// <reference path="../_typings.d.ts" />

import Brand from "./brand";

class Organigramme {
  el: HTMLElement;

  brands: Array<Brand> = [];

  displayedProfile: string|null = null;

  constructor(el: HTMLElement) {
    this.el = el;

    const brands = this.el.querySelectorAll(".brand") as NodeListOf<SVGElement>;
    for (let i: number = 0; i < 7; i++) {
      const brand = new Brand( brands[i] );
      this.brands[i] = brand;
    }
  }

  showProfile(alias: string): void {
    if( alias == this.displayedProfile ){
      for (let i: number = 0; i < this.brands.length; i++) {
        this.brands[i].hideProfiles();
      }
      this.displayedProfile = null;
    } else {
      for (let i: number = 0; i < this.brands.length; i++) {
        this.brands[i].showProfile( alias );
      }
      this.displayedProfile = alias;
    }
  }
}

export default Organigramme;
