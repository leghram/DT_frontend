# App crud usuarios

La aplicacion brinda las opciones de login y registro de nuevos usuarios.

Al ingresar a la aplicacion se pueden realizar diferentes operaciones CRUD sobre los usuarios que se encuentran listados en la pagina de /users

## Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución Local](#ejecución-local)
- [Scripts Disponibles](#scripts-disponibles)
- [Herramientas Utilizadas](#herramientas-utilizadas)

## Requisitos Previos

Asegúrate de tener instalado Node.js y npm en tu máquina. Puedes descargarlos desde [https://nodejs.org/](https://nodejs.org/).

## Instalación

Clona el repositorio e instala las dependencias.

```bash
git clone https://github.com/tuusuario/tuproyecto.git
cd tuproyecto
npm install
```

## Setear las variables de entorno

Agrega la variables de entorno.

referencia en .env.example

## Ejecución Local

Inicia la aplicación en modo de desarrollo.

```bash
npm run dev
```

La aplicación estará disponible en http://localhost:5173/ en tu navegador.

## Scripts Disponibles

npm run dev: Inicia la aplicación en modo de desarrollo.
npm run build: Construye la aplicación para producción.
npm run test: Ejecuta pruebas.
npm run lint: Ejecuta los linters

## Herramientas Utilizadas

- React
- react-router-dom
- react-query
- axios
- tailwindcss
- typescript
