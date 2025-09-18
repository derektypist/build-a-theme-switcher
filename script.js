const themes = [{
  name: "dark",
  message: "Dark Mode On"
}, {
  name: "light",
  message: "Light Mode On"
}];
const dropDown = document.getElementById("theme-dropdown");
const button = document.getElementById("theme-switcher-button");
const dropDowns = document.querySelectorAll("#theme-dropdown li[role='menuitem']");
const themeDark = document.getElementById("theme-dark");

const themeLight = document.getElementById("theme-light");

const textMessage = document.querySelector('p[aria-live="polite"]');

const body = document.querySelector("body");

button.addEventListener("click", function() {
  dropDown.hidden = !dropDown.hidden;
  button.setAttribute("aria-expanded", dropDown.hidden ? "false" : "true");
  
});

dropDowns.forEach(item => {
 item.addEventListener("click", () => {
   body.className = item.id;

   textMessage.textContent = themes[themes.findIndex(el => el.name === item.id.substring(6))].message;
  
 });
});
