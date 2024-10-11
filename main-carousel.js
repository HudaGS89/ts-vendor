// Carousel kedua interaksi
let currentIndexFeatures = 0;
const itemsFeatures = document.querySelector(".carousel-items"); // Pastikan ini merujuk ke carousel kedua
const itemWidthFeatures = document.querySelector(".carousel-items .col-3").offsetWidth; // Menggunakan elemen dari carousel kedua
const totalItemsFeatures = document.querySelectorAll(".carousel-items .col-3").length;
const visibleItemsFeatures = 4; // Jumlah item yang terlihat dalam satu waktu

function updateCarouselFeatures() {
  // Update posisi carousel kedua
  itemsFeatures.style.transform = `translateX(-${currentIndexFeatures * itemWidthFeatures}px)`;
}

function nextSlideFeautures() {
  if (currentIndexFeatures < totalItemsFeatures - visibleItemsFeatures) {
    currentIndexFeatures++;
  } else {
    currentIndexFeatures = 0; // Kembali ke awal jika mencapai akhir
  }
  updateCarouselFeatures();
}

function prevSlideFeautures() {
  if (currentIndexFeatures > 0) {
    currentIndexFeatures--;
  } else {
    currentIndexFeatures = totalItemsFeatures - visibleItemsFeatures; // Kembali ke item terakhir
  }
  updateCarouselFeatures();
}

// Tombol navigasi untuk carousel kedua
document.querySelector(".carousel-control-next-feature").addEventListener("click", nextSlideFeautures);
document.querySelector(".carousel-control-prev-feature").addEventListener("click", prevSlideFeautures);
