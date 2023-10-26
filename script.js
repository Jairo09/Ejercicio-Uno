
//Esta parte configura el flex de container si la dimencion es menor o igual a 768px
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        document.querySelector('.container').style.flexDirection = 'column';
    } else {
        document.querySelector('.container').style.flexDirection = 'row';
    }
});

//Esto crea un Caption para agregarlo a la imagen en la parte inferior
document.addEventListener("DOMContentLoaded", function() {
    // Crea un elemento de texto
    var caption = document.createElement("div");
    caption.className = "caption";
    caption.textContent = "Caption 2 Here";

    // Agrega el elemento de texto como un hijo de .box-one
    var boxOne = document.querySelector(".box-one");
    boxOne.appendChild(caption);

    // Alinea el texto en la parte inferior izquierda de la imagen
    caption.style.position = "absolute";
    caption.style.bottom = "0";
    caption.style.left = "0";
    caption.style.color = "white";
    caption.style.padding = "10px";
    caption.style.fontWeight = "bold";
   
    boxOne.style.position = "relative";
    

});

//Esta parte configura el margen de caption según las dimenciones de la pantalla
document.addEventListener("DOMContentLoaded", function() {
    // Función para ajustar los márgenes
    function ajustarMargenes() {
        var caption = document.querySelector(".caption");
        var boxOne = document.querySelector(".box-one");

        if (window.innerWidth <= 400) {
            caption.style.marginLeft = "10px !important";
            caption.style.marginBottom = "0px !important";
        }
        if (window.innerWidth <= 768) {
            caption.style.marginLeft = "10px !important";
            caption.style.marginBottom = "10px !important";
        }  else {
            caption.style.marginLeft = "25px !important";
            caption.style.marginBottom = "25px !important";
        }
    }

    // Ejecuta la función al cargar la página y cuando se redimensiona la ventana
    ajustarMargenes();

    window.addEventListener("resize", ajustarMargenes);
});

