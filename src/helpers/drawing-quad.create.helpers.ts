import { DEFAULT_QUAD_CLASS } from "@components";
import type { IQuad, QuadEvent } from "@types";

/**
 * Creates an interactive quad (square) element within the specified container.
 *
 * @param {IQuad} QuadProps - The properties of the quad to create.
 * @param {QuadEvent} e - The mouse or touch event associated with the creation.
 */

export const createQuad = (QuadProps: IQuad) => (e: QuadEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    QuadProps.drawing = true;
    QuadProps.startX = clientX;
    QuadProps.startY = clientY;
    QuadProps.currentQuad = document.createElement("div");
    QuadProps.currentQuad.style.position = "absolute";
    QuadProps.currentQuad.style.left = `${QuadProps.startX}px`;
    QuadProps.currentQuad.style.top = `${QuadProps.startY}px`;
    const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
    })`;
    QuadProps.currentQuad.style.backgroundColor = color;
    QuadProps.currentQuad.classList.add(DEFAULT_QUAD_CLASS);
};
