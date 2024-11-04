const d2 = new Date();
document.getElementById("p1").innerHTML=d2;



const d1 = new Date("2024-10-21");
document.getElementById("p2").innerHTML=d1;



const d = new Date(2018, 10, 35, 10, 33, 30, 0);
document.getElementById("demo").innerHTML = d;



const d3 = new Date(2024,10,21,10,20,30);
document.getElementById("p3").innerHTML = d3;



const d4 = new Date(2024,10,21,10,20);
document.getElementById("p4").innerHTML = d4;



const d5 = new Date(2024,10,21,10);
document.getElementById("p5").innerHTML = d5;



const d6 = new Date(2024,10,21);
document.getElementById("p6").innerHTML = d6;



const d7 = new Date(2024,10);
document.getElementById("p7").innerHTML = d7;



const d8 = new Date(2024);
document.getElementById("p8").innerHTML = d8;



const d9 = new Date();
document.getElementById("p9").innerHTML = d9.toDateString();



const d10 = new Date();
document.getElementById("p10").innerHTML = d10.toUTCString();



const d11 =  new Date();
document.getElementById("p11").innerHTML =d11.toISOString();



let x = 10;
x += 5;
document.getElementById("12").innerHTML =  x;