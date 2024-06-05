document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById("mainImage");
    const retroAudio = document.getElementById("retroAudio");
    const kukremeAudio = document.getElementById("kukremeAudio");
    const aloAudio = document.getElementById("aloAudio");
    const kapatAudio = document.getElementById("kapatAudio");
    const araButton = document.getElementById("araButton");
    const baglatButton = document.getElementById("baglatButton");
    const konusButton = document.getElementById("konusButton");

    mainImage.addEventListener("mouseover", function() {
        mainImage.src = "aslan1.jpeg";
    });

    mainImage.addEventListener("mouseout", function() {
        mainImage.src = "aslan2.jpeg";
        kukremeAudio.play();
        setTimeout(function() {
            kukremeAudio.pause();
            kukremeAudio.currentTime = 0; // Reset audio to start
        }, 5000); // 5 saniye sonra durdur
    });

    araButton.addEventListener("click", function() {
        mainImage.src = "img.gif";
        retroAudio.play().catch(error => console.log(error));
    });

    baglatButton.addEventListener("click", function() {
        retroAudio.pause();
        retroAudio.currentTime = 0; // Reset audio to start
        mainImage.src = "telbagla.gif";
        aloAudio.currentTime = 42;
        aloAudio.play();
        setTimeout(function() {
            aloAudio.pause();
        }, 8000); // 42-50 saniyeleri arasinda cal
    });

    konusButton.addEventListener("click", function() {
        kapatAudio.currentTime = 60;
        kapatAudio.play();
        mainImage.src = "telefon.gif";
        setTimeout(function() {
            mainImage.src = "telfirlat.gif";
            setTimeout(function() {
                kapatAudio.pause();
            }, 5000); // 60-65 saniyeleri arasinda cal
        }, 3000);
    });
});
