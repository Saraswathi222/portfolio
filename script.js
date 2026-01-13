function toggleWork(id, button) {
  const section = document.getElementById(id);

  if (section.style.display === "block") {
    section.style.display = "none";
    button.textContent = "View Project";
  } else {
    section.style.display = "block";
    button.textContent = "Hide Project";
  }
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
