alert("Todas las acciones se muestran en la consola, falla tecnica :(");
nombre = prompt("Digite su nombre");
let acumulador = 0
function ejercicio1(nombre) {

    let newNombre = nombre.split("").reverse()
    console.log("Su nombre invertido es: " + newNombre.join(""));
}

ejercicio1(nombre);

// Ejercicio2
//   const vocales=["a","e","i","o","u"]
//     nombreNew=nombre.toLowerCase();
//   for (let i=0; i<nombreNew.length; i++){
//      if (nombreNew[i]==vocales[i]){
//          acumulador=acumulador+1

//      }    
//   }


// Ejercicio2 fixed
const vocales = ["a", "e", "i", "o", "u"];
let nombreNew = nombre.toLowerCase();

for (let i = 0; i < nombreNew.length; i++) {
    for (let j = 0; j < vocales.length; j++) {
        if (nombreNew[i] === vocales[j]) {
            acumulador = acumulador + 1;
            break;
        }
    }
}

console.log(`Su nombre tiene ${acumulador} vocales`);

//Ejercicio 3
const divC = document.getElementById("div2")

function Calculadora(opcion) {

    switch (opcion) {
        case 1:
            numero1 = parseInt(prompt("Digite el numero 1"));
            numero2 = parseInt(prompt("Digite el numero a Sumar"));
            suma = numero1 + numero2;
            // divC.innerHTML=""
            const card = document.createElement("card");
            // card.classList.add="Div3"
            card.innerHTML = ` El resultado de la suma es ${suma}`;
            console.log(card);
            // divC.appendChild(card)

            break;
        case 2:
            console.log("Resta");
            numero1 = parseInt(prompt("Digite el numero 1"));
            numero2 = parseInt(prompt("Digite el numero a Restar"));
            resta = numero1 - numero2;
            // divC.innerHTML=""
            const card2 = document.createElement("card");
            // card.classList.add="Div3"
            card2.innerHTML = ` El resultado de la resta es ${resta}`;
            console.log(card2);
            break;
        case 3:
            console.log("Division");
            numero1 = parseInt(prompt("Digite el numero 1"));
            numero2 = parseInt(prompt("Digite el numero a Dividir"));
            Division = numero1 / numero2;
            // divC.innerHTML=""
            const card3 = document.createElement("card");
            // card.classList.add="Div3"
            card3.innerHTML = ` El resultado de la division es ${Division}`;
            console.log(card3);
            break;
        case 4:
            console.log("Division");
            numero1 = parseInt(prompt("Digite el numero 1"));
            numero2 = parseInt(prompt("Digite el numero a Multiplicar"));
            Multiplicacion = numero1 * numero2;
            // divC.innerHTML=""
            const card4 = document.createElement("card");
            // card.classList.add="Div3"
            card4.innerHTML = ` El resultado de la Multiplicacion es ${Multiplicacion}`;
            console.log(card4);
            break;
    }
}
