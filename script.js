const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score");

function jump() {
    dino.classList.add("jump-animation");
    setTimeout(() =>
        dino.classList.remove("jump-animation"), 500);
}

document.addEventListener("keypres", () => {
    if (!dino.classList.contains("jump-animation")) {
        jump();
    }
})
setInterval(() => {
    const dinoTop = parseInt(window.getComputedStyle(dino)
        .getPropertyValue('top'));
    const cactusleft = parseInt(window.getComputedStyle(cactus)
        .getPropertyValue('left'));
    score.innerText++;

    if (cactusleft < 0) {
        cactus.style.display = 'none';
    } else {
        cactus.style.display = ''
    }

    if (cactusleft < 50 && cactusleft > 0 && dinoTop > 150) {
        alert("You got a score of: " + score.innerText +
            "\n\nPlay again?");
        location.reload();
    }
}, 50);