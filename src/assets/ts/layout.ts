
import Organigramme from "./libs/organigramme";

window.addEventListener('DOMContentLoaded', () => {
    window['Organigramme'] = new Organigramme( document.getElementById('svg-orga') );
});