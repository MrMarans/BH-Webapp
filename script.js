var currentScene = "StartDiv";
var Unterbrust;
var Oberbrust;
var Körbchen;
var Brallets;




function Hide(Hide, ShowObj, WhatToDo) {
    //console.log("Hide Something:" + Hide);
    //Wenn man was eingeben soll aber falsche Daten eingeben tut
    if (Hide == "Unterbrustumfang" && (document.getElementById("Unterbrust").value == null || document.getElementById("Unterbrust").value < 63 || document.getElementById("Unterbrust").value > 97)) {
        //console.log("ShowRed");
        document.getElementById("Unterbrust").style.backgroundColor = "red";
        setTimeout(() => {
            document.getElementById("Unterbrust").style.transition = "background-color 500ms";
            document.getElementById("Unterbrust").style.backgroundColor = "white";

        }, 500);
        return;
    }
    if (Hide == "Oberbrustweite" && (document.getElementById("Oberbrust").value == null || document.getElementById("Oberbrust").value < 77 || document.getElementById("Oberbrust").value > 121)) {
        //console.log("ShowRed");

        document.getElementById("Oberbrust").style.backgroundColor = "red";
        setTimeout(() => {
            document.getElementById("Oberbrust").style.transition = "background-color 500ms";
            document.getElementById("Oberbrust").style.backgroundColor = "white";

        }, 500);
        return;
    }

    if(Hide == "Oberbrustweite")
     {
        Oberbrust = document.getElementById("Oberbrust").value;
        switch (Unterbrust){
            case 70:  
                if(Oberbrust <82 || Oberbrust > 96)
                {
                    document.getElementById("Oberbrust").style.backgroundColor = "red";
                    document.getElementById("ErrorOber").style.opacity = "1";
                    setTimeout(() => {
                        document.getElementById("Oberbrust").style.transition = "background-color 500ms";
                        document.getElementById("Oberbrust").style.backgroundColor = "white";
                        document.getElementById("ErrorOber").style.opacity = "0";
                    }, 500);
                    return;
                }
                break;
                case 75:  
                if(Oberbrust <87 || Oberbrust > 101)
                {
                    document.getElementById("Oberbrust").style.backgroundColor = "red";
                    document.getElementById("ErrorOber").style.opacity = "1";
                    setTimeout(() => {
                        document.getElementById("Oberbrust").style.transition = "background-color 500ms";
                        document.getElementById("Oberbrust").style.backgroundColor = "white";
                        document.getElementById("ErrorOber").style.opacity = "0";
                    }, 500);
                    return;
                }
                break;
                case 80:  
                if(Oberbrust <92 || Oberbrust > 106)
                {
                    document.getElementById("Oberbrust").style.backgroundColor = "red";
                    document.getElementById("ErrorOber").style.opacity = "1";
                    setTimeout(() => {
                        document.getElementById("Oberbrust").style.transition = "background-color 500ms";
                        document.getElementById("Oberbrust").style.backgroundColor = "white";
                        document.getElementById("ErrorOber").style.opacity = "0";
                    }, 500);
                    return;
                }
                break;
                case 85:  
                if(Oberbrust <97 || Oberbrust > 111)
                {
                    document.getElementById("Oberbrust").style.backgroundColor = "red";
                    document.getElementById("ErrorOber").style.opacity = "1";
                    setTimeout(() => {
                        document.getElementById("Oberbrust").style.transition = "background-color 500ms";
                        document.getElementById("Oberbrust").style.backgroundColor = "white";
                        document.getElementById("ErrorOber").style.opacity = "0";
                    }, 500);
                    return;
                }
                break;
                case 90:  
                if(Oberbrust <102 || Oberbrust > 116)
                {
                    document.getElementById("Oberbrust").style.backgroundColor = "red";
                    document.getElementById("ErrorOber").style.opacity = "1";
                    setTimeout(() => {
                        document.getElementById("Oberbrust").style.transition = "background-color 500ms";
                        document.getElementById("Oberbrust").style.backgroundColor = "white";
                        document.getElementById("ErrorOber").style.opacity = "0";
                    }, 500);
                    return;
                }
                break;
                case 95:  
                if(Oberbrust <107 || Oberbrust > 121)
                {
                    document.getElementById("Oberbrust").style.backgroundColor = "red";
                    document.getElementById("ErrorOber").style.opacity = "1";
                    setTimeout(() => {
                        document.getElementById("Oberbrust").style.transition = "background-color 500ms";
                        document.getElementById("Oberbrust").style.backgroundColor = "white";
                        document.getElementById("ErrorOber").style.opacity = "0";
                    }, 500);
                    return;
                }
                break;
        }
     }




    //Ende der Eingabetests

    var elementHide;
    if (Hide != "") {
        elementHide = document.getElementById(Hide);

        // console.log("ElementToHide is:" + Hide);
    }
    else {
        Unterbrust = 0;
        Oberbrust = 0;
        elementHide = document.getElementById(currentScene);
        //console.log("Hide Something:" + currentScene);

    }
    elementHide.style.opacity = "0";
    elementHide.style.transition = "opacity 500ms";
    setTimeout(() => {

        elementHide.style.visibility = "hidden";
        currentScene = ShowObj;
        Show(ShowObj);
        // console.log("current scene is: " + currentScene);
    }, 500);




    //BG Bilder
    Render =  document.getElementById("Shop");
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
        case "":
            img = document.getElementById("Img1");
            img.style.opacity = "0";
            img.style.transition = "opacity 500ms";
            img = document.getElementById("Img2");
            img.style.opacity = "0";
            img.style.transition = "opacity 500ms";
            img = document.getElementById("Img3");
            img.style.opacity = "0";
            img.style.transition = "opacity 500ms";
            img = document.getElementById("Img4");
            img.style.opacity = "0";
            img.style.transition = "opacity 500ms";
            Render.style.opacity="0";
            break;
    }


    // Videos
    gif1 = document.getElementById("Gif1");
    gif2 = document.getElementById("Gif2");
    if (WhatToDo == "Gif1") {
        setTimeout(() => {
            gif1.style.visibility = "visible";
            gif1.style.opacity = "1";
            gif1.style.transition = "opacity 500ms";
        }, 500);
    }
    if (WhatToDo == "Gif2") {
        gif1.style.opacity = "0";
        gif2.style.visibility = "visible";
        setTimeout(() => {
            //  console.log("Gif2Show");
            gif1.style.visibility = "hidden";
            gif2.style.visibility = "visible";
            gif2.style.opacity = "1";
            gif2.style.transition = "opacity 500ms";
        }, 500);
    }
    if(WhatToDo=="Render")
    {
        setTimeout(() => {
      Render.style.visibility = "visible";
      Render.style.opacity="1";
    }, 500);
    }

    if (WhatToDo == "hide") {
        gif2.style.opacity = "0";
        gif1.style.opacity = "0";
        setTimeout(() => {
            gif1.style.visibility = "hidden";
            gif2.style.visibility = "hidden";
            //  console.log("Gif2Hide");
        }, 500);
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
            break;
        case "StartDiv":
            img = document.getElementById("Img1");
            img.style.opacity = "1";
            img.style.transition = "opacity 500ms";
            img = document.getElementById("Img2");
            img.style.opacity = "1";
            img.style.transition = "opacity 500ms";
            break;
    }

    currentScene = Show;
}

function GifShow(WhatToDo) {
    gif1 = document.getElementById("Gif1");
    gif2 = document.getElementById("Gif2");
    if (WhatToDo == "Gif1") {
        setTimeout(() => {
            gif1.style.visibility = "visible";
            gif1.style.opacity = "1";
            gif1.style.transition = "opacity 500ms";
        }, 500);
    }
    if (WhatToDo == "Gif2") {
        gif1.style.opacity = "0";
        gif2.style.visibility = "visible";
        setTimeout(() => {
            //  console.log("Gif2Show");
            gif1.style.visibility = "hidden";
            gif2.style.visibility = "visible";
            gif2.style.opacity = "1";
            gif2.style.transition = "opacity 500ms";
        }, 500);
    }
    if (WhatToDo == "hide") {
        gif2.style.opacity = "0";
        setTimeout(() => {
            gif2.style.visibility = "hidden";
            //  console.log("Gif2Hide");
        }, 500);
    }
}


function BrustInfo(Info) {
    if (Info == "Unterbrust") {
        Unterbrust = document.getElementById(Info).value;
        if (Unterbrust == null || Unterbrust < 63 || Unterbrust > 97) {
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
        console.log("Brustinfos");
        Oberbrust = document.getElementById(Info).value;
        //  console.log(Oberbrust);
        if (Oberbrust == null || Oberbrust < 77 || Oberbrust > 121) {
            Oberbrust = null;
            //Error
              console.log("Error");
        }
        else {
            console.log("For Switch Unterbrist ist: "+Unterbrust);
            switch (Unterbrust) {
                case 65:
                    if (Oberbrust == 79 || Oberbrust == 81 || Oberbrust == 83 || Oberbrust == 85 || Oberbrust == 87 || Oberbrust == 89) {
                        switch (Oberbrust) {
                            case "79": Körbchen = "A/B"; Brallets = "XS"; break;
                            case "81": Körbchen = "B/C"; Brallets = "XS"; break;
                            case "83": Körbchen = "C/D"; Brallets = "XS"; break;
                            case "85": Körbchen = "D/E"; Brallets = "XS/S"; break;
                            case "87": Körbchen = "E/F"; Brallets = "S/Sondergröße"; break;
                            case "89": Körbchen = "F/G"; Brallets = "Sondergröße"; break;
                        }
                          console.log("65 Korb switch");
                    }
                    else {
                        if (Oberbrust >= 77 && Oberbrust <= 79) { Körbchen = "A"; Brallets = "XS"; }
                        if (Oberbrust >= 79 && Oberbrust <= 81) { Körbchen = "B"; Brallets = "XS"; }
                        if (Oberbrust >= 81 && Oberbrust <= 83) { Körbchen = "C"; Brallets = "XS"; }
                        if (Oberbrust >= 83 && Oberbrust <= 85) { Körbchen = "D"; Brallets = "XS"; }
                        if (Oberbrust >= 85 && Oberbrust <= 87) { Körbchen = "E"; Brallets = "S"; }
                        if (Oberbrust >= 87 && Oberbrust <= 89) { Körbchen = "F"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 89 && Oberbrust <= 91) { Körbchen = "G"; Brallets = "Sondergröße"; }
                    }
                    break;

                case 70:
                    if (Oberbrust == 84 || Oberbrust == 86 || Oberbrust == 88 || Oberbrust == 90 || Oberbrust == 92 || Oberbrust == 94) {
                        switch (Oberbrust) {
                            case "84": Körbchen = "A/B"; Brallets = "XS"; break;
                            case "86": Körbchen = "B/C"; Brallets = "XS"; break;
                            case "88": Körbchen = "C/D"; Brallets = "S"; break;
                            case "90": Körbchen = "D/E"; Brallets = "S"; break;
                            case "92": Körbchen = "E/F"; Brallets = "S/Sondergröße"; break;
                            case "94": Körbchen = "F/G"; Brallets = "Sondergröße"; break;
                        }
                          console.log("70 Korb switch");
                    }
                    else {
                        if (Oberbrust >= 82 && Oberbrust <= 84) { Körbchen = "A"; Brallets = "XS"; }
                        if (Oberbrust >= 84 && Oberbrust <= 86) { Körbchen = "B"; Brallets = "XS"; }
                        if (Oberbrust >= 86 && Oberbrust <= 88) { Körbchen = "C"; Brallets = "S"; }
                        if (Oberbrust >= 88 && Oberbrust <= 90) { Körbchen = "D"; Brallets = "S"; }
                        if (Oberbrust >= 90 && Oberbrust <= 92) { Körbchen = "E"; Brallets = "S"; }
                        if (Oberbrust >= 92 && Oberbrust <= 94) { Körbchen = "F"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 94 && Oberbrust <= 96) { Körbchen = "G"; Brallets = "Sondergröße"; }
                    }
                    break;
                case 75:
                    if (Oberbrust == 89 || Oberbrust == 91 || Oberbrust == 93 || Oberbrust == 95 || Oberbrust == 97 || Oberbrust == 99) {
                        switch (Oberbrust) {
                            case "89": Körbchen = "A/B"; Brallets = "S"; break;
                            case "91": Körbchen = "B/C"; Brallets = "S"; break;
                            case "93": Körbchen = "C/D"; Brallets = "S/M"; break;
                            case "95": Körbchen = "D/E"; Brallets = "M"; break;
                            case "97": Körbchen = "E/F"; Brallets = "M/Sondergröße"; break;
                            case "99": Körbchen = "F/G"; Brallets = "Sondergröße"; break;
                        }
                        // console.log("75 Korb switch");
                    }
                    else {
                        if (Oberbrust >= 87 && Oberbrust <= 89) { Körbchen = "A"; Brallets = "S"; }
                        if (Oberbrust >= 89 && Oberbrust <= 91) { Körbchen = "B"; Brallets = "S"; }
                        if (Oberbrust >= 91 && Oberbrust <= 93) { Körbchen = "C"; Brallets = "S"; }
                        if (Oberbrust >= 93 && Oberbrust <= 95) { Körbchen = "D"; Brallets = "M"; }
                        if (Oberbrust >= 95 && Oberbrust <= 97) { Körbchen = "E"; Brallets = "M"; }
                        if (Oberbrust >= 97 && Oberbrust <= 99) { Körbchen = "F"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 99 && Oberbrust <= 101) { Körbchen = "G"; Brallets = "Sondergröße"; }
                    }
                    break;
                case 80:
                    if (Oberbrust == 94 || Oberbrust == 96 || Oberbrust == 98 || Oberbrust == 100 || Oberbrust == 102 || Oberbrust == 104) {
                        switch (Oberbrust) {
                            case "94": Körbchen = "A/B"; Brallets = "S/M"; break;
                            case "96": Körbchen = "B/C"; Brallets = "M"; break;
                            case "98": Körbchen = "C/D"; Brallets = "M"; break;
                            case "100": Körbchen = "D/E"; Brallets = "M/L"; break;
                            case "102": Körbchen = "E/F"; Brallets = "Sondergröße"; break;
                            case "104": Körbchen = "F/G"; Brallets = "Sondergröße"; break;
                        }
                        //   console.log("80 Korb switch");
                    }
                    else {
                        if (Oberbrust >= 92 && Oberbrust <= 94) { Körbchen = "A"; Brallets = "S"; }
                        if (Oberbrust >= 94 && Oberbrust <= 96) { Körbchen = "B"; Brallets = "M"; }
                        if (Oberbrust >= 96 && Oberbrust <= 98) { Körbchen = "C"; Brallets = "M"; }
                        if (Oberbrust >= 98 && Oberbrust <= 100) { Körbchen = "D"; Brallets = "M"; }
                        if (Oberbrust >= 100 && Oberbrust <= 102) { Körbchen = "E"; Brallets = "L"; }
                        if (Oberbrust >= 102 && Oberbrust <= 104) { Körbchen = "F"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 104 && Oberbrust <= 106) { Körbchen = "G"; Brallets = "Sondergröße"; }
                    }
                    break;
                case 85:
                    if (Oberbrust == 99 || Oberbrust == 101 || Oberbrust == 103 || Oberbrust == 105 || Oberbrust == 107 || Oberbrust == 109) {

                        switch (Oberbrust) {
                            case "99": Körbchen = "A/B"; Brallets = "M/L"; break;
                            case "101": Körbchen = "B/C"; Brallets = "L"; break;
                            case "103": Körbchen = "C/D"; Brallets = "L"; break;
                            case "105": Körbchen = "D/E"; Brallets = "L/XL"; break;
                            case "107": Körbchen = "E/F"; Brallets = "Sondergröße"; break;
                            case "109": Körbchen = "F/G"; Brallets = "Sondergröße"; break;
                        }
                        //     console.log("85 Korb switch");
                    }
                    else {
                        if (Oberbrust >= 97 && Oberbrust <= 99) { Körbchen = "A"; Brallets = "M"; }
                        if (Oberbrust >= 99 && Oberbrust <= 101) { Körbchen = "B"; Brallets = "L"; }
                        if (Oberbrust >= 101 && Oberbrust <= 103) { Körbchen = "C"; Brallets = "L"; }
                        if (Oberbrust >= 103 && Oberbrust <= 105) { Körbchen = "D"; Brallets = "L"; }
                        if (Oberbrust >= 105 && Oberbrust <= 107) { Körbchen = "E"; Brallets = "XL"; }
                        if (Oberbrust >= 107 && Oberbrust <= 109) { Körbchen = "F"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 109 && Oberbrust <= 111) { Körbchen = "G"; Brallets = "Sondergröße"; }
                    }
                    break;
                case 90:
                    if (Oberbrust == 104 || Oberbrust == 106 || Oberbrust == 108 || Oberbrust == 110 || Oberbrust == 112 || Oberbrust == 114) {

                        switch (Oberbrust) {
                            case "104": Körbchen = "A/B"; Brallets = "L/XL"; break;
                            case "106": Körbchen = "B/C"; Brallets = "XL"; break;
                            case "108": Körbchen = "C/D"; Brallets = "XL"; break;
                            case "110": Körbchen = "D/E"; Brallets = "XL"; break;
                            case "112": Körbchen = "E/F"; Brallets = "Sondergröße"; break;
                            case "114": Körbchen = "F/G"; Brallets = "Sondergröße"; break;
                        }
                        //     console.log("90 Korb switch");
                    }
                    else {
                        if (Oberbrust >= 102 && Oberbrust <= 104) { Körbchen = "A"; Brallets = "L"; }
                        if (Oberbrust >= 104 && Oberbrust <= 106) { Körbchen = "B"; Brallets = "XL"; }
                        if (Oberbrust >= 106 && Oberbrust <= 108) { Körbchen = "C"; Brallets = "XL"; }
                        if (Oberbrust >= 108 && Oberbrust <= 110) { Körbchen = "D"; Brallets = "XL"; }
                        if (Oberbrust >= 110 && Oberbrust <= 112) { Körbchen = "E"; Brallets = "XL"; }
                        if (Oberbrust >= 112 && Oberbrust <= 114) { Körbchen = "F"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 114 && Oberbrust <= 116) { Körbchen = "G"; Brallets = "Sondergröße"; }

                    }
                    break;
                case 95:
                    if (Oberbrust == 109 || Oberbrust == 111 || Oberbrust == 113 || Oberbrust == 115 || Oberbrust == 117 || Oberbrust == 119) {

                        switch (Oberbrust) {
                            case "109": Körbchen = "A/B"; Brallets = "XL"; break;
                            case "111": Körbchen = "B/C"; Brallets = "Sondergröße"; break;
                            case "113": Körbchen = "C/D"; Brallets = "Sondergröße"; break;
                            case "115": Körbchen = "D/E"; Brallets = "Sondergröße"; break;
                            case "117": Körbchen = "E/F"; Brallets = "Sondergröße"; break;
                            case "119": Körbchen = "F/G"; Brallets = "Sondergröße"; break;
                        }
                        //       console.log("95 Korb switch");
                    } else {
                        if (Oberbrust >= 107 && Oberbrust <= 109) { Körbchen = "A"; Brallets = "XL"; }
                        if (Oberbrust >= 109 && Oberbrust <= 111) { Körbchen = "B"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 111 && Oberbrust <= 113) { Körbchen = "C"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 113 && Oberbrust <= 115) { Körbchen = "D"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 115 && Oberbrust <= 117) { Körbchen = "E"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 117 && Oberbrust <= 119) { Körbchen = "F"; Brallets = "Sondergröße"; }
                        if (Oberbrust >= 119 && Oberbrust <= 121) { Körbchen = "G"; Brallets = "Sondergröße"; }
                    }
                    break;
            }
        }
    }
    if (Oberbrust != null && Unterbrust != null) {
        document.getElementById("BHSize").innerHTML = Unterbrust + Körbchen;
        if (Brallets != "Sondergröße") {
            document.getElementById("BralletsSize").innerHTML = Brallets;
            document.getElementById("BralletsSize").style.opacity = "1";
            document.getElementById("BralletsText").style.opacity = "1";
        }
        else {
            document.getElementById("BralletsText").style.opacity = "0";
            document.getElementById("BralletsSize").style.opacity = "0";
        }
        console.log("BralletsSize is: " + Brallets);
        console.log("BHSize is: " + Unterbrust + Körbchen);
    }
}


function OpenArticle(Nr) {
    article = document.getElementById(Nr);
    info = article.querySelector('.Info');
    ImgDiv = article.querySelector('.ImgDiv');
    PreVis = ImgDiv.querySelector('.PreVis');
    ShopImage = document.getElementById("ShopImage");
    if (article.style.height != "71%") {
        article.style.height = "71%";
        info.style.minHeight = "16%"
        ImgDiv.style.width = "46%";
        ShopImage.src = 'Bilder/RenderProdukt.png';
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
        ShopImage.src = 'Bilder/Render.png';
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

    for(var i = 1; i <6; i++)
    {
        if(i != Nr)
        {
        article = document.getElementById(i);
         info = article.querySelector('.Info');
         ImgDiv = article.querySelector('.ImgDiv');
         PreVis = ImgDiv.querySelector('.PreVis');

         article.style.height = "17%";
        info.style.minHeight = "100%"
        ImgDiv.style.width = "20%";
        }
    }
}