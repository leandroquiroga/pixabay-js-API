import {create, selector} from "../app/initApp";
import { limparHTML, pageActual } from './../app/initApp';
import { photoAPI } from './../API/apiPhotos';
import { videoAPI } from "../API/apiVideos";


export class Interface {
    validError(text) {
        let span = selector('#err');
        span.textContent = text;
        setTimeout(() => { span.textContent = ''}, 2500); 
    }
    showPagination(iterator, apiActual) {
        let paginationDIV = selector('#pagination')
        while (true) {
            const { value, done } = iterator.next();
            if (done) return;

            // create button for iterator
            const button = create('a');
            button.href = '#result';
            button.dataset.pagina = value;
            button.textContent = value;
            button.classList.add('linkPagination')
            button.onclick = () => {
                pageActual = value;
                (apiActual === 'photo') ? photoAPI(pageActual) : videoAPI(pageActual)
            }
            paginationDIV.appendChild(button)
            limparHTML(paginationDIV)
        }

    } 
    showResultImage(data, iterator) {
        // pinta la api
        let divParent = selector('#cards');
        let spinner = selector('#spinner');
        let divResult = selector('#result');
        let photo = 'photo'
        spinner.classList.remove('hidden')
        divParent.classList.add('hidden');
        limparHTML(divResult)
        
        setTimeout(() => {
            spinner.classList.add('hidden');
            data.forEach(element => {
                const { previewURL, likes, tags, comments, largeImageURL } = element
                divResult.innerHTML += `
                        <div class="content-img block h-64 w-full overflow-hidden">
                            <a href="${largeImageURL}" target="_blank">
                                <img src="${previewURL}" class="w-full h-full z-0">
                                <div class="card-info h-1/4">
                                    <div class="position">
                                        <div class="dir">
                                            <p class="tags">${tags}</p>
                                            <div class="flex justify-center py-1">
                                                <small id="likes" class="smallStyles"> ${likes}
                                                    <img src="./thumb-up.b9ce3e6a.svg" alt="" class="styleSVG">
                                                </small>
                                                <small id="comment" class="smallStyles"> ${comments}
                                                    <img src="./coments.7832765c.svg" alt="" class="styleSVG">
                                                </small>
                                                <img src="./heart.ea5ae6a5.svg" alt="" class="ml-2 w-5 opacity-80 cursor-pointer">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                 `
            });
            this.showPagination(iterator, photo)
        }, 2500);
        
    }
    showResultVideo(data) {
        // pinta la api
        let divParent = selector('#cards');
        let spinner = selector('#spinner');
        let divResult = selector('#result');
        let video = 'video'

        spinner.classList.remove('hidden')
        divParent.classList.add('hidden');
        limparHTML(divResult)


        setTimeout(() => {
            spinner.classList.add('hidden');
            data.forEach(element => {
                const { likes, tags, comments, picture_id, duration } = element;
                const { videos: { medium: { url }, tiny: { width, height } } } = element;
                const picURL = `https://i.vimeocdn.com/video/${picture_id}_${width}x${height}.jpg`;
                divResult.innerHTML += `
                        <div class="content-img block h-64 w-full overflow-hidden">
                            <div class="relative top-1 left-1">
                                <small class="font-open text-black">4k ${formatMinutes(duration)}:${formatSecond(duration)}</small>
                            </div>
                            <a href="${url}" target="_blank">
                                <img src="${picURL}" class="w-full h-full z-0">
                                <div class="card-info h-1/4">
                                    <div class="position">
                                        <div class="dir">
                                            <p class="tags">${tags}</p>
                                            <div class="flex justify-center py-1">
                                                <small id="likes" class="smallStyles"> ${likes}
                                                    <img src="./thumb-up.b9ce3e6a.svg" alt="" class="styleSVG">
                                                </small>
                                                <small id="comment" class="smallStyles"> ${comments}
                                                    <img src="./coments.7832765c.svg" alt="" class="styleSVG">
                                                </small>
                                                <img src="./heart.ea5ae6a5.svg" alt="" class="ml-2 w-5 opacity-80 cursor-pointer">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                `
            });
            this.showPagination(iterator ,video)
        }, 2500);

        function formatMinutes(time) {
            let minutes = 0
            if (time >= 60) {
                return minutes = '0' + `${minutes+=1}`
            }
            return minutes = '00';
        }

        function formatSecond(time) {
            if (time < 10) {
                return time ='0' + `${time}`;
            }
            if (time >= 60) {
                return time - 60;
            }

            return time;
        }
    }
}