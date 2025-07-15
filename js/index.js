fetch('cartas.json')
  .then(res => res.json())
  .then(cartas => {
    const contenedor = document.getElementById('listaCartas');

    // tooltip global
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);


    cartas.forEach(carta => {
      const card = document.createElement('a');
      card.href = `carta.html?id=${carta.id}`;
      card.className = 'card-link';

      card.innerHTML = `
        <div class="emoji">${carta.emoji}</div>
        <div class="titulo">${carta.titulo}</div>
      `;

      // mostrar tooltip
      card.addEventListener('mouseover', (e) => {
       tooltip.textContent = carta.tooltip || "¿Estás lista para recibir este mensaje hoy?";
       tooltip.classList.add('show');
      });
      card.addEventListener('mouseout', () => {
       tooltip.classList.remove('show');
      });


      card.addEventListener('mousemove', (e) => {
        tooltip.style.left = e.pageX + 15 + 'px';
        tooltip.style.top = e.pageY + 15 + 'px';
      });


      contenedor.appendChild(card);
    });

        // Botón de cierre al final de la lista
        const botonCierre = document.createElement('a');
        botonCierre.href = 'final.html';
        botonCierre.className = 'card-link card-cierre';
        botonCierre.innerHTML = `
          <div class="emoji">🕊️</div>
          <div class="titulo">Cerrar este capítulo</div>
          <div class="preview">Una despedida suave... cuando sientas que es el momento.</div>
        `;
contenedor.appendChild(botonCierre);


  });
