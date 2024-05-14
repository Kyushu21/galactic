$(document).ready(function () {
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=532jEuHXqdw8WYRq2DDOWH9Q0npQ98hup14gZTdF&count=5"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      return response.json();
    })
    .then((data) => {
      if (Array.isArray(data)) {
        // Carrusel de imágenes
        const carouselInner = $("#imageCarousel .carousel-inner");
        data.forEach(function (image, index) {
          const activeClass = index === 0 ? "active" : "";
          const item = `
                  <div class="carousel-item ${activeClass}">
                      <img src="${image.hdurl}" class="d-block w-100" alt="Imagen astronómica">
                      <div class="carousel-caption d-none d-md-block">
                        <h5 class="information-p">${image.title}</h5>
                        <p class="information-p">${image.date}</p>
                        <p class="information-p">${image.explanation}</p>
                      </div>
                  </div>
              `;
          carouselInner.append(item);
        });
      } else {
        console.error("La respuesta de la API no es un array:", data);
      }
    })
    .catch((error) => {
      console.error("Error al obtener las imágenes astronómicas:", error);
    });
  // Obtener noticias de la NASA
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=532jEuHXqdw8WYRq2DDOWH9Q0npQ98hup14gZTdF&count=6"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      return response.json();
    })
    .then((newsData) => {
      // Manipula los datos de las noticias aquí randoms
      displayNews(newsData.slice(0, 3)); // Limitar a 3 noticias
    })
    .catch((error) => {
      console.error("Error al obtener las noticias de la NASA:", error);
    });

  // Función para mostrar las noticias
  function displayNews(newsData) {
    const newsContainer = $("#newsContainer");

    newsData.forEach((news) => {
      const newsItem = `
      <div class="col-md-6 col-lg-4">
        <div class="card mb-4">
          <img src="${news.url}" class="card-img-top" alt="NASA News">
          <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.explanation}</p>
            <button class="btn btn-primary btn-sm toggle-info-btn">See information</button>
          </div>
        </div>
      </div>
    `;
      newsContainer.append(newsItem);
    });

    // Evento para mostrar/ocultar información completa
    $(".toggle-info-btn").click(function () {
      const cardBody = $(this).siblings(".card-text");
      cardBody.slideToggle();
      $(this).text(
        cardBody.is(":visible") ? "Hide information" : "See information"
      );
    });
  }
});
