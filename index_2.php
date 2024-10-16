<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TS Vendor</title>

    <!-- BS5 -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css">

    <!-- Fontawesome -->
    <link rel="stylesheet" href="assets/fontawesome/css/all.min.css">

</head>
<body>
    <!-- Header dan Navigation -->
    <header>
        <nav class="navbar navbar-custom fixed-top navbar-expand-sm navbar-scroll" data-bs-theme="dark">
            <div class="container-fluid d-flex justify-content-between mx-0 mx-sm-4">
                <!-- Brand on the left -->
                <a class="navbar-brand" href="#">TS Vendor</a>

                <!-- Toggler and navigation menu on the right -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contacts</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <!-- Carousel Jumbotron -->
    <div id="carouselExampleCaptions" class="carousel slide position-relative">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="carousel-image-container">
                            <img src="assets/img/img-1.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-overlay"></div>
                            <div class="row">
                                <div class="col-md-6 d-flex justify-content-center align-items-center">
                                    <div class="carousel-caption col-md-7 d-md-block text-md-start">
                                        <h5>Mau bikin kaos satuan? Bisa banget!</h5>
                                        <button class="btn btn-outline-light custom-btn">
                                            <i class="fa-brands fa-whatsapp"></i> Chat Sekarang!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-image-container">
                            <img src="assets/img/img2.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-overlay"></div>
                            <div class="row">
                                <div class="col-md-6 d-flex justify-content-center align-items-center">
                                    <div class="carousel-caption d-md-block text-md-start">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-image-container">
                            <img src="assets/img/img3.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-overlay"></div>
                            <div class="row">
                                <div class="col-md-6 d-flex justify-content-center align-items-center">
                                    <div class="carousel-caption d-md-block text-md-start">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Icon container moved outside of carousel items -->
        <div class="icon-container">
            <div class="social-icons">
                <div class="social-label">Connect with Us :</div> <!-- Pindahkan label ke atas ikon -->
                <div class="social-icon-group">
                    <a href="#" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="social-icon"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="social-icon"><i class="fa-brands fa-tiktok"></i></a>
                </div>
            </div>
            <div class="carousel-controls">
                <div class="carousel-icon" id="prevSlide" onclick="prevSlide()">
                    <i class="fa-solid fa-arrow-left"></i> <!-- Ikon untuk slide sebelumnya -->
                </div>
                <span>|</span> <!-- Pemisah -->
                <div class="carousel-icon" id="nextSlide" onclick="nextSlide()">
                    <i class="fa-solid fa-arrow-right"></i> <!-- Ikon untuk slide setelahnya -->
                </div>
            </div>
        </div>
    </div>

    <!-- Content -->
    <div class="container-fluid">
    <div class="row">
        <div class="col-sm-6">
            tes
        </div>
        <div class="col-sm-6">
            tes
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
    </div>

    <!-- Include Popper.js first -->
    <script src="assets/js/popper.min.js"></script>

    <!-- Include Bootstrap JavaScript -->
    <script src="assets/js/bootstrap.bundle.min.js"></script>

    <!-- Activate tooltips (optional) -->
    <script>
        let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    </script>

    
<script>
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar-custom');
    let scrollPosition = window.scrollY;

    // Jika scroll melebihi 50px, tambahkan kelas 'navbar-scroll'
    if (scrollPosition > 50) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }

    // Ubah transparansi berdasarkan jarak scroll (benar-benar transparan di atas)
    let maxScroll = 300; // Maksimal scroll di mana background menjadi sepenuhnya solid
    let opacity = scrollPosition / maxScroll; // Transparansi dari 0 hingga 1
    opacity = Math.min(opacity, 1); // Batasi opacity hingga 1
    navbar.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`; // Atur background berdasarkan scroll
});

// Cek posisi scroll ketika halaman di-reload
window.addEventListener('load', function() {
    let navbar = document.querySelector('.navbar-custom');
    if (window.scrollY === 0) {
        navbar.classList.remove('navbar-scroll'); // Transparan penuh jika di posisi scroll atas
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Pastikan transparan saat reload di posisi atas
    } else if (window.scrollY > 50) {
        navbar.classList.add('navbar-scroll'); // Tambahkan kelas jika reload di posisi bawah
    }
});


        let myCarousel = document.querySelector('#carouselExampleCaptions');
        let carousel = new bootstrap.Carousel(myCarousel, {
            interval: 2000, // Ganti slide setiap 2 detik
            wrap: true
        });

        function prevSlide() {
            carousel.prev();
        }

        function nextSlide() {
            carousel.next();
        }
    </script>
    

</body>
</html>
