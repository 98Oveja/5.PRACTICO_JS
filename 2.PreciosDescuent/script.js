
let desc1 ={
    tipo: '#desc001Fam',
    porcent: 5
}
let desc2 ={
    tipo: '#desc002Fam',
    porcent: 10
}
let desc3={
    tipo: '#desc003Vip',
    porcent: 15
}

let cupones = [desc1, desc2,desc3];

const compra = (price,discount=0) =>{
    let precio = price - ((discount*price)/100)
    return precio.toFixed(2);
}


function generarDescuento(){
    const price = document.getElementById("price").value;
    const discount = document.getElementById("discount").value;
    const cupon = document.getElementById("cupon").value;
    let response = document.getElementById("response");

    let precioFinal =0;

    precioFinal = compra(price,discount);
    console.log(precioFinal);

    // comprobar cupón.
    cupones.forEach(cp => {
        if (cupon == cp.tipo) {
            let descuentoCupon = cp.porcent;
            precioFinal = compra(precioFinal,descuentoCupon);
            console.log(precioFinal);
        }
    })

    response.textContent = "Q. "+precioFinal;
    response.classList.add('new_response');
}