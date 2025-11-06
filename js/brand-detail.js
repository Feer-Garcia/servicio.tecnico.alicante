// Brand data with images and information
const brandData = {
    bosch: {
        name: 'BOSCH',
        logo: 'images/brands/bosch-logo.png',
        mainImage: 'images/servicio-tecnico/servicio-tecnico-bosch.png',
        gallery: [
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1496175734303-1cdeac6d4ac8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        ]
    },
    samsung: {
        name: 'SAMSUNG',
        logo: 'images/brands/samsung-logo.png',
        mainImage: 'images/servicio-tecnico/servicio-tecnico-samsung.png',
        gallery: [
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180',
            'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100'
        ]
    },
    lg: {
        name: 'LG',
        logo: 'images/brands/lg-logo.png',
        mainImage: 'images/servicio-tecnico/servicio-tecnico-lg.png',
        gallery: [
            'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180',
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100'
        ]
    },
    siemens: {
        name: 'SIEMENS',
        logo: 'images/brands/siemens-logo.png',
        mainImage: 'images/servicio-tecnico/servicio-tecnico-siemens.png',
        gallery: [
            'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180'
        ]
    },
    whirlpool: {
        name: 'WHIRLPOOL',
        logo: 'images/brands/whirlpool-logo.png',
        mainImage: 'images/servicio-tecnico/servicio-tecnico-whirlpool.png',
        gallery: [
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180',
            'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180'
        ]
    },
    balay: {
        name: 'BALAY',
        logo: 'images/brands/balay-logo.png',
        mainImage: 'images/servicio-tecnico/servicio-tecnico-balay.png',
        gallery: [
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180',
            'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180'
        ]
    },
    electrolux: {
        name: 'ELECTROLUX',
        logo: 'images/brands/electrolux-logo.png',
        mainImage: 'images/servicio-tecnico/servicio-tecnico-electrolux.png',
        gallery: [
            'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180'
        ]
    },
    zanussi: {
        name: 'ZANUSSI',
        logo: 'images/brands/zanussi-logo.png',
        mainImage: 'images/servicio-tecnico/servicio-tecnico-zanussi.png',
        gallery: [
            'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180'
        ]
    },
    miele: {
        name: 'MIELE',
        logo: 'images/brands/miele-logo.png',
        mainImage: 'images/servicio-tecnico/servicio-tecnico-miele.png',
        gallery: [
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180',
            'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180'
        ]
    },
    aeg: {
        name: 'AEG',
        logo: 'images/brands/aeg-logo.png',
        mainImage: 'images/servicio-tecnico/servicio-tecnico-aeg.png',
        gallery: [
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180',
            'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180'
        ]
    },
    fagor: {
        name: 'FAGOR',
        logo: 'images/brands/fagor-logo.png',
        mainImage: 'images/servicio-tecnico/servicio-tecnico-fagor.png',
        gallery: [
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180',
            'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100'
        ]
    },
    teka: {
        name: 'TEKA',
        logo: 'images/brands/teka-logo.png',
        mainImage: 'images/servicio-tecnico/servicio-tecnico-teka.png',
        gallery: [
            'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100&hue=180'
        ]
    }
};

// Get brand from URL parameter
function getBrandFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('brand') || 'bosch';
}

// Load brand data
function loadBrandData() {
    const brandKey = getBrandFromURL();
    const brand = brandData[brandKey];
    
    if (!brand) {
        // If brand not found, redirect to main page
        window.location.href = 'index.html';
        return;
    }
    
    // Update page title
    document.title = `Servicio Técnico ${brand.name} - Valencia`;
    
    // Update brand elements
    document.getElementById('brandName').textContent = brand.name;
    document.getElementById('brandLogo').src = brand.logo;
    document.getElementById('brandLogo').alt = `${brand.name} Logo`;
    document.getElementById('brandMainImage').src = brand.mainImage;
    document.getElementById('brandMainImage').alt = `${brand.name} Electrodomésticos`;
    
    // Load gallery
    const gallery = document.getElementById('brandGallery');
    gallery.innerHTML = '';
    
    brand.gallery.forEach((imageUrl, index) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `${brand.name} Servicio ${index + 1}`;
        img.className = 'gallery-image';
        img.onclick = () => openImageModal(imageUrl, img.alt);
        gallery.appendChild(img);
    });
}

// Open image in modal (optional enhancement)
function openImageModal(imageUrl, altText) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        cursor: pointer;
    `;
    
    // Create image element
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = altText;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 10px;
    `;
    
    // Close modal on click
    modal.onclick = () => document.body.removeChild(modal);
    
    modal.appendChild(img);
    document.body.appendChild(modal);
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    loadBrandData();
    
    // Add smooth scrolling to all links with anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});