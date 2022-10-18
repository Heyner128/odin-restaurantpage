import { containerClasses } from "@mui/system";

export default function createQuiSommesNousSection() {
  const container = document.createElement("div");
  container.id = "Qui sommes nous";
  container.className = "static pt-24 pb-10 min-h-screen";
  const title = document.createElement("h1");
  title.className = "text-xl text-center font-bold";
  title.textContent = "Qui-sommes nous?";

  const content = document.createElement("p");
  content.className = "px-36 pt-6 text-justify";
  content.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat magna nec tempor mollis. Praesent semper rhoncus felis, nec 
  vestibulum mauris ultricies mattis. Nunc a tellus eros. Vivamus sit amet dui eget dui pulvinar laoreet. Integer non sodales velit. Vestibulum congue ac nisi 
  condimentum dapibus. Donec fermentum varius ex id malesuada. Curabitur ex nisl, elementum nec pulvinar quis, tincidunt ac elit. Morbi eu urna ullamcorper, 
  hendrerit enim at, ultrices mi. Etiam enim mauris, mollis sit amet tortor sed, vestibulum rhoncus quam. Maecenas dignissim eget lorem facilisis pharetra. 
  Morbi quam nisl, cursus pellentesque augue a, venenatis condimentum odio. Nunc quis sagittis diam.`;

  container.appendChild(title);
  container.appendChild(content);
  return container;
}
