/**
 * Toggle the rotation class of a DOM element and handle removal of the class after animation.
 *
 * @param {HTMLDivElement} element - The DOM element to which the rotation class should be applied.
 * @param {string} cssClass - The rotation CSS class.
 */
export const toggleRotationClass = (
    element: HTMLDivElement,
    cssClass: string
): void => {
    element.classList.toggle(cssClass);

    const transitionEndHandler = () => {
        element.classList.remove(cssClass);
        element.removeEventListener("transitionend", transitionEndHandler);
    };

    element.addEventListener("transitionend", transitionEndHandler);
};
