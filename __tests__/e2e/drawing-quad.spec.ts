import { test, expect } from "@playwright/test";
import {
    DEFAULT_QUAD_CLASS,
    DEFAULT_ROTATE_CLASS,
} from "../../src/drawing-quad.constants";

async function drawQuadrilateral(page) {
    // Simulate a mousemove event to set the starting position
    await page.mouse.move(10, 20);

    // Simulate a mousedown event to start drawing
    await page.mouse.down();

    // Simulate a mousemove event to update the quadrilateral
    await page.mouse.move(40, 60);

    // Simulate a mouseup event to complete the drawing
    await page.mouse.up();
}

async function verifyQuadDimensions(page, quadStyles) {
    expect(quadStyles.left).toEqual("10px");
    expect(quadStyles.top).toEqual("20px");
    expect(quadStyles.width).toEqual("30px");
    expect(quadStyles.height).toEqual("40px");
}

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
});

test(`Drawing Quadrilateral`, async ({ page }) => {
    await drawQuadrilateral(page);

    // Check that the quadrilateral has been created with the correct dimensions
    const quadStyles = await page.$eval("#app", (container) => {
        const quad = container.firstChild as HTMLDivElement;
        return {
            left: quad.style.left,
            top: quad.style.top,
            width: quad.style.width,
            height: quad.style.height,
        };
    });

    await verifyQuadDimensions(page, quadStyles);
    await page.close();
});

test(`Rotate Quadrilateral on Double Click`, async ({ page }) => {
    await drawQuadrilateral(page);
    // Select the square created in the "Drawing Quadrilateral" test
    const quadClass: typeof DEFAULT_QUAD_CLASS = "quad";
    const createdQuad = await page.$(`.${quadClass}`);

    await page.waitForTimeout(1000);
    // Simulate a double click event on the created quadrilateral to trigger rotation
    await createdQuad?.dblclick();

    // Check that the quadrilateral has the "rotate--square" class added
    const hasRotateClass = await createdQuad?.evaluate((element) => {
        const cssClass: typeof DEFAULT_ROTATE_CLASS = "quad--rotate";
        return element.classList.contains(cssClass);
    });

    expect(hasRotateClass).toBe(true);

    await page.waitForTimeout(3000);
});
