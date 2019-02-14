'use strict'

var gText = {top: '', bottom: ''};
var gCurrStyle = {fontSize: 50, textAlign: 'center', fillStyle: 'white', strokeStyle: '#black'}
var gCanvas;
var gCtx;
var gCurrImgUrl;

function initContext() {
    gCtx.font = "50px Impact";
    gCtx.textAlign="center";
    gCtx.fillStyle  = "white";
    gCtx.strokeStyle  = "#black";
}

function editContextFontSize(change){
    gCurrStyle.fontSize += change;
    gCtx.font = `${gCurrStyle.fontSize}px Impact`;
    renderText();
}


// function getImage(){
//     var img = new Image();
//     img.src = '../leo.jpg'; 
//     return img;
// }

function getGCtx(){
    return gCtx;
}

function getGCanvas(){
    return gCanvas;
}

function getGText(){
    return gText;
}
