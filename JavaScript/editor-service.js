'use strict'

var gText = {top: '', bottom: ''};
var gCanvas = document.querySelector('#canvas');
var gCurrStyle = { 
                top: {fontSize: 50, fillStyle: 'white', strokeStyle: '#000000'},
                bottom: {fontSize: 50, fillStyle: 'white', strokeStyle: '#000000'}, 
                mid: {fontSize: 50, fillStyle: 'white', strokeStyle: '#000000'} 
            };
var gCoords = { top: {x: 0, y: 0, width: 0, box: {x: {min: 0, max:0}, y:{min:0, max:0}}, move: false},
                bottom: {x: 0, y: 0, width: 0, box: {x: {min: 0, max:0}, y:{min:0, max:0}}, move: false},
                mid: {x: 0, y: 0, width: 0, box: {x: {min: 0, max:0}, y:{min:0, max:0}}, move: false}
             }

var gCtx;
var gCurrImgUrl;
var gMoveCoords = {x:0, y:0, name: 0};

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
function updateGCoords(location,width){
    gCoords[location].width = width;
    gCoords[location].box.x.min = gCoords[location].x - width/2;
    gCoords[location].box.x.max = gCoords[location].x + width/2;
    gCoords[location].box.y.min = gCoords[location].y - gCurrStyle[location].fontSize;
    gCoords[location].box.y.max = gCoords[location].y;
}
function isClickedBox(x,y) {
    for (var loc in gCoords) {
        let xMin = gCoords[loc].box.x.min;
        let xMax = gCoords[loc].box.x.max;
        let yMin = gCoords[loc].box.y.min;
        let yMax = gCoords[loc].box.y.max;
        if (x <= xMax && x >= xMin && y <= yMax && y >= yMin) {
            // gMoveCoords.loc = gCoords[loc];
            gMoveCoords.name = loc;
            gCoords[loc].move = true;
            return gCoords[loc];
        }
    } return false;
}

function setMovecoords(x,y) {
    gMoveCoords.x = x;
    gMoveCoords.y = y;
}
function getMoveCoords() {
    return gMoveCoords;
}