
onInit()

function onInit() {
    gCanvas = document.querySelector('#meme-generetor')
    gCtx = gCanvas.getContext('2d')
    onRenderGallery()
    document.querySelector('input').value = gMeme.lines[gMeme.currLineId].txt

}
function onRenderGallery() {
    var strHTML = ''
    gImags.forEach(function (img) {
        let galleryString = `<div class="gallery-meme-container" onclick="onPickImage(${img.id})">
        <img class="gallery-meme img${img.id} " src=${img.url} alt="">
    </div>`
        strHTML += galleryString
    })
    document.querySelector('.gallery-container').innerHTML = strHTML
}

function onPickImage(meme) {
    document.querySelector('.meme-modal-container').classList.remove('hide')
    document.querySelector('.gallery-container').classList.add('hide')
    document.querySelector('h2').innerText = 'edit your meme'
    gMeme.currImgId = meme
    var img = new Image()
    img.src = `./memes/${meme}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,width,height
        renderMemes()

    }
}
function onDrawText(el) {
    for (let i = 0; i < gMeme.lines.length; i++) {
        gMeme.lines[gMeme.currLineId].txt = el.value
        gCtx.lineWidth = '2'
        // gCtx.textAlign = 'center'

        onPickImage(gMeme.currImgId)
    }
}
function renderMemes() {
    for (let i = 0; i < gMeme.lines.length; i++) {
        gCtx.font = gMeme.lines[i].size + 'px ' + gMeme.lines[i].font
        gCtx.lineWidth = '2'
        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = 'white'
        gCtx.fillText(gMeme.lines[i].txt, gMeme.lines[i].positionX, gMeme.lines[i].positionY)
        gCtx.strokeText(gMeme.lines[i].txt, gMeme.lines[i].positionX, gMeme.lines[i].positionY)
        gCtx.stroke()
    }
    if (gMarker) onRenderLineMark()
}
//buttons controls
function onFontSizeChange(size) {
    gMeme.lines[gMeme.currLineId].size += size
    onPickImage(gMeme.currImgId)
}
function changeLinePosition(num) {
    gMeme.lines[gMeme.currLineId].positionY += num
    onPickImage(gMeme.currImgId)
}
function onAlignCenter() {
    gMeme.lines[gMeme.currLineId].positionX = 250
    onPickImage(gMeme.currImgId)
}
function onAlignRight() {
    gMeme.lines[gMeme.currLineId].positionX = 400
    onPickImage(gMeme.currImgId)
}
function onAlignLeft() {
    gMeme.lines[gMeme.currLineId].positionX = 0
    onPickImage(gMeme.currImgId)
}
function onRenderLineMark() {
    gCtx.fillStyle = 'rgba(220, 220, 220, 0.5)';
    gCtx.fillRect(0, gMeme.lines[gMeme.currLineId].positionY - gMeme.lines[gMeme.currLineId].size,
        gCanvas.width, gMeme.lines[gMeme.currLineId].size + 10);
}
function onShowGallery() {
    document.querySelector('.meme-modal-container').classList.add('hide')
    document.querySelector('.gallery-container').classList.remove('hide')
    document.querySelector('h2').innerText = 'please pick an image to start'
}


function onDeleteLine(){
    document.querySelector('input').value =''
    document.querySelector('input').focus()

    switchLine()
    

}

function switchLine() {
    if (gMeme.currLineId + 1 === gMeme.lines.length) {
        gMeme.currLineId = 0
        document.querySelector('input').value = gMeme.lines[gMeme.currLineId].txt
        return document.querySelector('input').focus()
    }

    gMeme.currLineId++
    document.querySelector('input').value = gMeme.lines[gMeme.currLineId].txt
    document.querySelector('input').focus()
}
function onRemoveMarker() {
    gMarker = false
    renderMemes()
    gCtx.fillStyle = 'rgba(220, 220, 220, 0.0)';
    gCtx.fillRect(0, gMeme.lines[gMeme.currLineId].positionY - gMeme.lines[gMeme.currLineId].size,
        gCanvas.width, gMeme.lines[gMeme.currLineId].size + 10);
    document.querySelector('input').focus()
}

function onAddNewLine() {
    addLine()
    gMeme.currLineId = gMeme.lines.length -1
    onPickImage(gMeme.currImgId)
    document.querySelector('input').value = gMeme.lines[gMeme.currLineId].txt
}


function onDownload(elLink) {
    onRemoveMarker()
    const data = gCanvas.toDataURL()
    console.log('data', data)
    elLink.href = data
    elLink.download = 'my-img.jpg'
}