import './style.css';
import productsData from './src/data/products.json';

const config = productsData.config;
const products = productsData.products;

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: config.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

const generateWhatsAppLink = (product) => {
  const message = `Hola! 👋 Me interesa un producto de ${config.brandName}:\n🛍️ ${product.brand} - ${product.name}\n💰 Precio: ${formatCurrency(product.salePrice)} MXN\n¿Está disponible?`;
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const isNew = (dateString) => {
  const addedDate = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - addedDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return diffDays <= 7;
};

let currentCategory = 'todos';

const renderProducts = () => {
  const grid = document.getElementById('product-grid');
  
  const filteredProducts = products.filter(product => {
    if (currentCategory === 'todos') return true;
    return product.category === currentCategory;
  });

  if (filteredProducts.length === 0) {
    grid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 4rem 1rem; color: #888; font-size: 1.1rem;">Próximamente más productos en esta categoría. ✨</p>';
    return;
  }
  
  const html = filteredProducts.map(product => {
    // Tomamos el primer precio de mercado disponible
    const marketStores = Object.keys(product.marketPrices);
    const marketStore = marketStores.length > 0 ? marketStores[0] : 'Tiendas';
    const marketPrice = product.marketPrices[marketStore];
    const savings = marketPrice - product.salePrice;
    const savingsPercent = Math.round((savings / marketPrice) * 100);
    
    return `
      <article class="product-card">
        <div class="product-image-container">
          <div class="image-carousel" id="carousel-${product.id}">
            ${product.images.map(img => `<img src="${img}" alt="${product.name}" class="product-image" loading="lazy" />`).join('')}
          </div>
          ${product.images.length > 1 ? `
          <button class="carousel-btn prev" onclick="document.getElementById('carousel-${product.id}').scrollBy({left: -300, behavior: 'smooth'})">❮</button>
          <button class="carousel-btn next" onclick="document.getElementById('carousel-${product.id}').scrollBy({left: 300, behavior: 'smooth'})">❯</button>
          ` : ''}
          ${product.available && isNew(product.dateAdded) ? '<span class="badge-new">✨ NUEVO</span>' : ''}
          ${!product.available ? '<span class="badge-sold">AGOTADO</span>' : ''}
        </div>
        <div class="product-info">
          <h2 class="product-brand">${product.brand}</h2>
          <h3 class="product-name">${product.name}</h3>
          
          <div class="product-pricing">
            <p class="price-market">
              En ${marketStore}: <span class="price-original-strikethrough">${formatCurrency(marketPrice)}</span>
            </p>
            <p class="price-sale">
              Precio final: ${formatCurrency(product.salePrice)}
            </p>
            <p class="price-savings">
              Ahorras: ${formatCurrency(savings)} (${savingsPercent}%)
            </p>
          </div>
          
          <a href="${product.available ? generateWhatsAppLink(product) : '#'}" 
             class="btn-whatsapp ${!product.available ? 'disabled' : ''}"
             ${product.available ? 'target="_blank" rel="noopener noreferrer"' : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            ${product.available ? 'Lo quiero' : 'Vendido'}
          </a>
        </div>
      </article>
    `;
  }).join('');
  
  grid.innerHTML = html;
};

const setupLightbox = () => {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.close-modal');
  
  if(!modal || !modalImg || !closeBtn) return;

  // Cerrar al dar clic en la X
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });
  
  // Cerrar al dar clic en la zona desenfocada (afuera de la imagen)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Abrir imagen al darle clic a cualquier foto del grid
  document.getElementById('product-grid').addEventListener('click', (e) => {
    if (e.target.classList.contains('product-image')) {
      modalImg.src = e.target.src;
      modal.classList.add('active');
    }
  });
};

const setupTabs = () => {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      // Quitar active de todas
      tabs.forEach(t => t.classList.remove('active'));
      // Poner active a la seleccionada
      e.target.classList.add('active');
      
      currentCategory = e.target.dataset.category;
      renderProducts();
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  renderProducts();
  setupLightbox();
});
