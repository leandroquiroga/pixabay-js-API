import { cantPag, pagination, ui } from "../app/initApp";
import { paginationTotal, selector } from './../app/initApp';

export const photoAPI = (pageActual) => {
    let paginatorActual = pageActual
    console.log(cantPag)
    let content = selector('#name').value;
    const apiKey = '22400315-17efe134833c1662d2abfff49';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${content}&per_page=${cantPag}$page=${paginatorActual}`;

    fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            const totalPage = paginationTotal(result.totalHits)
            const iterator = pagination(totalPage);
            ui.showResultImage(result.hits, iterator)
        })
} 