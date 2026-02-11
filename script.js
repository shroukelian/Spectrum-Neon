document.addEventListener('DOMContentLoaded', () => {

    // --- 1. تبديل اللغة ---
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

    // استرجاع اللغة المحفوظة
    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    setLanguage(savedLang);


    // --- 2. أنيميشن عند التمرير (Reveal on Scroll) ---
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
    reveal(); // لتفعيل العناصر الظاهرة عند التحميل


    // --- معالجة نموذج الطلب (إرسال إلى الواتساب) ---
    const leadForm = document.getElementById('leadForm');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault(); // منع الصفحة من التحديث

            // 1. سحب البيانات من الخانات
            const name = document.getElementById('userName').value;
            const phone = document.getElementById('userPhone').value;

            // 2. رقم الواتساب الخاص بك (اكتبه بالصيغة الدولية بدون أصفار أو علامة +)
            // مثال: 9665XXXXXXXX
            const adminPhoneNumber = "966536501749";

            // 3. تجهيز نص الرسالة
            const message = `طلب عرض سعر جديد من الموقع:%0A` +
                `*الاسم:* ${name}%0A` +
                `*الجوال:* ${phone}`;

            // 4. إنشاء رابط الواتساب
            const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${message}`;

            // 5. فتح الرابط في نافذة جديدة
            window.open(whatsappUrl, '_blank');

            // تصفير الفورم بعد الإرسال
            leadForm.reset();
        });
    }

    // --- 4. تأثير حركة الهيدر ---
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

    // 1. فتح وإغلاق القائمة عند الضغط على التلات شرطات
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // تغيير شكل الأيقونة من (تلات شرطات) لـ (X)
            const icon = menuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // 2. إغلاق القائمة عند الضغط على أي رابط بداخلها
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // 3. تفعيل الـ Dropdown في الموبايل عند الضغط على كلمة "خدماتنا"
    const dropdown = document.querySelector('.dropdown > a');
    if (dropdown && window.innerWidth < 992) {
        dropdown.addEventListener('click', (e) => {
            e.preventDefault(); // منع الانتقال لصفحة تانية
            const content = dropdown.nextElementSibling;
            content.classList.toggle('show');
        });
    }
});
function orderViaWhatsApp(serviceName) {
    const phoneNumber = "966536501749"; // رقم الواتساب الخاص بك
    const message = `السلام عليكم، أريد طلب خدمة: (${serviceName})`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const slideSound = document.getElementById('slideSound');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    const intervalTime = 5000; // 5 ثواني

    function updateSlider() {
        // إزالة كلاس النشاط من الجميع
        slides.forEach(s => s.classList.remove('active'));
        
        // الانتقال للصورة التالية
        currentSlide = (currentSlide + 1) % totalSlides;
        
        // حساب مسافة التحرك لليسار
        // في المواقع العربية (RTL)، التحريك الموجب يدفع العنصر لليمين ليظهر ما على يساره
        const movePercentage = currentSlide * (100 / totalSlides);
        track.style.transform = `translateX(${movePercentage}%)`;
        
        // إضافة كلاس النشاط للصورة الجديدة لبدء الزووم
        slides[currentSlide].classList.add('active');

        // تشغيل صوت الـ Whoosh
        if (slideSound) {
            slideSound.volume = 0.15; // صوت هادئ
            slideSound.currentTime = 0;
            slideSound.play().catch(() => { /* منع خطأ المتصفح قبل التفاعل */ });
        }
    }

    // تشغيل السلايدر
    setInterval(updateSlider, intervalTime);
});



document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const slideSound = document.getElementById('slideSound');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let audioAllowed = false;

    // تفعيل الصوت تلقائياً عند أول حركة للمستخدم (سكرول أو تحريك ماوس)
    const enableAudio = () => {
        if (!audioAllowed) {
            slideSound.play().then(() => {
                slideSound.pause();
                slideSound.currentTime = 0;
                audioAllowed = true;
            }).catch(() => {});
            // حذف المستمعات بعد التفعيل لمرة واحدة
            ['mousedown', 'mousemove', 'touchstart', 'scroll'].forEach(e => 
                window.removeEventListener(e, enableAudio));
        }
    };
    ['mousedown', 'mousemove', 'touchstart', 'scroll'].forEach(e => 
        window.addEventListener(e, enableAudio));

    function moveSlider() {
        // إزالة حالة النشاط
        slides.forEach(s => s.classList.remove('active'));

        // تشغيل الصوت الرسمي (بالتزامن مع بداية الحركة)
        if (audioAllowed && slideSound) {
            slideSound.volume = 0.3; // درجة صوت متوسطة وفخمة
            slideSound.currentTime = 0;
            slideSound.play();
        }

        // الحركة لليسار
        currentSlide = (currentSlide + 1) % totalSlides;
        const moveDistance = currentSlide * (100 / totalSlides);
        track.style.transform = `translateX(${moveDistance}%)`;

        // إضافة حالة النشاط لبدء الزووم البطئ
        slides[currentSlide].classList.add('active');
    }

    // وقت التبديل (5 ثواني)
    setInterval(moveSlider, 5000);
});



