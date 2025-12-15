document.addEventListener("DOMContentLoaded", () => {
  const session = getSession();

  if (session && session.isLogged) {
    updateWelcome(session.username);
    showView("dashboard");
  } else {
    showView("home");
  }
});
document.getElementById("goLogin").addEventListener("click", goLogin);
document.getElementById("goRegister").addEventListener("click", goRegister);

document.getElementById("backHomeFromLogin").addEventListener("click", goHome);
document.getElementById("backHomeFromRegister").addEventListener("click", goHome);
document.getElementById("backHomeFromLogout").addEventListener("click", goHome);
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const identifier = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPassword").value;

  const error = loginUser(identifier, password);

  if (error) {
    showLoginError(error);
  } else {
    const session = getSession();
    updateWelcome(session.username);
    showView("dashboard");
  }
});
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("regPasswordConfirm").value;

  const error = registerUser(
    name,
    email,
    username,
    password,
    confirmPassword
  );

  if (error) {
    showRegisterError(error);
  } else {
    goLogin();
  }
});
document.getElementById("logoutBtn").addEventListener("click", () => {
  logoutUser();
  showView("logout");
});
function protectDashboard() {
  const session = getSession();
  if (!session || !session.isLogged) {
    goLogin();
  }
}