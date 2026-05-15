let tumIslemler=[];
function hesapla(){
let kalinanSaat = Number(document.getElementById("saat").value);
let arac=document.getElementById("arac").value;
let saatlikUcret = 0
let listeyeEkle = document.getElementById("buton2").value;
let bugunkiIslemler = document.getElementById("bugun").value;
const islem = document.getElementById("islem");
let ekHizmetUcret = 0;
let ekHizmet=document.getElementById("ekHizmet").value
switch(arac){
    case "kamyonet":
       saatlikUcret = kalinanSaat*100;
        break;
        case "otomobil":
       saatlikUcret = kalinanSaat*50;
        break;
        case "motosiklet":
        saatlikUcret= kalinanSaat*30;
        break;
        case "minibüs":
         saatlikUcret= kalinanSaat*80;
        break;
}
switch(ekHizmet){
    case "yıkama":
     
       ekHizmetUcret  +=100;
        break;
        case "vale":
    
       ekHizmetUcret  +=150;
        break;
        case "lastik":
       
       ekHizmetUcret  +=50;
        break;
        default:
            ekHizmetUcret +=0
}
let toplam = saatlikUcret + ekHizmetUcret;
 document.getElementById("saatlik").innerText = saatlikUcret + " TL";
    document.getElementById("hizmetSonuc").innerText = ekHizmetUcret + " TL";
    document.getElementById("sonuc").innerText = toplam + " TL";
}
const ekleBtn = document.getElementById("buton2");
ekleBtn.addEventListener("click", function(){

    const arac = document.getElementById("arac").value;
    const saat = document.getElementById("saat").value;
    const hizmet = document.getElementById("ekHizmet").value;
    const ucret = document.getElementById("sonuc").textContent;

    const yeniSatir = document.createElement("div");
    yeniSatir.className = "islemler";
    yeniSatir.innerHTML = `
        <div class="arac">${arac}</div>
        <div class="saat">${saat}</div>
        <div class="hizmet">${hizmet}</div>
        <div class="ucret">${ucret}</div>
        <button>Sil</button>
    `;
const silButton = yeniSatir.querySelector("button");
silButton.style.borderRadius="5px";
silButton.style.paddingRight="5px";

silButton.addEventListener("click",function(){
yeniSatir.remove()
});


    document.getElementById("liste").appendChild(yeniSatir);
});
let topucret = 0;
let islemSayisi = 0;
let enPahali = 0;
ekleBtn.addEventListener("click", function(){

const ucret =Number(document.getElementById("sonuc").textContent.replace(" TL",""));
const hizmet = document.getElementById("ekHizmet").value;
const arac = document.getElementById("arac").value;
const saat = document.getElementById("saat").value;
let ortalamaUcret=0;
topucret+=ucret
islemSayisi++
ortalamaUcret+=topucret
ortalamaUcret=ortalamaUcret/islemSayisi
const topUcretAlan = document.getElementById("topUcret");
topUcretAlan.textContent=topucret
const ortUcretAlan = document.getElementById("ort-ucret");
ortUcretAlan.textContent=ortalamaUcret
const enPahaliAlan = document.getElementById("en-pahali");

if(enPahali>ucret)
    enPahaliAlan.textContent=enPahali
else
    enPahaliAlan.textContent=ucret
let yeniIslem={arac:arac,
    saat:saat,
    ucret:ucret};
tumIslemler.push(yeniIslem);
console.log(tumIslemler)
localStorage.setItem("tumIslemler",JSON.stringify(tumIslemler));
let veri=JSON.parse(localStorage.getItem("tumIslemler"));
console.log(veri);

localStorage.setItem("Toplam",topucret)
Number(localStorage.getItem("Toplam"))
localStorage.setItem("ortUcret",ortalamaUcret)
Number(localStorage.getItem("ortUcret"))
 
});
let temizle = document.querySelector(".sifirla");
temizle.addEventListener("click",function(){
localStorage.clear();

    tumIslemler = [];

    document.getElementById("liste").innerHTML = "";

    topucret = 0;
    islemSayisi = 0;
    enPahali = 0;

    document.getElementById("topUcret").textContent = "";
    document.getElementById("ort-ucret").textContent = "";
    document.getElementById("en-pahali").textContent = "";
    document.getElementById("saatlik").textContent = "";
    document.getElementById("hizmetSonuc").textContent = "";
    document.getElementById("sonuc").textContent = "";
});