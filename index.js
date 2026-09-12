document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Hamburger Menu Handler ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        const icon = hamburger.querySelector('i');

        // Hamburger Icon එක Click කළ විට Menu එක Slide වී ඒම
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark'); // ඉරි 3 වෙනුවට X එකක් පෙන්වීම
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Menu එක ඇතුලේ link එකක් ක්ලික් කළ විට Auto Menu එක වැසීම
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

});

// --- Modal Functions (Popup Windows) ---
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Scroll වීම තාවකාලිකව නැවැත්වීම
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Scroll සක්‍රිය කිරීම
    }
}

// Modal එකෙන් පිටත කළු පැත්ත ක්ලික් කළ විට Modal එක වැසීම
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// --- Add to Cart Functionality ---
function addToCart(serviceName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: serviceName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${serviceName} cart එකට එකතු කරන ලදී!`);
}
