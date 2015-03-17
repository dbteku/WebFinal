var nrImg = 3;
var IntSeconds = 4;

$(document).ready(function () {

    setInterval(checkDiv, 0);

    nrShown = 0;
    Vect = new Array(nrImg + 10);
    Vect[0] = document.getElementById("Img1");
    Vect[0].style.visibility = "visible";
    for (var i = 1; i < nrImg; i++) {
        Vect[i] = document.getElementById("Img" + (i + 1));
    }
    mytime = setInterval(Timer, IntSeconds * 1000);

    function Timer() {
            nrShown++;
            if (nrShown == nrImg)
                nrShown = 0;
            Effect();
        }
        //next img
    function next() {
        nrShown++;
        if (nrShown == nrImg)
            nrShown = 0;
        Effect();
        clearInterval(mytime);
        mytime = setInterval(Timer, IntSeconds * 1000);
    }

    function prev() {
        nrShown--;
        if (nrShown == -1)
            nrShown = nrImg - 1;
        Effect();
        clearInterval(mytime);
        mytime = setInterval(Timer, IntSeconds * 1000);
    }

    function Effect() {
        for (var i = 0; i < nrImg; i++) {
            Vect[i].style.visibility="hidden";
            Vect[i].style.opacity = "0";
        }
        setTimeout(function(){
        Vect[nrShown].style.opacity = "1";
        Vect[nrShown].style.visibility = "visible";
        }, 1200);

    }

    function checkDiv() {
        $(".image").each(function () {
            if ($(this).css("visibility") == "hidden") {
                $(this).hide();
            } else {
                $(this).show();
            }
        });

    }

});