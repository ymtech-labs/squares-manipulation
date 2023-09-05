import { DEFAULT_QUAD_CLASS } from "@components";
import { createQuad } from ".";
import { IQuad } from "@types";

describe("Quad Creation Functionality", () => {
    test("should create a quadrilateral", () => {
        const QuadProps: IQuad = {
            drawing: false,
            startX: 0,
            startY: 0,
            currentQuad: null,
        };

        const event = new MouseEvent("mousedown", { clientX: 10, clientY: 20 });

        createQuad(QuadProps)(event);

        expect(QuadProps.drawing).toBe(true);
        expect(QuadProps.startX).toBe(10);
        expect(QuadProps.startY).toBe(20);
        expect(QuadProps.currentQuad!.style.left).toBe("10px");
        expect(QuadProps.currentQuad!.style.top).toBe("20px");
        expect(QuadProps.currentQuad!.classList[0]).toBe(DEFAULT_QUAD_CLASS);
    });
});
