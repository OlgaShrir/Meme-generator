var gNumImgs = 25;
var gKeywords = [
    {name: 'happy', rate: 5, imgs: [1,3,4,8,13,15,17]}, 
    {name: 'nature', rate: 3, imgs: [1,3,5,13]},
    {name: 'calm', rate: 2, imgs: [3,4,6,16]},
    {name: 'sport', rate: 3, imgs: [16, 18]},
    {name: 'success', rate: 4, imgs: [5, 14, 19, 22]},
    {name: 'politic', rate: 1, imgs: [2, 14, 17, 24]},
    {name: 'movie', rate: 1, imgs: [7, 11, 12, 20, 21,23, 0, 19]},
    {name: 'emotion', rate: 4, imgs: [2, 5, 8, 9, 10, 14, 15, 17, 23]},
];
var gImgs = [];

function createImgs() {
    for (let i = 0; i < 25; i++) {
        var img = {
            id: i,
            url: `images/${i}.jpg`,
            keywords: getKeywordImg(i)
        }
        gImgs.push(img);
    }
    return gImgs;
}

function getKeywordImg(id) {
    keywords = [];
    gKeywords.forEach(keyword => {
       if (keyword.imgs.includes(id)) keywords.push(keyword.name);
    });
    return keywords;
}

function getSelectedImg(id) {
    var selectedImg = gImgs.find(function(img) {
        return img.id === +id;
    })
    return selectedImg.url;
}

function getSelectedImgs(ids) {
    var selectedImgs = gImgs.filter(function(img) {
        if (ids.includes(img.id)) return img;
    })
    return selectedImgs;
}

function getImgsByKeyword(name) {
    var keyword = gKeywords.find(function(word) {
        return word.name === name;
    })
    return keyword.imgs;
}