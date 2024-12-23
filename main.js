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

// Carousel Feature - 2nd Carousel

$(document).ready(function () {
  const multipleItemCarousel = document.querySelector("#carouselFeature");

  if (window.matchMedia("(min-width:576px)").matches) {
    // const carousel = new bootstrap.Carousel(multipleItemCarousel, { interval: false });

    var carouselWidth = $("#carouselFeature .carousel-inner")[0].scrollWidth;
    var cardWidth = $("#carouselFeature .carousel-item").width();
    var scrollPosition = 0;

    $("#carouselFeature .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 3) {
        scrollPosition = scrollPosition + cardWidth;
      } else {
        scrollPosition = 0; // Reset to the beginning for infinite loop
      }
      $("#carouselFeature .carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    });

    $("#carouselFeature .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition = scrollPosition - cardWidth;
      } else {
        scrollPosition = carouselWidth - cardWidth * 3; // Go to the end for infinite loop
      }
      $("#carouselFeature .carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    });
  } else if (window.matchMedia("(min-width:995px)").matches) {
    $("#carouselFeature .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition = scrollPosition + cardWidth;
      } else {
        scrollPosition = 0; // Reset to the beginning for infinite loop
      }
      $("#carouselFeature .carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    });

    $("#carouselFeature .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition = scrollPosition - cardWidth;
      } else {
        scrollPosition = carouselWidth - cardWidth * 4; // Go to the end for infinite loop
      }
      $("#carouselFeature .carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    });
  } else {
    $(multipleItemCarousel).addClass("slide");
  }
  // Iterasi melalui setiap .hover-card saat hover
  $("#carouselFeature .hover-card").hover(
    function () {
      // Ambil judul dan deskripsi dari .card-body
      var judulBaru = $(this).find(".card-body .card-title").text(); // Ambil judul dari .card-body
      var deskripsiBaru = $(this).find(".card-body .card-text").text(); // Ambil deskripsi dari .card-body

      // Tempatkan teks ke dalam .new-text
      $(this).find(".new-text h5").text(judulBaru);
      $(this).find(".new-text p").text(deskripsiBaru);

      // Ubah warna teks menjadi putih
      $(this).find(".new-text h5, .new-text p").css("color", "white");

      // Tampilkan new-text
      $(this).find(".new-text").css("opacity", "1"); // Menampilkan teks
    },
    function () {
      // Optional: Anda bisa menghapus teks atau mengembalikannya saat hover berakhir
      // Jika tidak ingin mengubah apapun saat hover hilang, hapus bagian ini
      $(this).find(".new-text").css("opacity", "0"); // Menyembunyikan teks saat mouse keluar
    }
  );
});

// Portfolio

$(document).ready(function () {
  $(".filter-btn").on("click", function () {
    var filter = $(this).attr("data-filter");

    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    if (filter === "all") {
      $(".portfolio-item").show();
    } else {
      $(".portfolio-item").hide();
      $("." + filter).show();
    }
  });
});

// our clients
document.addEventListener("DOMContentLoaded", function () {
  const clientsLogos = document.querySelector(".clients-logos");
  clientsLogos.classList.add("animate__animated", "animate__fadeInUp");
});

// Footer
$(document).ready(function () {
  $("#subscribe-btn").click(function () {
    const email = $("#email").val();
    if (email) {
      alert("Thank you for subscribing!");
      $("#email").val(""); // Clear the email field
    } else {
      alert("Please enter a valid email address.");
    }
  });
});
