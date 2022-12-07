function linkedIn() {
    (confirm("Warning! You will be leaving this page"));
    window.location.href='https://www.linkedin.com/in/abigailharmon22/;';
}

function email() {
    href='mailto:abby22harmon@gmail.com';
}

function photoCredit() {
    
}

const resume = document.getElementById('linkedIn');

resume.addEventListener('click',linkedIn);

const emailMe = document.getElementById('email');

emailMe.addEventListener('click',email);

//const credit = document.getElementsByClass("profilePic")

//credit.addEventListener()

$(document).ready(function () {
    $(".slideshow").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
