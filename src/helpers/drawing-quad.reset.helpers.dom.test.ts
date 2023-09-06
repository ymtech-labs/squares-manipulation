import { resetQuad } from ".";
import { IQuad } from "@types";

describe("Quad Reset Functionality", () => {
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
});
