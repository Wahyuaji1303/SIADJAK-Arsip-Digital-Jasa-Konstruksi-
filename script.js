// TOGGLE PASSWORD
const togglePassBtn = document.getElementById("togglePass");
const passwordInput = document.getElementById("password");

togglePassBtn.addEventListener("click", function () {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  togglePassBtn.textContent = isPassword ? "🙈" : "👁";
});

// LOGIN
document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const remember = document.getElementById("rememberMe").checked;

  if(user === "" || pass === ""){
    alert("Username dan password wajib diisi!");
    return;
  }

  if(remember){
    localStorage.setItem("siadjak_last_user", user);
  } else {
    localStorage.removeItem("siadjak_last_user");
  }

  // ADMIN LOGIN
  if(user === "Devinaaulya" && pass === "Devina123"){
    window.location.href = "https://wahyuaji1303.github.io/Dashboard-ADMIN-SIADJAK/";
    return;
  }

  // USER LOGIN
  window.location.href = "https://wahyuaji1303.github.io/Dashboard-USER-SIADJAK/";
});

// LOAD LAST USER
window.addEventListener("DOMContentLoaded", function(){
  const lastUser = localStorage.getItem("siadjak_last_user");
  if(lastUser){
    document.getElementById("username").value = lastUser;
    document.getElementById("rememberMe").checked = true;
  }
});

// MODAL FORGOT PASSWORD
function openForgot(){
  document.getElementById("forgotModal").style.display = "flex";
}

function closeForgot(){
  document.getElementById("forgotModal").style.display = "none";
}

// RESET PASSWORD (SIMULASI)
function resetPassword(){
  const user = document.getElementById("resetUser").value.trim();
  const newPass = document.getElementById("newPass").value.trim();

  if(user === ""){
    alert("Masukkan username / email terlebih dahulu!");
    return;
  }

  if(newPass.length < 6){
    alert("Password baru minimal 6 karakter!");
    return;
  }

  alert("Password berhasil direset (simulasi).");
  closeForgot();

  document.getElementById("resetUser").value = "";
  document.getElementById("newPass").value = "";
}

// CLOSE MODAL KLIK LUAR
window.addEventListener("click", function(e){
  const modal = document.getElementById("forgotModal");
  if(e.target === modal){
    closeForgot();
  }
});

// TOUCH SUPPORT MOBILE
document.addEventListener("touchmove", function(){}, { passive:true });