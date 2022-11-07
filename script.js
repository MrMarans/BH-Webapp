function Hide(Hide, ShowObj) {
    console.log(Hide);
    elementHide = document.getElementById(Hide);
    elementHide.style.opacity = "0";
    elementHide.style.transition = "opacity 500ms";
    setTimeout(() => {
      elementHide.style.display = "none";
        Show(ShowObj);
    }, 500);
}
function Show(Show)
{ 
    elementShow = document.getElementById(Show);
    elementShow.style.opacity="1";
    elementShow.style.transition="opacity 500ms";
    elementShow.style.visibility = "visible";
}

function GifShow(WhatToDo){
    gif = document.getElementById("Gif");

    if(WhatToDo == "Show")
    {    setTimeout(() => {
    gif.style.visibility="visible"; gif.style.opacity="1";
    gif.style.transition="opacity 500ms";
}, 500);
    }
    else{
        gif.style.opacity="0";
        setTimeout(() => {
        gif.style.visibility="hidden"; 
     
    }, 500);
    }

}

function OpenArticle(Nr){
  article = document.getElementById(Nr);
  article.style.zIndex ="500";
  
}