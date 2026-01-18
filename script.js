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


    // --- 3. معالجة نموذج الطلب (WhatsApp Integration) ---
    const leadForm = document.getElementById('leadForm');
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('userName').value;
        const phone = document.getElementById('userPhone').value;

        const message = `طلب عرض سعر جديد:\nالاسم: ${name}\nالجوال: ${phone}`;
        const whatsappUrl = `https://wa.me/9665XXXXXXXX?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
        leadForm.reset();
    });

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