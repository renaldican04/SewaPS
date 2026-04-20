// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background saat scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.boxShadow = '0 5px 20px rgba(251, 9, 11, 0.3)';
    } else {
        header.style.background = '#000000';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    }
});

// Form submission handler
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil data form
    const formData = new FormData(this);
    const nama = this.querySelector('input[type="text"]').value;
    const nomor = this.querySelector('input[type="tel"]').value;
    const paket = this.querySelector('select').value;
    const tanggal = this.querySelector('input[type="date"]').value;
    const pesan = this.querySelector('textarea').value;
    
    // Format pesan WhatsApp
    let pesanWA = `Halo, saya ingin menyewa PlayStation%0A%0A`;
    pesanWA += `Nama: ${nama}%0A`;
    pesanWA += `Nomor: ${nomor}%0A`;
    pesanWA += `Paket: ${paket}%0A`;
    pesanWA += `Tanggal: ${tanggal}%0A`;
    if (pesan) {
        pesanWA += `Pesan: ${pesan}%0A`;
    }
    
    // Redirect ke WhatsApp
    window.open(`https://wa.me/6281234567890?text=${pesanWA}`, '_blank');
    
    // Reset form
    this.reset();
    alert('Terima kasih! Anda akan diarahkan ke WhatsApp.');
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe semua card dan section
document.querySelectorAll('.feature-card, .paket-card, .game-category, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Counter animation untuk stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString() + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString() + '+';
        }
    }, 16);
}

// Trigger counter saat stats terlihat
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const statNumbers = entry.target.querySelectorAll('.stat h3');
            
            statNumbers.forEach(num => {
                const target = parseInt(num.textContent.replace(/\D/g, ''));
                animateCounter(num, target);
            });
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// Mobile menu toggle (untuk responsive)
function createMobileMenu() {
    const nav = document.querySelector('.navbar');
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '☰';
    menuBtn.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 10px;
    `;
    
    const logo = document.querySelector('.logo');
    if (logo && window.innerWidth <= 768) {
        menuBtn.style.display = 'block';
        logo.appendChild(menuBtn);
        
        menuBtn.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
if (window.innerWidth <= 768) {
    createMobileMenu();
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
        createMobileMenu();
    }
});

console.log('🎮 PlayStation Rental Website loaded successfully!');
console.log('🔴⚫ AC Milan theme activated!');
