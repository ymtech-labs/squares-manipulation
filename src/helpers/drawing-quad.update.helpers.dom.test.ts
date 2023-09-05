import { updateQuad } from ".";
import { IQuad } from "@types";

//before each test, create a new div element
let container: HTMLDivElement;
beforeEach(() => {
    container = document.createElement("div");
});

describe("Quad Update Functionality", () => {
    test("should update the quadrilateral", () => {
        const QuadProps: IQuad = {
            drawing: true,
            startX: 10,
            startY: 20,
            currentQuad: document.createElement("div"),
        };
        const event = new MouseEvent("mousemove", { clientX: 40, clientY: 60 });

        updateQuad(container, QuadProps)(event);

        expect(QuadProps.currentQuad!.style.width).toBe("30px");
        expect(QuadProps.currentQuad!.style.height).toBe("40px");
    });
});
