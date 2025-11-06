document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Cambio de navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar formulario
            if (!validateForm()) {
                return;
            }

            // Mostrar estado de carga
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';

            // Simular envío del formulario
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Crear mensaje para WhatsApp
            const whatsappMessage = createWhatsAppMessage(data);
            
            // Números de WhatsApp a enviar
            const whatsappNumbers = ['667712092', '34654529802'];
            
            // Enviar a ambos números
            whatsappNumbers.forEach((number, index) => {
                const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(whatsappMessage)}`;
                setTimeout(() => {
                    window.open(whatsappUrl, '_blank');
                }, index * 1000);
            });
            
            // Mostrar mensaje de confirmación
            document.getElementById('confirmationMessage').style.display = 'block';
            showAlert('¡Solicitud enviada a nuestros técnicos!', 'success');
            this.reset();
            
            // Restaurar botón
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1000);
        });
    }

    // Función para crear mensaje de WhatsApp
    function createWhatsAppMessage(data) {
        let message = `🔧 *SOLICITUD DE SERVICIO TÉCNICO* 🔧\n\n`;
        
        // Dirección completa
        let direccionCompleta = data.direccion + ' ' + data.numero;
        if (data.piso) direccionCompleta += ', ' + data.piso + 'º';
        if (data.letra) direccionCompleta += data.letra;
        message += `📍 *Dirección:* ${direccionCompleta}\n`;
        message += `📮 *Código Postal:* ${data.codigoPostal}\n\n`;
        
        message += `🏠 *Electrodoméstico:* ${data.electrodomestico}\n`;
        message += `🏷️ *Marca:* ${data.marca}\n`;
        message += `❗ *Problema:* ${data.problema}\n\n`;
        
        message += `📍 *Servicio Técnico Alicante*\n`;
        message += `¡Hola! Necesito asistencia técnica para mi electrodoméstico.\n\n`;
        message += `Un técnico se pondrá en contacto en menos de 1 hora.`;
        
        return message;
    }

    // Función para validar el formulario
    function validateForm() {
        const requiredFields = ['direccion', 'numero', 'codigoPostal', 'electrodomestico', 'marca', 'problema'];
        let isValid = true;

        requiredFields.forEach(fieldName => {
            const field = document.getElementById(fieldName);
            if (!field.value.trim()) {
                field.classList.add('is-invalid');
                isValid = false;
            } else {
                field.classList.remove('is-invalid');
                field.classList.add('is-valid');
            }
        });

        // Validar código postal
        const codigoPostal = document.getElementById('codigoPostal');
        const postalRegex = /^[0-9]{5}$/;
        if (codigoPostal.value && !postalRegex.test(codigoPostal.value)) {
            codigoPostal.classList.add('is-invalid');
            isValid = false;
        }

        return isValid;
    }

    // Función para mostrar alertas
    function showAlert(message, type = 'info') {
        // Crear el alert
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        alertDiv.style.cssText = 'top: 100px; right: 20px; z-index: 9999; max-width: 400px;';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        // Añadir al body
        document.body.appendChild(alertDiv);

        // Quitar automáticamente después de 5 segundos
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.parentNode.removeChild(alertDiv);
            }
        }, 5000);
    }

    // Animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.service-card, .testimonial-card, .brand-card');
    animatedElements.forEach(el => observer.observe(el));

    // Smooth scroll para navegación interna
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Limpiar validación al escribir en los campos
    const formFields = document.querySelectorAll('.form-control, .form-select');
    formFields.forEach(field => {
        field.addEventListener('input', function() {
            this.classList.remove('is-invalid');
            if (this.value.trim()) {
                this.classList.add('is-valid');
            } else {
                this.classList.remove('is-valid');
            }
        });
    });

    // Efecto de tipeo para el hero
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Contador de estadísticas (si se añaden en el futuro)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start >= target) {
                element.textContent = target;
            } else {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            }
        }
        updateCounter();
    }

    // Lazy loading para imágenes (si se añaden)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Preloader (opcional)
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });
});