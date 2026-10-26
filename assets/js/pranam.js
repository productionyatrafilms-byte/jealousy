/* pranam.html: plays pranam.mp3 once when the page opens (same behaviour as the Gyan Panchami
   pranam page). If the browser blocks it, it plays on the first click, key press or touch. */
(function () {
    var pranamSound = new Audio("./assets/audio/pranam.mp3");
    pranamSound.preload = "auto";

    var hasPlayed = false;

    function playPranamOnce() {
        if (hasPlayed) {
            return;
        }
        hasPlayed = true;

        var playPromise = pranamSound.play();
        if (playPromise !== undefined) {
            playPromise.catch(function () {
                hasPlayed = false;

                function retry() {
                    document.removeEventListener("click", retry);
                    document.removeEventListener("keydown", retry);
                    document.removeEventListener("touchstart", retry);
                    playPranamOnce();
                }

                document.addEventListener("click", retry, { once: true });
                document.addEventListener("keydown", retry, { once: true });
                document.addEventListener("touchstart", retry, { once: true });
            });
        }
    }

    window.addEventListener("DOMContentLoaded", playPranamOnce);
})();
