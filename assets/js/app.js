const page1Btn = document.querySelector("#page1Btn");
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
    window.location.href = "#page4";
});

enterBtn.addEventListener("click", async () => {
    const code = document.querySelector("#code");
    if (code.value !== "666666") {
        window.location.href = "#page1";
        await bgAudio.stop();
        await bgAudio.play();
        return;
    }
    window.location.href = "#page3";
});


page1Btn.addEventListener("click", () => {
    document.body.classList.add("shake");
    setTimeout(() => {
        window.location.href = "#page2";
        document.body.classList.remove("shake");
    }, 2000)
})