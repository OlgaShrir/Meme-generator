'use strict'

function initCanvas(imgUrl) {
    // if this is the second picture selection from the gallery
    if (gCurrImgUrl !== undefined) backToDefault();
    gCurrImgUrl = imgUrl;
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    renderCanvas(imgUrl);
}
function backToDefault(){
    // delete input text when select another picture
    document.querySelector('.textTop').value = ''
    document.querySelector('.textBottom').value = ''

    // default font styles
    gCurrStyle = {fontSize: 50, textAlign: 'center', fillStyle: 'white', strokeStyle: '#000000'}
    
    // back to black font-color and white stroke-color after chosing new img from the gallery
    document.querySelector('#color-choice').value = "#ffffff";
    document.querySelector('#stroke-color-choice').value="#000000";
}

function renderCanvas(imgUrl) {
   
    var elImgCanvas = document.querySelector('.img-canvas');
    elImgCanvas.src = imgUrl;
    gCanvas.width = elImgCanvas.width;
    gCanvas.height = elImgCanvas.height;
    // function getSelectedImg, 
    // line gCurrStyle = {fontSize: 50, textAlign: 'center', fillStyle: 'white', strokeStyle: '#000000'}
    // allows us to not tou use initContext function
    // initContext();  
    initContext();
    gCtx.drawImage(elImgCanvas, 0, 0);
}

// text
function renderText() {
    let url = getCurrImgUrl();
    var text = getGText();
    renderCanvas(url); 
    // text settings
    text.top = document.querySelector('.textTop').value;
    text.bottom = document.querySelector('.textBottom').value;

    updateStyle();

    // write top text
    gCtx.fillText(text.top, gCanvas.width / 2, gCurrStyle.fontSize);
    gCtx.strokeText(text.top, gCanvas.width / 2, gCurrStyle.fontSize);
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

function onDownload(elLink){
    var imgContent = gCanvas.toDataURL('image/jpg');
    elLink.href = imgContent
}