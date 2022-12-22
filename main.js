const comprarProductos = () => {
    let producto = '';
    let totalCompra = 0;
    let seguirComprando = false;
    let cantidadC = 0;
    let cantidadP = 0;
    let cantidadPE = 0;
    let cantidadValidadaC = 0
    let cantidadValidadaP = 0
    let cantidadValidadaPE = 0
    let precioC = 0
    let precioP = 0
    let precioPE = 0
    let totalCompraCreatina = 0
    let totalCompraProteina = 0
    let totalCompraPreEntreno = 0
    do {
    producto = prompt('Hola bienvendio a GYM BOOST, tenemos creatina, proteina y preentreno ¿cual desea comprar?');
       
       
        
        
        switch (producto) {
            case 'creatina':
                cantidadC = parseInt(prompt('cuantos queres comprar'));
                precioC = 9000
                alert('el precio de la creatina individual es de '+precioC);  
                break;
            case 'proteina':
                cantidadP = parseInt(prompt('cuantos queres comprar'));
                precioP = 6000
                alert('el precio de la proteina individual es de '+precioP);                   
                break;
            case 'preentreno':
                cantidadPE = parseInt(prompt('cuantos queres comprar'));
                precioPE = 2500
                alert('el precio de el pre entreno individual es de '+precioPE);
                break;
            default:
                alert('algun dato es erroneo')
                seguirComprando = confirm('desea seguir comprando') ;
            }
            
            if (precioC !== 0 ){
                cantidadValidadaC = validacion(cantidadC);
                totalCompraCreatina = precioC * cantidadValidadaC;
            }
            if (precioP !== 0){
            cantidadValidadaP = validacion(cantidadP);
            totalCompraProteina = precioP * cantidadValidadaP;
            }
            if (precioPE!== 0) {
                cantidadValidadaPE = validacion(cantidadPE);
                totalCompraPreEntreno = precioPE * cantidadValidadaPE;
            }
            
            
            
            seguirComprando = confirm('desea seguir comprando') ;
            totalCompra = totalCompraCreatina + totalCompraProteina + totalCompraPreEntreno
            
    }while (seguirComprando);
        return totalCompra
}


function calcularTotalAPagar (totalCompra) {
    alert ("El total a pagar es $"+totalCompra);
}
    

    function validacion(cantidad) {
        while (Number.isNaN(cantidad) || cantidad === 0) {
            if (cantidad !== 0) {
                alert('Deber agregar un número.')
            } else {
                alert('Debe agregar un número distinto de cero.')
            }
             cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));
        }
                
    return cantidad;
    };
    const totalCompra = comprarProductos();
    calcularTotalAPagar(totalCompra);