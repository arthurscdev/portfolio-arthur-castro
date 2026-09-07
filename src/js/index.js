let navCheckbox = document.getElementById("menu");

let navList = document.querySelectorAll("a.link-hamburguer");

navList.forEach((link) => {
  link.addEventListener("click", () => (navCheckbox.checked = false));
});

let animacao = document.querySelectorAll(".animar");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aparecer");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
animacao.forEach((element) => {
  observer.observe(element);
});

const observerTop = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    document.querySelector(".scroll-top").classList.remove("ativo");
    document.querySelector(".scroll-top").classList.add("desativar");
  } else {
    document.querySelector(".scroll-top").classList.add("ativo");
    document.querySelector(".scroll-top").classList.remove("desativar");
  }
});

observerTop.observe(document.querySelector("#topo"));
