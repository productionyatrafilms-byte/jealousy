
// language change js
let currentLang = sessionStorage.getItem("lang");
if (!currentLang) {
    val("English");
} else {
    val(currentLang);
}

function val(selectedLang) {
    sessionStorage.setItem("lang", selectedLang);

    let English = document.getElementById("en");
    let Hindi = document.getElementById("hi");
    let Gujrati = document.getElementById("gu");

    if (selectedLang === "English") {

        document.getElementById("body");
        $(".english").show();
        $(".hindi, .gujrati").hide();

        English.checked = true;
        Hindi.checked = false;
        Gujrati.checked = false;
    }

    if (selectedLang === "Hindi") {
        document.getElementById("body");
        $(".hindi").show();
        $(".english, .gujrati").hide();
        English.checked = false;
        Hindi.checked = true;
        Gujrati.checked = false;
    }

    if (selectedLang === "Gujrati") {
        document.getElementById("body");
        $(".gujrati").show();
        $(".english, .hindi").hide();
        English.checked = false;
        Hindi.checked = false;
        Gujrati.checked = true;
    }
}


/* ================= sounds (shared by every page) ================= */

function playSound(audio) {
    audio.currentTime = 0;
    var attempt = audio.play();
    if (attempt && attempt.catch) {
        attempt.catch(function () {});
    }
}

/* A link click leaves the page at once and would cut the sound off, so let it start first
   (delayMs), then go. */
function playSoundThenNavigate(audio, href, delayMs) {
    playSound(audio);
    setTimeout(function () {
        audio.pause();
        window.location.href = href;
    }, delayMs || 120);
}

/* Language toggle: Eng / Hin / Guj, only on a real click of E / H / G, never on the val()
   calls that re-apply the saved language when a page loads. */
var langAudio = {
    English: new Audio("./assets/audio/Eng.mpeg"),
    Hindi: new Audio("./assets/audio/Hin.mpeg"),
    Gujrati: new Audio("./assets/audio/Guj.mpeg")
};

document.querySelectorAll('#language input[type="radio"]').forEach(function (input) {
    input.addEventListener("click", function () {
        if (langAudio[input.value]) {
            playSound(langAudio[input.value]);
        }
    });
});

/* Home, back and Pranam arrow: click.mp3, then navigate. */
var clickAudio = new Audio("./assets/audio/click.mp3");

document.querySelectorAll(".home-btn, .back-btn, .home-btn-1, .pranam-end-link").forEach(function (el) {
    el.addEventListener("click", function (e) {
        var href = el.getAttribute("href");
        if (href && href !== "#") {
            e.preventDefault();
            if (/index\.html/.test(href)) {
                try {
                    sessionStorage.setItem("skipIntro", "1");
                } catch (err) {}
            }
            playSoundThenNavigate(clickAudio, href);
        } else {
            playSound(clickAudio);
        }
    });
});

/* Previous / next arrows of the slider: swiper.mp3. The end-of-slider state blocks the click
   before it reaches the arrow, so no sound plays then. */
var swiperAudio = new Audio("./assets/audio/swiper.mp3");

document.querySelectorAll(".arrow-prev, .arrow-next").forEach(function (btn) {
    btn.addEventListener("click", function () {
        playSound(swiperAudio);
    });
});

/* Side navbar points (1 to 4): topic.mp3, then navigate. */
var topicAudio = new Audio("./assets/audio/topic.mp3");

document.querySelectorAll(".num-btn").forEach(function (tab) {
    tab.addEventListener("click", function (e) {
        var href = tab.getAttribute("href");
        if (href && href !== "#") {
            e.preventDefault();
            playSoundThenNavigate(topicAudio, href, 1000);
        }
    });
});
