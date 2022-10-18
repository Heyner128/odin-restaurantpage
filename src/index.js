import createAccueilSection from "./accueil.js";
import createCarteSection from "./carte.js";
import createReseauxSociauxSection from "./reseauxSociaux.js";
import createQuiSommesNousSection from "./quiSommesNous.js";
import "./style.css";

document.querySelector("body").className = "relative bg-slate-50";
navbarAppender();
contentAppender(1);
footerAppender();

function contentAppender(buttonNumber) {
  document.querySelector("#content").innerHTML = "";

  document.querySelectorAll("nav button").forEach((btn, index) => {
    index + 1 == buttonNumber
      ? btn.classList.add("font-bold")
      : btn.classList.remove("font-bold");
  });

  switch (buttonNumber) {
    case 1:
      document.querySelector("#content").appendChild(createAccueilSection());
      break;
    case 2:
      document.querySelector("#content").appendChild(createCarteSection());
      break;
    case 3:
      document
        .querySelector("#content")
        .appendChild(createQuiSommesNousSection());
      break;
    case 4:
      document
        .querySelector("#content")
        .appendChild(createReseauxSociauxSection());
      break;
    default:
      break;
  }
}

function navbarAppender() {
  const nav = document.createElement("nav");
  nav.className = "absolute mt-0 w-full z-20";

  const ul = document.createElement("ul");
  ul.className = "flex gap-20 py-6 pl-10 text-white bg-black/50";

  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");

  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const btn3 = document.createElement("button");
  const btn4 = document.createElement("button");

  btn1.textContent = "Accueil";
  btn1.onclick = () => {
    contentAppender(1);
  };
  btn2.textContent = "La carte";
  btn2.onclick = () => {
    contentAppender(2);
  };
  btn3.textContent = "Qui sommes nous?";
  btn3.onclick = () => {
    contentAppender(3);
  };
  btn4.textContent = "Contactez-nous";
  btn4.onclick = () => {
    contentAppender(4);
  };

  ul.appendChild(li1);
  li1.appendChild(btn1);

  ul.appendChild(li2);
  li2.appendChild(btn2);

  ul.appendChild(li3);
  li3.appendChild(btn3);

  ul.appendChild(li4);
  li4.appendChild(btn4);

  nav.appendChild(ul);

  document
    .querySelector("body")
    .insertBefore(nav, document.querySelector("body").firstChild);
}

function footerAppender() {
  const footer = document.createElement("footer");
  footer.className = "static z-20 bg-red-700 text-white py-4 px-10 text-right";
  footer.textContent = "Un texte pour le pied de page";
  document.querySelector("body").appendChild(footer);
}
