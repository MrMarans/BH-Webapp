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