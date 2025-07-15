(function generarMariposas() {
    const cantidad = Math.floor(Math.random() * 4) + 2; // 2 a 5 mariposas
    const imagenes = [
      'assets/butterfly1.png',
      'assets/butterfly2.png',
      'assets/butterfly3.png',
      'assets/butterfly4.png',
      'assets/butterfly5.png'
    ];
  
    for (let i = 0; i < cantidad; i++) {
      const img = document.createElement('img');
      img.src = imagenes[Math.floor(Math.random() * imagenes.length)];
      img.className = 'butterfly';
  
      const duracion = 18 + Math.random() * 10; // 18s a 28s
      const inicioLeft = -100 - Math.random() * 100;
      const finLeft = 100 + Math.random() * 20;
      const inicioBottom = 5 + Math.random() * 20;
      const picoBottom = 60 + Math.random() * 20;
      const rotacion = Math.random() > 0.5 ? 10 : -10;
  
      const nombreAnimacion = `flyAnim${i}`;
      const estilo = document.createElement('style');
      estilo.innerHTML = `
        @keyframes ${nombreAnimacion} {
          0% { left: ${inicioLeft}px; bottom: ${inicioBottom}%; transform: rotate(0deg); }
          50% { left: 50%; bottom: ${picoBottom}%; transform: rotate(${rotacion}deg); }
          100% { left: ${finLeft}%; bottom: ${inicioBottom}%; transform: rotate(0deg); }
        }
      `;
      document.head.appendChild(estilo);
  
      img.style.position = 'absolute';
      img.style.width = '50px';
      img.style.opacity = '0.8';
      img.style.left = `${inicioLeft}px`;
      img.style.bottom = `${inicioBottom}%`;
      img.style.animation = `${nombreAnimacion} ${duracion}s ease-in-out infinite`;
  
      document.body.appendChild(img);
    }
  })();
  
