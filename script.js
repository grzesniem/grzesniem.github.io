var x = 0;
var center_circle = document.getElementById("center");
var rotor = document.getElementById("rot");

//Nawigacja do przodu ➡
//Przejście między ostatnim i pierwszym punktem
function zerowanie_przod() {
    x = 0;
    rotor.style.transition = "0s";
    rotor.style.transform = "translateX(-50%) rotate(" + x * -45 + "deg) ";
    rotor.removeEventListener("transitionend", zerowanie_przod);
}

//Nawigacja do przodu
function przod() {
    //rotor.style.transition = "1s";
    switch (x) {
        case 0:
            x = 1;
            break;
        case 1:
            x = 2;
            break;
        case 2:
            x = 3;
            break;
        case 3:
            x = 4;
            break;
        case 4:
            x = 5;
            break;
        case 5:
            x = 6;
            break;
        case 6:
            x = 7;
            break;
        case 7:
            x = 8;
            rotation();
            center_circle.style.backgroundImage = "url('images/samolot.jpg')";
            rotor.addEventListener("transitionend", zerowanie_przod);

            break;
    }
    rotation();
    center_image();
}

//Nawigacja do tyłu ⬅
//Przejście między pierwszym i ostatnim punktem
function zerowanie_tyl() {
    x = 7;
    rotor.style.transition = "0s";
    rotor.style.transform = "translateX(-50%) rotate(" + x * -45 + "deg) ";
    rotor.removeEventListener("transitionend", zerowanie_tyl);
}

//Nawigacja do tyłu
function tyl() {
    //rotor.style.transition = "1s";
    switch (x) {
        case 0:
            x = -1;
            rotation();
            center_circle.style.backgroundImage = "url('images/autobus.jpg')";
            rotor.addEventListener("transitionend", zerowanie_tyl);
            break;
        case 1:
            x = 0;
            break;
        case 2:
            x = 1;
            break;
        case 3:
            x = 2;
            break;
        case 4:
            x = 3;
            break;
        case 5:
            x = 4;
            break;
        case 6:
            x = 5;
            break;
        case 7:
            x = 6;
            break;
    }
    rotation();
    center_image();
}

//Funckja odpowiedzialna za obrót koła
function rotation() {
    rotor.style.transition = "1s";
    rotor.style.transform = "translateX(-50%) rotate(" + x * -45 + "deg) ";
    /*if (x == 8) {
        document.getElementById("center").innerHTML = 1;
    } else if (x == -1) {
        document.getElementById("center").innerHTML = 8;
    } else {
        document.getElementById("center").innerHTML = x + 1;
    }*/
    window.clearTimeout(this.timeoutID);
    this.timeoutID = window.setTimeout(przod, 8000);
}

//Akcje po załadowaniu strony
function zaladowana() {
    center_image();
    document.getElementById("rot").style.transition = "1s";
    document.getElementById("head").innerHTML += "<style>.bubble{transition:0.1s}#center{transition: 0.5s}</style>";
    rotation();

    //Nawigacja przez naciśnięcie na kółka
    document.getElementById("rotA").addEventListener("click", function () {
        x = 0;
        rotation();
        center_image();
    });
    document.getElementById("rotB").addEventListener("click", function () {
        x = 1;
        rotation();
        center_image();
    });
    document.getElementById("rotC").addEventListener("click", function () {
        x = 2;
        rotation();
        center_image();
    });
    document.getElementById("rotD").addEventListener("click", function () {
        x = 3;
        rotation();
        center_image();
    });
    document.getElementById("rotE").addEventListener("click", function () {
        x = 4;
        rotation();
        center_image();
    });
    document.getElementById("rotF").addEventListener("click", function () {
        x = 5;
        rotation();
        center_image();
    });
    document.getElementById("rotG").addEventListener("click", function () {
        x = 6;
        rotation();
        center_image();
    });
    document.getElementById("rotH").addEventListener("click", function () {
        x = 7;
        rotation();
        center_image();
    });
}

//Obrazy na środku
function center_image() {
    switch (x) {
        case 0:
            center_circle.style.backgroundImage = "url('images/samolot.jpg')";
            break;
        case 1:
            center_circle.style.backgroundImage = "url('images/samochod.jpg')";
            break;
        case 2:
            center_circle.style.backgroundImage = "url('images/motor.jpg')";
            break;
        case 3:
            center_circle.style.backgroundImage = "url('images/pociag.jpg')";
            break;
        case 4:
            center_circle.style.backgroundImage = "url('images/helikopter.jpg')";
            break;
        case 5:
            center_circle.style.backgroundImage = "url('images/statek.jpg')";
            break;
        case 6:
            center_circle.style.backgroundImage = "url('images/rower.jpg')";
            break;
        case 7:
            center_circle.style.backgroundImage = "url('images/autobus.jpg')";
            break;
    }
}
