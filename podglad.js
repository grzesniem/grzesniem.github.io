var lp = 0;
var x = 0;
var s = 0;
var p = 0;
var d = 0;

function DodajWpis() {
    
    var l = document.getElementById("dlugosc").value;
	if (isNaN(l) == 1 || l == "")
	{
		alert("Podaj liczbę!")
	}
	else
	{
	lp += 1;
    document.getElementById("container").innerHTML += lp + ". " + l + "<br>";
    var intL = Number(l);
    x += intL;
	}
}

function Oblicz() {
    var y = x;
    s = 0; 
    p = 0; 
    d = 0;
    while (y > 0) {
        if(y > 90) {
            s++;
            y -= 100;
        }
        else if (y > 40)
        {
            p++;
            y -= 50;
        }
        else {
            d++;
            y -= 10;
        }
    }
    alert("Łączna długość= " + x + "\n\nKable 100m  x" + s + "\nKable 50m  x" + p + "\nKable 10m  x" + d);
}