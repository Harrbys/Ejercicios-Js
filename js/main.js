

function suma(){
// Explicacion algoritmo
    alert ("algoritmo que realiza una suma entre dos valores ingresados por ")
    // declara variables necesarias 

let a,b,s = 0;
// captura los datos 

a=parseInt(prompt("ingrese el primer valor"));
b=parseInt(prompt("ingrese el segundo valor"));
// realiza la operacion
s=a+b;

alert("el resultado d ela suma es: " + s)
}

function opBasicas(){

    alert ("operaciones basicas")

// suma
let a,b=0;


a=parseInt(prompt("ingrese el primer valor"));
b=parseInt(prompt("ingrese el segundo valor"));

s=a+b;
r=a-b;
m=a*b;
d=a/b;


alert("el resultado de la suma es: " + s)
alert("el resultado de la resta es: " + r)
alert("el resultado de la multiplicacion es: " + m)
alert("el resultado de la divicion es: " + d)
}


function cuadrado(){

    alert ("operaciones cuadradas")

// suma
let a,b=0;


a=parseInt(prompt("ingrese el valor "));
b=parseInt(prompt("ingrese el valor al elevar "));


s=a**b;



alert("el resultado al cuadrado es: " + s)
}

function Atriangulo(){

    alert ("operaciones area de un triangulo")

// suma
let a,b=0;


a=parseInt(prompt("ingrese el valor de la altura"));
b=parseInt(prompt("ingrese el valor de la base"));


s=a*b/2;



alert("el resultado del area del triangulo: " + s)
}

function Conversion(){

    alert ("operaciones Conversion")

// suma
let m=0;


m=parseInt(prompt("ingrese los metros a convertir a cm,m,km,mm"));

s=m*100;
q=m/1000;
a=m/100000;



alert("el resultado de la conversion de m a cm: " + s + "cm")
alert("el resultado de la conversion de m a km: " + q + "km")
alert("el resultado de la conversion de m a mm: " + a + "mm")
}

function Mayor2N(){

    alert ("operaciones MAyor entre dos numeros")

// suma
let m,c=0;


m=parseInt(prompt("ingrese el primer valor"));
c=parseInt(prompt("ingrese el segundo valor"));


if(m>c){
    alert("el numero mayor es " + m + "que " + c);
}else{
    alert("el numero mayor es " + c + "que " + m);
}



alert("el resultado de la conversion de m a cm: " + s + "cm")
alert("el resultado de la conversion de cm a m: " + c + "m")
}

function Menor3N(){

    alert ("operaciones Menor de 3 numeros")

// suma
let m,c,x=0;


m=parseInt(prompt("ingrese el primer valor"));
c=parseInt(prompt("ingrese el segundo valor"));
x=parseInt(prompt("ingrese el tercer valor"));

// m1 c2 x3
// m1 c3 x2
// m2 c1 x3
// m2 c3 x1
// m3 c2 x1
// m3 c1 x2


if ((m<=c) && (c<=x)){
    // m1 c2 x3
    alert("1) el numero Menor es " + m + "que " + c + " y que" + x);
} else if ((m<=x) && (x<=c)){
    // m1 c3 x2
    alert("2) el numero Menor es " + m + "que " + x + "y que" + c);
} else if ((c<=m) && (m<=x)){
    // m2 c1 x3
    alert("3) el numero Menor es " + c + "que " + m + "y que" + x);
} else if ((x<=m) && (m<=c)){
    // m2 c3 x1
    alert("4) el numero Menor es " + x + "que " + m + "y que" + c);
} else if ((x<=c) && (c<=m)){
    // m3 c2 x1
    alert("4) el numero Menor es " + x + "que " + c + "y que" + m);
} else if ((c<=x) && (x<=m)){
    // m3 c1 x2
    alert("4) el numero Menor es " + c + "que " + x + "y que" + m);
}

}


function Promedio(){

    alert ("operaciones promedio")

// suma
let a,b,c,d,e,f,g=0;


a=parseInt(prompt("ingrese nota 1"));
b=parseInt(prompt("ingrese nota 2"));
c=parseInt(prompt("ingrese nota 3"));
d=parseInt(prompt("ingrese nota 4"));
e=parseInt(prompt("ingrese nota 5"));
f=parseInt(prompt("ingrese nota 6"));
g=parseInt(prompt("ingrese nota 7"));



z=a+b+c+d+e+f+g
x=z/7

if(x>6){
    alert("El estudiante Aprovo con " + x )
}else{
    alert("El estudiante reprovo " + x )
}
}


function Fruver(){

    alert ("operaciones fruver")

// suma
let a=0;

let M=100;

a=parseInt(prompt("ingrese cuantos kilos va a comprar"));


z=a*M

d=z*0.1
t=z-d

alert("Ud compro " + a + "kilos de manzana a " + z + "pesos")
alert("con el descuento del 10% le quedo en " + t)
}

function SSVL(){

    alert ("operaciones Salario")


    let a=0;
    let b=12500
    let c=18000
// 1h = 12.500
// 40h 

a=parseInt(prompt("Ingrese horas trabajadas:"));

hx=a-40
sss=hx*b
ss=hx-a
xt=ss*b

alert("su salario semanal con las horas de " + ss + "hr es de " + xt )
alert("con horas extras es de un total de: " + hx + "hr con una paga de " + sss)



}
