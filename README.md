# Blog App

Esta es una aplicación de blog desarrollada con Next.js, donde los usuarios pueden registrarse usando su cuenta de Google y publicar blogs con imágenes, título y descripción. El backend está implementado en la carpeta api de Next.js, y se utiliza MongoDB como base de datos. La autenticación se maneja con NextAuth y los estilos se implementaron usando CSS modular (un archivo .css por componente).

## Tecnologías utilizadas

- Next.js: Framework de React para renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG).

- MongoDB: Base de datos NoSQL para almacenar usuarios y blogs.

- NextAuth: Librería de autenticación para Next.js, integrada con Google OAuth.

- Mongoose: ODM (Object Data Modeling) para interactuar con MongoDB.

- CSS Modular: Estilos encapsulados por componente para evitar conflictos.

- React Hook Form: Manejo de formularios en React.

- Cloudinary (opcional): Para almacenar y gestionar imágenes de los blogs.

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- Node.js (v16 o superior)

- npm o yarn (gestores de paquetes)

- MongoDB (local o en la nube, por ejemplo, MongoDB Atlas)

- Cuenta de Google: Para configurar las credenciales de OAuth.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/blog-app.git
   cd blog-app
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno:

   Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:

   ```
   MONGO=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/blog-app?retryWrites=true&w=majority
   GOOGLE_CLIENT_ID=tu_google_client_id
   GOOGLE_CLIENT_SECRET=tu_google_client_secret
   NEXTAUTH_SECRET=tu_clave_secreta_nextauth
   NEXTAUTH_URL=http://localhost:3000
   ```

- `MONGO`: URI de conexión a tu base de datos MongoDB.

- `GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET`: Credenciales de Google OAuth (obtenidas desde la Consola de Google Cloud).

- `NEXTAUTH_SECRET`: Clave secreta para firmar los tokens de NextAuth.

- `NEXTAUTH_URL`: URL de tu aplicación (usualmente `http://localhost:3000` en desarrollo).

4. Ejecuta la aplicación:

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:3000`.

## Estructura del proyecto

    blog-app/
    ├── src/
    │   ├── app/
    │   │   ├── about/
    │   │   ├── api/
    │   │   ├── blog/
    │   │   ├── contact/
    │   │   ├── dashboard/
    │   │   ├── portfolio/
    │   │   ├── globals.css
    │   │   ├── layout.js
    │   │   ├── page.jsx
    │   │   ├── page.module.css
    │   ├── components/
    │   │   ├── AuthProvider/
    │   │   ├── Button/
    │   │   ├── DarkModeToggle/
    │   │   ├── footer/
    │   │   ├── navbar/
    │   └── context/
    │   │   ├── ThemeContext.js
    │   └── models/
    │   │   ├── Post.js
    │   │   ├── User.js
    │   └── utils/
    │   │   ├── db.js
    ├── .env
    └── README.md

## Funcionalidades principales

### Autenticación

- Registro e inicio de sesión con Google: Los usuarios pueden registrarse e iniciar sesión usando su cuenta de Google.

- Protección de rutas: Las rutas para crear blogs están protegidas y solo son accesibles para usuarios autenticados.

### Blogs

- Crear un blog: Los usuarios autenticados pueden publicar blogs con un título, descripción e imagen.

- Ver todos los blogs: La página principal muestra una lista de todos los blogs publicados.

- Ver un blog individual: Al hacer clic en un blog, se muestra su contenido completo.

## Endpoints de la API

### Autenticación

- Iniciar sesión con Google:

  `GET /api/dashboard/login`

- Registrarse:

  `GET /api/dashboard/register`

### Blogs

- Obtener todos los blogs:

  `GET /api/posts`

  Body:

  ```json
  {
    "title": "Título del blog",
    "description": "Descripción del blog",
    "content": "Contenido del blog",
    "image": "URL_de_la_imagen"
  }
  ```

- Obtener un blog por ID:

  `GET /api/blogs/:id`

## Estilos modulares

Cada componente tiene su propio archivo de estilos en la carpeta `styles/.` Por ejemplo:

    /* styles/Header.module.css */
    .header {
        background-color: #333;
        color: white;
        padding: 1rem;
        text-align: center;
    }

Se importan en los componentes de la siguiente manera:

    import styles from '../styles/Header.module.css';

    const Header = () => {
        return <header className={styles.header}>Blog App</header>;
    };

## Ejecución de pruebas

Para ejecutar la aplicación en modo desarrollo:

    npm run dev

Para construir la aplicación para producción:

    npm run build
    npm run start

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.

2. Crea una nueva rama: `git checkout -b feature/nueva-funcionalidad`.

3. Realiza tus cambios y haz commit: `git commit -m 'Añadir nueva funcionalidad'`.

4. Sube los cambios: `git push origin feature/nueva-funcionalidad`.

5. Abre un pull request.

## Licencia
Este proyecto está bajo la licencia MIT.
