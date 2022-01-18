let count = 0;
const counter = document.getElementById("counter");
const btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener("click", function(e) {
    const styles = e.currentTarget.classList;
    if(styles.contains("decrement")) {
        count--;
    }
    else if(styles.contains("reset")) {
        count = 0;
    }
    else {
        count++;
    }
    counter.textContent = count;
}));