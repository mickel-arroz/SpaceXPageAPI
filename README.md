# SpaceX Page API

Este proyecto consiste en la creación de una página web estática que utiliza el API gratuito proporcionado por SpaceX para consultar y mostrar detalles sobre los lanzamientos de cohetes de la compañía.

El curso gratuito impartido por Midudev, titulado "Aprende Astro 3 desde cero - Curso para principiantes aplicación con Astro", sirvió como base para el desarrollo de este proyecto. Se utilizó un API pública que contiene información detallada sobre los lanzamientos de cohetes y satélites de SpaceX.

La implementación se realizó utilizando Astro 4.0, junto con HTML, CSS, JavaScript y TypeScript. Se trabajó en la adaptabilidad de todos los elementos para garantizar que la página web se visualice correctamente en todo tipo de dispositivos, incluidos los móviles.

Con el objetivo de optimizar la experiencia del usuario, se seleccionaron únicamente los datos relevantes durante las consultas al API, priorizando aquellos que incluyeran información importante, como el logotipo y la descripción, evitando aquellos campos que estuvieran vacíos. Sin embargo, en la sección "Todos los lanzamientos", se consideró la posibilidad de que no hubiera detalles o descripción del lanzamiento.

Para mejorar la transición entre páginas y proporcionar una experiencia de navegación más fluida, se implementó ViewTransition.

En cuanto a los contenidos multimedia, se aplicó un radio de aspecto predefinido a las imágenes para mantener la estructura HTML de la página sin alteraciones. Además, se implementó la carga perezosa (lazy load) en las imágenes relevantes, lo que permite al cliente cargar inicialmente solo el contenido esencial, cargando los elementos adicionales según sea necesario.

## Instalación y Uso

1. Clona este repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Utiliza los scripts definidos en el archivo `package.json` para el desarrollo, construcción y previsualización del proyecto.

```bash
npm run dev        # Inicia el entorno de desarrollo
npm run build      # Construye el proyecto
npm run preview    # Previsualiza el proyecto
```

## Dependencias Principales

- **Astro 4.0**: Framework utilizado para el desarrollo de la página web estática.
- **Tailwind CSS**: Utilizado para estilizar y dar formato al diseño de la página.
- **TypeScript**: Lenguaje de programación utilizado para añadir tipado estático al código JavaScript.
