import { photoAPI } from "../API/apiPhotos";
import { videoAPI } from "../API/apiVideos";
import { Interface } from "../class/UI"
import { paginationTotal } from './initApp';

/*
    LO QUE FALTA ARREGLAR ES EL TEMA DE LA PAGINACION QUE NO BUSCA CORRECTAMENTE 
    LA PAGINA CUANDO APRETAMOS LA PAGINACION

*/

// limpiar HTML 
export const limparHTML = (div) => {
    while (div.firstChild) {
        div.removeChild(div.firstChild)
    }
}

export const cantPag = 40;
export let pageActual = 1;

// create an intance
export const ui = new Interface();

// selector of class or id
export const selector = (element) => document.querySelector(element);

// creator of element HTML
export const create = (element) => document.querySelector(element);

// round up
export const paginationTotal = (total) => parseInt(Math.ceil(total / cantPag))

// genetaror for pagination
export function *pagination(total) {
    for (let i = 1; i <= total; i++){
        yield i;
    }
}
let form = selector('#formulario')



export const initAPP = () => {
    document.addEventListener('DOMContentLoaded', () => {
        menuExplorer();
        menuMobile();
        form.addEventListener('submit', validateForm);
    } )
    
}

function menuExplorer() {
    const button = selector('#menu');

    button.addEventListener('click', () => {
        let menu_list = selector('#menu-options');

        menu_list.classList.toggle('hidden')
    })
}

function menuMobile() {
    const menu_Resposive = selector('#menu-responsive');
    let menu_Mobile = selector('#menu-mobile');
    let close_Menu = selector('#menu-mobile-close');

    menu_Resposive.addEventListener('click', () => {
        menu_Mobile.classList.toggle('hidden')
    })
    close_Menu.addEventListener('click', () => {
        menu_Mobile.classList.toggle('hidden')
    })
}

function validateForm(e) {
    e.preventDefault();
    let inputValue = selector('#name').value;
    let select = selector('#select-option');
    let option = select.options[select.selectedIndex].value

    if (inputValue === '') {
        ui.validError("Por favor agrege algun valor");
        return;
    }
    consultarApi(option,inputValue);
}
function consultarApi(option) {
    if (option === 'photo') {
        photoAPI(pageActual);
        return;
    }

    if (option === 'videos') {
        videoAPI(option)
        return
    }
}

