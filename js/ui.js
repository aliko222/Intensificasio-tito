const views = {
  home: document.getElementById("home"),
  login: document.getElementById("login"),
  register: document.getElementById("register"),
  dashboard: document.getElementById("dashboard"),
  logout: document.getElementById("logout")
};
function showView(viewName) {
  Object.values(views).forEach(view => {
    view.classList.add("hidden");
  });

  views[viewName].classList.remove("hidden");
}
function showLoginError(message) {
  document.getElementById("loginError").textContent = message;
}
function showRegisterError(message) {
  document.getElementById("registerError").textContent = message;
}
function clearErrors() {
  document.getElementById("loginError").textContent = "";
  document.getElementById("registerError").textContent = "";
}
function updateWelcome(username) {
  const welcome = document.getElementById("welcomeText");
  welcome.textContent = `Hola, ${username} 👋`;
}
function goHome() {
  clearErrors();
  showView("home");
}

function goLogin() {
  clearErrors();
  showView("login");
}

function goRegister() {
  clearErrors();
  showView("register");
}