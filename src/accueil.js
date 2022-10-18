

export default function createAccueilSection() {
    const container = document.createElement('article');
    container.className = 'static z-10 bg-accueil bg-no-repeat bg-cover w-full h-[100vh] grid items-center justify-items-center text-center text-white';
    const text = document.createElement('section');
    text.className = 'bg-black/50 p-5 rounded-lg'
    const title = document.createElement('h1');
    title.className = 'text-3xl'
    title.textContent = `Bienvenue à mon restaurant`;
    const subtitle = document.createElement('i');
    subtitle.textContent = `12 rue faux`;
    subtitle.className = 'text-xl';

    text.appendChild(title);
    text.appendChild(subtitle);
    
    container.appendChild(text);
    

    return container;
}