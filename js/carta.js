async function cargarCarta() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const res = await fetch('cartas.json');
  const cartas = await res.json();
  const carta = cartas.find(c => c.id === id);

  if (!carta) {
    document.body.innerHTML = "<h2>Carta no encontrada</h2>";
    return;
  }

  document.querySelector('h1').textContent = carta.titulo;

  const textoDiv = document.querySelector('.texto');
  carta.contenido.forEach((linea, i) => {
    const p = document.createElement('p');
    p.innerHTML = carta.resaltados.includes(i)
      ? `<span class="highlight">${linea}</span>`
      : linea;
    textoDiv.appendChild(p);
  });
}

window.onload = cargarCarta;
