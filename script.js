
tailwind.config = {
    theme: {
        extend: {
            colors: {
                background: '#0B0F14',
                card: '#151b23',
                accent: '#10b981',
                accentHover: '#059669',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            keyframes: {
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(16, 185, 129, 0.6)' },
                },
                'gradient-shift': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                'slide-up': {
                    'from': { opacity: '0', transform: 'translateY(40px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                'blur-in': {
                    'from': { opacity: '0', filter: 'blur(10px)' },
                    'to': { opacity: '1', filter: 'blur(0)' },
                },
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                'gradient-shift': 'gradient-shift 8s ease infinite',
                'slide-up': 'slide-up 0.8s ease-out',
                'blur-in': 'blur-in 1s ease-out',
            },
            backgroundSize: {
                'gradient-large': '200% 200%',
            }
        }
    }
}

// 2. Lógica de Animações e Ícones (Executa após o DOM carregar)
document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializar ícones do Lucide
    lucide.createIcons();

    // Configuração GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animar seções ao rolar (scroll)
    gsap.utils.toArray('section').forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Comportamento de rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});