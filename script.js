const lampada = document.getElementById("lampada");
//console.log(lampada);
const button = document.getElementById("btn");
//console.log(button);
let lampOn = false;
button.addEventListener("click", () => {
    lampOn = !lampOn;
    lampada.src = lampOn 
    ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
    : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
})

