const page1Btn = document.querySelector("#area11");
const enterBtn = document.querySelector("#enterBtn");
const page3Btn = document.querySelector("#page3Btn");
const logo = document.querySelector("#logo");;
const introVideo = document.querySelector("#introVid");
const outroVideo = document.querySelector("#outroVid");
const overlay = document.querySelector("#overlay");
const logoOverlay = document.querySelector("#logoOverlay");
const bgAudio = document.querySelector("#bgAudio");
const overlay2 = document.querySelector("#overlay2");



introVideo.addEventListener("ended", () => {
    overlay.style.display = "none";
    bgAudio.play();
});

outroVideo.addEventListener("ended", () => {
    overlay2.style.display = "none";
});

logo.addEventListener("click", () => {
    logoOverlay.style.display = "none";
    introVideo.play();
});

page3Btn.addEventListener("click", () => {
    // play video
    overlay2.style.display = "flex";
    outroVideo.play();
    const windowHeight = window.innerHeight;
    window.scrollTo(0, windowHeight * 4);
});

enterBtn.addEventListener("click", async () => {
    const code = document.querySelector("#code");
    if (code.value !== "666666") {
        const page1 = document.querySelector("#page1");
        window.scrollTo(0, page1.scrollHeight);
        await bgAudio.stop();
        await bgAudio.play();
        return;
    }
    const windowHeight = window.innerHeight;
    window.scrollTo(0, windowHeight * 2);
});


page1Btn.addEventListener("click", () => {
    document.body.classList.add("shake");
    setTimeout(() => {
        document.body.classList.remove("shake");
        const windowHeight = window.innerHeight;
        window.scrollTo(0, windowHeight);
    }, 2000)
});


const styleBoxes = () => {

    Array(5).fill(0).forEach((_, i) => {
        const area = document.querySelectorAll("area")[i];
        if (area) {
            const box = document.querySelectorAll(".box")[i];
            const coords = area.coords.split(",");
            box.style.width = (Math.abs(coords[0] - coords[2])) + "px"
            box.style.height = (Math.abs(coords[1] - coords[3])) + "px"
            box.style.left = Number(coords[0]) + "px"
            box.style.top = Number(coords[1]) + "px"
        }
    });

}

// $(document).ready(function (e) {
//     styleBoxes();
// });

// setInterval(() => {
//     styleBoxes();
// }, 700)