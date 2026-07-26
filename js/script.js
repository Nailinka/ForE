document.addEventListener("DOMContentLoaded", function(){



// ============================
// ЗАСТАВКА
// ============================


const loading = document.getElementById("loading");
const main = document.getElementById("mainContent");


if(loading && main){


setTimeout(function(){


loading.style.opacity = "0";


setTimeout(function(){


loading.style.display = "none";

main.style.display = "block";


},1000);


},2500);


}



// ============================
// КНОПКА ОТКРЫТЬ ПОДАРОК
// ============================


const button = document.getElementById("openButton");

const overlay = document.getElementById("overlay");


if(button && overlay){


button.addEventListener("click",function(){


overlay.style.display="flex";


});


}



// ============================
// ОТКРЫТИЕ КОНВЕРТА
// ============================


const seal = document.querySelector(".seal");

const envelope = document.querySelector(".envelope");


if(seal && envelope){


seal.addEventListener("click",function(){


envelope.classList.add("open");


});


}



// ============================
// ЗАКРЫТИЕ ПИСЬМА
// ============================


const close = document.querySelector(".closeLetter");


if(close){


close.addEventListener("click",function(){


window.location.href="letters.html";


});


}



// ============================
// МУЗЫКА
// ============================


const musicButton = document.getElementById("musicButton");

const music = document.getElementById("music");


if(musicButton && music){


let playing=false;



musicButton.addEventListener("click",function(){



if(!playing){


music.play();


musicButton.innerHTML="⏸ Остановить песню";


playing=true;


}

else{


music.pause();


musicButton.innerHTML="🎵 Включить нашу песню";


playing=false;


}



});



}



// ============================
// СЧЁТЧИК ЛЮБВИ
// ============================


const counter = document.getElementById("counter");


if(counter){



// ПОТОМ ЗАМЕНИМ НА ВАШУ ДАТУ ❤️

const startDate = new Date("2025-06-07");



function updateCounter(){



const now = new Date();


const difference = now - startDate;



const days = Math.floor(
difference / (1000*60*60*24)
);



const hours = Math.floor(
(difference/(1000*60*60))%24
);



const minutes = Math.floor(
(difference/(1000*60))%60
);



const seconds = Math.floor(
(difference/1000)%60
);



counter.innerHTML =

days + " дней ❤️<br>" +

hours + " часов ✨<br>" +

minutes + " минут 💕<br>" +

seconds + " секунд";



}



updateCounter();


setInterval(updateCounter,1000);



}

// ============================
// ПАДАЮЩИЕ СЕРДЕЧКИ
// ============================


const heartsContainer = document.querySelector(".hearts");


if(heartsContainer){


setInterval(function(){


const heart = document.createElement("div");


heart.innerHTML="❤️";


heart.className="fallingHeart";


heart.style.left =
Math.random()*100+"vw";


heart.style.animationDuration =
(3+Math.random()*5)+"s";



heartsContainer.appendChild(heart);



setTimeout(()=>{


heart.remove();


},8000);



},500);



}

});