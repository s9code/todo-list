# Plantilla Webpack

Plantilla básica para empezar proyectos con HTML, CSS y JavaScript sin tener que configurar Webpack desde cero cada vez.

## Qué incluye

- Módulos ES6 para organizar el JavaScript con `import` y `export`.
- Configuración separada para desarrollo y producción.
- Servidor de desarrollo con recarga al guardar cambios.
- Carga de CSS desde JavaScript.
- Soporte para imágenes PNG, SVG, JPG, JPEG y GIF importadas desde JavaScript o referenciadas desde CSS.
- Generación del HTML a partir de `src/template.html`.

## Requisitos

- Node.js 22.15.0 o superior.
- npm, incluido con Node.js.

La plantilla se ha comprobado con Node.js 24.14.1.

## Cómo empezar

1. Crea un repositorio a partir de esta plantilla con **Use this template** en GitHub.
2. Clona tu nuevo repositorio y entra en su carpeta.
3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Arranca el servidor de desarrollo:

   ```bash
   npm run dev
   ```

Abre en el navegador la dirección que aparezca en la terminal. La página estará vacía al principio: el HTML y los estilos están preparados para que añadas tu contenido.

Antes de empezar tu proyecto, cambia el nombre en `package.json`, el título en `src/template.html` y adapta este README.

## Estructura

```text
plantilla-webpack/
├── src/
│   ├── index.js          # Punto de entrada del JavaScript
│   ├── style.css         # Estilos del proyecto
│   └── template.html     # Plantilla del HTML
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── webpack.common.js    # Configuración compartida: HTML, CSS e imágenes
├── webpack.dev.js       # Desarrollo y mapas de código para depurar
└── webpack.prod.js      # Compilación para producción
```

El archivo `src/index.js` ya importa `style.css`. Puedes crear más módulos dentro de `src/` e importarlos desde tu código.

## Generar la versión de producción

```bash
npm run build
```

Webpack genera la web en `dist/`, con el HTML y el JavaScript preparado para producción. Esa carpeta se limpia antes de cada compilación, así que los cambios del proyecto deben hacerse en `src/`.

## Archivos que se suben a GitHub

Se suben el código fuente, las configuraciones y los dos archivos de dependencias: `package.json` y `package-lock.json`.

Las carpetas `node_modules/` y `dist/` están excluidas mediante `.gitignore`: se generan al instalar las dependencias y compilar el proyecto.
