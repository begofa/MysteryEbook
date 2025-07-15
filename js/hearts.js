
(function generarCorazonesMejorados() {
  const assets = [
    'assets/corazon-rosa1.png',
    'assets/corazon-rosa2.jpg',
    'assets/corazon-azul1.png',
    'assets/corazon-azul2.png'
  ];
  const total = Math.floor(Math.random() * 3) + 3; // entre 3 y 5 corazones

  for (let i = 0; i < total; i++) {
    const img = document.createElement('img');
    img.src = assets[Math.floor(Math.random() * assets.length)];
    img.className = 'heart';

    const dur = 12 + Math.random() * 10;
    const delay = Math.random() * 5;
    const scale = 0.8 + Math.random() * 0.6;
    const rotate = Math.random() > 0.5 ? -10 : 10;
    const direction = Math.random() > 0.5 ? 'normal' : 'reverse';
    const startX = Math.random() * 100;
    const endX = startX + (Math.random() * 20 - 10);
    const animationName = `heartFloat${i}`;

    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes ${animationName} {
        0% {
          transform: translate(${startX}vw, 100vh) scale(${scale}) rotate(0deg);
          opacity: 0;
        }
        25% {
          transform: translate(${startX + 5}vw, 75vh) scale(${scale * 1.05}) rotate(${rotate}deg);
          opacity: 0.7;
        }
        50% {
          transform: translate(${endX}vw, 50vh) scale(${scale}) rotate(0deg);
        }
        75% {
          transform: translate(${endX - 5}vw, 25vh) scale(${scale * 1.1}) rotate(${rotate}deg);
          opacity: 0.9;
        }
        100% {
          transform: translate(${startX}vw, -10vh) scale(${scale}) rotate(0deg);
          opacity: 0;
        }
      }
      .heart.${animationName} {
        animation: ${animationName} ${dur}s cubic-bezier(0.33, 1, 0.68, 1) ${delay}s infinite ${direction};
      }
    `;
    document.head.appendChild(style);

    img.classList.add(animationName);
    document.body.appendChild(img);
  }
})();
