const rows = document.querySelectorAll(".project-row");

rows.forEach((row, index) => {
  row.style.setProperty("--delay", `${index * 35}ms`);
});

const galleryImages = Array.from(
  document.querySelectorAll(".case-study img:not(.project-thumb)")
);

if (galleryImages.length) {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Project image viewer");
  lightbox.innerHTML = `
    <button class="lightbox__button lightbox__close" type="button" aria-label="Close image viewer">X</button>
    <button class="lightbox__button lightbox__prev" type="button" aria-label="Previous image">&lt;</button>
    <div class="lightbox__stage">
      <img class="lightbox__image" alt="" />
    </div>
    <button class="lightbox__button lightbox__next" type="button" aria-label="Next image">&gt;</button>
    <div class="lightbox__toolbar" aria-label="Zoom controls">
      <button class="lightbox__zoom" type="button" data-zoom="out" aria-label="Zoom out">-</button>
      <span class="lightbox__count"></span>
      <button class="lightbox__zoom" type="button" data-zoom="in" aria-label="Zoom in">+</button>
    </div>
  `;
  document.body.appendChild(lightbox);

  const image = lightbox.querySelector(".lightbox__image");
  const count = lightbox.querySelector(".lightbox__count");
  const close = lightbox.querySelector(".lightbox__close");
  const prev = lightbox.querySelector(".lightbox__prev");
  const next = lightbox.querySelector(".lightbox__next");
  const zoomButtons = lightbox.querySelectorAll(".lightbox__zoom");
  let activeIndex = 0;
  let zoom = 1;

  const render = () => {
    const source = galleryImages[activeIndex];
    image.src = source.currentSrc || source.src;
    image.alt = source.alt || "Project image";
    count.textContent = `${activeIndex + 1} / ${galleryImages.length}`;
    zoom = 1;
    image.style.setProperty("--zoom", zoom);
  };

  const openGallery = (index) => {
    activeIndex = index;
    render();
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
    close.focus();
  };

  const closeGallery = () => {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  const move = (direction) => {
    activeIndex =
      (activeIndex + direction + galleryImages.length) % galleryImages.length;
    render();
  };

  galleryImages.forEach((img, index) => {
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.setAttribute("aria-label", `Open image ${index + 1} of ${galleryImages.length}`);
    img.addEventListener("click", () => openGallery(index));
    img.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openGallery(index);
      }
    });
  });

  close.addEventListener("click", closeGallery);
  prev.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeGallery();
    }
  });

  zoomButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.zoom === "in" ? 0.2 : -0.2;
      zoom = Math.min(3, Math.max(0.6, zoom + direction));
      image.style.setProperty("--zoom", zoom.toFixed(2));
    });
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") closeGallery();
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
    if (event.key === "+" || event.key === "=") {
      zoom = Math.min(3, zoom + 0.2);
      image.style.setProperty("--zoom", zoom.toFixed(2));
    }
    if (event.key === "-") {
      zoom = Math.max(0.6, zoom - 0.2);
      image.style.setProperty("--zoom", zoom.toFixed(2));
    }
  });
}
