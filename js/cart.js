
var rastgeleSayi = "";
var gelenSayi = "";
var süreSayaci = 30;
var seviye=1;
var tahminHak=5;
var geriSayma;

window.onload = function() {
    rastgeleSayi = Math.floor(Math.random() * 10) + 1;
    console.log(rastgeleSayi);

    document.getElementById("tahminEt").onclick = KontrolEt;
    document.getElementById("seviye").innerHTML=`<h4>Seviye<h4/>${seviye}`;
    document.getElementById("tahmin-hak").innerHTML=`<h4>Tahmin Hak<h4/>${tahminHak}`;
    document.getElementById("süre-sayaci").innerHTML=`<h4>Kalan Süre<h4/>${süreSayaci}`;
    geriyeSayveGameOver();

    function geriyeSayveGameOver(){
        geriSayma=setInterval(süreKontrol,1000)
    }

    function süreKontrol(){

        if(süreSayaci<=0)
            {

                clearInterval(geriSayma);
                document.getElementById("tahminEt").style.display="none";
                alert("Süreniz Bitti.Bilemediniz")

            }

            else
            {

                süreSayaci--;
                document.getElementById("süre-sayaci").innerHTML=`<h4>Kalan Süre<h4/>${süreSayaci}`;

            }


    }



};

function KontrolEt() {
    gelenSayi = parseInt(document.getElementById("gelenSayi").value);

    if (gelenSayi == rastgeleSayi) {
        rastgeleSayi = Math.floor(Math.random() * 20) + 1;
        console.log(rastgeleSayi);
        süreSayaci = 30;
        tahminHak=5;
        seviye++;
        document.getElementById("seviye").innerHTML=`Seviye=${seviye}`;

        document.getElementById("bilgi-mesaj").innerHTML = "Bildiniz";
    }


    else if(gelenSayi<rastgeleSayi){

        if(tahminHak==0)
            {
                alert("Üzgünüm bilemediniz.Tahmin hakkınız bitti");
                document.getElementById("tahminEt").style.display="none";

            }

       
        document.getElementById("bilgi-mesaj").innerHTML="Lütfen daha büyük sayi giriniz";
        tahminHak--;
        document.getElementById("tahmin-hak").innerHTML=`<h4>Tahmin Hak<h4/>${tahminHak}`

    }
    else if(gelenSayi>rastgeleSayi){

        
        document.getElementById("bilgi-mesaj").innerHTML="Lütfen daha küçük sayi giriniz";
        tahminHak--;
        document.getElementById("tahmin-hak").innerHTML=`<h4>Tahmin Hak<h4/>${tahminHak}`

    }

    if(0<tahminHak<1)
        {
            alert("Üzgünüm bilemediniz.Tahmin hakkınız bitti");
            document.getElementById("tahminEt").style.display="none";

        }
    }
