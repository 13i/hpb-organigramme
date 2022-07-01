/// <reference path="../_typings.d.ts" />

import Profile from './profile';

class Brand {
  el: SVGElement;

  profiles: Array<Profile> = [];

  constructor(el: SVGElement) {
    this.el = el;

    const profileElements =  this.el.querySelectorAll(".card") as NodeListOf<SVGGElement>;

    for (let i: number = 0; i < profileElements.length; i++) {
      const profileElement = profileElements[i];
      const profile = new Profile( profileElement );
      this.profiles.push( profile ); 
    }
  }

  showProfile(alias: string): void {
    for (let i: number = 0; i < this.profiles.length; i++) {
      if (this.profiles[i].alias === alias) {
        this.profiles[i].show();
      } else {
        this.profiles[i].hide();
      }
    }
  } 

  hideProfiles(){
    for (let i: number = 0; i < this.profiles.length; i++) {
      this.profiles[i].hide();
    }
  }
}

export default Brand;
