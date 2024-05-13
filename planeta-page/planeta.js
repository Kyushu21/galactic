// Definimos un array de objetos para cada planeta
let planetas = [
    {
        name: "Mercury",
        size: "Small",
        atmosphere: "Scanty",
        distance: "57,910,000 km"
    },
    {
        name: "Venus",
        size: "Medium",
        atmosphere: "Thick, mainly composed of carbon dioxide",
        distance: "108,200,000 km"
    },
    {
        name: "Earth",
        size: "Medium",
        atmosphere: "Composition of nitrogen and oxygen",
        distance: "149,600,000 km"
    },
    {
        name: "Mars",
        size: "Small",
        atmosphere: "Thin, mainly composed of carbon dioxide",
        distance: "227,900,000 km"
    },
    {
        name: "Jupiter",
        size: "Large",
        atmosphere: "Mainly composed of hydrogen and helium",
        distance: "778,300,000 km"
    },
    {
        name: "Saturn",
        size: "Large",
        atmosphere: "Mainly composed of hydrogen and helium",
        distance: "1,427,000,000 km"
    },
    {
        name: "Uranus",
        size: "Large",
        atmosphere: "Mainly composed of hydrogen, helium, and methane",
        distance: "2,871,000,000 km"
    },
    {
        name: "Neptune",
        size: "Large",
        atmosphere: "Mainly composed of hydrogen, helium, and methane",
        distance: "4,498,000,000 km"
    }
];

// Función para mostrar el planeta buscado
function mostrarPlanetaBuscado() {
    let contenedorPlanetas = document.getElementById("contenedorPlanetas");
    let inputBusqueda = document.getElementById("searchInput").value.toLowerCase();
    let planetInfoContainer = document.getElementById("planetInfoContainer");
      planetInfoContainer.style.display = "block";
    // Limpiamos el contenedor antes de agregar los nuevos elementos
    contenedorPlanetas.innerHTML = "";

    // Filtramos la lista de planetas para encontrar el que coincide con la búsqueda del usuario
    let planetaBuscado = planetas.find(function(planeta) {
        return planeta.name.toLowerCase() === inputBusqueda;
    });

    if (planetaBuscado) {
        let card = document.createElement("div");
        card.classList.add("card", "mb-3");

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let name = document.createElement("h5");
        name.classList.add("card-title");
        name.textContent = planetaBuscado.name;

        let imagen = document.createElement("img");
        imagen.src = "planeta-page/planetasgif/" + planetaBuscado.name.toLowerCase() + ".gif";
        imagen.alt = planetaBuscado.name;
        imagen.classList.add("img-fluid", "rounded");

        let caracteristicasLista = document.createElement("ul"); // Lista para las características
        caracteristicasLista.classList.add("list-group", "list-group-flush");

        let size = document.createElement("li");
        size.classList.add("list-group-item");
        size.textContent = "Size: " + planetaBuscado.size;

        let atmosphere = document.createElement("li");
        atmosphere.classList.add("list-group-item");
        atmosphere.textContent = "Atmosphere: " + planetaBuscado.atmosphere;

        let distance = document.createElement("li");
        distance.classList.add("list-group-item");
        distance.textContent = "Distance: " + planetaBuscado.distance;

        caracteristicasLista.appendChild(size); // Agregar las características a la lista
        caracteristicasLista.appendChild(atmosphere);
        caracteristicasLista.appendChild(distance);

        cardBody.appendChild(name);
        cardBody.appendChild(imagen);
        cardBody.appendChild(caracteristicasLista); // Agregar la lista al cuerpo principal de la tarjeta

        card.appendChild(cardBody);

        contenedorPlanetas.appendChild(card);
    } else {
        // Si no se encontró ningún planeta coincidente, mostramos un mensaje de error
        const mensajeError = document.createElement("p");
        mensajeError.textContent = "No se encontró ningún planeta con ese nombre.";
        contenedorPlanetas.appendChild(mensajeError);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchButton").addEventListener("click", mostrarPlanetaBuscado);
});
