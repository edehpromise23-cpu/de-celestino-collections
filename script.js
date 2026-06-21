// ===== Mobile menu toggle =====
const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryNav');

menuToggle.addEventListener('click', () => {
  primaryNav.classList.toggle('open');
});

primaryNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('open');
  });
});

// ===== Category filter =====
const chips = document.querySelectorAll('.cat-chip');
const cards = document.querySelectorAll('#productGrid .card');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    const filter = chip.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all' || card.dataset.cat === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ===== Lightbox (tap a product photo to view it full size) =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxImg.src = '';
}
