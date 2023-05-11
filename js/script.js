//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;

// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var slide = document.getElementsByClassName("mySlide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    slide[slideIndex].style.display = "block";
    dots[slideIndex].className += "active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }
    if (slideIndex > slide.length - 1) {
        slideIndex = 0
    }
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 5000);
}

//mặc định hiển thị slide đầu tiên
showSlides(slideIndex = 0);


function currentSlide(n) {
    showSlides(slideIndex = n);
}
var form = document.querySelector('form');
var submitBtn = document.querySelector('input[type="submit"]');
var notify = document.getElementById('notify_box');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (form.checkValidity()) {
        setTimeout(() =>{
            notify.style.display = 'inline-block';},700);
        // Thêm lớp fade-out để mờ dần
        notify.classList.add('fade-out');
        // Sau 2 giây, remove lớp fade-out và đặt lại style.display
        setTimeout(() => {
            notify.classList.remove('fade-out');
            notify.style.display = 'none';
        }, 3000);
    } else {
        form.reportValidity();
    }
});
function pauseAudio() {
    var box_notify = document.getElementById('audio');
    box_notify.style.display = "none";
}

function playAudio() {
    var audio = document.getElementById("my_audio");
    var box_notify = document.getElementById('audio');
    var play_new_song = document.getElementById('play-new__song');
    box_notify.style.display = "none";
    play_new_song.style.display = "block";
    audio.play();
}
function show_icon_play(){
    var audio = document.getElementById("my_audio");
    var play = document.querySelector('.play-new__song-icon');
    var pause = document.querySelector('.pause-new__song-icon');
    play.style.display= "block";
    pause.style.display= "none";
    audio.pause();
}
function show_icon_pause(){
    var audio = document.getElementById("my_audio");
    var play = document.querySelector('.play-new__song-icon');
    var pause = document.querySelector('.pause-new__song-icon');
    pause.style.display= "block";
    play.style.display= "none";
    audio.play();
}

const overlay = document.querySelector('.overlay');
const button_yes = document.querySelector('.button_play_yes');
const button_no = document.querySelector('.button_play_no');
button_yes.addEventListener('click', () => {
    overlay.style.display = 'none';
});
button_no.addEventListener('click', () => {
    overlay.style.display = 'none';
});

