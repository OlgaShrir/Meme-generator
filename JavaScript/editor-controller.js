'use strict'

function initCanvas(imgUrl) {
    gCurrImgUrl = imgUrl;
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    renderCanvas(imgUrl);
}

function renderCanvas(imgUrl) {
    var elImgCanvas = document.querySelector('.img-canvas');
    gCanvas.width = img.width;
    gCanvas.height = img.height;
    elImgCanvas.src = imgUrl;
    initContext();
    gCtx.drawImage(img, 0, 0);
}

function renderText() {
    let url = getCurrImgUrl();
    var text = getGText();
    renderCanvas(url); 
    // text settings
    text.top = document.querySelector('.textTop').value;
    text.bottom = document.querySelector('.textBottom').value;

    updateStyle();
    // write top text
    gCtx.fillText(text.top, gCanvas.width / 2, 40);
    gCtx.strokeText(text.top, gCanvas.width / 2, 40);
    // write bottom text
    gCtx.fillText(text.bottom, gCanvas.width / 2, gCanvas.height -10);
    gCtx.strokeText(text.bottom, gCanvas.width / 2, gCanvas.height -10);

}
function onChangePosition(pos) {
    updatePosition(pos);
}
function onChangeFontSize(change){ 
    updateContextFontSize(change);
}
function onChangeColor() {
    let colorFont = document.getElementById('color-choice').value;
    updateColor(colorFont);
}
function onChangeStroke() {
    let colorStroke = document.getElementById('stroke-color-choice').value;
    updateStroke(colorStroke);
}
function updateStyle() {
    let size = getNewFontSize();
    let textAlign = getNewTextAlign();
    let fill = getNewFillStyle();
    let stroke = getNewStrokeStyle();
    gCtx.font = `${size}px Impact`;
    gCtx.textAlign = `${textAlign}`;
    gCtx.fillStyle = `${fill}`;
    gCtx.strokeStyle = `${stroke}`;
}