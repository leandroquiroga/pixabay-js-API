import { ui, paginationTotal, cantPag, pagination, selector } from './../app/initApp';


export const videoAPI = (pageActual,content) => {
    const apiKey = '22400315-17efe134833c1662d2abfff49';
    const url = `https://pixabay.com/api/videos/?key=${apiKey}&q=${content}&per_page=${cantPag}$page=${pageActual}`;

    fetch(url)
        .then(response => response.json())
        .then(result => {
            const totalPage = paginationTotal(result.totalHits)
            const iterator = pagination(totalPage);
            ui.showResultVideo(result.hits, iterator)
        })
}