let nombre = "nicolas"
let apellido = "sanchez"
console.log("Bienvenidos a mi primer pre-entrega \n Mi nombre es" +" ",nombre +" ",apellido)

nombreIngresado = prompt("Ingrese su nombre y apellido o tipee ESC para salir")
    while(nombreIngresado =="ESC"){
        }if(nombreIngresado == ""){
            alert("INGRESE UN NOMBRE")
        }else{
            alert("NOMBRE INGRESADO:"+" "+nombreIngresado)
        }


class Impuesto{
    constructor (nombre, descripcion, porcentaje){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.porcentaje = parseFloat(porcentaje);
    }
}


let impuestos = [];

impuestos.push (new Impuesto ("IVA", "BASICO", 21));
impuestos.push (new Impuesto ("IVA", "REDUCIDO", 10.5));
impuestos.push (new Impuesto ("IVA", "PERCEPCION", 3));
impuestos.push (new Impuesto ("IVA", "SERVICIOS", 27));
impuestos.push (new Impuesto ("IVA", "PERCEPCION", 1.5));


montoACalcular = Number(prompt("Ingrese el monto a calcular o presione ESC para salir"))
    function monto () {
        while(montoACalcular == "ESC"){
            }if(montoACalcular == 0){
                alert("Ingrese un valor superior a 0")
            }else if(montoACalcular == ""){
                alert("Ingrese el monto a calcular")
            }else{
                alert("MONTO INGRESADO:"+" "+montoACalcular)
            }
    }   
    monto ();

    let sumaIvaBasicoTotal = montoACalcular * 1.21 
    let sumaIvaReducidoTotal = montoACalcular * 1.105
    let sumaIvaPercepcion3Total = montoACalcular * 1.003
    let sumaIvaServiciosTotal = montoACalcular * 1.27
    let sumaIvaPercepcion1Total = montoACalcular * 1.0105

    let sumaIvaBasicoNeto = montoACalcular * 0.21
    let sumaIvaReducidoNeto = montoACalcular * 0.105
    let sumaIvaPercepcion3Neto = montoACalcular * 0.003
    let sumaIvaServiciosNeto = montoACalcular * 0.27
    let sumaIvaPercepcion1Neto = montoACalcular * 0.0105


calcularIVA = Number(prompt("Ingrese el tipo de impuesto que quiere calcular o presione ESC para salir \n 1: IVA BASICO 21% \n 2: IVA REDUCIDO 10.5% \n 3:IVA PERCEPCION 3% \n 4: IVA SERVICIOS 27% \n 5: IVA PERCEPCION 1.5%"))
    function elegirPorcentaje (montoACalcular, porcentajeIVA){
        while(calcularIVA == "ESC"){
        }if(calcularIVA == 0){
            alert("Ingrese una opcion del 1 al 5")
        }else if(calcularIVA == ""){
            alert("Ingrese una opcion del 1 al 5")
        }else if(calcularIVA == 1){
            alert("El monto total es:"+" "+(sumaIvaBasicoTotal)+ "\nEl monto neto de IVA es:"+" "+(sumaIvaBasicoNeto))
        }else if(calcularIVA == 2){
            alert("El monto total es:"+" "+(sumaIvaReducidoTotal)+ "\nEl monto neto de IVA es:"+" "+(sumaIvaReducidoNeto))
        }else if(calcularIVA == 3){
            alert("El monto total es:"+" "+(sumaIvaPercepcion3Total)+ "\nEl monto neto de IVA es:"+" "+(sumaIvaPercepcion3Neto))
        }else if(calcularIVA == 4){
            alert("El monto total es:"+" "+(sumaIvaServiciosTotal)+ "\nEl monto neto de IVA es:"+" "+(sumaIvaServiciosNeto))
        }else if(calcularIVA == 5){
            alert("El monto total es:"+" "+(sumaIvaPercepcion1Total)+ "\nEl monto neto de IVA es:"+" "+(sumaIvaPercepcion1Neto))
        }
    }
    elegirPorcentaje ()




