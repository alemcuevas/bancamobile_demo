// ==========================================
// COUNTDOWN SAN VALENTÍN
// ==========================================

// Promociones diarias del 1 al 14 de febrero
const dailyPromos = {
    1: "🍽️ 30% de descuento en restaurantes selectos",
    2: "💎 15% en joyerías participantes + 6 MSI",
    3: "✈️ 2x1 en vuelos nacionales",
    4: "🌹 Envío GRATIS en flores y regalos",
    5: "💆 25% en Spa y tratamientos de pareja",
    6: "🏨 40% de descuento en hoteles románticos",
    7: "🎬 2x1 en cines y entretenimiento",
    8: "👗 20% en tiendas de moda selectas",
    9: "🍫 Caja de chocolates GRATIS en compras +$500",
    10: "📱 18 MSI en electrónicos",
    11: "🍷 30% en vinos y licores premium",
    12: "💐 50% en arreglos florales especiales",
    13: "🎁 Regalo sorpresa en compras +$1,000",
    14: "❤️ ¡TODAS las promociones activas! + 10% extra"
};

// Función para actualizar el countdown
function updateCountdown() {
    const valentinesDay = new Date('February 14, 2026 23:59:59').getTime();
    const now = new Date().getTime();
    const distance = valentinesDay - now;
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const messageEl = document.getElementById('countdown-message');
    
    if (!daysEl) return;
    
    if (distance < 0) {
        // San Valentín ya pasó o es hoy
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        /**
         * Actualiza el contador regresivo y muestra mensajes según la cercanía a San Valentín.
         */
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        messageEl.innerHTML = '💕 ¡Feliz San Valentín! 💕 <br><small>Las promociones están activas todo el día</small>';
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
    
    // Mensaje especial si falta poco
    if (days === 0 && hours < 24) {
        messageEl.innerHTML = '💝 ¡Último día para aprovechar! 💝';
    } else if (days <= 3) {
        messageEl.innerHTML = '⏰ ¡Quedan pocos días! No te lo pierdas';
    }
}

// Función para mostrar la promo del día
function updateDailyPromo() {
    const promoEl = document.getElementById('daily-promo');
    if (!promoEl) return;
    
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Enero = 0
    
    // Solo mostrar promos del 1 al 14 de febrero
    if (month === 2 && day >= 1 && day <= 14) {
        promoEl.textContent = dailyPromos[day];
    } else if (month === 2 && day > 14) {
        promoEl.textContent = "¡Las promociones de San Valentín han terminado! Espera las próximas 💕";
    } else {
        // Si no es febrero, mostrar promo genérica o del día 14
        promoEl.textContent = "🎉 ¡Próximamente! Promociones especiales de San Valentín";
    }
        /**
         * Selecciona la promoción diaria en función de la fecha del sistema.
         */
}

// Iniciar countdown
updateCountdown();
updateDailyPromo();
setInterval(updateCountdown, 1000);

// ==========================================
// HEADER Y NAVEGACIÓN
// ==========================================

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
        /**
         * Marca como activo el enlace de navegación correspondiente a la sección visible.
         */
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        /**
         * Anima los contadores numéricos del hero.
         * @param {HTMLElement} element - Nodo DOM que se actualizará.
         * @param {number} target - Valor final deseado.
         */
        nav.classList.remove('active');
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
        /**
         * Observa las secciones clave para disparar animaciones al entrar en viewport.
         */
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Animated counter for stats
function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(timer);
            current = target;
        }
        /**
         * Muestra una tarjeta de testimonio específica y sincroniza los indicadores.
         * @param {number} index - Índice del testimonio a mostrar.
         */
        
        if (target >= 1000) {
            element.textContent = Math.floor(current).toLocaleString('es-MX');
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for animations
const observerOptions = {
        /**
         * Avanza automáticamente al siguiente testimonio.
         */
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
        /**
         * Inicia el carrusel automático de testimonios.
         */
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
        /**
         * Detiene el carrusel automático de testimonios.
         */
            // Animate counters when hero section is visible
            if (entry.target.classList.contains('hero')) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.target);
        /**
         * Gestiona el envío falso del formulario de contacto para mostrar feedback al usuario.
         */
                    animateCounter(counter, target);
                });
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.hero, .servicio-card, .nosotros-content').forEach(el => {
    observer.observe(el);
});

// Testimonios slider
const testimonioCards = document.querySelectorAll('.testimonio-card');
const dots = document.querySelectorAll('.dot');
let currentTestimonio = 0;
let testimonioInterval;

function showTestimonio(index) {
    testimonioCards.forEach((card, i) => {
        card.classList.remove('active');
        dots[i].classList.remove('active');
    });
    
    testimonioCards[index].classList.add('active');
        /**
         * Crea y muestra una notificación flotante con auto cierre.
         * @param {string} title - Título del mensaje.
         * @param {string} message - Cuerpo descriptivo.
         */
    dots[index].classList.add('active');
    currentTestimonio = index;
}

function nextTestimonio() {
    const next = (currentTestimonio + 1) % testimonioCards.length;
    showTestimonio(next);
}

function startTestimonioSlider() {
    testimonioInterval = setInterval(nextTestimonio, 5000);
}

function stopTestimonioSlider() {
    clearInterval(testimonioInterval);
}

// Dot click events
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopTestimonioSlider();
        showTestimonio(index);
        startTestimonioSlider();
    });
});

// Start auto-slide
startTestimonioSlider();

// Contact form handling
const contactForm = document.getElementById('contacto-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // Show success message
        showNotification('¡Mensaje enviado!', 'Gracias por contactarnos. Te responderemos pronto.');
        
        // Reset form
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Notification system
function showNotification(title, message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">✓</div>
            <div class="notification-text">
                <strong>${title}</strong>
                <p>${message}</p>
            </div>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        padding: 20px;
        z-index: 2000;
        animation: slideIn 0.3s ease;
        max-width: 350px;
    `;
    
    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: flex-start;
        gap: 15px;
    `;
    
    const icon = notification.querySelector('.notification-icon');
    icon.style.cssText = `
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        flex-shrink: 0;
    `;
    
    const text = notification.querySelector('.notification-text');
    text.style.cssText = `
        flex: 1;
    `;
    
    text.querySelector('strong').style.cssText = `
        display: block;
        margin-bottom: 5px;
        color: #1e293b;
    `;
    
    text.querySelector('p').style.cssText = `
        color: #64748b;
        /**
         * Aplica desplazamiento suave al navegar por anclas internas.
         */
        font-size: 14px;
        margin: 0;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 24px;
        color: #94a3b8;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        @keyframes slideOut {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Close button functionality
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Card hover 3D effect
const cardPreview = document.querySelector('.card-preview-inner');
if (cardPreview) {
    const cardContainer = document.querySelector('.card-preview');
    
    cardContainer.addEventListener('mousemove', (e) => {
        const rect = cardContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        cardPreview.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    cardContainer.addEventListener('mouseleave', () => {
        cardPreview.style.transform = 'rotateY(-10deg) rotateX(5deg)';
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active nav
    updateActiveNav();
    
    // Add loaded class for animations
    document.body.classList.add('loaded');
});
