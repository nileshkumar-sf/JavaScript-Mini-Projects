const colors = ["red", "green", "blue", "yellow"]
const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    const rNum = getRandomNumber();
    document.body.style.backgroundColor = colors[rNum];
});

function getRandomNumber() {
    let rNum = Math.floor(Math.random() * 4);
    return rNum;
}