
var gKeywords = [
    {name: 'happy', rate: 4, imgs: [1,3,4,8,13,15,17]}, 
    {name: 'nature', rate: 3, imgs: [1,3,5,13]},
    {name: 'calm', rate: 1, imgs: [3,4,6,16]},
    {name: 'sport', rate: 1, imgs: [16, 18]},
    {name: 'success', rate: 1, imgs: [5, 14, 19, 22]},
    {name: 'politic', rate: 1, imgs: [2, 14, 17, 24]},
    {name: 'movie', rate: 1, imgs: [7, 11, 12, 20, 21,23, 0]},
    {name: 'emotion', rate: 1, imgs: [2, 5, 8, 9, 10, 14, 15, 17, 23]},
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

