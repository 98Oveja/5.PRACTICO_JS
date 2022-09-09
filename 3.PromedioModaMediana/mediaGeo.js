


//((n1*p1)+(n2+p2)+(n3+p3))/(p1+p2+p3)


const mis_notas = [
    {
        course: "Matemática",
        note: 5.2,
        porcent: 3
    },
    {
        course: "Física",
        note: 8.2,
        porcent: 1
    },
    {
        course: "Estadística",
        note: 7.4,
        porcent: 2
    },
    {
        course: "Química",
        note: 5.7,
        porcent: 4
    }
]

const mediaPonderada = (notes)=>{
    let sumaNotasCreditos=0;
    let sumaCreditos =0;

    notes.forEach(x => {
        sumaNotasCreditos += x.note * x.porcent;
        sumaCreditos += x.porcent;
    });

    let mediaPonderada = (sumaNotasCreditos/sumaCreditos).toFixed(2);

    return mediaPonderada
}

console.log(`Media Ponderada: ${mediaPonderada(mis_notas)}`)

