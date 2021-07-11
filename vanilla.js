

function myFunc(){
    if ( window.innerWidth < 796 ) {
        document.getElementById("Btns").style.transform= "translateX(-80px)";
    } else {
        document.getElementById("Btns").style.transform= "translateX(0px)";
    }


    if ( window.innerWidth > 800 ) {
        document.getElementById("Btns").style.transform= "translateX(0px)";
    }
}
function doSlide () {
    
}
function dontSlide () {
    
}