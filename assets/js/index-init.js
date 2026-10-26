/* Coming back from a topic page (its Home button) skips the intro: the page opens on the last
   frame of the intro, with the camera zoomed out and all the children in place. */
(function () {
    try {
        if (sessionStorage.getItem("skipIntro") === "1") {
            sessionStorage.removeItem("skipIntro");
            document.documentElement.classList.add("skip-intro");
        }
    } catch (e) {}
})();
