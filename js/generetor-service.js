var gCanvas;
var gCtx;
var gCurrShape = 'text'
var gMarker = true;



var gImags = [
    {
        id: 1,
        url: 'memes/1.jpg'
    },

    {
        id: 2,
        url: 'memes/2.jpg'
    },
    {
        id: 3,
        url: 'memes/3.jpg'
    },
    {
        id: 4,
        url: 'memes/4.jpg'
    },
    {
        id: 6,
        url: 'memes/6.jpg'
    },
    {
        id: 7,
        url: 'memes/7.jpg'
    },
    {
        id: 8,
        url: 'memes/8.jpg'
    },
    {
        id: 9,
        url: 'memes/9.jpg'
    },
    {
        id: 10,
        url: 'memes/10.jpg'
    },
    {
        id: 11,
        url: 'memes/11.jpg'
    },
    {
        id: 12,
        url: 'memes/12.jpg'
    },
    {
        id: 13,
        url: 'memes/13.jpg'
    },
    {
        id: 14,
        url: 'memes/14.jpg'
    },
    {
        id: 15,
        url: 'memes/15.jpg'
    },
    {
        id: 16,
        url: 'memes/16.jpg'
    },
    {
        id: 17,
        url: 'memes/17.jpg'
    },


    {
        id: 18,
        url: 'memes/18.jpg'
    }


]

var gMeme = {
    currImgId: 0,
    currLineId: 0,
    lines: [{
        txt: 'i like it',
        font: 'impact',
        size: 40,
        fillColor: 'white',
        positionX: 200,
        positionY: 50,
    }, {
        txt: 'am i ?',
        font: 'impact',
        size: 40,
        fillColor: 'white',
        positionX: 225,
        positionY: 470,
    },

    {
        txt: 'im center',
        font: 'impact',
        size: 40,
        fillColor: 'white',
        positionX: 225,
        positionY: 250,
    }]
}

function addLine() {
    gMeme.lines.push(
        {
            txt: 'new guy in town',
            font: 'impact',
            size: 40,
            fillColor: 'white',
            positionX: 0,
            positionY: 250,
        }
    )
}




function getMeme() {
    return gMeme
}



