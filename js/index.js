const card = document.querySelector(".testimonial-card");

if (card) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  if (!prefersReducedMotion.matches) {
    const state = {
      current: { rx: 0, ry: 0, ty: 0, mx: 50, my: 50 },
      target: { rx: 0, ry: 0, ty: 0, mx: 50, my: 50 },
    };

    const maxTilt = 8;
    const maxTranslate = 6;
    const ease = 0.12;

    const animate = () => {
      const { current, target } = state;

      current.rx += (target.rx - current.rx) * ease;
      current.ry += (target.ry - current.ry) * ease;
      current.ty += (target.ty - current.ty) * ease;
      current.mx += (target.mx - current.mx) * ease;
      current.my += (target.my - current.my) * ease;

      card.style.setProperty("--rx", `${current.rx}deg`);
      card.style.setProperty("--ry", `${current.ry}deg`);
      card.style.setProperty("--ty", `${current.ty}px`);
      card.style.setProperty("--mx", `${current.mx}%`);
      card.style.setProperty("--my", `${current.my}%`);

      requestAnimationFrame(animate);
    };

    const handleMove = (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      state.target.rx = (0.5 - y) * maxTilt;
      state.target.ry = (x - 0.5) * maxTilt;
      state.target.ty = (0.5 - y) * maxTranslate;
      state.target.mx = x * 100;
      state.target.my = y * 100;
    };

    const reset = () => {
      state.target.rx = 0;
      state.target.ry = 0;
      state.target.ty = 0;
      state.target.mx = 50;
      state.target.my = 50;
    };

    card.addEventListener("pointermove", handleMove);
    card.addEventListener("pointerenter", () => card.classList.add("is-active"));
    card.addEventListener("pointerleave", () => {
      card.classList.remove("is-active");
      reset();
    });

    animate();
  }
}
