let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

function descargarCV() {
    const link = document.createElement('a');
    link.href = 'Pedro_Cereghetti.pdf'; // Ruta del archivo
    link.download = 'Pedro_Cereghetti.pdf';
    link.click();
}


const galeria = document.querySelector('.galeria');

galeria.addEventListener('mouseenter', () => {
    galeria.style.animationPlayState = 'paused';
});

galeria.addEventListener('mouseleave', () => {
    galeria.style.animationPlayState = 'running';
});

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

document.addEventListener("DOMContentLoaded", function() {
    const galeria = document.querySelector('.galeria');
    const items = Array.from(galeria.children);

    items.forEach(item => {
        const clone = item.cloneNode(true);
        galeria.appendChild(clone); // Duplicamos cada imagen
    });
});
