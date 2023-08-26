import { IQuad } from "../types";

export const createQuad = (
    container: HTMLDivElement,
    QuadProps: IQuad,
    e: MouseEvent
) => {
    QuadProps.drawing = true;
    QuadProps.startX = e.clientX;
    QuadProps.startY = e.clientY;
    QuadProps.currentQuad = document.createElement("div");
    QuadProps.currentQuad.style.position = "absolute";
    QuadProps.currentQuad.style.left = `${QuadProps.startX}px`;
    QuadProps.currentQuad.style.top = `${QuadProps.startY}px`;
    const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
    })`;
    QuadProps.currentQuad.style.backgroundColor = color;
    container.appendChild(QuadProps.currentQuad);
    console.log("mousedown");
};

export const updateQuad = (QuadProps: IQuad, e: MouseEvent) => {
    if (QuadProps.drawing && QuadProps.currentQuad) {
        const width = e.clientX - QuadProps.startX;
        const height = e.clientY - QuadProps.startY;
        QuadProps.currentQuad.style.width = `${width}px`;
        QuadProps.currentQuad.style.height = `${height}px`;
    }
    console.log("mousemove");
};

export const resetQuad = (QuadProps: IQuad) => {
    if (QuadProps.drawing && QuadProps.currentQuad) {
        QuadProps.drawing = false;
        QuadProps.currentQuad = null;
    }
    console.log("mouseup");
};
