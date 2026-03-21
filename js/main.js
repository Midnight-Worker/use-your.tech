$("document").ready(function() {

    const video = document.getElementById("myVideo");

    video.addEventListener("click", () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) { // Safari
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE
            video.msRequestFullscreen();
        }
    });

});