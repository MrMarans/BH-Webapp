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
function Show(Show) {
    elementShow = document.getElementById(Show);
    elementShow.style.opacity = "1";
    elementShow.style.transition = "opacity 500ms";
    elementShow.style.visibility = "visible";
}

function GifShow(WhatToDo) {
    gif = document.getElementById("Gif");

    if (WhatToDo == "Show") {
        setTimeout(() => {
            gif.style.visibility = "visible"; gif.style.opacity = "1";
            gif.style.transition = "opacity 500ms";
        }, 500);
    }
    else {
        gif.style.opacity = "0";
        setTimeout(() => {
            gif.style.visibility = "hidden";

        }, 500);
    }

}

var Unterbrust;
var Oberbrust;
function BrustInfo(Info)
{
    if(Info == "Unterbrust"){
        Unterbrust = document.getElementById(Info).value;
    }
    if(Info=="Oberbrust")
    {
        Oberbrust = document.getElementById(Info).value;
    }
    if(Oberbrust !=null && Unterbrust!= null)
    {
        //hier den Code von Daniela
    }
}


function OpenArticle(Nr) {
    article = document.getElementById(Nr);
    info = article.querySelector('.Info');
    ImgDiv = article.querySelector('.ImgDiv');
    PreVis = ImgDiv.querySelector('.PreVis');
    if (article.style.height != "71%") {
        article.style.height = "71%";
        info.style.minHeight = "16%"
        ImgDiv.style.width = "46%";
        switch (Nr) {
            case 1: PreVis.src = 'Bilder/74202-365_set_800x1200.webp';
                break;
            case 2: PreVis.src = 'Bilder/74185-74_set_800x1200.webp';
                break;
            case 3: PreVis.src = 'Bilder/74118-79_set_800x1200.webp'
                break
            case 4: PreVis.src = 'Bilder/74443-75_set_800x1200.webp';
                break;
            case 5: PreVis.src = 'Bilder/74039-46_set_800x1200.webp';
                break;
        }

    }
    else {
        article.style.height = "17%";
        info.style.minHeight = "100%"
        ImgDiv.style.width = "20%";
        switch (Nr) {
            case 1: PreVis.src = 'Bilder/74202-365_detail01_800x1200.webp';
                break;
            case 2: PreVis.src = 'Bilder/74185-74_detail02_800x1200.webp';
                break;
            case 3: PreVis.src = 'Bilder/74118-79_detail01_800x1200.webp';
                break
            case 4: PreVis.src = 'Bilder/74443-75_800x1200.webp';
                break;
            case 5: PreVis.src = 'Bilder/74039-46_800x1200.webp';
                break;
        }
    }
}