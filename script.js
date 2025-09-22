document.addEventListener("DOMContentLoaded", () => {
  // Fade in when page loads
  document.body.classList.add("fade-page");
  setTimeout(() => document.body.classList.add("show"), 50);

  // Fade out before navigation
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", e => {
        e.preventDefault();
        const url = link.getAttribute("href");
        document.body.classList.remove("show");
        setTimeout(() => { window.location.href = url; }, 400);
      });
    }
  });
});
