const vuelos = [
  {
    nombre: "Vuelo Privado a Miami",
    cantidadDisponible: 5,
    precio: 12000,
    imagen: "miami.jpg",
    codigo: "VP001",
    categoria: "Internacional",
    escalas: 0,
    descripcion:
      "Vuelo privado directo desde Bogotá a Miami con servicio de lujo a bordo.",
    duracion: "3h 30m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Miami International, Miami",
    politicaCancelacion: "Cancelación gratuita hasta 24 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo Charter a Cartagena",
    cantidadDisponible: 3,
    precio: 5000,
    imagen: "cartagena.jpg",
    codigo: "VP002",
    categoria: "Nacional",
    escalas: 0,
    descripcion:
      "Vuelo charter desde Medellín a Cartagena, ideal para viajes de negocios y placer.",
    duracion: "1h 15m",
    aeropuertoSalida: "José María Córdova, Medellín",
    destino: "Rafael Núñez, Cartagena",
    politicaCancelacion: "Cancelación gratuita hasta 48 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo Económico a Nueva York",
    cantidadDisponible: 2,
    precio: 15000,
    imagen: "ny.jpg",
    codigo: "VP003",
    categoria: "Internacional",
    escalas: 1,
    descripcion:
      "Vuelo económico desde Bogotá a Nueva York con escala en Ciudad de México.",
    duracion: "7h 20m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "JFK, Nueva York",
    politicaCancelacion: "No reembolsable.",
  },
  {
    nombre: "Vuelo de Negocios a San Andrés",
    cantidadDisponible: 4,
    precio: 3000,
    imagen: "sanandres.jpg",
    codigo: "VP004",
    categoria: "Nacional",
    escalas: 0,
    descripcion:
      "Vuelo exclusivo para ejecutivos a la hermosa isla de San Andrés.",
    duracion: "2h 0m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Gustavo Rojas Pinilla, San Andrés",
    politicaCancelacion: "Cancelación gratuita hasta 24 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo a Cancún",
    cantidadDisponible: 3,
    precio: 14000,
    imagen: "cancun.jpg",
    codigo: "VP005",
    categoria: "Internacional",
    escalas: 0,
    descripcion:
      "Vuelo directo a Cancún, perfecto para unas vacaciones de ensueño.",
    duracion: "4h 30m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Cancún International, Cancún",
    politicaCancelacion: "Cancelación gratuita hasta 72 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo Charter a Barranquilla",
    cantidadDisponible: 5,
    precio: 2500,
    imagen: "barranquilla.jpg",
    codigo: "VP006",
    categoria: "Nacional",
    escalas: 0,
    descripcion: "Vuelo charter directo desde Medellín a Barranquilla.",
    duracion: "1h 0m",
    aeropuertoSalida: "José María Córdova, Medellín",
    destino: "Ernesto Cortissoz, Barranquilla",
    politicaCancelacion: "Cancelación gratuita hasta 24 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo a Madrid",
    cantidadDisponible: 2,
    precio: 20000,
    imagen: "madrid.jpg",
    codigo: "VP007",
    categoria: "Internacional",
    escalas: 1,
    descripcion:
      "Vuelo a Madrid con escala en Bogotá, una gran opción para explorar Europa.",
    duracion: "11h 0m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Adolfo Suárez Madrid-Barajas, Madrid",
    politicaCancelacion: "No reembolsable.",
  },
  {
    nombre: "Vuelo a Santiago de Chile",
    cantidadDisponible: 3,
    precio: 18000,
    imagen: "santiago.jpg",
    codigo: "VP008",
    categoria: "Internacional",
    escalas: 1,
    descripcion:
      "Vuelo a Santiago de Chile con escala en Lima, ideal para turismo y negocios.",
    duracion: "9h 0m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Arturo Merino Benítez, Santiago",
    politicaCancelacion: "Cancelación gratuita hasta 48 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo a Buenos Aires",
    cantidadDisponible: 4,
    precio: 16000,
    imagen: "buenosaires.jpg",
    codigo: "VP009",
    categoria: "Internacional",
    escalas: 1,
    descripcion: "Explora Buenos Aires con este vuelo directo desde Bogotá.",
    duracion: "8h 0m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Ministro Pistarini, Buenos Aires",
    politicaCancelacion: "Cancelación gratuita hasta 72 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo Charter a Pereira",
    cantidadDisponible: 6,
    precio: 2000,
    imagen: "pereira.jpg",
    codigo: "VP010",
    categoria: "Nacional",
    escalas: 0,
    descripcion:
      "Vuelo charter desde Medellín a Pereira, ideal para viajes cortos.",
    duracion: "0h 30m",
    aeropuertoSalida: "José María Córdova, Medellín",
    destino: "Matecaña, Pereira",
    politicaCancelacion: "Cancelación gratuita hasta 24 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo a Lima",
    cantidadDisponible: 3,
    precio: 17000,
    imagen: "lima.jpg",
    codigo: "VP011",
    categoria: "Internacional",
    escalas: 1,
    descripcion:
      "Vuelo a Lima con escala en Quito, perfecto para descubrir Perú.",
    duracion: "7h 30m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Jorge Chávez, Lima",
    politicaCancelacion: "Cancelación gratuita hasta 48 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo Charter a Bucaramanga",
    cantidadDisponible: 5,
    precio: 2500,
    imagen: "bucaramanga.jpg",
    codigo: "VP012",
    categoria: "Nacional",
    escalas: 0,
    descripcion:
      "Vuelo charter desde Bogotá a Bucaramanga, ideal para negocios.",
    duracion: "1h 15m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Palonegro, Bucaramanga",
    politicaCancelacion: "Cancelación gratuita hasta 24 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo a Toronto",
    cantidadDisponible: 2,
    precio: 19000,
    imagen: "toronto.jpg",
    codigo: "VP013",
    categoria: "Internacional",
    escalas: 1,
    descripcion: "Vuelo a Toronto con escala en Miami, perfecto para turismo.",
    duracion: "12h 0m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Toronto Pearson, Toronto",
    politicaCancelacion: "No reembolsable.",
  },
  {
    nombre: "Vuelo a Caracas",
    cantidadDisponible: 4,
    precio: 8000,
    imagen: "caracas.jpg",
    codigo: "VP014",
    categoria: "Internacional",
    escalas: 0,
    descripcion: "Vuelo directo a Caracas, ideal para visitar Venezuela.",
    duracion: "1h 30m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Simón Bolívar, Caracas",
    politicaCancelacion: "Cancelación gratuita hasta 48 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo Charter a Manizales",
    cantidadDisponible: 3,
    precio: 3000,
    imagen: "manizales.jpg",
    codigo: "VP015",
    categoria: "Nacional",
    escalas: 0,
    descripcion:
      "Vuelo charter desde Medellín a Manizales, ideal para visitas rápidas.",
    duracion: "1h 0m",
    aeropuertoSalida: "José María Córdova, Medellín",
    destino: "La Nubia, Manizales",
    politicaCancelacion: "Cancelación gratuita hasta 24 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo a Quito",
    cantidadDisponible: 6,
    precio: 12000,
    imagen: "quito.jpg",
    codigo: "VP016",
    categoria: "Internacional",
    escalas: 0,
    descripcion: "Vuelo directo a Quito, una gran opción para visitar Ecuador.",
    duracion: "2h 30m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Mariscal Sucre, Quito",
    politicaCancelacion: "Cancelación gratuita hasta 48 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo a San Francisco",
    cantidadDisponible: 2,
    precio: 25000,
    imagen: "sanfrancisco.jpg",
    codigo: "VP017",
    categoria: "Internacional",
    escalas: 2,
    descripcion: "Vuelo a San Francisco con escalas en Miami y Houston.",
    duracion: "15h 0m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "San Francisco International, San Francisco",
    politicaCancelacion: "No reembolsable.",
  },
  {
    nombre: "Vuelo Charter a Cúcuta",
    cantidadDisponible: 4,
    precio: 3000,
    imagen: "cucuta.jpg",
    codigo: "VP018",
    categoria: "Nacional",
    escalas: 0,
    descripcion: "Vuelo charter directo desde Bogotá a Cúcuta.",
    duracion: "1h 30m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Camilo Daza, Cúcuta",
    politicaCancelacion: "Cancelación gratuita hasta 24 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo a La Habana",
    cantidadDisponible: 3,
    precio: 11000,
    imagen: "lahabana.jpg",
    codigo: "VP019",
    categoria: "Internacional",
    escalas: 0,
    descripcion: "Vuelo directo a La Habana, ideal para turismo en Cuba.",
    duracion: "3h 0m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "José Martí, La Habana",
    politicaCancelacion: "Cancelación gratuita hasta 72 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo Charter a Pasto",
    cantidadDisponible: 5,
    precio: 2500,
    imagen: "pasto.jpg",
    codigo: "VP020",
    categoria: "Nacional",
    escalas: 0,
    descripcion:
      "Vuelo charter desde Bogotá a Pasto, perfecto para eventos locales.",
    duracion: "1h 15m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Antonio Nariño, Pasto",
    politicaCancelacion: "Cancelación gratuita hasta 24 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo a Los Ángeles",
    cantidadDisponible: 1,
    precio: 22000,
    imagen: "losangeles.jpg",
    codigo: "VP021",
    categoria: "Internacional",
    escalas: 1,
    descripcion: "Vuelo a Los Ángeles con escala en Miami, ideal para turismo.",
    duracion: "14h 0m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Los Angeles International, Los Ángeles",
    politicaCancelacion: "No reembolsable.",
  },
  {
    nombre: "Vuelo a Santo Domingo",
    cantidadDisponible: 3,
    precio: 13000,
    imagen: "santodomingo.jpg",
    codigo: "VP022",
    categoria: "Internacional",
    escalas: 0,
    descripcion:
      "Vuelo directo a Santo Domingo, perfecto para unas vacaciones.",
    duracion: "3h 15m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Las Américas, Santo Domingo",
    politicaCancelacion: "Cancelación gratuita hasta 48 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo Charter a Valledupar",
    cantidadDisponible: 4,
    precio: 3000,
    imagen: "valledupar.jpg",
    codigo: "VP023",
    categoria: "Nacional",
    escalas: 0,
    descripcion:
      "Vuelo charter desde Bogotá a Valledupar, ideal para visitar la región.",
    duracion: "1h 20m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Alfonso López, Valledupar",
    politicaCancelacion: "Cancelación gratuita hasta 24 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo a Montreal",
    cantidadDisponible: 2,
    precio: 21000,
    imagen: "montreal.jpg",
    codigo: "VP024",
    categoria: "Internacional",
    escalas: 1,
    descripcion: "Vuelo a Montreal con escala en Toronto, ideal para turismo.",
    duracion: "11h 30m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Montréal-Pierre Elliott Trudeau, Montreal",
    politicaCancelacion: "No reembolsable.",
  },
  {
    nombre: "Vuelo a Asunción",
    cantidadDisponible: 3,
    precio: 14000,
    imagen: "asuncion.jpg",
    codigo: "VP025",
    categoria: "Internacional",
    escalas: 1,
    descripcion: "Vuelo a Asunción con escala en Lima, ideal para turismo.",
    duracion: "9h 30m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Silvio Pettirossi, Asunción",
    politicaCancelacion: "Cancelación gratuita hasta 48 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo Charter a Tumaco",
    cantidadDisponible: 5,
    precio: 3500,
    imagen: "tumaco.jpg",
    codigo: "VP026",
    categoria: "Nacional",
    escalas: 0,
    descripcion:
      "Vuelo charter desde Cali a Tumaco, ideal para visitar la costa.",
    duracion: "1h 0m",
    aeropuertoSalida: "Alfonso Bonilla Aragón, Cali",
    destino: "La Justicia, Tumaco",
    politicaCancelacion: "Cancelación gratuita hasta 24 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo a Panamá",
    cantidadDisponible: 4,
    precio: 16000,
    imagen: "panama.jpg",
    codigo: "VP027",
    categoria: "Internacional",
    escalas: 0,
    descripcion: "Vuelo directo a Panamá, perfecto para negocios y turismo.",
    duracion: "1h 30m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Tocumen International, Panamá",
    politicaCancelacion: "Cancelación gratuita hasta 72 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo Charter a Valle del Cauca",
    cantidadDisponible: 6,
    precio: 3000,
    imagen: "valledelcauca.jpg",
    codigo: "VP028",
    categoria: "Nacional",
    escalas: 0,
    descripcion:
      "Vuelo charter desde Cali a Valle del Cauca, ideal para eventos locales.",
    duracion: "0h 50m",
    aeropuertoSalida: "Alfonso Bonilla Aragón, Cali",
    destino: "Varía según el destino.",
    politicaCancelacion: "Cancelación gratuita hasta 24 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo a Roma",
    cantidadDisponible: 1,
    precio: 25000,
    imagen: "roma.jpg",
    codigo: "VP029",
    categoria: "Internacional",
    escalas: 1,
    descripcion: "Vuelo a Roma con escala en Madrid, ideal para turismo.",
    duracion: "13h 0m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Leonardo da Vinci International, Roma",
    politicaCancelacion: "No reembolsable.",
  },
  {
    nombre: "Vuelo Charter a Quibdó",
    cantidadDisponible: 5,
    precio: 4000,
    imagen: "quibdo.jpg",
    codigo: "VP030",
    categoria: "Nacional",
    escalas: 0,
    descripcion:
      "Vuelo charter desde Medellín a Quibdó, ideal para visitar la región.",
    duracion: "1h 15m",
    aeropuertoSalida: "José María Córdova, Medellín",
    destino: "El Carano, Quibdó",
    politicaCancelacion: "Cancelación gratuita hasta 24 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo a Bruselas",
    cantidadDisponible: 2,
    precio: 23000,
    imagen: "bruselas.jpg",
    codigo: "VP031",
    categoria: "Internacional",
    escalas: 1,
    descripcion: "Vuelo a Bruselas con escala en Madrid, ideal para turismo.",
    duracion: "12h 0m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Brussels Airport, Bruselas",
    politicaCancelacion: "No reembolsable.",
  },
  {
    nombre: "Vuelo a Aruba",
    cantidadDisponible: 4,
    precio: 15000,
    imagen: "aruba.jpg",
    codigo: "VP032",
    categoria: "Internacional",
    escalas: 0,
    descripcion: "Vuelo directo a Aruba, perfecto para vacaciones.",
    duracion: "3h 0m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Reina Beatrix, Aruba",
    politicaCancelacion: "Cancelación gratuita hasta 48 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo Charter a Ibagué",
    cantidadDisponible: 5,
    precio: 3500,
    imagen: "ibague.jpg",
    codigo: "VP033",
    categoria: "Nacional",
    escalas: 0,
    descripcion:
      "Vuelo charter desde Bogotá a Ibagué, ideal para visitar la región.",
    duracion: "1h 0m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Perales, Ibagué",
    politicaCancelacion: "Cancelación gratuita hasta 24 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo a Sydney",
    cantidadDisponible: 1,
    precio: 30000,
    imagen: "sydney.jpg",
    codigo: "VP034",
    categoria: "Internacional",
    escalas: 2,
    descripcion: "Vuelo a Sydney con escalas en Miami y Los Ángeles.",
    duracion: "18h 0m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Sydney Kingsford Smith, Sydney",
    politicaCancelacion: "No reembolsable.",
  },
  {
    nombre: "Vuelo a Lisboa",
    cantidadDisponible: 3,
    precio: 24000,
    imagen: "lisboa.jpg",
    codigo: "VP035",
    categoria: "Internacional",
    escalas: 1,
    descripcion: "Vuelo a Lisboa con escala en Madrid, ideal para turismo.",
    duracion: "11h 30m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Lisbon Humberto Delgado, Lisboa",
    politicaCancelacion: "No reembolsable.",
  },
  {
    nombre: "Vuelo a Quito",
    cantidadDisponible: 4,
    precio: 13000,
    imagen: "quito.jpg",
    codigo: "VP036",
    categoria: "Internacional",
    escalas: 0,
    descripcion: "Vuelo directo a Quito, ideal para turismo.",
    duracion: "2h 30m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Mariscal Sucre, Quito",
    politicaCancelacion: "Cancelación gratuita hasta 48 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo Charter a San Vicente",
    cantidadDisponible: 5,
    precio: 4000,
    imagen: "sanvicente.jpg",
    codigo: "VP037",
    categoria: "Nacional",
    escalas: 0,
    descripcion:
      "Vuelo charter desde Medellín a San Vicente, ideal para visitar la región.",
    duracion: "1h 0m",
    aeropuertoSalida: "José María Córdova, Medellín",
    destino: "San Vicente, San Vicente",
    politicaCancelacion: "Cancelación gratuita hasta 24 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo a Kuala Lumpur",
    cantidadDisponible: 2,
    precio: 27000,
    imagen: "kuala.jpg",
    codigo: "VP038",
    categoria: "Internacional",
    escalas: 2,
    descripcion: "Vuelo a Kuala Lumpur con escalas en Nueva York y Londres.",
    duracion: "24h 0m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Kuala Lumpur International, Kuala Lumpur",
    politicaCancelacion: "No reembolsable.",
  },
  {
    nombre: "Vuelo Charter a Tumaco",
    cantidadDisponible: 4,
    precio: 5000,
    imagen: "tumaco.jpg",
    codigo: "VP039",
    categoria: "Nacional",
    escalas: 0,
    descripcion:
      "Vuelo charter desde Cali a Tumaco, ideal para visitar la región.",
    duracion: "1h 0m",
    aeropuertoSalida: "Alfonso Bonilla Aragón, Cali",
    destino: "La Justicia, Tumaco",
    politicaCancelacion: "Cancelación gratuita hasta 24 horas antes del vuelo.",
  },
  {
    nombre: "Vuelo a Dublín",
    cantidadDisponible: 1,
    precio: 26000,
    imagen: "dublin.jpg",
    codigo: "VP040",
    categoria: "Internacional",
    escalas: 1,
    descripcion: "Vuelo a Dublín con escala en Londres, ideal para turismo.",
    duracion: "14h 0m",
    aeropuertoSalida: "El Dorado, Bogotá",
    destino: "Dublin Airport, Dublín",
    politicaCancelacion: "No reembolsable.",
  },
];

/*index









*/

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("index.html")) {
    const form = document.getElementById("reservationForm");
    console.log("Formulario encontrado:", form);

    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const presupuesto = parseFloat(
          document.getElementById("presupuesto").value
        );
        const productos = parseInt(document.getElementById("productos").value);
        const direccion = document.getElementById("direccion").value.trim();
        const entrega = document.querySelector('input[name="entrega"]:checked');

        console.log("Nombre:", nombre);
        console.log("Presupuesto:", presupuesto);
        console.log("Productos:", productos);
        console.log("Dirección:", direccion);
        console.log("Entrega:", entrega);

        if (!nombre || !direccion || !entrega) {
          alert("Por favor, completa todos los campos obligatorios.");
          return;
        }

        if (presupuesto < 0 || productos < 0) {
          alert(
            "La cantidad de dinero y la cantidad de productos no pueden ser negativos."
          );
          return;
        }

        // Almacenar el presupuesto y la cantidad de productos en Local Storage
        localStorage.setItem("presupuesto", presupuesto);
        localStorage.setItem("cantidadProductos", productos);

        const reserva = {
          nombre: nombre,
          presupuesto: presupuesto,
          productos: productos,
          direccion: direccion,
          entrega: entrega.value,
        };

        localStorage.setItem("reserva", JSON.stringify(reserva));

        alert("Reserva realizada con éxito. Redirigiendo a productos...");
        window.location.href = "productos.html";
      });
    }
  }

  // Código específico para productos.html
  if (window.location.pathname.includes("productos.html")) {
    console.log("Cargando productos...");
    // Aquí puedes agregar la lógica específica para productos.html
    // Por ejemplo, cargar vuelos o productos
    loadFlights(); // Asegúrate de que esta función esté definida
  }
});

/*productos







*/

// Resto de tu lógica para manejar vuelos, carrito, y demás
let currentIndex = 0;
const batchSize = 15;
let filteredFlights = vuelos; // Para almacenar la lista filtrada o todos los productos si no hay filtro
let carrito = []; // Array para almacenar productos seleccionados
let totalCompra = 0;

// Función para mostrar un lote de productos
function loadFlights() {
  const container = document.getElementById("productListContainer");

  const flightsToShow = filteredFlights.slice(
    currentIndex,
    currentIndex + batchSize
  );
  flightsToShow.forEach((flight) => {
    const flightCard = document.createElement("div");
    flightCard.classList.add("flight-card");
    flightCard.innerHTML = `
      <img src="${flight.imagen}" alt="${flight.nombre}">
      <h2>${flight.nombre}</h2>
      <p class="price">$${flight.precio}</p>
      <button onclick="showFlightDetails('${flight.codigo}')">Ver Detalles</button>
    `;
    container.appendChild(flightCard);
  });

  currentIndex += batchSize;
}

// Función para mostrar detalles del producto seleccionado
function showFlightDetails(codigo) {
  const flight = vuelos.find((item) => item.codigo === codigo);
  const detailContainer = document.getElementById("productDetailContainer");
  detailContainer.innerHTML = `
    <h2>${flight.nombre}</h2>
    <img src="${flight.imagen}" alt="${flight.nombre}" style="width: 100%">
    <p><strong>Destino:</strong> ${flight.destino}</p>
    <p><strong>Duración:</strong> ${flight.duracion}</p>
    <p><strong>Precio:</strong> $${flight.precio}</p>
    <p><strong>Descripción:</strong> ${flight.descripcion}</p>
    <button onclick="addToCart('${flight.codigo}')">Agregar al carrito</button>
  `;
}

// Función para agregar al carrito (utilizando localStorage)
// Función para agregar al carrito (utilizando localStorage)
function addToCart(codigo) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const vuelo = vuelos.find((item) => item.codigo === codigo); // Encuentra el vuelo en la lista

  const existingItem = cart.find((item) => item.codigo === codigo);

  if (existingItem) {
    // Si el vuelo ya está en el carrito, simplemente incrementa la cantidad
    existingItem.cantidad += 1;
  } else {
    // Si el vuelo no está en el carrito, inicializa la cantidad
    vuelo.cantidad = 1; // Inicializa la cantidad a 1
    cart.push(vuelo);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`Producto con código ${codigo} agregado al carrito.`);
}

// Función para realizar el filtrado
function filterFlights() {
  const categoryValue = document.getElementById("category").value;
  const maxPriceValue = document.getElementById("maxPrice").value;

  // Filtra los vuelos por categoría y precio máximo si se proporcionan
  filteredFlights = vuelos.filter((flight) => {
    const matchesCategory =
      categoryValue === "all" || flight.categoria === categoryValue;
    const matchesPrice =
      !maxPriceValue || flight.precio <= parseFloat(maxPriceValue);
    return matchesCategory && matchesPrice;
  });

  // Reiniciar el índice y el contenedor de productos
  currentIndex = 0;
  document.getElementById("productListContainer").innerHTML = "";

  // Cargar el primer lote de la lista filtrada
  loadFlights();
}

// Scroll infinito: detecta cuando se alcanza

//boton para finalizar las compras
document
  .getElementById("finalizePurchaseButton")
  .addEventListener("click", function () {
    window.location.href = "carrito.html";
  });

/*recupera los datos del index.. y permite finalizar las compras 








*/
document.addEventListener("DOMContentLoaded", function () {
  const presupuesto = parseFloat(localStorage.getItem("presupuesto"));
  const cantidadProductosInicial = parseInt(
    localStorage.getItem("cantidadProductos")
  );

  if (presupuesto && cantidadProductosInicial) {
    console.log("Presupuesto recuperado:", presupuesto);
    console.log("Cantidad de productos inicial:", cantidadProductosInicial);

    const cartItemsContainer = document
      .getElementById("cartItems")
      .getElementsByTagName("tbody")[0];
    const totalAmountElement = document.getElementById("totalAmount");
    const paymentForm = document.getElementById("payment");

    // Recuperar el carrito del Local Storage
    const carrito = JSON.parse(localStorage.getItem("cart")) || [];

    let totalCompra = 0;

    // Mostrar los productos en el carrito
    carrito.forEach((producto) => {
      const subtotal = producto.precio * producto.cantidad;
      totalCompra += subtotal;

      const row = document.createElement("tr");
      row.innerHTML = `
              <td>${producto.nombre}</td>
              <td>${producto.cantidad}</td>
              <td>$${producto.precio.toFixed(2)}</td>
              <td>$${subtotal.toFixed(2)}</td>
          `;
      cartItemsContainer.appendChild(row);
    });

    // Mostrar el total de la compra
    totalAmountElement.innerHTML = `<strong>Total:</strong> $${totalCompra.toFixed(
      2
    )}`;

    // Manejar el evento de finalizar compra
    paymentForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // Aquí puedes agregar la lógica para procesar el pago
      alert("Compra finalizada. ¡Gracias por tu compra!");
      // Opcionalmente, puedes limpiar el carrito y redirigir al usuario
      localStorage.removeItem("cart");
      window.location.href = "index.html"; // Redirigir a la página de inicio
    });
  } else {
    console.error("No se encontraron los datos necesarios en Local Storage.");
    alert(
      "No se encontraron datos de presupuesto o cantidad de productos. Por favor, vuelve a la página de productos."
    );
    window.location.href = "productos.html"; // Redirigir a la página de productos si no hay datos
  }
});
