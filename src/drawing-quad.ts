import { customEventListener } from "./utils";
import { IQuad } from "./types";

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

    let { drawing, startX, startY, currentQuad } = QuadProps;

    // callback functions
    const createQuad = (e: MouseEvent) => {
        drawing = true;
        startX = e.clientX;
        startY = e.clientY;
        currentQuad = document.createElement("div");
        currentQuad.style.position = "absolute";
        currentQuad.style.left = `${startX}px`;
        currentQuad.style.top = `${startY}px`;
        currentQuad.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Temporary color for drawing
        const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
            Math.random() * 255
        })`;
        currentQuad.style.backgroundColor = color;
        container.appendChild(currentQuad);
        console.log("mousedown");
    };

    const updateQuad = (e: MouseEvent) => {
        if (drawing && currentQuad) {
            const width = e.clientX - startX;
            const height = e.clientY - startY;
            currentQuad.style.width = `${width}px`;
            currentQuad.style.height = `${height}px`;
        }
        console.log("mousemove");
    };

    const resetQuad = () => {
        if (drawing && currentQuad) {
            drawing = false;
            currentQuad = null;
        }
        console.log("mouseup");
    };

    // Add event listeners
    customEventListener(container, "mousedown", createQuad);
    customEventListener(container, "mousemove", updateQuad);
    customEventListener(container, "mouseup", resetQuad);
}
