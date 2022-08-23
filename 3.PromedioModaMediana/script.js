

let numeros = [];

//80,80,90
const promedio = (array) =>{
    let suma= array.reduce((acum, x) => acum + x);

    let prom = suma / array.length;

    return  prom.toFixed(2);
}

const mediana  = (array) =>{
    let orden = array.sort((a,b) => a-b);
    let datos = array.length%2;

    if (datos == 0) {
        let position = (orden.length)/2;
        let mediana = (orden[position-1]+orden[position])/2;
        return mediana.toFixed(2);
    }else{
        let position = (orden.length + 1)/2;
        let mediana =orden[position-1]
        return mediana.toFixed(2);
    }
}

const moda = (array) =>{
    let moda =0;
    let repeticiones=0;

    array.forEach((x,i) => {
        let apariciones  = (array.filter(y => y == x)).length;

        if (apariciones > repeticiones) {
            repeticiones = apariciones;
            moda = array[i];
        }
    });

    return moda.toFixed(2);
}


console.log("la mediana es: "+mediana(numeros));
console.log("la moda es: "+moda(numeros));

function agregarDato(){
    const espacio = document.getElementById("conjunto");
    const entrada = document.getElementById("datos");
    const dato = parseFloat(entrada.value);

    numeros.push(dato);
    
    entrada.value = "";
    entrada.focus();
}

function generarPromedio(){
    const response = document.getElementById("response");

    console.log(numeros);
    console.log("el promedio es: "+promedio(numeros));
    response.textContent = "El promedio de: ["+numeros+"] es: "+promedio(numeros);
}

function generarMediana(){
    const response = document.getElementById("response");

    console.log("el promedio es: "+mediana(numeros));
    response.textContent = "La mediana de: ["+numeros+"] es: "+mediana(numeros);
}

function generarModa(){
    const response = document.getElementById("response");

    response.textContent = "La moda de: ["+numeros+"] es: "+moda(numeros);
}