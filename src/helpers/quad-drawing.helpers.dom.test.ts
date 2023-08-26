import { expect, test } from "vitest";
import { createQuad, updateQuad, resetQuad } from ".";
import { IQuad } from "../types";

test("should create a quadrilateral", () => {
    const QuadProps: IQuad = {
        drawing: false,
        startX: 0,
        startY: 0,
        currentQuad: null,
    };
    const container = document.createElement("div");
    const event = new MouseEvent("mousedown", { clientX: 10, clientY: 20 });

    createQuad(container, QuadProps, event);

    expect(QuadProps.drawing).toBe(true);
    expect(QuadProps.startX).toBe(10);
    expect(QuadProps.startY).toBe(20);
    expect(QuadProps.currentQuad!.style.left).toBe("10px");
    expect(QuadProps.currentQuad!.style.top).toBe("20px");
});

test("should update the quadrilateral", () => {
    const QuadProps: IQuad = {
        drawing: true,
        startX: 10,
        startY: 20,
        currentQuad: document.createElement("div"),
    };
    const event = new MouseEvent("mousemove", { clientX: 40, clientY: 60 });

    updateQuad(QuadProps, event);

    expect(QuadProps.currentQuad!.style.width).toBe("30px");
    expect(QuadProps.currentQuad!.style.height).toBe("40px");
});

test("should reset the quadrilateral", () => {
    const QuadProps: IQuad = {
        drawing: true,
        startX: 10,
        startY: 20,
        currentQuad: document.createElement("div"),
    };

    resetQuad(QuadProps);

    expect(QuadProps.drawing).toBe(false);
    expect(QuadProps.currentQuad).toBe(null);
});
