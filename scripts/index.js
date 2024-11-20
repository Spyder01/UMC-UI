import {openDrawer, closeDrawer} from "./common.js";

//constants
const titleKeyword = document.getElementById('animated-keyword');

function animateKeyWords() {
    const keywords = ['a Champion', 'a Fighter', 'a Survivor', 'the Best'];
    let index = 0;

    return setInterval(() => {
        titleKeyword.innerText = keywords[index++];
        
        if (index >= keywords.length) {
            index = 0;
        }
    }, 1000);
}

window.addEventListener('load', e=>{
    animateKeyWords();
    openDrawer();
    closeDrawer();
});