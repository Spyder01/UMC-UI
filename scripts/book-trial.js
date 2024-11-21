import {openDrawer, closeDrawer} from "./common.js";

//constants
const anchorLinks = document.getElementsByTagName('a');

function trialForm () {
    const form = document.getElementById('trial-form');

    form.addEventListener('submit', e=>{
        e.preventDefault();
    })
}

window.addEventListener('load', e=>{
    openDrawer();
    closeDrawer(anchorLinks);
    trialForm();
});
