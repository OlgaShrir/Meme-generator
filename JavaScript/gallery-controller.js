
function init() {
    let imgs = createImgs();
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
    initCanvas(srcImg);
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
        strHtmlKeywords += `<div class="keyword ${word.name}" ${style}" onclick="renderFilteredImgs([${word.imgs}])"><p>${word.name}</p></div>`;
        strHtmlSearch += `<option id="${word.id}" value="${word.name}">${word.name}`
    });
    elKeyWords.innerHTML = strHtmlKeywords;
    elSearch.innerHTML = strHtmlSearch;
}

function filterOnType() {
    let text = document.getElementById('search-input').value;
    let imgs = getImgsByText(text);
    renderFilteredImgs(imgs);
}
function renderFilteredImgs(ids) {
    let imgs = getFilteredImgs(ids);
    renderGallery(imgs);
}

function renderFullGallery() {
    init();
}

function renderSearch() {
    let searchForm = document.querySelector('form');
    let renderSearchBtn = document.querySelector('.search-btn');
    searchForm.classList.toggle('hidden');
    if (!searchForm.classList.contains('hidden')){
        renderSearchBtn.style.backgroundColor = "#595996";
        renderSearchBtn.innerText = 'Hide search';
    } else {
        renderSearchBtn.style.backgroundColor = '';
        renderSearchBtn.innerText = 'Search';
    }
}
function renderKeywords() {
    let keywords = document.querySelector('.keywords');
    let renderKWBtn = document.querySelector('.kw-btn');
    keywords.classList.toggle('hidden');
    if (!keywords.classList.contains('hidden')){
        renderKWBtn.style.backgroundColor = "#595996";
        renderKWBtn.innerText = 'Hide Categories';
    } else {
        renderKWBtn.style.backgroundColor = '';
        renderKWBtn.innerText = 'Categories';
    }
}

//