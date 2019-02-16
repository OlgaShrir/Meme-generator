'use strict'

var gText = {top: '', bottom: ''};
var gCanvas = document.querySelector('#canvas');
var gCurrStyle = { 
                top: {fontSize: 50, fillStyle: 'white', strokeStyle: '#000000'},
                bottom: {fontSize: 50, fillStyle: 'white', strokeStyle: '#000000'}, 
                mid: {fontSize: 50, fillStyle: 'white', strokeStyle: '#000000'} 
            };
var gCoords = { top: {x: 0, y: 0},
                bottom: {x: 0, y: 0},
                mid: {x: 0, y: 0}
             }

var gCtx;
var gCurrImgUrl;


function updateContextFontSize(change, location){
    gCurrStyle[location].fontSize += change;
    renderText(location);
}
function updateColor(col, location){
    gCurrStyle[location].fillStyle = col;
    renderText(location);
}
function updateStroke(col,location){
    gCurrStyle[location].strokeStyle = col;
    renderText(location);
}

function getGCtx(){
    return gCtx;
}

function getGCanvas(){
    return gCanvas;
}

function getGText(){
    return gText;
}
function getCurrImgUrl(){
    return gCurrImgUrl;
}
function getNewFontSize(location){
    return gCurrStyle[location].fontSize;
}

function getNewFillStyle(location){
    return gCurrStyle[location].fillStyle;
}
function getNewStrokeStyle(location){
    return gCurrStyle[location].strokeStyle;
}
function getGCoords(){
    return gCoords;
}