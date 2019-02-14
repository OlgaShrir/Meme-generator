'use strict'

var gText = {top: '', bottom: ''};
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
    var size = ''
    size = '' + gCtx.font.charAt(0) + gCtx.font.charAt(1);
    size = parseInt(size);

    console.log('change:', change);
    
    var num = size + change;

    console.log('gCtx.font:', gCtx.font);
    gCtx.font = `${num}px Impact`;
    console.log('gCtx.font:', gCtx.font);

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
