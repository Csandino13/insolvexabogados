// Desplazamiento suave al hacer clic en los enlaces de la barra de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Ajuste para que no quede debajo de la barra de navegación
            behavior: 'smooth'
        });
    });
});

// Función para cambiar la clase activa en la navegación al hacer scroll
window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY;

    document.querySelectorAll('section').forEach(section => {
        if (section.offsetTop <= currentScroll + 100 && section.offsetTop + section.offsetHeight > currentScroll + 100) {
            const id = section.getAttribute('id');
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.classList.remove('active');
                if (anchor.getAttribute('href').substring(1) === id) {
                    anchor.classList.add('active');
                }
            });
        }
    });
});

// Efecto de animación en el botón "Solicitar Consulta" al hacer hover
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.backgroundColor = '#0056b3'; // Cambia el color de fondo cuando pasa el mouse
    });

    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.backgroundColor = '#007bff'; // Vuelve al color original
    });
}
