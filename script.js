const nav = document.querySelector("nav");
const menuButton = document.getElementById("menu-button");

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

    const displayBotao = window
      .getComputedStyle(menuButton)
      .getPropertyValue("display");
    
    if (displayBotao !== "none") {
      nav.style.opacity = "0";
      nav.style.transition = "opacity 0.3s linear";
    }
  });

  // Adiciona evento para fechar ao clicar na opção do menu
  // ancora.addEventListener("click", function closeOnClick(event) {
  //   const nav = document.querySelector("nav");
  //   const menuButton = document.getElementById("menu-button");

  //   if ((event.target === ancora) & (menuButton.style.display === "flex")) {
  //     nav.style.opacity = "0";
  //     nav.style.transition = "opacity 0.3s linear";
  //   }
  // });
});

// Evento para abrir e fechar o menu hamburguer
const menu = document.querySelector("nav ul");

menuButton.addEventListener("click", function closeMenu() {
  if (menu.style.display === "flex") {
    nav.style.opacity = "0";
    setTimeout(() => {
      menu.style.display = "none";
      nav.style.transition = "opacity 0.5s linear";
    }, 500);
  } else {
    menu.style.display = "flex";
    nav.style.transition = "opacity 0.5s linear";
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
      margin: 20,
    },
    900: {
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

// Função para verificar o tamanho da tela e recarregar a página se necessário
function verificarTamanhoDaTela() {
  // Defina o tamanho limite, por exemplo, 900 pixels
  var tamanhoLimite = 900;

  if (window.innerWidth <= tamanhoLimite) {
    location.reload();
  }
}
// Adiciona um ouvinte de evento para o evento de redimensionamento da janela
window.addEventListener('resize', verificarTamanhoDaTela);

