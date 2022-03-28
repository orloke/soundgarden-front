let tituloBanner = document.getElementById("nome-evento-banner");

function imgBanner1(){
    let img1 = document.getElementById("section-banner");
    img1.style.background = "url('../img/rock-nacional.jpg') no-repeat center";
    img1.style.backgroundSize = "cover";

    let tituloEvento1 = document.getElementById("evento1").innerHTML;
    tituloBanner.innerHTML = tituloEvento1;

    setTimeout("imgBanner2()", 5000);
}
    
function imgBanner2(){
    let img2 = document.getElementById("section-banner");
    img2.style.background = "url('../img/samba.jpg') no-repeat center";
    img2.style.backgroundSize = "cover";
    
    let tituloEvento2 = document.getElementById("evento2").innerHTML;
    tituloBanner.innerHTML = tituloEvento2;
    
    setTimeout("imgBanner3()", 5000);
}
    
function imgBanner3(){
    let img3 = document.getElementById("section-banner");
    img3.style.background = "url('../img/festa.jpg') no-repeat center";
    img3.style.backgroundSize = "cover";

    let tituloEvento3 = document.getElementById("evento3").innerHTML;
    tituloBanner.innerHTML = tituloEvento3;

    setTimeout("imgBanner1()", 5000)
}