import { rotateQuad } from ".";
import { DEFAULT_ROTATE_CLASS } from "@components";

describe("rotateQuad Function", () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
    });

    test("should rotate a quad when double-click", () => {
        const quad = document.createElement("div");
        container.appendChild(quad);

        const event = new MouseEvent("dblclick");

        rotateQuad(container, DEFAULT_ROTATE_CLASS)(event);

        // Check if the quad has the rotation class after right-click.
        expect(quad.classList.contains(DEFAULT_ROTATE_CLASS)).toBe(true);
    });
});
