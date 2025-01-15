// Validación del formulario de contacto
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.querySelector('input[type="text"]').value;
    const correo = document.querySelector('input[type="email"]').value;
    const mensaje = document.querySelector('textarea').value;
    if (nombre && correo && mensaje) {
        alert('Formulario enviado correctamente');
    } else {
        alert('Por favor, completa todos los campos');
    }
});
