let progreso=document.querySelector(".progreso")
let porcentaje=document.querySelector(".porcentaje")
let celebracion=document.querySelector("body")
let avance= 0;

let incremento=1
let intervalo=50;
let tiempo= setInterval(()=>{
    avance += incremento;
    progreso.style.width= `${avance}%`
    if(avance===100){
        clearInterval(tiempo)
        celebracion.classList.add("celebracion")
    }
    porcentaje.textContent=`${avance}%`;
},intervalo)