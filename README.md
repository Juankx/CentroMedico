# Centro Médico - Página Web

Una página web moderna y responsiva para un centro médico de especialidades, desarrollada con React + Vite y TailwindCSS.

## 🚀 Características

- **Diseño Responsivo**: Mobile-first con TailwindCSS
- **Animaciones Suaves**: Implementadas con Framer Motion
- **Componentes Modulares**: Estructura organizada y reutilizable
- **SEO Optimizado**: Meta tags y estructura semántica
- **Paleta de Colores Personalizada**: Azules y verde médico
- **Formulario de Contacto**: Funcional con validación
- **Carrusel de Médicos**: Interactivo y atractivo
- **Sección de Testimonios**: Con calificaciones y reseñas

## 🎨 Paleta de Colores

- **Azul Claro**: #53afd7
- **Azul Oscuro**: #184360
- **Verde**: #3cab3d
- **Azul Medio**: #255d87

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx          # Navegación principal
│   └── Footer.jsx          # Pie de página
├── sections/
│   ├── HeroSection.jsx     # Sección principal
│   ├── EspecialidadesSection.jsx
│   ├── MedicosSection.jsx
│   ├── ServiciosSection.jsx
│   ├── TestimoniosSection.jsx
│   └── ContactoSection.jsx
├── assets/
│   └── images/             # Imágenes del proyecto
├── utils/                  # Utilidades
├── App.jsx                 # Componente principal
├── main.jsx               # Punto de entrada
└── index.css              # Estilos globales
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Herramienta de construcción
- **TailwindCSS 3** - Framework de CSS
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **Google Fonts** - Tipografía (Inter)

## 🚀 Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   ```

4. **Previsualizar build de producción**:
   ```bash
   npm run preview
   ```

## 📱 Secciones de la Página

### 1. Header/Navbar
- Logo del centro médico
- Menú de navegación responsivo
- Botón de "Agendar Cita"
- Información de contacto

### 2. Hero Section
- Banner principal con imagen de fondo
- Eslogan principal
- Botones de llamada a la acción
- Características destacadas

### 3. Especialidades
- Grid de especialidades médicas
- Iconos y descripciones
- Botones de acción

### 4. Médicos
- Carrusel de doctores
- Información profesional
- Calificaciones y certificaciones
- Botones de contacto

### 5. Servicios
- Servicios principales
- Servicios adicionales
- Información de emergencias

### 6. Testimonios
- Carrusel de testimonios
- Calificaciones de pacientes
- Estadísticas del centro

### 7. Contacto
- Formulario de agendamiento
- Información de contacto
- Mapa de ubicación

### 8. Footer
- Enlaces rápidos
- Información de contacto
- Redes sociales
- Información legal

## 🎯 Personalización

### Cambiar Colores
Los colores están definidos en `tailwind.config.js`:
```javascript
colors: {
  'azul-claro': '#53afd7',
  'azul-oscuro': '#184360',
  'verde': '#3cab3d',
  'azul-medio': '#255d87',
}
```

### Agregar Imágenes
Coloca las imágenes en `src/assets/images/` y actualiza las URLs en los componentes.

### Modificar Contenido
Edita los textos directamente en los archivos de componentes en `src/sections/`.

## 📞 Información de Contacto

- **Teléfono**: (123) 456-7890
- **Email**: info@centromedico.com
- **Dirección**: Av. Principal 123, Centro
- **Horarios**: Lun-Vie: 8:00-20:00, Sáb: 8:00-14:00

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run preview` - Previsualizar build
- `npm run lint` - Ejecutar linter

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

---

**Desarrollado con ❤️ para la salud y bienestar de nuestros pacientes.**