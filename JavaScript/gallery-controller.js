
function init() {
    let imgs = createImgs();
    initCanvas();
    renderGallery(imgs);
    renderKeywordsAndSearch();
}
function renderGallery(imgs) {
    let elGallery = document.querySelector('.gallery');
    let strHtml = ``;
    imgs.forEach(function(img) {
        strHtml += `<div id="${img.id}" class="gallery-item" onclick="onSelectImg(this.id)"><img src="${img.url}"></img></div>`;
    });
    elGallery.innerHTML = strHtml;
}

function onSelectImg(id) {
    let srcImg = getSelectedImg(id);
    renderCanvas(srcImg);
}

function renderKeywordsAndSearch() {
    let elKeyWords = document.querySelector('.keywords');
    let elSearch = document.querySelector('#search');
    let keywords = gKeywords;
    strHtmlKeywords ='';
    strHtmlSearch = '';
    keywords.forEach(function(word) {
        let size = word.rate * 3 + 16;
        let style = `style="font-size:${size}px;`
        if (size>20) style += ` font-weight:bold`;
        strHtmlKeywords += `<div class="keyword ${word.name}" ${style}" onclick="renderSelectedImgs([${word.imgs}])"><p>${word.name}</p></div>`;
        strHtmlSearch += `<option id="${word.id}" value="${word.name}">${word.name}`
    });
    elKeyWords.innerHTML = strHtmlKeywords;
    elSearch.innerHTML = strHtmlSearch;
}

function searchImgs(ev) { 
    ev.preventDefault();
    let keyword = document.getElementById('search-input').value;
    let imgs = getImgsByKeyword(keyword);
    renderSelectedImgs(imgs);
    document.getElementById('search-input').value = '';
}

function renderSelectedImgs(ids) {
    let imgs = getSelectedImgs(ids);
    renderGallery(imgs);
}

function renderFullGallery() {
    init();
}
//