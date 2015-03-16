$(document).ready(function(){
    var counter = 1;
    var pic = document.getElementById("pic");
    
    
function changePicture(){
    if(counter >= 3){
        counter = 1;
    }
    else{
        counter++;
    }
    switch(counter){
    case 1:
          pic.setAttribute("src", "images/racetrack.jpg");  
        break;
    case 2:
          pic.setAttribute("src", "images/maxresdefault.jpg");  
        break;
    case 3:
        pic.setAttribute("src", "images/HotWheelsTrack.jpg");
        break;
    }
}
    setInterval(changePicture, 3000);
});



    