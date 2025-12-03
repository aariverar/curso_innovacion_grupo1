// Elementos del DOM
const actionButtons = document.querySelectorAll('.action-btn');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const progressDots = document.querySelectorAll('.progress-dot');

// Contenido para cada modal
const modalContent = {
    whatsapp: {
        title: 'WhatsApp',
        content: `
            <h4>📱 Contacto por WhatsApp</h4>
            <p>Conéctate con nosotros directamente a través de WhatsApp para recibir soporte inmediato y personalizado.</p>
            
            <div class="contact-info">
                <h4>🌟 Beneficios del contacto directo:</h4>
                <ul>
                    <li>✅ Respuesta inmediata</li>
                    <li>✅ Soporte personalizado</li>
                    <li>✅ Compartir archivos y documentos</li>
                    <li>✅ Videollamadas de apoyo</li>
                    <li>✅ Disponible 24/7</li>
                </ul>
                
                <a href="https://wa.me/51958025002?text=Hola,%20necesito%20asesoría%20para%20el%20uso%20correcto%20de%20WhatsApp.%20¿Está%20disponible%20en%20estos%20momentos?" 
                   class="whatsapp-link" target="_blank">
                    <i class="fab fa-whatsapp"></i> Abrir WhatsApp
                </a>
            </div>
            
            <p><strong>Número:</strong> (+51) 958025002</p>
            <p><em>¡Estamos aquí para ayudarte!</em></p>
        `
    },
    video: {
        title: 'Video Interactivo',
        content: `
            <h4>🎥 Experiencia de Aprendizaje Inmersiva</h4>
            <p>Sumérgete en nuestros videos interactivos diseñados para un aprendizaje dinámico y efectivo.</p>
            
            <h4>🌟 Características del Video Interactivo:</h4>
            <ul>
                <li>🎮 <strong>Navegación Interactiva:</strong> Explora contenido a tu ritmo</li>
                <li>📊 <strong>Quizzes Integrados:</strong> Evalúa tu conocimiento</li>
                <li>🔗 <strong>Enlaces Dinámicos:</strong> Acceso directo a recursos</li>
                <li>📝 <strong>Notas Personales:</strong> Guarda información importante</li>
                <li>🎯 <strong>Marcadores:</strong> Regresa a secciones específicas</li>
                <li>📱 <strong>Multi-dispositivo:</strong> Continúa donde lo dejaste</li>
            </ul>
            
            <h4>📚 Módulos Disponibles:</h4>
            <div style="display: grid; gap: 10px; margin: 15px 0;">
                <div style="padding: 10px; background: rgba(255, 71, 87, 0.1); border-radius: 6px;">
                    <strong>Módulo 1:</strong> Fundamentos (15 min)
                </div>
                <div style="padding: 10px; background: rgba(255, 71, 87, 0.1); border-radius: 6px;">
                    <strong>Módulo 2:</strong> Configuración Avanzada (20 min)
                </div>
                <div style="padding: 10px; background: rgba(255, 71, 87, 0.1); border-radius: 6px;">
                    <strong>Módulo 3:</strong> Casos de Uso (25 min)
                </div>
            </div>
            
            <p><strong>🏆 Certificación disponible</strong> al completar todos los módulos.</p>
            
            <div style="text-align: center; margin-top: 20px;">
                <button style="background: #ff4757; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-weight: 600;">
                    <i class="fas fa-play"></i> Comenzar Video Interactivo
                </button>
            </div>
        `
    }
};

// Funcionalidad de los botones
actionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const action = button.getAttribute('data-action');
        
        // Agregar efecto de ripple
        addRippleEffect(button, event);
        
        // Actualizar indicadores de progreso
        updateProgressIndicators(index);
        
        // Mostrar modal con contenido específico
        showModal(action);
        
        // Agregar vibración en dispositivos móviles
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    });
    
    // Efecto hover para dispositivos táctiles
    button.addEventListener('touchstart', () => {
        button.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('touchend', () => {
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    });
});

// Función para agregar efecto ripple
function addRippleEffect(button, event) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Actualizar indicadores de progreso
function updateProgressIndicators(activeIndex) {
    progressDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

// Mostrar modal
function showModal(action) {
    const content = modalContent[action];
    if (content) {
        modalTitle.textContent = content.title;
        modalBody.innerHTML = content.content;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Agregar animación de entrada
        setTimeout(() => {
            modalOverlay.querySelector('.modal-content').style.animation = 'modalSlideIn 0.3s ease-out';
        }, 50);
    }
}

// Cerrar modal
function closeModalFunction() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Resetear indicadores de progreso
    setTimeout(() => {
        progressDots.forEach(dot => dot.classList.remove('active'));
        progressDots[0].classList.add('active');
    }, 300);
}

// Event listeners para cerrar modal
closeModal.addEventListener('click', closeModalFunction);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModalFunction();
    }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModalFunction();
    }
});

// Animaciones CSS adicionales
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes modalSlideIn {
        from {
            transform: translateY(50px) scale(0.95);
            opacity: 0;
        }
        to {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
    }
    
    .action-btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Inicialización de la página
document.addEventListener('DOMContentLoaded', () => {
    // Agregar clase loaded para animaciones de entrada
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Precargar contenido para mejor rendimiento
    Object.values(modalContent).forEach(content => {
        const temp = document.createElement('div');
        temp.innerHTML = content.content;
    });
    
    // Detectar tipo de dispositivo para optimizaciones
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
        document.body.classList.add('mobile-device');
    }
    
    console.log('🚀 Interfaz Grupo 1 cargada correctamente');
});

// Funcionalidad adicional para mejorar la experiencia
class InterfaceEnhancer {
    constructor() {
        this.initParallaxEffect();
        this.initThemeToggle();
        this.initAccessibility();
    }
    
    // Efecto parallax sutil
    initParallaxEffect() {
        let ticking = false;
        
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.particle');
            
            parallaxElements.forEach((element, index) => {
                const speed = (index + 1) * 0.5;
                element.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
            });
            
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick);
    }
    
    // Toggle de tema (modo claro/oscuro)
    initThemeToggle() {
        // Se puede implementar más tarde si se requiere
    }
    
    // Mejoras de accesibilidad
    initAccessibility() {
        // Soporte para navegación por teclado
        actionButtons.forEach((button, index) => {
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    button.click();
                }
            });
        });
        
        // Anuncios para lectores de pantalla
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        announcer.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
        document.body.appendChild(announcer);
        
        // Función para anunciar cambios
        window.announce = function(message) {
            announcer.textContent = message;
            setTimeout(() => {
                announcer.textContent = '';
            }, 1000);
        };
    }
}

// Inicializar mejoras
const enhancer = new InterfaceEnhancer();

// Performance monitoring (opcional)
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log(`📊 Tiempo de carga: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
        }, 0);
    });
}