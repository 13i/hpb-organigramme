/// <reference path="../_typings.d.ts" />

import ProfileButton from "./profile_button";

class Profile {
  el: SVGGElement;

  alias: string;

  button: ProfileButton;

  constructor(el: SVGGElement) {
    this.el = el;

    this.alias = this.el.getAttribute("data-alias");

    const buttonElement = this.el.querySelector(".plus") as SVGAElement;
    if (buttonElement) {
      this.button = new ProfileButton(buttonElement, this.alias);
    }
  }

  show(): void {
    this.el.classList.add("on");
  }

  hide(): void {
    this.el.classList.remove("on");
  }
}

export default Profile;
