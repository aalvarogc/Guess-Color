function randomRGB() {
    let rgb = [];

    let rgb1 = Math.floor(Math.random() * 255);
    let rgb2 = Math.floor(Math.random() * 255);
    let rgb3 = Math.floor(Math.random() * 255);

    color = "("+rgb1+", "+rgb2+", "+rgb3+")"
    return color;
}

function checkColor(e){
    if(e.target.style.backgroundColor == "rgb"+colorToGuess){
        document.getElementById("solucion").innerHTML = "¡Has acertado!";
        newColorsBtn.style.display = "block";
        for(div of document.getElementsByClassName("randomColor")){
            div.removeEventListener("click", checkColor);
        }
    }else{
        lifes--;
        let hearts = document.getElementsByClassName("heart");
        if(lifes == 2){
            hearts[0].src = "img/emptyHeart.png";
            hearts[0].classList.add("lostLife");
            document.getElementById("solucion").innerHTML = "¡Vuelve a intentarlo!"
        }else if(lifes == 1){
            hearts[1].src = "img/emptyHeart.png";
            hearts[1].classList.add("lostLife");
            document.getElementById("solucion").innerHTML = "¡Vuelve a intentarlo!"
        }else{
            hearts[2].src = "img/emptyHeart.png";
            hearts[2].classList.add("lostLife");
            document.getElementById("solucion").innerHTML = "¡Has perdido!";
            // Aparece botón de nuevo juego
            setTimeout(() => {
                newColorsBtn.style.display = "block";
            }, 1500);
            for(div of document.getElementsByClassName("randomColor")){
                div.classList.add("fail")
            }
            setTimeout(() => {
                for(div of document.getElementsByClassName("randomColor")){
                    if(div.style.backgroundColor == ("rgb" + colorToGuess)){
                        div.classList.remove("fail")
                        div.classList.add("rotateDiv");
                    }
                }
            }, 1000);
            div.removeEventListener("click", checkColor);
        }
    }
}

function newGame(){
    lifes = 3;

    document.getElementById("solucion").innerHTML = "";
    // Deshabilitar botón
    let newColorsBtn = document.getElementById("newColorsBtn");
    newColorsBtn.style.display = "none";

    // Resetear imagen de vidas
    for(heart of document.getElementsByClassName("heart")){
        heart.src = "img/fullHeart.png";
        heart.classList.remove("lostLife");
    }

    // Generar color a adivinar
    colorToGuess = randomRGB();
    let colorDivs = document.getElementsByClassName("randomColor");
    let divToGuess = Math.floor(Math.random() * colorDivs.length);

    // Escribir el color en el header
    let title = document.getElementById("title");
    title.innerHTML = "RGB"+colorToGuess;

    // Generar colores aleatorios para elegir.
    for(div of colorDivs){
        div.style.backgroundColor = "RGB"+randomRGB()
        div.addEventListener("click", checkColor);
        div.classList.remove("rotateDiv");
    }
    colorDivs[divToGuess].style.backgroundColor = "rgb" + colorToGuess;

    document.getElementById("colors").classList.remove("fail");
}

window.onload = () =>{
    let newColorsBtn = document.getElementById("newColorsBtn");
    newColorsBtn.addEventListener("click", newGame)
    newGame();
}

