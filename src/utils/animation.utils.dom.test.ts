import { toggleRotationClass } from ".";

test("toggleRotationClass should apply the CSS class", () => {
    // Create a fictitious element and the CSS class
    const element = document.createElement("div");
    const cssClass = "myCSSClass";

    // Call the function to apply the class
    toggleRotationClass(element, cssClass);

    // Ensure that the class was correctly applied to the element
    expect(element.classList.contains(cssClass)).toBe(true);
});
