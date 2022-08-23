

// calcular perimetro cuadrado
const perimetroCuadrado = lado => lado*4;
// calcular área cuadrado
const areaCuadrado = lado => Math.pow(lado,2);

// calcular perimetro triangulo
const perimetroTriangulo = (l1, l2,l3)=> l1+l2+l3;
//calcular altura
const calcAltura = (lT1, base) => {
    return Math.round(Math.sqrt(Math.pow(lT1,2)- Math.pow(base,2)))
};
// calcular área triangulo
const areaTriangulo = (h,b) => (h*b)/2;

//calcular perimetro circulo
const perimetroCirculo = d => (d * Math.PI).toFixed(2);
//calcular área circulo
const areaCirculo = r  => (Math.PI * Math.pow(r,2)).toFixed(2);


function calculoPeriCuadrado(){
    const ladoCuadrado = document.getElementById("ladoCuadrado").value;
    let resultado = document.getElementById("respuestaCuadrado");
    
    resultado.value = perimetroCuadrado(ladoCuadrado)+" cm";
}
function calculoAreaCuadrado(){
    const ladoCuadrado = document.getElementById("ladoCuadrado").value;
    let resultado = document.getElementById("respuestaCuadrado");

    resultado.value = areaCuadrado(ladoCuadrado)+" cm\xB2";
}

function calculoPeriTriangulo(){
    const lT1 = parseInt(document.getElementById("ladoTriangulo1").value);
    const lT2 = parseInt(document.getElementById("ladoTriangulo2").value)
    const lT3 = parseInt(document.getElementById("ladoTriangulo3").value)

    let resultado = document.getElementById("respuestaTriangulo");

    resultado.value = perimetroTriangulo(lT1,lT2,lT3)+" cm";
}

function calculoAreaTriangulo(){
    const lT1 = parseInt(document.getElementById("ladoTriangulo1").value);
    const lT2 = parseInt(document.getElementById("ladoTriangulo2").value);
    const lT3 = parseInt(document.getElementById("ladoTriangulo3").value);
    let base = lT3/2;

    let altura = calcAltura(lT1, base);

    if(lT1 != lT2){
        let resultado = document.getElementById("respuestaTriangulo");
        resultado.value = "Ingrese lados de un triánguo Equilátero o Isósceles"
    }else{
        let resultado = document.getElementById("respuestaTriangulo");
        console.log(altura);
        resultado.value = areaTriangulo(altura, lT3)+" cm\xB2";
    }
}

function calculoPeriCirculo(){
    const radio = parseFloat(document.getElementById("radioCirculo").value);
    let resultado = document.getElementById("respuestaCirculo");

    resultado.value = perimetroCirculo(radio*2)+ " cm";
}
function calculoAreaCirculo(){
    const radio = parseFloat(document.getElementById("radioCirculo").value);
    let resultado = document.getElementById("respuestaCirculo");

    resultado.value = areaCirculo(radio)+" cm\xB2";
}







// console.group("Cuadrado");
// console.log(`el perimetro es: ${perimetroCuadrado(5)} cm`);
// console.log(`el área es: ${areaCuadrado(5)} cm^2`);
// console.groupEnd()

// console.group("Triángulo");
// console.log(`el perimetro es: ${perimetroTriangulo(6,6,4)} cm`); console.log(`el área es: ${areaTriangulo(6,4)} cm^2`);
// console.groupEnd();

// console.group("Círculo");
// console.log(`el perimetro es: ${perimetroCirculo(10)} cm `);
// console.log(`el área es: ${areaCirculo(5)} cm^2`);








