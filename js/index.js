console.log(document);

console.log(document.querySelector(".btn"));

console.log(document.querySelector(".details"));

const botaoTrailer = document.querySelector(".btn");

const modal = document.querySelector(".modal");

const botaoX = document.querySelector(".fechar-modal");

const video = document.getElementById("video");

const linkVideo = "https://www.youtube.com/embed/78WIYzX_m98";


botaoTrailer.addEventListener("click", () => {
    modal
        .classList
        .add("aberto");
    video.setAttribute("src", linkVideo);
});

botaoX.addEventListener("click", () => {
    modal
        .classList
        .remove("aberto")
    video.setAttribute("src", "");
});


$(document).ready(function() {
    var botao = $('.details');
    var dropDown = $('.sub');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });


/* if (sub) {
    botaoDetails.addEventListener("click", () => {
        sub
            .classList
            .add("aberto")
    })
} if (aberto) {
    botaoDetails.addEventListener("click", () =>{
        aberto.classList.remove(".aberto")
    })
} */



