// Criar evento de click nos itens do menu para dar scroll na página
document.querySelectorAll("nav ul li a[href^='#']").forEach((ancora) => {
  ancora.addEventListener("click", function (e) {
    e.preventDefault(); // cancela evento padrão

    let target = document.querySelector(this.getAttribute("href"));
    const menuHeight = 100;

    window.scrollBy({
      top: target.getBoundingClientRect().top - menuHeight,
      behavior: "smooth", // evento de suavidade
    });
  });
});

// Evento carrossel nos itens projeto
$(".owl-carousel").owlCarousel({
  stagePadding: 50,
  loop: true,
  margin: 50,
  nav: true,
  dots: false,
  autoWidth: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
