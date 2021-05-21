function expandimage(imgs){

    var bigimage = document.getElementById("bigimg")
    bigimage.src = imgs.src
    bigimage.parentElement.style.display = "block"
}