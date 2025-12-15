function registerUser(name, email, username, password, confirmPassword) {
  if (!name || !email || !username || !password || !confirmPassword) {
    return "Todos los campos son obligatorios";
  }

  if (!email.includes("@")) {
    return "Email inválido";
  }

  if (password.length < 6) {
    return "La contraseña debe tener al menos 6 caracteres";
  }

  if (password !== confirmPassword) {
    return "Las contraseñas no coinciden";
  }

  const existingUser = findUser(username) || findUser(email);
  if (existingUser) {
    return "El usuario o email ya existe";
  }

  const newUser = {
    name,
    email,
    username,
    password
  };

  addUser(newUser);
  return null; // null = todo OK
}
function loginUser(identifier, password) {
  if (!identifier || !password) {
    return "Completá todos los campos";
  }

  const user = findUser(identifier);
  if (!user) {
    return "Usuario no encontrado";
  }

  if (user.password !== password) {
    return "Contraseña incorrecta";
  }

  setSession(user.username);
  return null;
}
function logoutUser() {
  clearSession();
}