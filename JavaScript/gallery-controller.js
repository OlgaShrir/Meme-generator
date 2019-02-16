
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

function renderKeywordsAndSearch() {
    let elKeyWords = document.querySelector('.keywords');
    let elSearch = document.querySelector('#search');
    let keywords = gKeywords;
    strHtmlKeywords ='';
    strHtmlSearch = '';
    keywords.forEach(function(word) {
        setRatingFromStorage(word);
        let size = word.rate * 3 + 16;
        let style = `style="font-size:${size}px;`
        if (size>20) style += ` font-weight:bold`;
        strHtmlKeywords += `<div class='keyword ${word.name}' ${style}" onclick="renderFilteredImgs('${word.name}',[${word.imgs}])"><p>${word.name}</p></div>`;
        strHtmlSearch += `<option value="${word.name}">${word.name}`
    });
    elKeyWords.innerHTML = strHtmlKeywords;
    elSearch.innerHTML = strHtmlSearch;
}
function toggleSearch() {
    let searchForm = document.querySelector('form');
    let renderSearchBtn = document.querySelector('.search-input-btn');
    searchForm.classList.toggle('hidden');
    if (!searchForm.classList.contains('hidden')){
        renderSearchBtn.style.backgroundColor = "#595996";
        renderSearchBtn.style.color = "white";
        renderSearchBtn.innerText = 'Hide search';

    } else {
        renderSearchBtn.style.backgroundColor = '';
        renderSearchBtn.style.color = '';
        renderSearchBtn.innerText = 'Search';
        renderFullGallery()
    }
}
function toggleKeywords() {
    let keywords = document.querySelector('.keywords');
    let renderKWBtn = document.querySelector('.kw-btn');
    keywords.classList.toggle('hidden');
    if (!keywords.classList.contains('hidden')){
        renderKWBtn.style.backgroundColor = "#595996";
        renderKWBtn.style.color = 'white';
        renderKWBtn.innerText = 'Hide Categories';
    } else {
        renderKWBtn.style.backgroundColor = '';
        renderKWBtn.style.color = '';
        renderKWBtn.innerText = 'Categories';
    }
}
function onSelectImg(id) {
    let srcImg = getSelectedImg(id);
    initCanvas(srcImg);
}
function filterOnType() {
    let text = document.getElementById('search-input').value;
    let imgs = getImgsByText(text);
    renderFilteredImgs(text, imgs);
    updateRating(text);
}
function renderFilteredImgs(keyword, ids) {
    let imgs = getFilteredImgs(ids);
    renderGallery(imgs);
    updateRating(keyword);
}
function renderFullGallery() {
    init();
    document.getElementById('search-input').value = '';
}



//