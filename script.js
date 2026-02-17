document.addEventListener('DOMContentLoaded', () => {

    const langBtn = document.getElementById('langSwitcher');
    const htmlTag = document.getElementById('mainHtml');

    function setLanguage(lang) {
        if (lang === 'en') {
            htmlTag.setAttribute('lang', 'en');
            htmlTag.setAttribute('dir', 'ltr');
            langBtn.innerHTML = '<i class="fas fa-globe"></i> العربية';
        } else {
            htmlTag.setAttribute('lang', 'ar');
            htmlTag.setAttribute('dir', 'rtl');
            langBtn.innerHTML = '<i class="fas fa-globe"></i> English';
        }
        localStorage.setItem('preferredLang', lang);
    }

    langBtn.addEventListener('click', () => {
        const currentLang = htmlTag.getAttribute('lang');
        setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });

    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    setLanguage(savedLang);


    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal(); 


    const leadForm = document.getElementById('leadForm');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const name = document.getElementById('userName').value;
            const phone = document.getElementById('userPhone').value;


            const adminPhoneNumber = "966536501749";

            const message = `طلب عرض سعر جديد من الموقع:%0A` +
                `*الاسم:* ${name}%0A` +
                `*الجوال:* ${phone}`;

            const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${message}`;

            window.open(whatsappUrl, '_blank');

            leadForm.reset();
        });
    }

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.style.padding = "10px 0";
            header.style.backgroundColor = "rgba(97, 21, 21, 0.98)";
        } else {
            header.style.padding = "15px 0";
            header.style.backgroundColor = "var(--primary-maroon)";
        }
    });

});
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            const icon = menuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    const dropdown = document.querySelector('.dropdown > a');
    if (dropdown && window.innerWidth < 992) {
        dropdown.addEventListener('click', (e) => {
            e.preventDefault(); 
            const content = dropdown.nextElementSibling;
            content.classList.toggle('show');
        });
    }
});
function orderViaWhatsApp(serviceName) {
    const phoneNumber = "966536501749";
    const message = `السلام عليكم، أريد طلب خدمة: (${serviceName})`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

// document.addEventListener('DOMContentLoaded', function() {
//     const track = document.getElementById('sliderTrack');
//     const slides = document.querySelectorAll('.slide');
//     const slideSound = document.getElementById('slideSound');
    
//     let currentSlide = 0;
//     const totalSlides = slides.length;
//     const intervalTime = 5000;

//     function updateSlider() {
//         slides.forEach(s => s.classList.remove('active'));
        
//         currentSlide = (currentSlide + 1) % totalSlides;
        

//         const movePercentage = currentSlide * (100 / totalSlides);
//         track.style.transform = `translateX(${movePercentage}%)`;
        
//         slides[currentSlide].classList.add('active');

//         if (slideSound) {
//             slideSound.volume = 0.15; 
//             slideSound.currentTime = 0;
//             slideSound.play().catch(() => { /* منع خطأ المتصفح قبل التفاعل */ });
//         }
//     }

//     setInterval(updateSlider, intervalTime);
// });



document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const slideSound = document.getElementById('slideSound');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let audioAllowed = false;

    // const enableAudio = () => {
    //     if (!audioAllowed) {
    //         slideSound.play().then(() => {
    //             slideSound.pause();
    //             slideSound.currentTime = 0;
    //             audioAllowed = true;
    //         }).catch(() => {});
    //         // حذف المستمعات بعد التفعيل لمرة واحدة
    //         ['mousedown', 'mousemove', 'touchstart', 'scroll'].forEach(e => 
    //             window.removeEventListener(e, enableAudio));
    //     }
    // };
    // ['mousedown', 'mousemove', 'touchstart', 'scroll'].forEach(e => 
    //     window.addEventListener(e, enableAudio));

    function moveSlider() {
        slides.forEach(s => s.classList.remove('active'));

        if (audioAllowed && slideSound) {
            slideSound.volume = 0.3; 
            slideSound.currentTime = 0;
            slideSound.play();
        }

        currentSlide = (currentSlide + 1) % totalSlides;
        const moveDistance = currentSlide * (100 / totalSlides);
        track.style.transform = `translateX(${moveDistance}%)`;

        slides[currentSlide].classList.add('active');
    }

    setInterval(moveSlider, 5000);
});



document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    
    let currentSlide = 0;
    const totalSlides = slides.length; 

    function moveSlider() {
        slides.forEach(s => s.classList.remove('active'));

        currentSlide++;

        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }

        const movePercentage = currentSlide * (100 / totalSlides);
        track.style.transform = `translateX(-${movePercentage}%)`;

        slides[currentSlide].classList.add('active');
    }

    setInterval(moveSlider, 5000);
});