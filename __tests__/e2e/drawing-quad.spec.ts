import {
    test,
    expect,
    firefox,
    chromium,
    webkit,
    BrowserType,
} from "@playwright/test";

const browsers: Array<BrowserType> = [firefox, chromium, webkit];

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
});

test(`Setup Drawing Quadrilateral`, async ({ page }) => {
    //specific container selector
    const containerSelector = "#app";

    // Simulate a mousedown event to start drawing
    await page.mouse.move(10, 20);
    await page.mouse.down();

    // Simulate a mousemove event to update the quadrilateral
    await page.mouse.move(40, 60);

    // Check that the quadrilateral has been created with the correct dimensions
    const quadStyles = await page.$eval(containerSelector, (container) => {
        const quad = container.firstChild as HTMLDivElement;
        return {
            left: quad.style.left,
            top: quad.style.top,
            width: quad.style.width,
            height: quad.style.height,
        };
    });

    expect(quadStyles.left).toBe("10px");
    expect(quadStyles.top).toBe("20px");
    expect(quadStyles.width).toBe("30px"); // 40 - 10
    expect(quadStyles.height).toBe("40px"); // 60 - 20

    // Simulate a mouseup event to complete the drawing
    await page.mouse.up();

    await page.close();
});
