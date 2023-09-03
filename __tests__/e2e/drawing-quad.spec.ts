import { test, expect } from "@playwright/test";
import { DEFAULT_QUAD_CLASS, DEFAULT_ROTATE_CLASS } from "../../src/components";
import {
    drawQuadrilateral,
    verifyQuadDimensions,
    waitForTransitionEnd,
} from "./drawing-quad.spec.helpers";

test.beforeEach(async ({ page }) => {
    await page.goto("/");
});

test(`Drawing Quadrilateral`, async ({ page }) => {
    await drawQuadrilateral(page);

    // Check that the quadrilateral has been created with the correct dimensions
    const quadStyles = await page.$eval(".container", (container) => {
        const quad = container.firstChild as HTMLDivElement;
        return {
            left: quad.style.left,
            top: quad.style.top,
            width: quad.style.width,
            height: quad.style.height,
        };
    });

    // Check that the quadrilateral has been created with the correct dimensions
    await verifyQuadDimensions(page, quadStyles);

    await page.waitForTimeout(3000);

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
    await page.close();
});

test(`Quad removal at end of rotation`, async ({ page }) => {
    await drawQuadrilateral(page);
    const quadClass: typeof DEFAULT_QUAD_CLASS = "quad";
    const createdQuad = await page.$(`.${quadClass}`);

    // Simulate a double click event on the created quadrilateral to trigger rotation
    await createdQuad?.dblclick();

    // Wait for the "transitionend" event to be triggered on the createdQuad
    await waitForTransitionEnd(page, `.${quadClass}`);

    // Check that the quadrilateral has been removed from the DOM
    const isQuadRemoved = (await page.$(`.${quadClass}`)) === null;
    expect(isQuadRemoved).toBe(true);

    await page.close();
});
