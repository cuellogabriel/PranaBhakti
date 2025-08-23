const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
const submenuButton = document.getElementById('submenuButton');
const submenu = document.getElementById('submenu');
const arrow = document.getElementById('arrow');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenuButton.setAttribute('aria-expanded', mobileMenu.classList.contains('hidden') ? 'false' : 'true');
    });
}

if (submenuButton && submenu && arrow) {
    submenuButton.addEventListener('click', () => {
        submenu.classList.toggle('hidden');
        arrow.classList.toggle('rotate-180'); 
    });
}


const serviceModal = document.getElementById('serviceModal');
const modalContent = serviceModal ? serviceModal.querySelector('.transform.transition-transform') : null;
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalCloseButton = serviceModal ? serviceModal.querySelector('button[aria-label="Cerrar modal"]') : null;
const openModalButtons = document.querySelectorAll('[data-action="open-modal"]');

if (serviceModal && modalContent && modalTitle && modalDescription && modalCloseButton && openModalButtons.length > 0) {
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceCard = button.closest('.flex.flex-col'); 
            if (serviceCard) {
                const title = serviceCard.querySelector('h3').textContent;
                const description = serviceCard.querySelector('.long-description').innerHTML;
                modalTitle.textContent = title;
                modalDescription.innerHTML = description;
                serviceModal.classList.remove('hidden');
                serviceModal.classList.add('flex');
                setTimeout(() => {
                    serviceModal.classList.remove('opacity-0'); 
                    serviceModal.classList.add('opacity-100');

                    modalContent.classList.remove('scale-95'); 
                    modalContent.classList.add('scale-100');
                }, 10);
            }
        });
    });

    const hideModal = () => {
        serviceModal.classList.remove('opacity-100');
        serviceModal.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            serviceModal.classList.remove('flex');
            serviceModal.classList.add('hidden');
        }, 300); 
    };

    modalCloseButton.addEventListener('click', hideModal);
    serviceModal.addEventListener('click', (event) => {
        if (event.target === serviceModal) {
            hideModal();
        }
    });
}

// --- Futurista ---
const carouselContainer = document.getElementById('image-carousel-container');
if (carouselContainer) {
    const carousel = document.getElementById('image-carousel');
    const slides = Array.from(carousel.children);
    const numSlides = slides.length;
    let currentAngle = 0;
    let radius; 
    function setupAndPositionCarousel() {
        if (numSlides === 0) return;
        const slideWidth = slides[0].offsetWidth;
        const anglePerSlide = 360 / numSlides;
        radius = Math.round((slideWidth / 2) / Math.tan(Math.PI / numSlides));
        if (window.innerWidth < 768) {
            radius = radius * 1.5;
        } else {
            radius = radius * 1.2; 
        }

        slides.forEach((slide, index) => {
            const angle = anglePerSlide * index;
            slide.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        });
        rotateCarousel(); 
    }

    function rotateCarousel() {
        carousel.style.transform = `translateZ(-${radius}px) rotateY(${currentAngle}deg)`;
    }

    function advanceSlide() {
        const anglePerSlide = 360 / numSlides;
        currentAngle -= anglePerSlide; 
        rotateCarousel();
    }
    window.addEventListener('load', () => { setupAndPositionCarousel(); setInterval(advanceSlide, 4000); });
    window.addEventListener('resize', setupAndPositionCarousel);
}

// --- Lógica para la Esfera 3D ---
const sphere = document.querySelector('.sphere');
if (sphere) {
    const panels = 5; 
    const radius = 160; 
    const imageUrl = 'pictures/logo-removebg-preview.png';

    for (let i = 0; i < panels; i++) {
        const panel = document.createElement('div');
        panel.classList.add('sphere-panel');
        const angle = (360 / panels) * i;
        panel.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        panel.style.backgroundImage = `url('${imageUrl}')`;
        sphere.appendChild(panel);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[type="search"]');
    const serviceCards = document.querySelectorAll('#servicios .grid > div');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        serviceCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = ''; 
            } else {
                card.style.display = 'none'; 
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const copyrightLink = document.getElementById('copyrightLink');
    const copyrightModal = document.getElementById('copyrightModal');

    if (copyrightLink && copyrightModal) {
        copyrightLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            copyrightModal.classList.remove('hidden');
            copyrightModal.classList.add('flex');
        });
    }
});

function closeCopyrightModal() {
    const copyrightModal = document.getElementById('copyrightModal');
    if (copyrightModal) {
        copyrightModal.classList.remove('flex');
        copyrightModal.classList.add('hidden');
    }
}

window.addEventListener('click', function(event) {
    if (event.target.id === 'copyrightModal') {
        closeCopyrightModal();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const privacyPolicyLink = document.getElementById('privacyPolicyLink');
    const privacyPolicyModal = document.getElementById('privacyPolicyModal');

    if (privacyPolicyLink && privacyPolicyModal) {
        privacyPolicyLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            privacyPolicyModal.classList.remove('hidden');
            privacyPolicyModal.classList.add('flex');
        });
    }
});

function closePrivacyPolicyModal() {
    const privacyPolicyModal = document.getElementById('privacyPolicyModal');
    if (privacyPolicyModal) {
        privacyPolicyModal.classList.remove('flex');
        privacyPolicyModal.classList.add('hidden');
    }
}

window.addEventListener('click', function(event) {
    if (event.target.id === 'privacyPolicyModal') {
        closePrivacyPolicyModal();
    }
});
