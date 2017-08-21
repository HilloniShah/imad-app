console.log('Loaded!');

var element=document.getElementById("main");
element.innerHTML="Hilloni!!";

var image=document.getElementById("main");

var moveLeft=0;

function moveRight(){
    moveLeft=moveLeft+5;
    img.style.marginLeft=marginLeft + 'px';
}

img.onclick=function(){
    var int=setInterval(moveRight,50);
}