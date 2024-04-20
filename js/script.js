// nav bar section start
var mobile_btn = document.querySelector(".mobile-nav-btn")
var header = document.querySelector(".header")
var header_parent = document.querySelector("#nav")
mobile_btn.addEventListener("click", function () {
    header.classList.toggle("active")
})
const navlink = (id) => {
    header.classList.toggle("active")
    delay: "0.7"
}
// <!-- <-------FAQS Section start ------->
const ActiveAccordon = (id) => {
    const currentAcc = document.querySelector(id)
    currentAcc.classList.toggle("faqs-active")

}
// <!-- <-------FAQS Section End ------->
// <!-- <-------Clients Reviews Section start ------->
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
        disableOnInteration: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
const swiperfunc = (widthSize) => {
    if (widthSize.matches) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
        });
    } else {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
        });
    }
}
const widthSize = window.matchMedia("(width < 1150px)")
swiperfunc(widthSize)
widthSize.addEventListener("change", swiperfunc)

const swiperfun2 = (widthSize2) => {
    if (widthSize2.matches) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
        });
    } else {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
        });
    }
}
const widthSize2 = window.matchMedia("(max-width:674px )")
swiperfun2(widthSize2)
widthSize2.addEventListener("change", swiperfun2)
// <!-- <-------Clients Reviews Section end ------->

// var cursur = document.querySelector(".cursur")
// var main = document.querySelector("body")
// main.addEventListener("mousemove", function (dets) {
//     cursur.style.left = dets.x + "px"
//     cursur.style.top = dets.y + "px"
// })

const cursurZero = (cursurWidth) => {
    if (cursurWidth.matches) {
        cursur.style.display = "none"
 
    } else {
        cursur.style.display = "block"
    }
}
const cursurWidth = window.matchMedia("(max-width : 850px)")
cursurZero(cursurWidth)
cursurWidth.addEventListener("change", cursurZero)

aboutainmation()
function portfolio_animation() {
    var portfolio_card = document.querySelectorAll(".card")
    const portfolio_tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#portfolio-work",
            scroller: "body",
            start: "top 60%",
            end: "top 50%",
        }
    })
    portfolio_tl.from("#portfolio-top", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration: 0.5,

    }, "port")
    portfolio_tl.from("#portfolio-bottom", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration: 0.5,
    }, "port")
}
portfolio_animation()
function price_animation() {
    const price_div = document.querySelectorAll(".price-div")
    const price_tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#price-work",
            scroller: "body",
            start: "top 60%",
            end: "top 50%",
        }
    })
    price_tl.from("#price-top", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration: 0.5,
    }, "price")
    price_tl.from("#price-bottom", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration: 0.5,
    }, "price")
}
price_animation()
function faqs_animation() {
    const faqs_animation = gsap.timeline({
        scrollTrigger: {
            trigger: "#faqs-work",
            scroller: "body",
            // markers : true,
            start: "top 70%",
            end: "top 80%",

        }
    })
    faqs_animation.from("#faqs-top", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration: 0.5,
    }, "faqs")
    faqs_animation.from("#faqs-bottom", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration: 0.5,
    }, "faqs")
}
faqs_animation()
function client_animation() {
    // const client_tl =gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#clients-swiper",
    //         scroller: "body",
    //         // markers : true,
    //         start: "top 70%",
    //         end: "top 60%",

    //     }
    // })
    // client_tl.from("#clients-swiper-top",{
    //     y: 150,
    //     scale: 1,
    //     opacity: 0,
    //     duration:0.5,
    // },"client")
    // client_tl.from(".mySwiper",{
    //     y: 100,
    //     scale: 1,
    //     opacity: 0,
    //     duration:0.1,
    // },"client")
}
client_animation()
function contact_animation() {
    const contact_tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact-div",
            scroller: "body",
            // markers : true,
            start: "top 60%",
            end: "top 50%",

        }
    })
    contact_tl.from(".contact-heading", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration: 0.5,
    }, "contact")
    contact_tl.from("#contact-bottom", {
        y: 100,
        scale: 1,
        opacity: 0,
        duration: 0.1,
    }, "contact")
}
contact_animation()
function nav_animation() {
    const nav_tl = gsap.timeline()
    nav_tl.from("#right", {
        y: -200,
        duration: 0.5,
        delay: 0.3,
    }, "nav")
    nav_tl.from(".left ul li ", {
        y: -200,
        duration: 1,
        stagger: 0.2,
    })
    nav_tl.from("#working-left", {
        x: -200,
        opacity: 0
    },'work')
    nav_tl.from("#working-right", {
        x: 200,
        opacity: 0
    },'work')
}
nav_animation()
var footer_inner = document.querySelector("#footer-subs-inner-1")
footer_inner.addEventListener("mouseenter", function () {
    cursur.style.display = "none"
})
footer_inner.addEventListener("mouseleave", function () {
    cursur.style.display = "block"
})
// Animation section end

