# Mi Librería

Página web sencilla para una librería, desarrollada como Proyecto Integrador del Curso de Git y GitHub. El foco del proyecto es el flujo de trabajo con Git y GitHub: ramas, Pull Requests, commits frecuentes y tablero Kanban.

## Qué hace

- Muestra una página de inicio con encabezado, bienvenida y pie de página.
- Muestra un catálogo de libros con título, autor y precio.
- Permite agregar libros nuevos desde un formulario.
- Guarda los libros en el navegador (localStorage), por lo que siguen ahí al recargar la página.

## Tecnologías

HTML, CSS y JavaScript puro. No requiere instalación ni frameworks.

## Cómo ejecutarlo

1. Clona el repositorio:
   git clone https://github.com/Michell34/Libreria-Allende.git
2. Entra a la carpeta:
   cd Libreria-Allende
3. Abre el archivo index.html en tu navegador (doble clic o arrastrándolo al navegador).

## Estructura del proyecto

- index.html: estructura de la página (inicio, catálogo y formulario).
- style.css: estilos y diseño adaptable a celular.
- script.js: lógica para mostrar, agregar y guardar libros.

## Flujo de trabajo con Git

- main: versión estable y entregable.
- develop: rama de integración donde se juntan las funcionalidades.
- feature/nombre-tarea: una rama por tarea, creada desde develop e integrada mediante Pull Request.

Ramas utilizadas: feature/estructura-base, feature/pagina-inicio, feature/catalogo-formulario, feature/guardar-libros y feature/readme-final.

## Tablero Kanban

El avance del proyecto se organizó en un tablero de GitHub Projects con las columnas To do, In Progress y Done: PEGA-AQUI-EL-ENLACE-DE-TU-TABLERO