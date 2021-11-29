import{peliculas} from './data.js'
let slider = document.getElementById("slider");

slider.innerHTML='';
peliculas.forEach(pelicula=>{
    const{nombrepelicula,img}=pelicula;
    slider.innerHTML+=`<div class="slider__section">
                            <img src=${img} class="slider__img">
                       </div> `
})
let slider__section= document.getElementsByClassName("slider__section");

document.getElementById("btn_rigth").addEventListener('click', function(){
    let sliderone = slider__section[0]
    moversiguiente(sliderone)
})
function moversiguiente(sliderone){
    slider.insertAdjacentElement('beforeend', sliderone);
}
