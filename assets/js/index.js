/* notebook texts: the same trilingual labels as the side navbar pills (data.js) */
(function () {
    var students = {
        "boy-left": "define",
        "girl-left": "when",
        "boy-right": "adverse",
        "girl-right": "how"
    };

    $.each(students, function (student, key) {
        var label = window.JEALOUSY_DATA.pages[key].label;
        $.each(["english", "hindi", "gujrati"], function (i, lang) {
            $("." + student + " .student-note ." + lang).html(label[lang]);
        });
    });
})();

$(function () {
    if ($("html").hasClass("skip-intro")) {
        $("#stage").removeClass("state-intro");
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                $("html").removeClass("skip-intro");
            });
        });
    }
    var transitionSound = new Audio("./assets/audio/transition.mp3");
    var $stage = $("#stage");
    var $girl = $(".girl-center");
    var looks = { "boy-left": 1, "girl-left": 2, "boy-right": 3, "girl-right": 4 };
    var allLooks = "look-1 look-2 look-3 look-4";

    $("#enterBtn").on("click", function () {
        playSound(transitionSound);
        $stage.removeClass("state-intro").addClass("state-mid");
        setTimeout(function () {
            $stage.removeClass("state-mid");
        }, 1400);
    });

    $(".back-btn").on("click", function (e) {
        e.preventDefault();
        $girl.removeClass(allLooks);
        $(".student").removeClass("active");
        $stage.removeClass("has-active state-mid").addClass("state-intro");
    });

    var pages = {
        "boy-left": "./define.html",
        "girl-left": "./when.html",
        "boy-right": "./adverse.html",
        "girl-right": "./how.html"
    };

    $.each(pages, function (name, url) {
        $("." + name + " .student-body").on("click", function () {
            if ($stage.hasClass("state-intro") || $stage.hasClass("state-mid") || $("#exitLayer").hasClass("is-visible")) {
                return;
            }
            playSound(transitionSound);
            $("#exitLayer").addClass("is-visible");
            setTimeout(function () {
                $("#exitLayer").addClass("is-zooming");
            }, 50);
            setTimeout(function () {
                $("#exitLayer").addClass("is-closing");
            }, 1900);
            setTimeout(function () {
                window.location.href = url;
            }, 3200);
        });
    });

    $.each(looks, function (name, n) {
        $("." + name + " .student-body")
            .on("mouseenter click", function () {
                if (!$stage.hasClass("state-intro") && !$stage.hasClass("state-mid")) {
                    $girl.removeClass(allLooks).addClass("look-" + n);
                    $(".student").removeClass("active");
                    $("." + name).addClass("active");
                    $stage.addClass("has-active");
                }
            })
            .on("mouseleave", function () {
                $girl.removeClass(allLooks);
                $(".student").removeClass("active");
                $stage.removeClass("has-active");
            });
    });
});
