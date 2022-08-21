function showMore() {
    let mostrarMas = document.getElementById("boton-show-more");
    let mostrarMenos = document.getElementById("boton-show-less");
    let proyectos = document.getElementById("mostrar");
    let area = document.getElementById("show-more-area");

    if(proyectos.style.display === "none"){
        mostrarMas.style.display = "none";
        area.style.height = "0";
        proyectos.style.display = "inline";
        mostrarMenos.display = "inline";
    }else{
        mostrarMas.style.display = "inline";
        area.style.height = "200px";
        proyectos.style.display = "none";
        mostrarMenos.display = "none";
    }
}

const mensaje = () =>{
    window.alert("This is a message from js");
}

document.getElementById("boton-show-more").onmouseup = showMore;
document.getElementById("boton-show-less").onmouseup = showMore;