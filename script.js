function Hide(Hide, ShowObj) {
    console.log(Hide);
    elementHide = document.getElementById(Hide);
    elementHide.style.opacity = "0";
    elementHide.style.transition = "opacity 500ms";
    setTimeout(() => {
        elementHide.style.display = "none";
        Show(ShowObj);
    }, 500);
    var img;
    switch (Hide) {
        case "StartDiv":
            img = document.getElementById("Img1");
            img.style.opacity = "0";
            img.style.transition = "opacity 500ms";
            img = document.getElementById("Img2");
            img.style.opacity = "0";
            img.style.transition = "opacity 500ms";
            break;
        case "Oberbrustweite":
            img = document.getElementById("Img3");
            img.style.opacity = "0";
            img.style.transition = "opacity 500ms";
            break;
        case "Ergebnis":
            img = document.getElementById("Img4");
            img.style.opacity = "0";
            img.style.transition = "opacity 500ms";
            break;
    }


}
function Show(Show) {
    elementShow = document.getElementById(Show);
    elementShow.style.opacity = "1";
    elementShow.style.transition = "opacity 500ms";
    elementShow.style.visibility = "visible";
    var img;
    switch (Show) {
        case "Unterbrustumfang":

            img = document.getElementById("Img3");
            img.style.opacity = "1";
            img.style.transition = "opacity 500ms";
            break
        case "Ergebnis":
            img = document.getElementById("Img4");
            img.style.opacity = "1";
            img.style.transition = "opacity 500ms";
    }
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
var Körbchen;
function BrustInfo(Info) {
    if (Info == "Unterbrust") {
        Unterbrust = document.getElementById(Info).value;
        if (Unterbrust == null || Unterbrust < 68 || Unterbrust > 97) {
            Unterbrust = null;
            //Error
            console.log("Error");
        }
        else {
            
            if (Unterbrust >= 63 && Unterbrust <= 67) {
                Unterbrust = 65;
            }
            if (Unterbrust >= 68 && Unterbrust <= 72) {
                Unterbrust = 70;
            }
            if (Unterbrust >= 73 && Unterbrust <= 77) {
                Unterbrust = 75;
            }
            if (Unterbrust >= 78 && Unterbrust <= 82) {
                Unterbrust = 80;
            }
            if (Unterbrust >= 83 && Unterbrust <= 87) {
                Unterbrust = 85;
            }
            if (Unterbrust >= 88 && Unterbrust <= 92) {
                Unterbrust = 90;
            }
            if (Unterbrust >= 93 && Unterbrust <= 97) {
                Unterbrust = 95;
            }
            console.log(Unterbrust);
        }
    }
    if (Info == "Oberbrust") {
        Oberbrust = document.getElementById(Info).value;
        console.log(Oberbrust);
        if (Oberbrust == null || Oberbrust < 82 || Oberbrust > 121) {
            Oberbrust = null;
            //Error
            console.log("Error");
        }
        else {
            switch (Unterbrust) {
                case 70:
                    if (Oberbrust == 84 || Oberbrust == 86 || Oberbrust == 88 || Oberbrust == 90 || Oberbrust == 92 || Oberbrust == 94) {
                        switch (Oberbrust) {
                            case "84": Körbchen = "A/B"; console.log("84 OberbrustCase");break;
                            case "86": Körbchen = "B/C"; break;
                            case "88": Körbchen = "C/D"; break;
                            case "90": Körbchen = "D/E"; break;
                            case "92": Körbchen = "E/F"; break;
                            case "94": Körbchen = "F/G"; break;
                        }
                        console.log("70 Korb switch");
                    }
                    else
                    {   
                        if(Oberbrust >= 82 && Oberbrust <=84){Körbchen = "A";}
                        if(Oberbrust >= 84 && Oberbrust <=86){Körbchen = "B";}
                        if(Oberbrust >= 86 && Oberbrust <=88){Körbchen = "C";}
                        if(Oberbrust >= 88 && Oberbrust <=90){Körbchen = "D";}
                        if(Oberbrust >= 90 && Oberbrust <=92){Körbchen = "E";}
                        if(Oberbrust >= 92 && Oberbrust <=94){Körbchen = "F";}
                        if(Oberbrust >= 94 && Oberbrust <=96){Körbchen = "G";}
                    }
                    break;
                case 75:
                   if(Oberbrust == 89 || Oberbrust == 91 || Oberbrust == 93 || Oberbrust == 95 || Oberbrust == 97 || Oberbrust == 99) {
                    switch (Oberbrust) {
                        case "89": Körbchen = "A/B"; break;
                        case "91": Körbchen = "B/C"; break;
                        case "93": Körbchen = "C/D"; break;
                        case "95": Körbchen = "D/E"; break;
                        case "97": Körbchen = "E/F"; break;
                        case "99": Körbchen = "F/G"; break;
                    }
                    console.log("75 Korb switch");
                }
                    else{
                        if(Oberbrust >= 87 && Oberbrust <=89){Körbchen = "A";}
                        if(Oberbrust >= 89 && Oberbrust <=91){Körbchen = "B";}
                        if(Oberbrust >= 91 && Oberbrust <=93){Körbchen = "C";}
                        if(Oberbrust >= 93 && Oberbrust <=95){Körbchen = "D";}
                        if(Oberbrust >= 95 && Oberbrust <=97){Körbchen = "E";}
                        if(Oberbrust >= 97 && Oberbrust <=99){Körbchen = "F";}
                        if(Oberbrust >= 99 && Oberbrust <=101){Körbchen = "G";}
                    }
                    break;
                case 80:
                    if(Oberbrust == 94 || Oberbrust == 96 || Oberbrust == 98 || Oberbrust == 100 || Oberbrust == 102 || Oberbrust == 104) {
                       switch (Oberbrust) {
                        case "94": Körbchen = "A/B"; break;
                        case "96": Körbchen = "B/C"; break;
                        case "98": Körbchen = "C/D"; break;
                        case "100": Körbchen = "D/E"; break;
                        case "102": Körbchen = "E/F"; break;
                        case "104": Körbchen = "F/G"; break;
                    }
                    console.log("80 Korb switch");
                }
                else{
                    if(Oberbrust >= 92 && Oberbrust <=94){Körbchen = "A";}
                    if(Oberbrust >= 94 && Oberbrust <=96){Körbchen = "B";}
                    if(Oberbrust >= 96 && Oberbrust <=98){Körbchen = "C";}
                    if(Oberbrust >= 98 && Oberbrust <=100){Körbchen = "D";}
                    if(Oberbrust >= 100 && Oberbrust <=102){Körbchen = "E";}
                    if(Oberbrust >= 102 && Oberbrust <=104){Körbchen = "F";}
                    if(Oberbrust >= 104 && Oberbrust <=106){Körbchen = "G";}
                }
                    break;
                case 85:
                    if(Oberbrust == 99 || Oberbrust == 101 || Oberbrust == 103 || Oberbrust == 105 || Oberbrust == 107 || Oberbrust == 109) {
                   
                    switch (Oberbrust) {
                        case "99": Körbchen = "A/B"; break;
                        case "101": Körbchen = "B/C"; break;
                        case "103": Körbchen = "C/D"; break;
                        case "105": Körbchen = "D/E"; break;
                        case "107": Körbchen = "E/F"; break;
                        case "109": Körbchen = "F/G"; break;
                    }
                    console.log("85 Korb switch");
                }
                else{
                    if(Oberbrust >= 97 && Oberbrust <=99){Körbchen = "A";}
                    if(Oberbrust >= 99 && Oberbrust <=101){Körbchen = "B";}
                    if(Oberbrust >= 101 && Oberbrust <=103){Körbchen = "C";}
                    if(Oberbrust >= 103 && Oberbrust <=105){Körbchen = "D";}
                    if(Oberbrust >= 105 && Oberbrust <=107){Körbchen = "E";}
                    if(Oberbrust >= 107 && Oberbrust <=109){Körbchen = "F";}
                    if(Oberbrust >= 109 && Oberbrust <=111){Körbchen = "G";}
                }
                    break;
                case 90:
                    if(Oberbrust == 104 || Oberbrust == 106 || Oberbrust == 108 || Oberbrust == 110 || Oberbrust == 112 || Oberbrust == 114) {
                   
                    switch (Oberbrust) {
                        case "104": Körbchen = "A/B"; break;
                        case "106": Körbchen = "B/C"; break;
                        case "108": Körbchen = "C/D"; break;
                        case "110": Körbchen = "D/E"; break;
                        case "112": Körbchen = "E/F"; break;
                        case "114": Körbchen = "F/G"; break;
                    }
                    console.log("90 Korb switch");
                }
                else{
                    if(Oberbrust >= 102 && Oberbrust <=104){Körbchen = "A";}
                    if(Oberbrust >= 104 && Oberbrust <=106){Körbchen = "B";}
                    if(Oberbrust >= 106 && Oberbrust <=108){Körbchen = "C";}
                    if(Oberbrust >= 108 && Oberbrust <=110){Körbchen = "D";}
                    if(Oberbrust >= 110 && Oberbrust <=112){Körbchen = "E";}
                    if(Oberbrust >= 112 && Oberbrust <=114){Körbchen = "F";}
                    if(Oberbrust >= 114 && Oberbrust <=116){Körbchen = "G";}

                }
                    break;
                case 95:
                    if(Oberbrust == 109 || Oberbrust == 111|| Oberbrust == 113 || Oberbrust == 115 || Oberbrust == 117 || Oberbrust == 119) {
                   
                    switch (Oberbrust) {
                        case "109": Körbchen = "A/B"; break;
                        case "111": Körbchen = "B/C"; break;
                        case "113": Körbchen = "C/D"; break;
                        case "115": Körbchen = "D/E"; break;
                        case "117": Körbchen = "E/F"; break;
                        case "119": Körbchen = "F/G"; break;
                    }
                    console.log("95 Korb switch");
                }else{
                    if(Oberbrust >= 107 && Oberbrust <=109){Körbchen = "A";}
                    if(Oberbrust >= 109 && Oberbrust <=111){Körbchen = "B";}
                    if(Oberbrust >= 111 && Oberbrust <=113){Körbchen = "C";}
                    if(Oberbrust >= 113 && Oberbrust <=115){Körbchen = "D";}
                    if(Oberbrust >= 115 && Oberbrust <=117){Körbchen = "E";}
                    if(Oberbrust >= 117 && Oberbrust <=119){Körbchen = "F";}
                    if(Oberbrust >= 119 && Oberbrust <=121){Körbchen = "G";}
                }
                    break;
            }
        }
    }
    if (Oberbrust != null && Unterbrust != null) {
        document.getElementById("BHSize").innerHTML = Unterbrust+Körbchen;
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