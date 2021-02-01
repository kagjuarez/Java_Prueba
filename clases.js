var titulo = document.getElementById('saludo');

function cambiarColor (){
    titulo.classList.remove("saludo");
    titulo.classList.add("nuevaClase");
}


var caja_html = document.getElementById('caja');

function cambiarTodo (){
    caja_html.classList.remove("estilo_1");
    caja_html.classList.add("estilo_2");
}   



var boton_html = document.getElementById('boton');

boton_html.addEventListener('click',cambiarColor);
boton_html.addEventListener('click',cambiarTodo);




