/// <reference path="../_typings.d.ts" />

class ProfileButton {
    
    el: SVGAElement;

    profileAlias: string;

    constructor( el: SVGAElement, profileAlias: string ) {
        this.el = el;

        this.profileAlias = profileAlias;

        this.el.addEventListener('click', (e: Event) => {
            if(e) e.preventDefault();
            window['Organigramme'].showProfile( this.profileAlias );
        });
    }
}

export default ProfileButton;