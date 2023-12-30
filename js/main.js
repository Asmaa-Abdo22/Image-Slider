// &----------------HTML ELEMENTS--------------
var imgs = document.querySelectorAll("#slider img");
var fixedLayer = document.getElementById("fixedLayer");
var rightBtn = document.getElementById("right");
var leftBtn = document.getElementById("left");
var closeBtn = document.getElementById("close");
var container = document.querySelector(".container");
var imgBox = document.getElementById("imgBox");
// &----------------GLOBAL VARIABLES-----------
var imageIndex = 0;
var ArrayImages = Array.from(imgs);
// &---------------- EVENTS -------------------
closeBtn.addEventListener("click", function (e) {
  fixedLayer.classList.replace("d-flex", "d-none");
});
fixedLayer.addEventListener("click", function () {
  fixedLayer.classList.replace("d-flex", "d-none");
});
container.addEventListener("click", function (e) {
  var clickedImage = e.target;

  imageIndex = ArrayImages.indexOf(clickedImage);
  console.log(imageIndex);
  var srcImage = clickedImage.getAttribute("src");
  if (srcImage != null) {
    imgBox.setAttribute("src", srcImage);

    fixedLayer.classList.replace("d-none", "d-flex");
  }
});
rightBtn.addEventListener("click", function (e) {
  e.stopPropagation();

  imageIndex++;

  if (imageIndex >= ArrayImages.length) {
    imageIndex = 0;
  }

  var srcImage = ArrayImages[imageIndex].getAttribute("src");
  imgBox.setAttribute("src", srcImage);
});
leftBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = imgs.length - 1;
  }
  var srcImage = ArrayImages[imageIndex].getAttribute("src");
  imgBox.setAttribute("src", srcImage);
});
document.addEventListener("keydown", function (e) {
  

  if (e.key == "ArrowRight") {
    imageIndex++;
    if (imageIndex > ArrayImages.length) {
      imageIndex = 0;
    }
    var srcImage = ArrayImages[imageIndex].getAttribute("src");
    imgBox.setAttribute("src", srcImage);
  }
});
document.addEventListener("keydown", function (e) {
    //   console.log(e);
  if (e.key == "ArrowLeft") {
    imageIndex--;
    if(imageIndex<0){
        imageIndex=ArrayImages.length-1
    }
    var srcImage =ArrayImages[imageIndex].getAttribute("src");
    imgBox.setAttribute("src",srcImage)
  }
});
document.addEventListener("keydown",function(e){
    // console.log(e)
    if(e.key=="Escape"){
        fixedLayer.classList.replace("d-flex","d-none")
    }
})