// Carrossel de Fotos
const carouselInner = document.querySelector('.carousel-inner');
const carouselImages = document.querySelectorAll('.carousel-inner img');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
let currentImageIndex = 0;
const totalImages = carouselImages.length;

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentImageIndex < totalImages - 1) {
        currentImageIndex++;
        updateCarousel();
    }
});

updateCarousel();

// Contador de Tempo
const startDate = new Date('October 19, 2022 22:30:00').getTime(); // Atualize a data conforme necessário

function updateCounter() {
    const now = new Date().getTime();
    const distance = now - startDate;

    const seconds = Math.floor((distance / 1000) % 60);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

setInterval(updateCounter, 1000);

// Botões Carta e Música
const botaoCarta = document.getElementById('botao-carta');
const botaoMusica = document.getElementById('botao-musica');
const conteudoCarta = document.getElementById('conteudo-carta');
const conteudoMusica = document.getElementById('conteudo-musica');

botaoCarta.addEventListener('click', () => {
    conteudoCarta.style.display = 'block';
    conteudoMusica.style.display = 'none';
});

botaoMusica.addEventListener('click', () => {
    conteudoMusica.style.display = 'block';
    conteudoCarta.style.display = 'none';
});

// Botão Voltar ao Topo
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
