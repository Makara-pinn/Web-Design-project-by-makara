(() => {
  const header = document.querySelector(".head-container");
  if (!header) return;

  const setHeaderOffset = () => {
    const height = Math.ceil(header.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--header-offset", `${height}px`);
  };

  setHeaderOffset();
  window.addEventListener("resize", setHeaderOffset, { passive: true });

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(setHeaderOffset);
    observer.observe(header);
  }
})();
