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

// Menu hamburguer
var menuButton = document.getElementById("menu-button");
var menu = document.querySelector("nav ul");

menuButton.addEventListener("click", function () {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

// Evento de clique para abrir/fechar mais detalhes sobre o projeto
document.querySelectorAll("#projetos .itensProjetos .item").forEach((item) => {
  item.addEventListener("click", function (e) {
    const projetoIdx = this.getAttribute("idx");
    const popUp = document.getElementById(projetoIdx).parentElement;

    popUp.style.transition = "opacity 0.5s ease-in-out";
    popUp.style.opacity = "1";
    popUp.style.display = "inline-block";
  });
});

function closePopupWithButton(event) {
  const parentElement = event.parentElement.parentElement;

  parentElement.style.opacity = "0";
  setTimeout(() => {
    parentElement.style.display = "none";
    parentElement.style.transition = "";
  }, 500);
}

function closePopup(popUp) {
  popUp.style.opacity = "0";
  setTimeout(() => {
    popUp.style.display = "none";
    popUp.style.transition = "";
  }, 500);
}

// novo
document.querySelectorAll("#projetos .itensProjetos .item").forEach((item) => {
  item.addEventListener("click", function (e) {
    const projetoIdx = this.getAttribute("idx");
    const popUp = document.getElementById(projetoIdx).parentElement;

    openPopup(popUp);
  });
});

function openPopup(popUp) {
  popUp.style.transition = "opacity 0.5s ease-in-out";
  popUp.style.opacity = "1";
  popUp.style.display = "inline-block";

  // Adiciona evento para fechar ao pressionar "Esc"
  document.addEventListener("keydown", function closeOnEsc(event) {
    if (event.key === "Escape") {
      closePopup(popUp);
      document.removeEventListener("keydown", closeOnEsc);
    }
  });

  // Adiciona evento para fechar ao clicar fora do popup
  popUp.addEventListener("click", function closeOnClickOutside(event) {
    if (event.target === popUp) {
      closePopup(popUp);
      popUp.removeEventListener("click", closeOnClickOutside);
    }
  });
}
