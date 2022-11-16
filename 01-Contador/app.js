document.getElementById('decrease').addEventListener("click", function () {
    document.getElementById('counter').textContent = parseInt(document.getElementById('counter').textContent) - 1;
})
document.getElementById('reset').addEventListener("click", function () {
    document.getElementById('counter').textContent = "0";
})
document.getElementById('increase').addEventListener("click", function () {
    document.getElementById('counter').textContent = parseInt(document.getElementById('counter').textContent) + 1;
})