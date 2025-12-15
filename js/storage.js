const USERS_KEY = "cookietap_users";
const SESSION_KEY = "cookietap_session";
function getUsers() {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
}
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}
function addUser(user) {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
}
function findUser(identifier) {
  const users = getUsers();
  return users.find(
    user =>
      user.username === identifier ||
      user.email === identifier
  );
}
function setSession(username) {
  const session = {
    isLogged: true,
    username: username
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}
function getSession() {
  const session = localStorage.getItem(SESSION_KEY);
  return session ? JSON.parse(session) : null;
}
function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}
function initUsers() {
  const users = getUsers();

  if (users.length === 0) {
    const demoUsers = [
      {
        name: "Usuario Demo",
        email: "demo@mail.com",
        username: "demo",
        password: "123456"
      }
    ];
    saveUsers(demoUsers);
  }
}
initUsers();