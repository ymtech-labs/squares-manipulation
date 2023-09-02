import { expect } from "@playwright/test";

export async function drawQuadrilateral(page) {
    // Simulate a mousemove event to set the starting position
    await page.mouse.move(10, 20);

    // Simulate a mousedown event to start drawing
    await page.mouse.down();

    // Simulate a mousemove event to update the quadrilateral
    await page.mouse.move(40, 60);

    // Simulate a mouseup event to complete the drawing
    await page.mouse.up();
}

export async function verifyQuadDimensions(page, quadStyles) {
    expect(quadStyles.left).toEqual("10px");
    expect(quadStyles.top).toEqual("20px");
    expect(quadStyles.width).toEqual("30px");
    expect(quadStyles.height).toEqual("40px");
}

export async function waitForTransitionEnd(page, elementSelector) {
    await page.evaluate((selector) => {
        return new Promise((resolve) => {
            const element = document.querySelector(selector);
            if (!element) {
                throw new Error(
                    `Element with selector "${selector}" not found.`
                );
            }
            element.addEventListener("transitionend", () => {
                resolve(true);
            });
        });
    }, elementSelector);
}
