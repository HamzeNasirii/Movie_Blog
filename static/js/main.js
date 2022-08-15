document.addEventListener("DOMContentLoaded", () => {
    const selectWidgets = document.querySelectorAll(".select-wrapper");
    selectWidgets.forEach(widget => {
        widget.addEventListener("click", (e) => {
            if (widget.classList.contains("closed")) {
                selectWidgets.forEach(i => i.classList.add("closed"));
            }
            widget.classList.toggle("closed");
        });
    });
    const selectItems = document.querySelectorAll(".select-wrapper .select-items div");
    selectItems.forEach(item => {
        item.addEventListener("click", () => {
            const text = item.textContent;
            item.parentElement.previousElementSibling.textContent = text;
        });
    });

    const swiperEl = document.querySelector(".swiper");
    if (swiperEl) {
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1.5,
            loop: false,
            centeredSlides: true,
            initialSlide: 1,
            keyboardControl: false,
            mousewheelControl: false,
            loop: true,
            autoplay: true,
            disableOnInteraction: true,

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });
    }

    // actor movies
    const actorMoviesSwiperEl = document.querySelector(".actor-movies-swiper");
    if (actorMoviesSwiperEl) {
        const swiper = new Swiper('.actor-movies-swiper', {
            slidesPerView: 5,
            loop: false,
            centeredSlides: true,
            initialSlide: 2,
            keyboardControl: false,
            mousewheelControl: false,
            loop: false,
            autoplay: false,
            disableOnInteraction: true,

            breakpoints: {
                320:{
                    centeredSlides: false,
                    initialSlide: 0,
                    slidesPerView: 2,
                },
                640:{
                    centeredSlides: true,
                    initialSlide: 1,
                    slidesPerView: 3,
                },
                1024:{
                    slidesPerView: 5,
                    centeredSlides: true,
                    initialSlide: 2,
                }
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });
    }

    ////////// player setup
    const playerSeekTime = 10;

    const player = document.querySelector("#player");
    if (player) {
        const player = new Plyr('#player', {
            autoplay: false,
            seekTime: playerSeekTime,
            displayDuration: true,
            invertTime: false,
            toggleInvert: true,
            clickToPlay: true,
            captions: {
                active: true,
                language: "en"
            },
            speed: {
                selected: 1,
                options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 3]
            },
            tooltips: {
                controls: true,
                seek: true
            },
            controls: [
                'play-large',
                'restart',
                //'rewind',
                'play',
                //'fast-forward',
                'progress',
                'current-time',
                // 'duration',
                'mute',
                'volume',
                // 'captions',
                'settings',
                //'pip',
                //'airplay',
                // 'download',
                'fullscreen'
            ],
            i18n: {
                restart: 'پخش از ابتدا',
                rewind: farsi_num(playerSeekTime) + ' ثانیه به عقب',
                play: 'پخش',
                pause: 'توقف',
                fastForward: farsi_num(playerSeekTime) + ' ثانیه به جلو',
                seek: 'تست 2',
                seekLabel: '{currentTime} تست 3 {duration}',
                mute: 'بیصدا',
                unmute: 'باصدا',
                download: 'دانلود',
                enterFullscreen: 'تمام صفحه',
                exitFullscreen: 'خروج از تمام صفحه',
                settings: 'تنضیمات',
                pip: 'تصویر در تصویر',
                speed: 'سرعت پخش',
                normal: 'معمولی',
                quality: 'کیفیت',
                loop: 'تکرار',
                start: 'شروع',
                end: 'پایان',
                all: 'همه',
                reset: 'بازگردانی',
                captions: 'زیرنویس',
                disabled: 'غیرفعال',
                enabled: 'فعال',
                advertisement: 'ØªØ¨Ù„ÛŒØº',
            },
        });
    }

    function farsi_num(str) {
        str = str.toString();
        var result = '';
        for (i = 0; i < str.length; i++) {
            if (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
                result += String.fromCharCode(str.charCodeAt(i) + 1728);
            } else {
                result += str.charAt(i);
            }
        }
        return result;
    }

    const downloadBoxs = document.querySelectorAll(".download-box");
    downloadBoxs.forEach(downloadBox => {
        downloadBox.addEventListener("click", (e) => {
            downloadBox.classList.toggle("active");
        });
    });

    const questionBoxs = document.querySelectorAll(".question-box");
    questionBoxs.forEach(questionBox => {
        questionBox.addEventListener("click", (e) => {
            questionBox.classList.toggle("active");
        });
    });



    // suggess movies slide
    const slider = document.querySelector('.suggest-movies-wrapper');
    let isDown = false;
    let startX;
    let scrollLeft;

    if (slider) {
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            slider.classList.add('active');
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.20; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    // drawer menu
    const drawerToggle = document.querySelector(".btn-drawer-toggle");
    const drawerMenu = document.querySelector(".drawer-menu");

    document.querySelector(".drawer-menu-container").addEventListener("click", (e) => {
        e.stopPropagation();
    });

    if (drawerToggle && drawerMenu) {
        drawerToggle.addEventListener("click", () => {
            console.log("open");
            drawerMenu.classList.remove("close");
            drawerMenu.classList.add("open");
        });
        drawerMenu.addEventListener("click", (e) => {
            e.stopPropagation();
            drawerMenu.classList.add("close");
            drawerMenu.classList.remove("open");
        });
    }

    const drawerExpanableItems = document.querySelectorAll(".drawer-menu--list-item.expanable");
    drawerExpanableItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        })
    })

});