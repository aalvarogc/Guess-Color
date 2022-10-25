function randomRGB() {
    let rgb = [];

    let rgb1 = Math.floor(Math.random() * 255);
    let rgb2 = Math.floor(Math.random() * 255);
    let rgb3 = Math.floor(Math.random() * 255);

    color = "("+rgb1+", "+rgb2+", "+rgb3+")"
    return color;
}


function newGame(){
    let colorToGuess = randomRGB();
    let colorDivs = document.getElementsByClassName("randomColor");
    let divToGuess = Math.floor(Math.random() * colorDivs.length);

    let title = document.getElementById("title");
    title.innerHTML = "RGB"+colorToGuess;

    for(div of colorDivs){
        div.style.backgroundColor = "RGB"+randomRGB()
    }
    colorDivs[divToGuess].style.backgroundColor = "rgb" + colorToGuess;

    for(let i=0; i < colorDivs.length; i++){
        colorDivs[i].addEventListener("click", (e)=>{
            console.log(e.target.style.backgroundColor)
            if(e.target.style.backgroundColor == "rgb"+colorToGuess){
                document.getElementById("solucion").innerHTML = "¡Has acertado!";
            }else{
                document.getElementById("solucion").innerHTML = "¡Vuelve a intentarlo!"
            }
        })
    }
    
    document.getElementById("solucion").innerHTML = "";
}

window.onload = () =>{
    newGame()    

    let newColorsBtn = document.getElementById("newcolors");
    newColorsBtn.addEventListener("click", newGame)
}

