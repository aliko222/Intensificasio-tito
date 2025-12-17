# 🍪 CookieTap

**CookieTap** es una aplicación web interactiva que permite a los usuarios crear cuentas, iniciar sesión y acceder a su espacio personal de manera segura. Diseñada con una interfaz amigable y un estilo visual cálido inspirado en galletas y repostería.

## ✨ Características

- **🔐 Sistema de autenticación completo**
  - Registro de usuarios con validación de datos
  - Inicio de sesión seguro con usuario o email
  - Control de sesiones persistente
  
- **📱 Diseño responsivo**
  - Optimizado para dispositivos móviles y escritorio
  - Interfaz adaptativa que se ajusta a cualquier pantalla
  
- **🎨 Experiencia visual única**
  - Paleta de colores cálida (beige, marrón y naranja)
  - Decoraciones temáticas con galletas
  - Tipografía amigable (Fredoka)
  
- **⚡ Navegación fluida**
  - Single Page Application (SPA) sin recargas
  - Transiciones suaves entre vistas
  - Feedback inmediato en todas las acciones

## 🚀 Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/aliko222/Intensificasio-tito.git
```

2. Abre el archivo `index.html` en tu navegador:
```bash
cd cookietap
open index.html
```

¡Eso es todo! No requiere instalación de dependencias ni servidor backend.

## 💻 Uso

### Crear una cuenta
1. Haz clic en "Registrarse"
2. Completa el formulario con:
   - Nombre y apellido
   - Email válido
   - Usuario único
   - Contraseña (mínimo 6 caracteres)
   - Confirmación de contraseña
3. Al registrarte exitosamente, serás llevado automáticamente a tu espacio personal

### Iniciar sesión
1. Haz clic en "Iniciar Sesión"
2. Ingresa tu usuario o email
3. Ingresa tu contraseña
4. Accede a tu panel personal

### Cerrar sesión
- Haz clic en "Cerrar sesión" desde tu panel
- Tu sesión se cerrará de forma segura

## 🛠️ Tecnologías utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y diseño responsivo
- **JavaScript (Vanilla)** - Lógica de la aplicación
- **LocalStorage** - Almacenamiento local de datos

## 📁 Estructura del proyecto

```
cookietap/
│
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos de la aplicación
├── js/
│   ├── app.js          # Lógica principal y eventos
│   ├── auth.js         # Sistema de autenticación
│   ├── storage.js      # Gestión de localStorage
│   └── ui.js           # Control de interfaz y vistas
├── design/             # Prototipos y documentación visual
└── README.md           # Este archivo
```

## 🔒 Seguridad

**Nota importante:** CookieTap es una aplicación de demostración que almacena datos localmente en el navegador. Para uso en producción, se recomienda:
- Implementar un backend seguro
- Usar hashing de contraseñas (bcrypt, argon2)
- Implementar autenticación con tokens (JWT)
- Usar HTTPS
- Agregar validación del lado del servidor

## 🎯 Próximas funcionalidades

- [ ] Recuperación de contraseña
- [ ] Perfil de usuario editable
- [ ] Modo oscuro




## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Tomás Zapata**

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!