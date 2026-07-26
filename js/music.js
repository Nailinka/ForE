const music = document.getElementById("music");


if(music){


let savedTime = localStorage.getItem("musicTime");

let isPlaying = localStorage.getItem("musicPlaying");



if(savedTime){

music.currentTime = Number(savedTime);

}



music.addEventListener("timeupdate", function(){

localStorage.setItem(
"musicTime",
music.currentTime
);

});



music.addEventListener("play", function(){

localStorage.setItem(
"musicPlaying",
"true"
);

});



music.addEventListener("pause", function(){

localStorage.setItem(
"musicPlaying",
"false"
);

});



const button=document.getElementById("musicButton");


if(button){


button.addEventListener("click",function(){


if(music.paused){


music.play();


button.innerHTML="⏸ Остановить музыку";


}

else{


music.pause();


button.innerHTML="🎵 Включить нашу песню";


}


});


}


}