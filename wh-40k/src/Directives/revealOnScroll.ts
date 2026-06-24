declare module "solid-js" {
  namespace JSX {
    interface Directives {
      revealOnScroll: true;
    }
  }
}

const revealOnScroll = (element: Element, value: true) => {
  element.classList.add(
    "opacity-0",
    "transition",
    "delay-150",
    "duration-1000",
    "ease-in",
  );
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("opacity-100");
        element.classList.remove("opacity-0");
      }
    },
    {
      threshold: 0.1,
    },
  );
  observer.observe(element);
};

export default revealOnScroll;