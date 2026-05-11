Movira

> Plataforma de streaming de películas y series construida con React y Vite, inspirada en Netflix. Consume la API de TMDB para mostrar contenido real.

## Tech Stack
| Categoría               | Tecnología                |
| ----------------------- | ------------------------- |
| **Framework**           | React 19 + Vite           |
| **Lenguaje**            | JavaScript (JSX)          |
| **Routing**             | React Router v7           |
| **Estilos**             | TailwindCSS 4             |
| **Íconos**              | Lucide React              |
| **Autenticación**       | FakeStore API             |
| **API**                 | TMDB (The Movie Database) |

# Prerequisitos

- **Node.js 18+**
- **npm**
- **Cuenta en TMDB** para obtener el Bearer Token


## Getting Started

1. **Clona el repositorio**

```bash
  git clone https://github.com/sagnitzuasnabar-pixel/movira-application.git
  cd movira-final-project
```

2. **Instala las dependencias**

```bash  
npm install
```
3. **Configura las variables de entorno**
  
  Crea un archivo **.env en la raíz del proyecto:
  
  **VITE_TMDB_TOKEN=tu_bearer_token_de_tmdb**

  *El archivo .env ya está en .gitignore. Nunca lo subas a GitHub.


4. **Inicia el servidor de desarrollo**

```bash   
npm run dev
```
El servidor corre en http://localhost:5173

## Credenciales de prueba

| Campo       | Valor     |
| ----------- | --------- |
| Usuario     | mor_2314  |
| Contraseña  | 83r5^_    |

## Scripts
| Comando         | Descripción                         |
| --------------- | ----------------------------------- |
| npm run dev     | Inicia el servidor de desarrollo    |
| npm run build   | Genera el build de producción       |
| npm run preview | Previsualiza el build de producción |

## Architecture
- La aplicación sigue una arquitectura basada en páginas con separación por funcionalidad.

**Project Structure**

src/
├── context/                  # AuthContext (token con FakeStore API)
├── data/                     # Datos estáticos (features-data.js, faqs.json)
├── hooks/                    # Custom hooks globales
│   ├── use-auth.js
│   ├── use-get-movies-by-genre.js
│   ├── use-get-popular-peru.js
│   ├── use-get-trending.js
│   └── use-slider-navigation.js
├── pages/
│   ├── home/                 # Página de inicio (sin sesión)
│   │   ├── components/       # Navbar, Hero, Features, FAQ,Footer
│   │   └── home.jsx
│   ├── login/
│   │   └── login.jsx
│   └── browse/               # Plataforma principal (con sesión)
│       ├── data/             # navLinks-data.js
│       ├── browseLayout.jsx
│       └── pages/
│           ├── browseHome/   # Inicio del browse
│           │   ├── components/
│           │   │   ├── hero.jsx
│           │   │   ├── movie-row.jsx
│           │   │   ├── navbar.jsx
│           │   │   ├── top-ten-peru.jsx
│           │   │   └── trending-row.jsx
│           │   └── browseHome.jsx
│           ├── series/       # Página de series
│           │   ├── components/
│           │   ├── hooks/
│           │   ├── services/
│           │   └── series.jsx
│           ├── peliculas/    # Página de películas
│           │   ├── components/
│           │   ├── hooks/
│           │   ├── services/
│           │   └── peliculas.jsx
│           ├── novedades/    # Página de novedades
│           │   ├── components/
│           │   ├── hooks/
│           │   ├── services/
│           │   └── novedades.jsx
│           ├── miLista/      # Mi lista (localStorage)
│           │   ├── hooks/
│           │   │   └── use-mi-lista.js
│           │   └── miLista.jsx
│           └── detail/       # Detalle de película o serie
│               ├── hooks/
│               ├── services/
│               ├── movie-detail.jsx
│               └── serie-detail.jsx
├── router/
│   └── router.jsx
└── services/                 # Servicios globales de TMDB

## Key Features

- Autenticación con FakeStore API (login y logout)
- Página de inicio con Hero, carrusel de tendencias y Top 10 Perú
- Sección de Series con Hero dinámico y filas por género
- Sección de Películas con Hero dinámico y filas por género
- Sección de Novedades con estrenos recientes y Top 10 en Perú
- Mi Lista — guarda el contenido reproducido usando localStorage
- Buscador en tiempo real desde el navbar (películas y series mezcladas)
- Página de detalle con backdrop, descripción, géneros y trailer de YouTube
- Listado de temporadas y episodios en el detalle de series
- Carrusel horizontal con flechas al hacer hover y scroll suave
- Botón like con toggle visual en la página de detalle

## Variables de entorno
| Variable        | Descripción          |
| --------------- | -------------------- |
| VITE_TMDB_TOKEN | Bearer Token de TMDB |

Para obtener el Bearer Token de TMDB:

1. Crea una cuenta en themoviedb.org
2. Ve a Configuración → API
3. Solicita un API Token (tipo: Developer/Uso personal)
4. Copia el token de acceso de lectura (Bearer Token)

## Resources

-[React Docs] (https://react.dev/)
-[Vite Guide] (https://vite.dev/)
-[React Router] (https://reactrouter.com/)
-[TailwindCSS]  (https://tailwindcss.com/)
-[TMDB API] (https://developer.themoviedb.org/)
-[FireStore API]  (https://fakestoreapi.com/)
-[Lucide React] (https://lucide.dev/)

## License
Proyecto académico — Movira