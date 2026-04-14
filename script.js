
const themeIcon = document.getElementById('theme-icon');
const iconElement = themeIcon.querySelector('i');
const body = document.body;

// Ouve o evento de clique no ícone
themeIcon.addEventListener('click', () => {
    // A classe .light-mode no body sobrescreve as variáveis de cor do CSS
    body.classList.toggle('light-mode');
    
    // Altera dinamicamente o ícone (Sol para Light, Lua para Dark)
    if (body.classList.contains('light-mode')) {
        iconElement.classList.remove('fa-moon');
        iconElement.classList.add('fa-sun');
    } else {
        iconElement.classList.remove('fa-sun');
        iconElement.classList.add('fa-moon');
    }
});



// Pega todos os links do menu que começam com '#' (âncoras)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o pulo abrupto da página
        
        // Pega o ID alvo e faz a rolagem suave até a seção
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
