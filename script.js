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
const modalContent = serviceModal ? serviceModal.querySelector('.bg-white.rounded-2xl') : null; // Select the inner content div
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalCloseButton = serviceModal ? serviceModal.querySelector('button[aria-label="Cerrar modal"]') : null;
const openModalButtons = document.querySelectorAll('[data-action="open-modal"]');

if (serviceModal && modalContent && modalTitle && modalDescription && modalCloseButton && openModalButtons.length > 0) {
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceCard = button.closest('.flex.flex-col'); // Find the parent service card
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


const imageCarousel = document.getElementById('image-carousel');
if (imageCarousel) {
    const slides = imageCarousel.querySelectorAll('.absolute.inset-0');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.remove('opacity-0', 'scale-105');
                slide.classList.add('opacity-100', 'scale-100');
            } else {
                slide.classList.remove('opacity-100', 'scale-100');
                slide.classList.add('opacity-0', 'scale-105');
            }
        });
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };
    showSlide(currentSlide);
    setInterval(nextSlide, 5000); 
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
