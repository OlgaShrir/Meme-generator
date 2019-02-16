'use strict'

function initCanvas(imgUrl) {
    // if this is the second picture selection from the gallery
    if (gCurrImgUrl !== undefined) backToDefault();

    gCurrImgUrl = imgUrl;
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    renderCanvas(imgUrl);
    gCoords = {
        top: { x: gCanvas.width / 2, y: (gCurrStyle.top.fontSize) },
        mid: { x: gCanvas.width / 2, y: gCanvas.height / 2},
        bottom: { x: gCanvas.width / 2, y: (gCanvas.height - 10) }
    }
}
function backToDefault() {
    // delete input text when select another picture
    document.querySelector('.text-top').value = '';
    document.querySelector('.text-mid').value = '';
    document.querySelector('.text-bottom').value = '';

    // default font styles
    gCurrStyle = {
        top: { fontSize: 50, textAlign: 'center', fillStyle: '#ffffff', strokeStyle: '#000000' },
        mid: { fontSize: 50, textAlign: 'center', fillStyle: '#ffffff', strokeStyle: '#000000' },
        bottom: { fontSize: 50, textAlign: 'center', fillStyle: '#ffffff', strokeStyle: '#000000' }
    };

    // back to black font-color and white stroke-color after chosing new img from the gallery
    document.querySelector('#color-choice-top').value = gCurrStyle.top.fillStyle;
    document.querySelector('#color-choice-mid').value = gCurrStyle.mid.fillStyle;
    document.querySelector('#color-choice-bottom').value = gCurrStyle.bottom.fillStyle;
    document.querySelector('#stroke-color-choice-top').value = gCurrStyle.top.strokeStyle;
    document.querySelector('#stroke-color-choice-mid').value = gCurrStyle.mid.strokeStyle;
    document.querySelector('#stroke-color-choice-bottom').value = gCurrStyle.bottom.strokeStyle;
    //hide mid line
    addLine();
}

function renderCanvas(imgUrl) {
    var elImgCanvas = document.querySelector('.img-canvas');
    elImgCanvas.src = imgUrl;
    gCanvas.width = elImgCanvas.width;
    gCanvas.height = elImgCanvas.height;
    gCtx.drawImage(elImgCanvas, 0, 0);

}

// text
function renderText() {
    let url = getCurrImgUrl();
    var text = getGText();
    renderCanvas(url);
    // text settings
    text.top = document.querySelector('.text-top').value;
    text.mid = document.querySelector('.text-mid').value;
    text.bottom = document.querySelector('.text-bottom').value;

    renderTextTop(text.top);
    renderTextBottom(text.bottom);
    if (text.mid !== '') renderTextMid(text.mid);
}

function onMoveText(direction, location) {
    var coords = getGCoords();
    console.log(location);
    switch (direction) {
        case 'up':
            coords[location].y -= 10;
            renderText(location);
            break;
        case 'down':
            coords[location].y += 10;
            renderText(location);
            break;
        case 'left':
            coords[location].x -= 10;
            renderText(location);
            break;
        case 'right':
            coords[location].x += 10;
            renderText(location);
            break;
    }
}
function renderTextTop(text) {
    updateStyle('top');
    var coords = getGCoords();
    gCtx.fillText(text, coords.top.x, coords.top.y);
    gCtx.strokeText(text, coords.top.x, coords.top.y);
}

function renderTextMid(text) {
    updateStyle('mid');
    var coords = getGCoords();
    gCtx.fillText(text, coords.mid.x, coords.mid.y);
    gCtx.strokeText(text, coords.mid.x, coords.mid.y);
}
function renderTextBottom(text) {
    updateStyle('bottom');
    var coords = getGCoords();
    gCtx.fillText(text, coords.bottom.x, coords.bottom.y);
    gCtx.strokeText(text, coords.bottom.x, coords.bottom.y);
}

function onChangePosition(pos, location) {
    updatePosition(pos, location);
}
function onChangeFontSize(change, location) {
    updateContextFontSize(change, location);
}
function onChangeColor(id, location) {
    let colorFont = document.getElementById(id).value;
    updateColor(colorFont, location);
}
function onChangeStroke(id, location) {
    let colorStroke = document.getElementById(id).value;
    updateStroke(colorStroke, location);
}
function updateStyle(location) {
    let size = getNewFontSize(location);
    let fill = getNewFillStyle(location);
    let stroke = getNewStrokeStyle(location);
    gCtx.font = `${size}px Impact`;
    gCtx.fillStyle = `${fill}`;
    gCtx.strokeStyle = `${stroke}`;
    gCtx.textAlign = `center`;
}

function onDownload(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpg');
    elLink.href = imgContent;
}
function addLine() {
    var line = document.querySelector('.input-mid');
    var btn = document.querySelector('.addLine-btn');
    line.classList.toggle('hidden');
    if (!line.classList.contains('hidden')) {
        btn.innerText = 'Delete middle line';
        document.querySelector('.text-mid').value = '';
    }else btn.innerText = 'Add line';
    // line.classList.toggle('flex');
}