document.addEventListener("DOMContentLoaded", () => {
<<<<<<< HEAD
  // Fade in body
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1s ease-in-out";
    document.body.style.opacity = 1;
  }, 100);
});
=======
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
>>>>>>> 44fc0ceb75201738ada016069e44aa967bca1b6e
