import { DrawingQuad } from "@components";

test("Setup Drawing Quadrilateral", async () => {
    //call the DrawingQuad function
    const drawQuad = DrawingQuad();

    // Simulate a mousedown event to start drawing
    const mouseDownEvent = new MouseEvent("mousedown", {
        clientX: 10,
        clientY: 20,
    });
    drawQuad.dispatchEvent(mouseDownEvent);

    // Simulate a mousemove event to update the quadrilaterale
    const mouseMoveEvent = new MouseEvent("mousemove", {
        clientX: 40,
        clientY: 60,
    });
    drawQuad.dispatchEvent(mouseMoveEvent);

    // Check that the quadrilateral has been created with the correct dimensions
    const quad = drawQuad.firstChild as HTMLDivElement;
    expect(quad.style.left).toBe("10px");
    expect(quad.style.top).toBe("20px");
    expect(quad.style.width).toBe("30px"); // 40 - 10
    expect(quad.style.height).toBe("40px"); // 60 - 20

    // Simulate a mouseup event to complete the drawing
    const mouseUpEvent = new MouseEvent("mouseup");
    drawQuad.dispatchEvent(mouseUpEvent);
});
