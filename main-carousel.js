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
