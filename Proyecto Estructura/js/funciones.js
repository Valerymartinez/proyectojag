function recibirdatos() //definir variable
{
    //alert("ESTA ES LA FUNCION");
    
    var nombre=(document.getElementById("cajanombre").value);//ingresamos valor de la variable
    console.log(nombre);//imprimir orden

    var apellido=(document.getElementById("cajaapellido").value);//ingresemos valor a la variable
    console.log(apellido);//imprimir orden

    var email=(document.getElementById("cajaemail").value);//ingresamosvalor a la variable
    console.log(email);//imprimir orden

    var documento=(document.getElementById("cajadocumento").value);//ingresamos valor de la variable
    console.log(documento);//imprimir orden

    alert("NOMBRE COMPLETO ES " +nombre+ " "+apellido);//imprimir mensaje al usuario
 

    alert("TU NOMBRE Y EDAD ES " +nombre+ " "+ documento);//imprimir mensaje al usuario
    if( nombre == "juan jose" && documento == "16" )//abrrir condicional
    {
        alert("HOLA JUAN JOSE ERES TU")//imprimir mensaje al usuario
    }



    alert("SU EMAIL Y DOCUMENTON SON " +email+ "  "+documento);//imprimir mensaje al usuario
    

}

function calcularvelocidad()
{

    var numero1=parseFloat(document.getElementById("cajadistancia").value);//ingresamos valor de la variable
    console.log(numero1);//imprimir orden
    var numero2=parseFloat(document.getElementById("cajatiempo").value);//ingresemos valor a la variable
    console.log(numero2);//imprimir orden
   alert("la velocidad en M/S es: "+(numero1/numero2));//imprimir mensaje al usuario
}

function calculartrabajo()
{
var numero1= parseFloat(document.getElementById("cajafuerza").value);//ingresamos valor a la variable
var numero2= parseFloat(document.getElementById("cajadistancia").value);//ingresamos valor a la variable
var numero3= parseFloat(document.getElementById("cajaangulo").value);//ingresamos valor a la variable
numero3=(numero3*Math.PI)/180//proceso matematico
console.log(numero3);//imprimir orden
var trabajo= numero1*numero2*(Math.cos(numero3));//resultado matematico
alert("EL TRABAJO ES "+numero1*numero2*(Math.cos(numero3)));//imprimir mensaje al usuario
}


function recibircantidad() //definir variable

{
    //alert("ESTA ES LA FUNCION");
    
    var tipo=(document.getElementById("cajatipo").value);//ingresamos valor de la variable
    

    var autor=(document.getElementById("cajaautor").value);//ingresemos valor a la variable
    

    var cantidad=(document.getElementById("cajacantidad").value);//ingresamosvalor a la variable
  

    var valorlibro=(document.getElementById("cajalibro").value);//ingresamos valor de la variable

    var descuento=0

    var valorpagar=0
    


    if (tipo== "A" && autor== "X" || autor=="Y"){

        if(cantidad >=1 && cantidad <= 10){
            descuento=1500;
        }

    }

    if (tipo== "A" && autor== "Z"){

        if(cantidad >=1 && cantidad <= 5){
            descuento=1000
        }

    }

    if (tipo== "B" && autor== "X"){

        if(cantidad >=1 && cantidad <= 5){
            descuento=900
        }

    }
    if (tipo== "C" && autor== "Z"){

        if(cantidad >=1 && cantidad <= 3){
            descuento=750
        }

    }
    if (tipo== "C" && autor== "X"){

        if(cantidad >=1 && cantidad <= 5){
            descuento=600
        }

    }


    valorpagar=(cantidad*valorlibro)-(descuento*cantidad);
    
    alert("su descuento es: "+  descuento*cantidad);

    alert("valor a pagar: $" + valorpagar)
}

function calcularparimpar()
{

    var numero=parseFloat(document.getElementById("cajaparimpar").value);//ingresamos valor de la variable
    console.log(numero);//imprimir orden
    if(numero % 2 ==0)
 
    {
      alert("el numero es par "+numero)
    }
 else
    {

       alert("el numero es impar "+numero)

 
    } 

}

function calcularmayormenor()
{
    var numero1=parseFloat(document.getElementById("cajamayormenor1").value);//ingresamos valor de la variable
    console.log(numero1);//imprimir orden

    var numero2=parseFloat(document.getElementById("cajamayormenor2").value);//ingresamos valor de la variable
    console.log(numero2);//imprimir orden

    var numero3=parseFloat(document.getElementById("cajamayormenor3").value);//ingresamos valor de la variable
    console.log(numero3);//imprimir orden
    
    
  
    if(numero1>numero2 & numero1>numero3) 
    {
      alert("el numero1 es mayor "+numero1)
    
    }
    if(numero2>numero1 & numero2>numero3) 
    {

       alert("el numero2 mayor es"+numero2)
    } 
   
    if(numero3>numero2 & numero3>numero1) 
    {
      alert("el numero3 menor es numero3" +numero3)
    }

    if(numero3<numero2 & numero3<numero1)
    {
        alert("el numero3 menor es " +numero3)
    }



}

function calcularporcentaje()
{
    var mujeres=parseFloat(document.getElementById("cajaporcentaje").value);//ingresamos valor de la variable
    console.log(mujeres);//imprimir orden
    
    var hombres=parseFloat(document.getElementById("cajaporcentaje").value);//ingresamos valor de la variable
    console.log(hombres);//imprimir orden
    
    var total=parseFloat(document.getElementById("cajaporcentaje").value);//ingresamos valor de la variable
    console.log(total);//imprimir orden

 total==mujeres+hombres;
 
 porcentaje==(100*mujeres/total+"%")

 porcentaje==(100*hombres/total+"%")

 

 alert("el porcentaja en mujeres es " +mujeres)
 
 alert("el porcentaje en hombres es " +hombre)
   
}