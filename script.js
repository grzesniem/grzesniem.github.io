var x = 0;
console.log(x);

//Nawigacja do przodu ➡
//Przejście między ostatnim i pierwszym punktem
function zerowanie_przod() {
    x = 0;
    document.getElementById("rot").style.transition = "0s";
    rotation();
    document.getElementById("rot").removeEventListener("transitionend", zerowanie_przod);
}

//Nawigacja do przodu
function przod() {
    document.getElementById("rot").style.transition = "1s";
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
            document.getElementById("rot").addEventListener("transitionend", zerowanie_przod);

            break;
    }
    rotation();
}

//Nawigacja do tyłu ⬅
//Przejście między pierwszym i ostatnim punktem
function zerowanie_tyl() {
    x = 7;
    document.getElementById("rot").style.transition = "0s";
    rotation();
    document.getElementById("rot").removeEventListener("transitionend", zerowanie_tyl);
}

//Nawigacja do tyłu
function tyl() {
    document.getElementById("rot").style.transition = "1s";
    switch (x) {
        case 0:
            x = -1;
            rotation();
            document.getElementById("rot").addEventListener("transitionend", zerowanie_tyl);
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
}

//Funckja odpowiedzialna za obrót koła
function rotation() {

    document.getElementById("rot").style.transform = "translateX(-50%) rotate(" + x * -45 + "deg) ";
    if (x == 8) {
        document.getElementById("center").innerHTML = 1;
    } else if (x == -1) {
        document.getElementById("center").innerHTML = 8;
    } else {
        document.getElementById("center").innerHTML = x + 1;
    }
    window.clearTimeout(this.timeoutID);
    this.timeoutID = window.setTimeout(przod, 8000);
}

//Akcje po załadowaniu strony
function zaladowana() {
    document.getElementById("rot").style.transition = "1s";
    document.getElementById("head").innerHTML += "<style>.bubble{transition:0.1s}</style>";
    window.setTimeout(przod, 5000);

    //Nawigacja przez naciśnięcie na kółka
    document.getElementById("rotA").addEventListener("click", function () {
        x = 0;
        rotation();
    });
    document.getElementById("rotB").addEventListener("click", function () {
        x = 1;
        rotation();
    });
    document.getElementById("rotC").addEventListener("click", function () {
        x = 2;
        rotation();
    });
    document.getElementById("rotD").addEventListener("click", function () {
        x = 3;
        rotation();
    });
    document.getElementById("rotE").addEventListener("click", function () {
        x = 4;
        rotation();
    });
    document.getElementById("rotF").addEventListener("click", function () {
        x = 5;
        rotation();
    });
    document.getElementById("rotG").addEventListener("click", function () {
        x = 6;
        rotation();
    });
    document.getElementById("rotH").addEventListener("click", function () {
        x = 7;
        rotation();
    });
}
