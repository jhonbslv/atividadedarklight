const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");

function setTheme(theme) {
  const isDark = theme === "dark";

  html.dataset.theme = theme;
  html.classList.toggle("dark", isDark);
  themeLabel.textContent = isDark ? "Light mode" : "Dark mode";

  localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
  const nextTheme = html.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});
