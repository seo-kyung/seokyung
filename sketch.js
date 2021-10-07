var images = ["assets/images/1.png",  "assets/images/4.png", "assets/images/6.png"];
var gallery = document.getElementById("ImgGallery");
var index = 1;

gallery.addEventListener("click", function() {
    gallery.src = images[index];
    index = (index === images.length - 1) ? 0 : index + 1;
});