'use strict'

function initCanvas(imgUrl) {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    renderCanvas(imgUrl);
}


function renderCanvas(imgUrl) {
    // TODO: to render picked image from gallery
    var img = document.querySelector('.test')
    gCanvas.width = img.width;
    gCanvas.height = img.height;
    // img.src = url;

    var elImgCanvas = document.querySelector('.img-canvas');
    elImgCanvas.src = `/` + imgUrl;
    initContext();
    gCtx.drawImage(img, 0, 0);
}


function renderText() {
    renderCanvas(); 

    var ctx = getGCtx();
    var text = getGText();

    // text settings
    text.top = document.querySelector('.textTop').value;
    text.bottom = document.querySelector('.textBottom').value;

    // write top text
    gCtx.fillText(text.top, gCanvas.width / 2, 40);
    gCtx.strokeText(text.top, gCanvas.width / 2, 40);

    // write bottom text
    gCtx.fillText(text.bottom, gCanvas.width / 2, gCanvas.height -10);
    gCtx.strokeText(text.bottom, gCanvas.width / 2, gCanvas.heigth - 10);
}

function onChangeFontSize(sign){ 
    if (sign === 'plus') editContextFontSize(10)
    else editContextFontSize(-10)
}