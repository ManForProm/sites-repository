export function scrollToElement(targetSelector,formSelector) {
  const form = document.querySelector(formSelector);

  document.getElementById(targetSelector).scrollIntoView({
    behavior: "smooth",
  });

  form.classList.add("shine");
  setTimeout(() => {
      form.classList.remove('shine');
    }, 1500);
}

