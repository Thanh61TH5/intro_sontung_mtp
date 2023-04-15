//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;

// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += "active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
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