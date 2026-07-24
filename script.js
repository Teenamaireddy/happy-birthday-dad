// Gift Box
const giftBox = document.getElementById("giftBox");
const giftScreen = document.getElementById("giftScreen");
const celebration = document.getElementById("celebration");
const music = document.getElementById("music");

// All Photos
const photos = document.querySelectorAll(".photo");

// Gift Click
giftBox.addEventListener("click", () => {

    // Hide Gift
    giftScreen.style.display = "none";

    // Show Celebration
    celebration.style.display = "block";

    // Play Music
    if (music) {
        music.play().catch(() => {});
    }

    // Animate Photos
    document.querySelector(".left1").style.left = "5%";
    document.querySelector(".left2").style.left = "12%";

    document.querySelector(".right1").style.right = "5%";
    document.querySelector(".right2").style.right = "12%";

    document.querySelector(".top1").style.top = "12%";
    document.querySelector(".top2").style.top = "12%";

    document.querySelector(".bottom1").style.bottom = "12%";
    document.querySelector(".bottom2").
