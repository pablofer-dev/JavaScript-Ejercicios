const colors = ["green", "yellow", "rgb(133,122,200)", "#f15025"];
const btn = document.getElementById("boton");
const color = document.querySelector(".colorValue");

btn.addEventListener('click', () => {
    // get ramdom number 0-3
    const ramdomNumber = generateRamDomNumber();
    document.body.style.background = colors[ramdomNumber];
    color.textContent = colors[ramdomNumber];
})

function generateRamDomNumber() {
    return  Math.floor(Math.random()*colors.length);
}