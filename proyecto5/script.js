let esqueleto ="off"; /*crear variable que esta en off*/
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonSonido = new Audio ('./sound/botonbailar.mp3');
let botonMusic = new Audio('./sound/audio.mp3')

function bailar(){ /*crear la funcion */
    if (esqueleto =="off"){
        esqueleto ="on";
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click', ()=> {
            botonSonido.play();
        })
        esqueletoStop.addEventListener('click', ()=> {
            botonMusic.play();

        })

        console.log("On");

    }else{
        esqueleto = "off"
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click', () => {
            botonMusic.pause();
        })
        console.log("Off");
    }

}
