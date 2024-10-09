window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar-custom");
  let scrollPosition = window.scrollY;

  // Jika scroll melebihi 50px, tambahkan kelas 'navbar-scroll'
  if (scrollPosition > 50) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }

  // Ubah transparansi berdasarkan jarak scroll (benar-benar transparan di atas)
  let maxScroll = 300; // Maksimal scroll di mana background menjadi sepenuhnya solid
  let opacity = scrollPosition / maxScroll; // Transparansi dari 0 hingga 1
  opacity = Math.min(opacity, 1); // Batasi opacity hingga 1
  navbar.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`; // Atur background berdasarkan scroll
});

// Cek posisi scroll ketika halaman di-reload
window.addEventListener("load", function () {
  let navbar = document.querySelector(".navbar-custom");
  if (window.scrollY === 0) {
    navbar.classList.remove("navbar-scroll"); // Transparan penuh jika di posisi scroll atas
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Pastikan transparan saat reload di posisi atas
  } else if (window.scrollY > 50) {
    navbar.classList.add("navbar-scroll"); // Tambahkan kelas jika reload di posisi bawah
  }
});

// Inisialisasi carousel
let myCarousel = document.querySelector("#carouselExampleCaptions");
let carousel = new bootstrap.Carousel(myCarousel);

function prevSlide() {
  carousel.prev();
}

function nextSlide() {
  carousel.next();
}

// Menambahkan interaksi ketika kartu di-hover
const cards = document.querySelectorAll(".hover-card");

cards.forEach((card) => {
  // Efek saat mouse masuk
  card.addEventListener("mouseover", () => {
    card.style.transform = "translateY(-10px)";
  });

  // Efek saat mouse keluar
  card.addEventListener("mouseout", () => {
    card.style.transform = "translateY(0)";
  });
});

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
