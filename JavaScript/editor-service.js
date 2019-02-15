'use strict'

var gText = {top: '', bottom: ''};
var gCurrStyle = {fontSize: 50, textAlign: 'center', fillStyle: 'white', strokeStyle: '#000000'}
var gCanvas;
var gCtx;
var gCurrImgUrl;

function initContext() {
    gCtx.font = "50px Impact";
    gCtx.textAlign="center";
    gCtx.fillStyle  = "white";
    gCtx.strokeStyle  = "#black";
}

function updateContextFontSize(change){
    gCurrStyle.fontSize += change;
    renderText();
}
function updatePosition(pos){
    gCurrStyle.textAlign = pos;
    renderText();
}
function updateColor(col){
    gCurrStyle.fillStyle = col;
    renderText();
}
function updateStroke(col){
    gCurrStyle.strokeStyle = col;
    renderText();
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
function getNewFontSize(){
    return gCurrStyle.fontSize;
}
function getNewTextAlign(){
    return gCurrStyle.textAlign;
}
function getNewFillStyle(){
    return gCurrStyle.fillStyle;
}
function getNewStrokeStyle(){
    return gCurrStyle.strokeStyle;
}