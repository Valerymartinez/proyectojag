function ver(n)
{
    document.getElementById("subseccion"+n).style.display="block"
}

function ocultar(n)
{
    document.getElementById("subseccion"+n).style.display="none"
}
function ver(X)
{
    document.getElementById("subseccion"+X).style.display="block"
}

function ocultar(X)
{
    document.getElementById("subseccion"+X).style.display="none"

}
function funtion360480()
{
   if(x.matches)
   {
       console.log("360-480");
       //alert("Tamaño entre 360 y 480");
       //document.body.style.backgroundColor="black";
       document.getElementById("titulo").style.fontSize="65%";
       document.getElementById("titulo2").style.fontSize="65%";
       document.getElementById("titulo3").style.fontSize="63%";

       document.getElementById("seccion6").marginRight="25%";
       document.getElementById("seccion7").marginRight="25%";
       }
       else
       {
          document.getElementById("titulo").style.fontSize="150%";
          document.getElementById("titulo2").style.fontSize="150%";
          document.getElementById("titulo3").style.fontSize="150%";
          
          document.getElementById("seccion6").marginRight="5%";
          document.getElementById("seccion7").marginRight="5%";

       

        }
}


function funtion481900()
{
    if(y.matches)
    {
       console.log("481-900");
       document.getElementById("titulo").style.fontSize="90%";
       document.getElementById("titulo2").style.fontSize="90%";
       document.getElementById("titulo3").style.fontSize="90%";

       document.getElementById("seccion6").marginRight="10%";
       document.getElementById("seccion7").marginRight="10%";
       
    }
}

var x = window.matchMedia("(min-width : 360px) and (max-width : 480px)")
var y = window.matchMedia("(min-width : 481px) and (max-width : 900px)")
funtion360480(x);
funtion481900(y);
x.addListener(funtion360480);
y.addListener(funtion481900);


function vermenulateral()
{
    console.log("mouse sobre la imagen");
    document.getElementById("menulateral").style.display="block"

}


function cerrarmenu()
{
    console.log("mouse sobre la imagen");
    document.getElementById("menulateral").style.display="none"

}


    