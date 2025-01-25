$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Herbal"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // var typed = new Typed(".typing-2", {
    //     strings: ["Herbal"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        autoplay: false,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            }
            
        }
    });
});


    function setWhatsAppLink(event) {
        event.preventDefault(); // Mencegah perilaku default tautan
        const phoneNumber = "6285796966254";
        const message = "Halo, saya ingin menanyakan terkait informasi gamat dengan ukuran botol 100ml. Terima kasih.";
        const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(waLink, '_blank'); // Membuka URL WhatsApp di tab baru
    }

    function setWhatsAppLink2(event) {
        event.preventDefault(); // Mencegah perilaku default tautan
        const phoneNumber = "6285796966254";
        const message = "Halo, saya ingin menanyakan terkait informasi gamat dengan ukuran botol 60ml. Terima kasih.";
        const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(waLink, '_blank'); // Membuka URL WhatsApp di tab baru
    }
