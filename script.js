const giftBox = document.getElementById("giftBox");
const giftScreen = document.getElementById("giftScreen");
const celebration = document.getElementById("celebration");
const music = document.getElementById("music");

const photos = document.querySelectorAll(".photo");

giftBox.addEventListener("click", () => {

    // Gift animation
    giftBox.style.transform = "scale(0.7) rotate(15deg)";
    giftBox.style.opacity = "0";

    setTimeout(() => {

        giftScreen.style.display = "none";
        celebration.style.display = "block";

        // Play music
        if (music) {
            music.play().catch(() => {});
        }

        // Photos fly in
        document.querySelector(".left1").style.left = "5%";
        document.querySelector(".left2").style.left = "12%";

        document.querySelector(".right1").style.right = "5%";
        document.querySelector(".right2").style.right = "12%";

        document.querySelector(".top1").style.top = "12%";
        document.querySelector(".top2").style.top = "12%";

        document.querySelector(".bottom1").style.bottom = "12%";
        document.querySelector(".bottom2").style.bottom = "12%";

        photos.forEach(photo => {
            photo.style.opacity = "1";
        });

        createConfetti();

        setInterval(createHeart, 400);

    }, 600);

});


function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}


function createConfetti() {

    for (let i = 0; i < 180; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            ["🎉", "✨", "🎊", "💖"][Math.floor(Math.random() * 4)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = (18 + Math.random() * 20) + "px";
        confetti.style.transition = "4s linear";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.style.top = "110vh";
            confetti.style.transform =
                `rotate(${Math.random() * 720}deg)`;

        }, 20);

        setTimeout(() => {

            confetti.remove();

        }, 4500);

    }

}
