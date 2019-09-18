var pole = 0;
var x = 0;
var setki = 0;
var piatki = 0;
var dziesiatki = 0;

function DodajWpis() {
    pole = pole + 1;
    var l = document.getElementById("dlugosc").value;
    document.getElementById("container").innerHTML += pole + ". " + l + "<br>";
    var intL = Number(l);
    x = x + intL;
}

function Oblicz() {
    var wynik = x;
    setki = 0; 
    piatki = 0; 
    dziesiatki = 0;
    while (wynik > 0) {
        if(wynik > 90) {
            setki++;
            wynik = wynik - 100;
        }
        else if (wynik > 40)
        {
            piatki++;
            wynik = wynik - 50;
        }
        else {
            dziesiatki++;
            wynik = wynik - 10;
        }
    }
    alert("Łączna długość= " + x + "\n\nKable 100m  x" + setki + "\nKable 50m  x" + piatki + "\nKable 10m  x" + dziesiatki);
}

function Odswiez() {
    location.reload();
}