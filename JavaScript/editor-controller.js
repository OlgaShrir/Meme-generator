'use strict'

var gCanvas;
var gCtx;

function initCanvas(){
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    gCanvas.width = 800;
    gCanvas.height = 300;
    // gCanvas.width = 100%;
    // gCanvas.heigth = 100%;

    var img = getImage();
    img.src = 'leo.jpg';  
    img.onload = function(){
        gCtx.drawImage(img, 0, 0);
    }

}

