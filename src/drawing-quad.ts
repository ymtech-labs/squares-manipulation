import { customEventListener } from "./utils";
import { IQuad } from "./types";
import { createQuad, updateQuad, resetQuad } from "./helpers";

export function setupDrawingQuadrilateral(element: HTMLDivElement) {
    // Initialize variables
    const container = element as HTMLDivElement;

    // Initial Quadrilateral state
    const QuadProps: IQuad = {
        drawing: false,
        startX: 0,
        startY: 0,
        currentQuad: null,
    };

    // Add event listeners
    customEventListener(container, "mousedown", (e: MouseEvent) =>
        createQuad(container, QuadProps, e)
    );
    customEventListener(container, "mousemove", (e: MouseEvent) =>
        updateQuad(QuadProps, e)
    );
    customEventListener(container, "mouseup", () => resetQuad(QuadProps));
}
