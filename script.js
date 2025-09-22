document.addEventListener("DOMContentLoaded", () => {
  // Fade in body
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1s ease-in-out";
    document.body.style.opacity = 1;
  }, 100);
});