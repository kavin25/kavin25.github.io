let form = document.getElementById("command");
let input = document.getElementById("command-input");
const mainElement = document.querySelector("main");
const changeTypeButton = document.getElementById("change-type");

let currentType =
  localStorage.getItem("KAVIN_WEBSITE_TYPE") === "normal"
    ? "normal"
    : "terminal";

const head = document.querySelector("head");
const link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = `css/${currentType}.css`;
head.appendChild(link);

if (window.location.pathname === "/") {
  toggleHTML(currentType === "normal" ? "terminal" : "normal");
  form.addEventListener("submit", submitListener);
  input.addEventListener("keyup", checkCtrlL);
}

const setTheme = (themeName) => {
  localStorage.setItem("KAVIN_WEBSITE_THEME", themeName);
  document.documentElement.className = themeName;
  document.querySelectorAll("img.theme-toggle-btn").forEach((img) => {
    img.src =
      themeName === "theme-dark"
        ? "https://someshkar.com/icons/moon.png"
        : "https://someshkar.com/icons/sun.png";
    console.log(themeName);
  });
};

const toggleTheme = () => {
  if (localStorage.getItem("KAVIN_WEBSITE_THEME") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
};

(function () {
  if (localStorage.getItem("KAVIN_WEBSITE_THEME") === "theme-light") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
})();

//document.getElementById("change-type-link").addEventListener("click", () => {
//currentType = toggleType(currentType);
//});

changeTypeButton.addEventListener("click", () => {
  currentType = toggleType(currentType);
});

const renderHelp = () => {
  const helpDiv = createContentElement(contents.help);
  output(helpDiv);
};

const renderAbout = () => {
  const aboutDiv = createContentElement(contents.about);
  output(aboutDiv);
};

const renderEducation = () => {
  const educationDiv = createContentElement(contents.education);
  output(educationDiv);
};

const renderSkills = () => {
  const skillsDiv = createContentElement(contents.skills);
  output(skillsDiv);
};

const renderProjects = () => {
  const projectsDiv = createContentElement(contents.projects);
  output(projectsDiv);
};

const renderContact = () => {
  const contactDiv = createContentElement(contents.contact);
  output(contactDiv);
};

const renderCommandNotFound = () => {
  const errorDiv = createContentElement(contents.error(input));
  output(errorDiv);
};

function submitListener(e) {
  e.preventDefault();
  switch (input.value.toLowerCase()) {
    case "help":
      renderHelp();
      break;
    case "clear":
      removeAllMainNodes();
      break;
    case "about":
      renderAbout();
      break;
    case "education":
      renderEducation();
      break;
    case "skills":
      renderSkills();
      break;
    case "contact":
      renderContact();
      break;
    case "blog":
      window.open("https://livecode247.com", "_blank");
      break;
    case "projects":
      renderProjects();
      break;
    default:
      renderCommandNotFound();
      break;
  }
  renderNewForm();
}
