const multipleItemCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false,
    wrap: false,
  });

  let carouselWidth = $(".carousel-inner")[0].scrollWidth; // Total lebar carousel
  let cardWidth = $(".carousel-item").outerWidth(true); // Lebar satu item carousel
  let scrollPosition = 0;

  // Clone item pertama dan terakhir untuk menciptakan efek looping
  const firstClone = $(".carousel-item").first().clone().addClass("cloned");
  const lastClone = $(".carousel-item").last().clone().addClass("cloned");

  $(".carousel-item").last().after(firstClone); // Duplikasi item pertama di akhir
  $(".carousel-item").first().before(lastClone); // Duplikasi item terakhir di awal

  // Atur listener untuk tombol 'Next'
  $(".carousel-control-next").on("click", function () {
    if (!$(".carousel-inner").is(":animated")) {
      scrollPosition += cardWidth; // Geser posisi scroll ke kanan
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600, function () {
        // Jika sudah mencapai item terakhir (clone), reset ke item pertama tanpa animasi
        if ($(".carousel-inner").scrollLeft() >= carouselWidth - cardWidth) {
          scrollPosition = cardWidth; // Reset ke posisi pertama asli
          $(".carousel-inner").scrollLeft(scrollPosition);
        }
      });
    }
  });

  // Atur listener untuk tombol 'Previous'
  $(".carousel-control-prev").on("click", function () {
    if (!$(".carousel-inner").is(":animated")) {
      scrollPosition -= cardWidth; // Geser posisi scroll ke kiri
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600, function () {
        // Jika sudah mencapai item pertama (clone), reset ke item terakhir tanpa animasi
        if ($(".carousel-inner").scrollLeft() <= 0) {
          scrollPosition = carouselWidth - cardWidth * 2; // Reset ke posisi terakhir asli
          $(".carousel-inner").scrollLeft(scrollPosition);
        }
      });
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}
