
interface Leader {
    x:number,
    y:number,
    logo:string,
    photo:string,
    name:string,
    position:string,
    alias: string
}

interface Organigramme {
    el: HTMLElement;
    brands: Array<Brand>;
    displayedProfile: string|null;
    constructor(el: HTMLElement): Organigramme;
    showProfile(alias: string): void;
}

interface Brand {
    el :SVGElement;
    profiles: Array<Profile>;
    constructor(el: SVGElement): Brand;
    showProfile(alias: string): void;
}

interface Profile {
    el: SVGGElement;
    alias: string;
    button: ProfileButton;
    constructor(el: SVGGElement): Profile;
    show(): void;
    hide(): void;
}

interface ProfileButton {
    el: SVGAElement;
    profile: Profile;
    constructor(el: SVGAElement, alias: string): ProfileButton;
}
