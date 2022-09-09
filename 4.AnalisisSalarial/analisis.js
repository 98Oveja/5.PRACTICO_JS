

const salariosGt = guatemala.map( personita => personita.salary);

const salariosGTSorted = salariosGt.sort((salaryA,salaryB) => salaryA - salaryB);

const esPar = (numerito) => (numerito % 2 ===0 );

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce((acum, nuevo) => acum + nuevo)
    const promedioLista = sumaLista/ lista.length;
    return promedioLista;
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);
    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;

    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

const medianaSalariosGuate = medianaSalarios(salariosGTSorted);


//vamos a sacar la mediana top 10
const spliceStart = Math.round((salariosGTSorted.length * 90)/100)
const spliceCount = salariosGTSorted.length - spliceStart;

const salariosGtTop10 = salariosGTSorted.splice(spliceStart, spliceCount);

const medianaTop10Guate = medianaSalarios(salariosGtTop10);

console.log(spliceStart)
console.log(salariosGTSorted)
console.log(salariosGtTop10);
console.log("----- medianas ----");
console.log(medianaSalariosGuate);
console.log(medianaTop10Guate)
