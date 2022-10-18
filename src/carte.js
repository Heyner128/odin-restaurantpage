import imageElement1 from "./antipasti.png";
import imageElement2 from "./burrata.png";
import imageElement3 from "./salades.png";
import imageElement4 from "./pasta.png";

export default function createCarteSection() {
  const container = document.createElement("article");
  container.id = "carte";
  container.className =
    "static pt-24 pb-10 px-6 grid grid-cols-3 gap-x-4 gap-y-6 min-h-screen";
  container.appendChild(
    createElementCarte(
      "Antipasti",
      imageElement1,
      `une description de l'antipasti`
    )
  );

  container.appendChild(
    createElementCarte("Burrata", imageElement2, `une description du burrata`)
  );

  container.appendChild(
    createElementCarte("Salades", imageElement3, `une description des salades`)
  );

  container.appendChild(
    createElementCarte("Pasta", imageElement4, `une description du pasta`)
  );

  return container;
}

function createElementCarte(titleText, imgSrc, descriptionText) {
  const container = document.createElement("section");
  container.className = "flex flex-col bg-white rounded-md shadow-md py-4";

  const title = document.createElement("h3");
  title.textContent = titleText;
  title.className = "prose font-semibold text-lg text-center p-2";

  const image = document.createElement("img");
  image.src = imgSrc;
  image.className = "object-scale-down h-[18rem]";
  image.alt = "image-carte";

  const description = document.createElement("p");
  description.textContent = descriptionText;
  description.className = "p-8";

  container.appendChild(title);
  container.appendChild(image);
  container.appendChild(description);

  return container;
}
