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
