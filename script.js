document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".lazy-image");

  images.forEach(img => {
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", function() {
        img.classList.add("loaded");
      });
    }
  });
});
