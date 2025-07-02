 const meuCarrossel = document.querySelector('#carouselExampleAutoplaying');

  const carrossel = new bootstrap.Carousel(meuCarrossel, {
    interval: 1000,       // troca automática a cada 1 segundos
    ride: 'carousel',     // inicia o autoplay
    pause: false,         // não pausa ao passar o mouse
    wrap: true,           // volta pro começo
    touch: true           // funciona com dedo
  });