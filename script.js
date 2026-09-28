const CLAVE_ALMACENAMIENTO = "libros-mi-libreria";

const librosIniciales = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", precio: 85 },
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry", precio: 60 },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", precio: 95 }
];

const listaLibros = document.getElementById("lista-libros");
const mensajeVacio = document.getElementById("mensaje-vacio");
const formulario = document.getElementById("formulario-libro");

// Lee los libros guardados en el navegador
function cargarLibros() {
  try {
    const guardados = localStorage.getItem(CLAVE_ALMACENAMIENTO);
    if (guardados === null) {
      return librosIniciales.slice();
    }
    const lista = JSON.parse(guardados);
    return Array.isArray(lista) ? lista : librosIniciales.slice();
  } catch (error) {
    return librosIniciales.slice();
  }
}

// Guarda la lista completa de libros en el navegador
function guardarLibros() {
  try {
    localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(libros));
  } catch (error) {
    console.error("No se pudo guardar en localStorage:", error);
  }
}

const libros = cargarLibros();

function mostrarLibros() {
  listaLibros.innerHTML = "";

  libros.forEach(function (libro) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-libro";

    const titulo = document.createElement("h3");
    titulo.textContent = libro.titulo;

    const autor = document.createElement("p");
    autor.className = "autor";
    autor.textContent = libro.autor;

    const precio = document.createElement("p");
    precio.className = "precio";
    precio.textContent = "Bs " + Number(libro.precio).toFixed(2);

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(autor);
    tarjeta.appendChild(precio);
    listaLibros.appendChild(tarjeta);
  });

  mensajeVacio.style.display = libros.length === 0 ? "block" : "none";
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const autor = document.getElementById("autor").value.trim();
  const precio = document.getElementById("precio").value;

  if (titulo === "" || autor === "") {
    return;
  }

  libros.push({ titulo: titulo, autor: autor, precio: precio });
  guardarLibros();
  mostrarLibros();
  formulario.reset();
});

mostrarLibros();