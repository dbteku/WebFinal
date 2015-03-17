var tickerContent = "......................We are Hover wheels bringing you the next innovative technology. Lets shape the future together!..................";
var ticker = document.getElementById("ticker");
var viewableContent;
var placeHolder = 0;
var viewSize = 20;
var tickerTime = 100;

function tickerScroll() {
    viewableContent = tickerContent.substr(placeHolder, viewSize);
    ticker.innerHTML = viewableContent;
    placeHolder++;
    
    if(placeHolder > tickerContent.length - viewSize){
        placeHolder = 0;
    }
}

setInterval(tickerScroll, tickerTime);