# 📘 Prueba Técnica Frontend

## 📌 Descripción general

Este proyecto corresponde a una prueba técnica frontend desarrollada con **React + TypeScript**, cuyo objetivo es implementar un flujo completo de autenticación y administración de **Acciones**, consumiendo una API REST provista.

La aplicación permite:

- Autenticación de usuarios.
- Acceso a rutas privadas mediante sesión.
- Visualización paginada de acciones.
- Creación de nuevas acciones mediante un formulario.
- Manejo de estados de carga, error y vacío.
- Cierre de sesión.

---

## 🛠️ Stack tecnológico

- React 18  
- TypeScript  
- Vite  
- React Router DOM  
- Zustand (manejo de estado global)  
- Tailwind CSS (estilos)  
- Fetch API (consumo de servicios)  
- React Hook Form (formularios)  
- React Icons  

---

## 📂 Estructura del proyecto

```txt
src/
├── api/          # Llamadas a la API
├── components/   # Componentes UI reutilizables
├── context/      # Store de autenticación (Zustand)
├── hooks/        # Hooks personalizados (lógica)
├── pages/        # Vistas principales
├── routes/       # Rutas públicas y privadas
├── styles/       # Estilos globales
├── types/        # Tipado
├── utils/        # Utilidades

```
---

## 🔐 Autenticación

- El login consume el endpoint de autenticación del backend.
- Al iniciar sesión correctamente:
  - El token es almacenado en Zustand.
  - El token se persiste en localStorage para mantener la sesión activa al recargar la página.
- Se implementaron rutas públicas y privadas:
  - Usuarios no autenticados no pueden acceder al dashboard.
  - Si el token no existe o se elimina, el usuario es redirigido al login.
- Se implementó cierre de sesión, eliminando el token y limpiando el estado global.


---

## 🧭 Navegación y Layout

- La aplicación utiliza un DashboardLayout que contiene:
  - Header superior.
  - Sidebar lateral con navegación.
  - Área de contenido dinámico.
- El layout se reutiliza en todas las vistas privadas.
- Se implementó una vista Home como pantalla de bienvenida

---
## 📋 Listado de acciones

```
GET /api/v1/actions/admin-list
```

### Funcionalidades implementadas

- Visualización de acciones en una tabla/listado.
- Paginación controlada mediante:
  - pageNumber
  - pageSize (por defecto 10)
- Estados de UI:
  - Loading: loader centrado con spinner.
  - Estado vacío: mensaje cuando no hay acciones disponibles.
  - Error: mensaje amigable si la petición falla.
- El token se envía en cada request mediante el header Authorization

---

## ➕ Crear acción

```
POST /api/v1/actions/admin-add
```
### Comportamiento del backend y decisiones técnicas

El endpoint para crear acciones no documenta claramente cuál es el payload esperado.
Por esta razón, fue necesario realizar pruebas manuales utilizando Postman para entender cómo funciona realmente el servicio.

A partir de estas pruebas se identificó lo siguiente:

- El endpoint no acepta peticiones con application/json.
- Para que la petición funcione correctamente, es necesario enviar la información como multipart/form-data.
- El campo icon (archivo) es obligatorio para poder crear una acción.
- El campo status solo acepta los valores 0 o 1.

### Implementación

- Se utiliza FormData para enviar la información.
- El formulario incluye los siguientes campos:
  - Nombre
  - Descripción
  - Color (HEX)
  - Estado (Activo/Inactivo)
  - Icono (archivo)
- El botón Crear se habilita únicamente cuando todos los campos requeridos están completos.
- El icono se carga mediante un input tipo file oculto, manteniendo el diseño del Figma.

### Flujo de creación

1. El usuario abre el drawer “Crear acción”.
2. Completa el formulario.
3. Se envía la información al backend.
4. Si la creación es exitosa:
    - El drawer se cierra.
    - El listado se refresca automáticamente sin recargar la página.
---
## 🎨 Diseño y UX

- El diseño se basó en el mockup de Figma proporcionado.
- Se respetaron:
  - Layout con header y sidebar.
  - Drawer lateral para la creación de acciones.
  - Estados visuales claros (hover, focus, loading, disabled).
- Se priorizó:
  - Claridad visual.
  - Feedback inmediato al usuario.
  - Contraste adecuado y placeholders legibles.
  - Responsive design (desktop y mobile).
---
## 🧪 QA

Las pruebas funcionales realizadas se documentan en el archivo:

```
QA_CHECKLIST.md
```

Incluyen pruebas del flujo completo:
- Login (éxito, error, loading).
- Acceso a rutas privadas.
- Listado de acciones.
- Paginación.
- Creación de acciones.
- Refresco del listado.
- Persistencia de sesión.
- Cierre de sesión.

---
## ▶️ Cómo ejecutar el proyecto

1. Instalar dependencias:

```
npm install
```

2. Ejecutar el proyecto en modo desarrollo:
```
npm run dev
```

3. Abrir en el navegador:
```
http://localhost:5173
```
---

## Notas finales

Durante el desarrollo surgieron algunas dudas sobre el comportamiento del backend, por lo que fue necesario realizar pruebas adicionales en Postman para entender cómo funcionaban algunos endpoints y tomar decisiones de implementación basadas en esos resultados.

 Con más tiempo disponible, se podría realizar las siguientes mejoras:
- Agregar tests automatizados para asegurar el correcto funcionamiento de la aplicación.
- Implementar skeleton loaders en las tablas para mejorar la experiencia visual durante la carga de datos.
- Mejorar el manejo de errores para mostrar mensajes más específicos al usuario.
- Agregar animaciones de transición para hacer la navegación más fluida.
- Realizar mejoras adicionales en accesibilidad

---

**William Salcedo L.** 
Prueba técnica Frontend
2025