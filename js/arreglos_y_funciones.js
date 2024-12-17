function ejercicio1() {
    
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(meses);

    document.write(`<h1><strong>Lista de Meses</strong></h1>`)
    document.write(`<ul>`);
    for (let i = 0; i != meses.length; i++){
        document.write(`<li>${meses[i]}</li>`);
    }
    document.write(`</ul>`);
   
}

function ejercicio2() {
    let cities = [];
    let exit = true;
    do {
        let city = prompt('Ingrese una ciudad o presione 0 para salir del programa').trim();
        if (city == null || city === '0' || city === undefined) {
            exit = false;
        }
        else {
            cities.push(city);
            console.log(city);
        }
    }
    while (exit);
    document.write(`<p>El arreglo de ciudades tiene ${cities.length + 1} elementos </p>`);
    document.write(`<ul>`);
    if (cities.length >= 1) {
        document.write(`<li> Elemento en la 1ra posicion : ${cities[0] }</li>`); 
    }
    else {
        document.write(`No existe un elemento en la 1ra posición`);
    }
     if (cities.length >= 3) {
        document.write(`<li> Elemento en la 3ra posicion : ${cities[2] }</li>`); 
    }
    else {
        document.write(`No existe un elemento en la 3ra posición`);
    }
    if (cities.length >= 1) {
        document.write(`<li> Elemento en la ultima posicion : ${cities[cities.length - 1] }</li>`); 
    }
    else {
        document.write(`No existe un elemento en la ultima posición`);
    }
    document.write(`</ul>`);
    cities.push('Paris');
    document.write(`<ul>`);
    if (cities.length >= 2) {
        document.write(`<li> Elemento en la 2da posicion : ${cities[1] }</li>`); 
    }
    else {
        document.write(`No existe un elemento en la 2da posición`);
    }
    document.write(`</ul>`);
    console.log(cities);
    if (cities.length >= 1) {
        cities[1] = 'Barcelona';
    }
    document.write(`<h1><strong>Arreglo de ciudades</strong></h1>`);
    document.write(`<ol>`);
    for (let i = 0; i != cities.length; i++){
        document.write(`<li>${cities[i]}</li>`);
    }
    document.write(`</ol>`);
}

function ejercicio3() {
    
    let sumas = [];
    for (let i = 0; i <50; i++){
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        
        sumas.push(dado1 + dado2);
    }
    
    sumas.forEach((suma, index) => {
        console.log(`Tirada N ${index + 1} // Suma: ${suma}`)
    });

    let sumasUnicas = [];
    let ocurrencias = [];
    for (let i = 0; i < sumas.length; i++){
        let suma = sumas[i];
        let index = sumasUnicas.indexOf(suma);

        if (index === -1) {
            sumasUnicas.push(suma);
            ocurrencias.push(1);
        }
        else {
            ocurrencias[index]++;
        }
    }
    document.write(`<table>`);
    document.write(`<link rel="stylesheet" href="/css/style.css">
        <thead>
                <tr>
                    <td>Suma <img src="https://static.vecteezy.com/system/resources/thumbnails/010/897/274/small/dice-game-cube-png.png" alt=""><img src="https://static.vecteezy.com/system/resources/thumbnails/010/897/274/small/dice-game-cube-png.png" alt=""></td>
                    <td>Apariciones</td>
                </tr>
                
            </thead>`);
    document.write(`<tbody>`);
    for (let cont = 0; cont != sumasUnicas.length; cont++){
        document.write(`<tr>`);
    document.write(`<td> ${sumasUnicas[cont]}</td>`);
        document.write(`<td> ${ocurrencias[cont]}</td>`);
        document.write(`</tr>`);
    }
    document.write(`</tbody>`);
    document.write(`</table>`);
    
}


function ejercicio4() {
    function parImpar(numero){
    let entero = numero % 2;
    if (entero!=0) {
     alert('El numero ingresado es Impar')        
    }
    else {
        alert('El numero ingresado es Par')
        }
    }  
    let numero = parseInt(prompt('Ingresa un número entero'));
    parImpar(numero); 
}

function ejercicio5() {
    function letras(palabra) {
        let frase = palabra;
        if (frase == frase.toUpperCase()) {
            alert(`La frase " ${frase} " esta en Mayusculas` )
            
        }
        else if(frase==frase.toLowerCase()) {
            alert(`La frase " ${frase} " esta en Minusculas` )
        }
        else {
            alert(`La frase " ${frase} " esta en Mayusculas y Minusculas` )
        }
    }

    let palabra = prompt('Ingresa una palabra');
    letras(palabra);
}
function ejercicio6() {
    function perimetro(a, b) {
        let perimetro = (parseFloat(a) + parseFloat(b))*2 ;
        alert(`El perimetro de A= ${a} y B= ${b} es: ${perimetro}`)
        
    }

    let a = prompt('Ingresa el valor del lado A de un rectangulo');
    let b = prompt('Ingresa el valor del lado B de un rectangulo');
    perimetro(a,b);
}
function ejercicio7() {
     function tablaMultiplicar(numero){

    // Validar numero
    if(isNaN(numero)){
        document.write(`<p>Ingresa un numero valido</p>`);
        return;
    }

    // Generar la tabla
    document.write(`
        <table border="1" cellpadding="5" cellspacing="0"> 
            <thead>
                <tr>
                    <th colspan="2">Tabla de multiplicar del numero ${numero}</th>
                </tr>
            </thead>
            <tbody>
    `)
        for (let i = 1; i <= 10; i++) {
            document.write(`
                <tr>
                    <td>${numero} * ${i}</td>
                    <td>${numero * i}</td>
                </tr>
                `)
        }

        document.write(`</tbody></table>`)

}

let number = parseInt(prompt("Ingrese un numero para mostrar la tabla de multiplicar"))

tablaMultiplicar(number); 

    
}

