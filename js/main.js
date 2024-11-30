(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// Array com os caminhos das imagens
const imagePaths = [
    'img/galeria/gal1.jpg', 'img/galeria/gal2.jpg', 'img/galeria/gal3.jpg',
    'img/galeria/gal4.jpg', 'img/galeria/gal5.jpg', 'img/galeria/gal6.jpg',
    'img/galeria/gal7.jpg', 'img/galeria/gal8.jpg', 'img/galeria/gal9.jpg',
    'img/galeria/gal10.jpg', 'img/galeria/gal11.jpg', 'img/galeria/gal12.jpg',
    'img/galeria/gal13.jpg', 'img/galeria/gal14.jpg', 'img/galeria/gal15.jpg'
];

// Variáveis para controle da exibição
let currentIndex = 0;
const imagesPerPage = 9; // Quantas imagens exibir por vez

// Selecionar os elementos do DOM
const galleryContainer = document.getElementById('gallery-container');
const loadMoreBtn = document.getElementById('load-more-btn');

// Função para carregar as próximas imagens
function loadImages() {
    const nextIndex = currentIndex + imagesPerPage;
    const imagesToDisplay = imagePaths.slice(currentIndex, nextIndex);

    imagesToDisplay.forEach((path) => {
        // Criar o elemento de imagem
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-4 col-md-6 wow fadeInUp';

        const galleryItem = `
            <div class="gallery-item">
                <a href="${path}" target="_blank">
                    <img class="gallery-image" src="${path}" alt="Galeria">
                </a>
            </div>
        `;

        colDiv.innerHTML = galleryItem;
        galleryContainer.appendChild(colDiv);
    });

    // Atualizar o índice atual
    currentIndex = nextIndex;

    // Esconder o botão se todas as imagens forem exibidas
    if (currentIndex >= imagePaths.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// Adicionar o evento de clique ao botão
loadMoreBtn.addEventListener('click', loadImages);

// Carregar as primeiras imagens ao inicializar
loadImages();

