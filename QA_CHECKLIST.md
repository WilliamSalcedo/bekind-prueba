# QA CHECKLIST – Prueba Técnica Frontend

Este documento describe las pruebas funcionales realizadas sobre el flujo completo de la aplicación: autenticación, listado de acciones, paginación, creación de acciones y cierre de sesión.

---

## 1. Login – Credenciales válidas
- **Escenario:** Usuario ingresa correo y contraseña válidos.
- **Resultado esperado:**  
  - Se realiza la petición de login correctamente.
  - Se guarda el token de sesión.
  - El usuario es redirigido al dashboard.

---

## 2. Login – Credenciales inválidas
- **Escenario:** Usuario ingresa correo o contraseña incorrectos.
- **Resultado esperado:**  
  - La API responde con error.
  - Se muestra el mensaje de error retornado por el backend.
  - El usuario permanece en la pantalla de login.

---

## 3. Login – Estado loading
- **Escenario:** Usuario envía el formulario de login.
- **Resultado esperado:**  
  - El botón muestra el texto “Ingresando…”.
  - El botón se deshabilita durante la petición.
  - Se muestra un indicador visual de carga.

---

## 4. Acceso a rutas privadas sin sesión
- **Escenario:** Usuario intenta acceder al dashboard sin estar autenticado.
- **Resultado esperado:**  
  - El usuario es redirigido automáticamente a la pantalla de login.

---

## 5. Dashboard – Carga inicial de acciones
- **Escenario:** Usuario autenticado accede al dashboard.
- **Resultado esperado:**  
  - Se realiza la petición `GET /actions/admin-list`.
  - Se muestra un loader centrado mientras carga la información.
  - Se renderiza la lista de acciones correctamente.

---

## 6. Dashboard – Estado vacío
- **Escenario:** La API retorna una lista vacía de acciones.
- **Resultado esperado:**  
  - Se muestra un mensaje indicando que no hay acciones disponibles.
  - No se muestra la tabla/listado.

---

## 7. Dashboard – Error al cargar acciones
- **Escenario:** La petición de listado falla (error de red o servidor).
- **Resultado esperado:**  
  - Se muestra un mensaje de error amigable al usuario.
  - No se rompe la aplicación.

---

## 8. Paginación – Página siguiente
- **Escenario:** Usuario hace clic en “Siguiente”.
- **Resultado esperado:**  
  - Se incrementa el número de página.
  - Se realiza una nueva petición al endpoint con el nuevo `pageNumber`.
  - Se actualiza el listado con los nuevos resultados.

---

## 9. Paginación – Página anterior
- **Escenario:** Usuario hace clic en “Anterior”.
- **Resultado esperado:**  
  - Se decrementa el número de página sin bajar de la página 1.
  - Se actualiza el listado correctamente.

---

## 10. Crear acción – Apertura del drawer
- **Escenario:** Usuario hace clic en el botón “Crear acción”.
- **Resultado esperado:**  
  - Se abre el drawer/modal lateral con el formulario de creación.
  - El fondo queda bloqueado con un overlay.

---

## 11. Crear acción – Validación de campos requeridos
- **Escenario:** Usuario intenta crear una acción sin completar todos los campos.
- **Resultado esperado:**  
  - El botón “Crear” permanece deshabilitado.
  - No se envía ninguna petición al backend.

---

## 12. Crear acción – Carga de icono
- **Escenario:** Usuario selecciona un archivo de imagen (PNG/JPG).
- **Resultado esperado:**  
  - Se muestra el nombre del archivo seleccionado.
  - El archivo se adjunta correctamente al payload.

---

## 13. Crear acción – Creación exitosa
- **Escenario:** Usuario completa el formulario correctamente y crea una acción.
- **Resultado esperado:**  
  - Se envía la petición `POST /actions/admin-add` con `multipart/form-data`.
  - La API responde con éxito.
  - El drawer se cierra automáticamente.
  - El listado de acciones se refresca sin recargar la página.

---

## 14. Persistencia de sesión
- **Escenario:** Usuario recarga la página con sesión activa.
- **Resultado esperado:**  
  - La sesión se mantiene.
  - El usuario permanece en el dashboard sin volver a loguearse.

---

## 15. Cierre de sesión
- **Escenario:** Usuario autenticado hace clic en la opción “Cerrar sesión” desde el menú.
- **Resultado esperado:**  
  - Se elimina el token de sesión almacenado.
  - El estado de autenticación se limpia correctamente.
  - El usuario es redirigido a la pantalla de login.
  - El usuario no puede acceder nuevamente a rutas privadas sin iniciar sesión.

---
