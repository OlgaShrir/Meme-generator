function init() {
    debugger;
    renderGallery();
    renderKeywords();
}
function renderGallery() {
    let elGallery = document.querySelector('.gallery');
    let imgs = createImgs();
    let strHtml = ``;
    imgs.forEach(function(img) {
        strHtml += `<div id="${img.id}" class="gallery-item" onclick="onSelectImg(this.id)"><img src="${img.url}"></img></div>`;
    });
    elGallery.innerHTML = strHtml;
}

function onSelectImg(id) {
    var srcImg = getSelectedImg(id);
    console.log(srcImg);
}

function renderKeywords() {
    debugger;
    var elKeyWords = document.querySelector('.keywords');
    var keywords = gKeywords;
    strHtml ='';
    keywords.forEach(function(word) {
        let size = word.rate + 16;
        let style = `style="font-size:${size}px`
        if (size>20) style += ` weight: bold`;
        strHtml += `<div class="keyword ${word.name}" ${style}">${word.name}</div>`;
    });
    elKeyWords.innerHTML = strHtml;
}