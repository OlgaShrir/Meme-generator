function init() {
    renderGallery();
}
function renderGallery() {
    let elGallery = document.querySelector('.gallery');
    let imgs = createImgs();
    let strHtml = ``;
    imgs.forEach(function(img) {
        strHtml += `<div id="${img.id}" class="gallery-item"><img src="${img.url}"></img></div>`;
    });
    elGallery.innerHTML = strHtml;
}