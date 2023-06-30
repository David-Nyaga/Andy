let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("open-menu");
    menu.classList.toggle("move");
}

//Review Swiper
var swiper = new Swiper(".reviews-content",{
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    pagination:{
        el:".swiper-pagination",
        clickable: true,
    },
});
function validate() {
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == ""|| email.value == ""|| msg.value == ""){
            emptyerror();
        }else{
            sendmail (name.value, email.value, msg.value);
            success();
        }
    });
}
function sendmail(name,email,message){
    //all this need to be deleted and put correct one from email.js
    email.js.send("service-6p7znvj","template_7qmc6do",{
        from_name:email,
        to_name:name,
        message:message,
    });
}
function emptyerror(){
    swal({
        title:"Ooh No...",
        text:"Fields cannot be empty!",
        icon:"Error"
    });
}
function success(){
    swal({
        title:"Email sent Successfully",
        text:"We will try to reply in 24hours",
        icon:"Success"
    });
}

//Header Background Change on Scroll
let header = document.querySelector('header')

window.addEventListener('scroll', () =>{
    header.classList.toggle('header-active',window.scrollY > 0);
})

//Scroll Top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () =>{
    scrollTop.classList.toggle('scroll-active',window.scrollY >= 400);
})

