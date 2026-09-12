// Function to Open Modal Popup
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevents background scrolling when modal is open
    }
}

// Function to Close Modal Popup
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restores scrolling
    }
}

// Close modal when user clicks outside the modal box
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
};

// Function to Add Selected Plan to Cart (LocalStorage)
function addToCart(planName, price) {
    let cart = JSON.parse(localStorage.getItem('userCart')) || [];
    
    // Add selected item to array
    cart.push({ name: planName, price: price });
    
    // Save updated cart to localStorage
    localStorage.setItem('userCart', JSON.stringify(cart));
    
    alert(planName + " Cart එකට එකතු කරන ලදී!");
    
    // Redirect to Cart page
    window.location.href = "cart.html";
}

document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scroll Navbar Shadow Effect
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }

});
