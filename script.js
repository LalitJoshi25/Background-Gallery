var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnai = document.getElementsByClassName("thumbnai");
var hero = document.getElementById("hero");
var backgroundImg = new Array(
    "Radiance_img/small1.png",
    "Radiance_img/small2.png",
    "Radiance_img/small3.png",
    "Radiance_img/small4.png",
    "Radiance_img/small5.png",
);
let i = 0;
next.onclick = function() {
    if (i < 4) {
        hero.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';
        i++;
    }
}
prev.onclick = function() {
    if (i > 0) {
        hero.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';
        i--;
    }
}