🍪 CookieTap
CookieTap es una aplicación web interactiva que permite a los usuarios crear cuentas, iniciar sesión y acceder a su espacio personal de manera segura. Diseñada con una interfaz amigable y un estilo visual cálido inspirado en galletas y repostería.
Características

Sistema de autenticación completo

Registro de usuarios con validación de datos
Inicio de sesión seguro con usuario o email
Control de sesiones persistente


Gestión de tareas (To-Do List)

Crear, completar y eliminar tareas personales
Persistencia de datos en localStorage
Cada usuario tiene su propia lista privada
Interfaz intuitiva con checkbox y botones de acción


Diseño responsivo

Optimizado para dispositivos móviles y escritorio
Interfaz adaptativa que se ajusta a cualquier pantalla


Experiencia visual única

Paleta de colores cálida (beige, marrón y naranja)
Decoraciones temáticas con galletas
Tipografía amigable (Fredoka)


Navegación fluida

Single Page Application (SPA) sin recargas
Transiciones suaves entre vistas
Feedback inmediato en todas las acciones



Instalación

Clona este repositorio:

bashgit clone https://github.com/tu-usuario/cookietap.git

Abre el archivo index.html en tu navegador:

bashcd cookietap
open index.html
¡Eso es todo! No requiere instalación de dependencias ni servidor backend.
Uso
Crear una cuenta

Haz clic en "Registrarse"
Completa el formulario con:

Nombre y apellido
Email válido
Usuario único
Contraseña (mínimo 6 caracteres)
Confirmación de contraseña


Al registrarte exitosamente, serás llevado automáticamente a tu espacio personal

Iniciar sesión

Haz clic en "Iniciar Sesión"
Ingresa tu usuario o email
Ingresa tu contraseña
Accede a tu panel personal

Cerrar sesión

Haz clic en "Cerrar sesión" desde tu panel
Tu sesión se cerrará de forma segura

Gestionar tus tareas
Una vez dentro de tu panel personal, puedes usar el sistema de tareas:

Agregar una tarea:

Escribe el texto en el campo "Escribí una nueva tarea..."
Presiona Enter o haz clic en "Agregar"
La tarea aparecerá en tu lista


Marcar como completada:

Marca el checkbox junto a la tarea
O haz clic directamente sobre el texto de la tarea
La tarea se tachará indicando que está completa


Eliminar una tarea:

Haz clic en el ícono de basura 🗑️ a la derecha de la tarea
La tarea se eliminará permanentemente



Nota: Tus tareas se guardan automáticamente y solo tú puedes verlas. Cada usuario tiene su propia lista privada.
Tecnologías utilizadas

HTML5 - Estructura semántica
CSS3 - Estilos y diseño responsivo
JavaScript (Vanilla) - Lógica de la aplicación
LocalStorage - Almacenamiento local de datos

 Estructura del proyecto
cookietap/
│
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos de la aplicación
├── js/
│   ├── app.js          # Lógica principal y eventos
│   ├── auth.js         # Sistema de autenticación
│   ├── storage.js      # Gestión de localStorage
│   ├── tasks.js        # Sistema de gestión de tareas
│   └── ui.js           # Control de interfaz y vistas
├── design/             # Prototipos y documentación visual
└── README.md           # Este archivo
Seguridad
Nota importante: CookieTap es una aplicación de demostración que almacena datos localmente en el navegador. Para uso en producción, se recomienda:

Implementar un backend seguro
Usar hashing de contraseñas (bcrypt, argon2)
Implementar autenticación con tokens (JWT)
Usar HTTPS
Agregar validación del lado del servidor

Funcionalidades

 Sistema de autenticación (registro, login, logout)
 Lista de tareas personal (To-Do List)
 Persistencia de datos con localStorage
 Privacidad de tareas por usuario
 Sistema de "recordar sesión"



Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar CookieTap:

Haz un fork del proyecto
Crea una rama para tu feature (git checkout -b feature/AmazingFeature)
Commit tus cambios (git commit -m 'Add some AmazingFeature')
Push a la rama (git push origin feature/AmazingFeature)
Abre un Pull Request

Autor
Tomás Zapata