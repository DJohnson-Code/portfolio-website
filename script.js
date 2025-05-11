window.addEventListener("load", () => {
  const nameText = "Darnell Johnson";
  const titleText = "Full-Stack Developer & Digital Creator";
  const nameEl = document.getElementById("name");
  const titleEl = document.getElementById("title");
  const mainContent = document.getElementById("main-content");
  const splashScreen = document.getElementById("splash-screen");

  // Ensure main content is hidden
  mainContent.style.display = "none";
  mainContent.style.visibility = "hidden";

  function typeText(text, element, index, callback) {
    if (index === 0) {
      element.classList.add("typing");
    }

    if (index < text.length) {
      element.textContent += text.charAt(index);
      setTimeout(() => typeText(text, element, index + 1, callback), 118);
    } else {
      callback?.();
    }
  }

  typeText(nameText, nameEl, 0, () => {
    nameEl.classList.remove("typing");

    setTimeout(() => {
      titleEl.classList.add("typing");
      typeText(titleText, titleEl, 0, () => {
        setTimeout(() => {
          document.getElementById("splash-screen").classList.add("fade-out");
          setTimeout(() => {
            document.getElementById("splash-screen").style.display = "none";
            document.getElementById("main-content").style.display = "block";
          }, 3000);
        }, 3000);
      });
    }, 500);
  });
});
