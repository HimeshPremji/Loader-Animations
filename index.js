const clips = document.querySelectorAll(".clips");
window.addEventListener("load", () => {
  clips.style.height = "100%";
});
gsap.fromTo(
  clips,
  {
    height: "100%",
    delay: 0.2,
  },
  {
    height: 0,
    transformOrigin: "top",
    stagger: 0.06,
    duration: 1.5,
    ease: "power4.inOut",
    onComplete: () => {
      gsap.to(".loader", { autoAlpha: 0 });
    },
  }
);
