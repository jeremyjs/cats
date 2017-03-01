// equivalent to $(element).addClass(className)
export const domAddClass = (element, className) => (
  element.classList ?
    element.classList.add(className)
  :
    element.className += ' ' + className
);
