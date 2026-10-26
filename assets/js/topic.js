/*
 * Shared script for the four topic pages (define.html, when.html, adverse.html, how.html).
 * The page is chosen by <body data-page="...">; all text and media come from data.js.
 * The markup is rendered straight away, before custom.js runs, so the language
 * switch can show and hide the english / hindi / gujrati spans it creates.
 */
(function ($) {
    var data = window.JEALOUSY_DATA;
    var key = $("body").data("page");
    var page = data.pages[key];
    var langs = ["english", "hindi", "gujrati"];

    function spans(texts) {
        return $.map(langs, function (lang) {
            return '<span class="' + lang + '">' + texts[lang] + "</span>";
        }).join("");
    }

    $(".title-text").html(spans(page.title));

    if (!page.watchVideo) {
        $(".watch-btn").remove();
    } else {
        $("body").append(
            '<div class="video-modal" id="videoModal" aria-hidden="true">' +
            '<div class="video-modal-box">' +
            '<video class="video-modal-player" src="./' + page.watchVideo + '" controls playsinline preload="none"></video>' +
            '<button class="video-modal-close" type="button" aria-label="Close"><img src="./assets/images/close.png" alt="Close"></button>' +
            "</div></div>"
        );
    }

    $(".num-list").html(
        $.map(data.order, function (name, i) {
            var item = data.pages[name];
            var active = name === key ? " is-active" : "";
            return (
                '<a class="num-btn num-' + (i + 1) + active + '" href="./' + item.file + '">' +
                '<span class="num-pill"></span>' +
                '<span class="num-text">' + spans(item.label) + "</span>" +
                '<span class="num-digit">' + (i + 1) + "</span>" +
                "</a>"
            );
        }).join("")
    );

    $(".swiper-wrapper").html(
        $.map(page.slides, function (slide, i) {
            var poster = slide.poster ? ' poster="./' + slide.poster + '"' : "";
            return (
                '<div class="swiper-slide">' +
                '<img class="slide-spacer" src="./assets/images/slide-spacer.png" alt="">' +
                '<video class="slide-video" src="./' + page.videoDir + slide.video + '"' + poster +
                ' muted loop playsinline preload="' + (i === 0 ? "auto" : "none") + '"></video>' +
                "</div>"
            );
        }).join("")
    );

    $(".note-pill").html(
        $.map(page.slides, function (slide, i) {
            return '<p class="note-text note-' + (i + 1) + (i === 0 ? " is-active" : "") + '">' + spans(slide.content) + "</p>";
        }).join("")
    );

    if (page.endLink) {
        $("#stage").append(
            '<a class="pranam-end-link" href="' + page.endLink.href + '">' +
            '<img src="./assets/images/arowAsset.png" alt="">' +
            '<span class="pranam-end-link-label">' + spans(page.endLink.label) + "</span>" +
            "</a>"
        );
    }

    $(function () {
        var $stage = $("#stage");
        var $endLink = $(".pranam-end-link");
        var $prev = $(".arrow-prev");
        var $next = $(".arrow-next");

        var swiper = new Swiper(".define-swiper", {
            direction: "horizontal",
            slidesPerView: 1,
            speed: 600,
            effect: "slide",
            allowTouchMove: false,
            grabCursor: true,
            pagination: {
                el: ".define-dots",
                clickable: true
            },
            on: {
                slideChange: function () {
                    $(".note-text").removeClass("is-active");
                    $(".note-" + (this.activeIndex + 1)).addClass("is-active");
                    updateArrows();
                    setPreload();
                    playActive();
                }
            }
        });

        function isClosed() {
            return $stage.hasClass("state-closed");
        }

        /* only the active slide's video is preloaded, every other slide's is not */
        function setPreload() {
            $(".slide-video").each(function (i) {
                this.preload = i === swiper.activeIndex ? "auto" : "none";
            });
        }

        function playActive() {
            $(".slide-video").each(function (i) {
                var video = this;
                if (i === swiper.activeIndex && !isClosed()) {
                    video.currentTime = 0;
                    var p = video.play();
                    if (p && p.catch) {
                        p.catch(function () {});
                    }
                } else {
                    video.pause();
                }
            });
        }

        function syncEndLink() {
            $endLink.toggleClass("is-visible", !isClosed() && swiper.activeIndex === page.slides.length - 1);
        }

        function updateArrows() {
            syncEndLink();
            if (isClosed()) {
                $prev.removeClass("swiper-button-disabled");
                $next.removeClass("swiper-button-disabled");
                return;
            }
            $prev.toggleClass("swiper-button-disabled", swiper.isBeginning);
            $next.toggleClass("swiper-button-disabled", swiper.isEnd);
        }

        function openWindow() {
            $stage.removeClass("state-closed").addClass("state-open");
            swiper.allowTouchMove = true;
            updateArrows();
            playActive();
        }

        $next.on("click", function () {
            if (isClosed()) {
                openWindow();
            } else {
                swiper.slideNext();
            }
        });

        $prev.on("click", function () {
            if (!isClosed()) {
                swiper.slidePrev();
            }
        });

        $(document).on("keydown", function (e) {
            if (e.key === "ArrowRight") {
                $next.trigger("click");
            } else if (e.key === "ArrowLeft") {
                $prev.trigger("click");
            }
        });

        updateArrows();

        var $modal = $("#videoModal");
        var modalVideo = $modal.find("video")[0];

        function openModal() {
            $(".slide-video").each(function () {
                this.pause();
            });
            $modal.addClass("is-open").attr("aria-hidden", "false");
            var p = modalVideo.play();
            if (p && p.catch) {
                p.catch(function () {});
            }
        }

        function closeModal() {
            modalVideo.pause();
            modalVideo.currentTime = 0;
            $modal.removeClass("is-open").attr("aria-hidden", "true");
            playActive();
        }

        $(".watch-btn").on("click", function (e) {
            e.preventDefault();
            if (!isClosed()) {
                openModal();
            }
        });

        $modal.find(".video-modal-close").on("click", closeModal);

        $modal.on("click", function (e) {
            if (e.target === this) {
                closeModal();
            }
        });

        $(document).on("keydown", function (e) {
            if (e.key === "Escape" && $modal.hasClass("is-open")) {
                closeModal();
            }
        });

        var started = false;

        function start() {
            if (started) {
                return;
            }
            started = true;
            $stage.addClass("is-ready");
            setTimeout(openWindow, 700);
        }

        $(window).on("load", start);
        setTimeout(start, 3000);
    });
})(jQuery);
