'use strict';

var img = new Array("images/sl01.png",
                    "images/sl02.jpg",
                    "images/sl03.jpg",
                    "images/sl04.jpg");
var element = document.getElementById("slideshow");
var count = -1;
imgTimer();

function imgTimer(){
    count++;
    if(count == img.length)count = 0;
    element.src = img[count];
    setTimeout("imgTimer()", 6000);
}