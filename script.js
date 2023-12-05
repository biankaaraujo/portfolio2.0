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

  // Adiciona evento para fechar ao clicar na opção do menu
  ancora.addEventListener("click", function closeOnClick(event) {
    const nav = document.querySelector("nav");

    if (event.target === ancora) {
      nav.style.opacity = "0";
      nav.style.transition = "opacity 0.3s linear";
    }
  });
});

// Evento para abrir e fechar o menu hamburguer
const menuButton = document.getElementById("menu-button");
const menu = document.querySelector("nav ul");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", function closeMenu() {
  if (menu.style.display === "flex") {
    nav.style.opacity = "0";
    setTimeout(() => {
      menu.style.display = "none";
      nav.style.transition = "opacity 0.5s linear";
    }, 500);
  } else {
    menu.style.display = "flex";
    nav.style.transition = "opacity 0.5s lineae";
    nav.style.opacity = "1";
  }
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
