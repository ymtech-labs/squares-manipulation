import {
    customEventListener,
    findTargetElement,
    logDebugMessage,
    toggleRotationClass,
} from "../../utils";
import { DEFAULT_ROTATE_CLASS, DEFAULT_QUAD_CLASS } from "..";
import type { IQuad, QuadEvent } from "../../types";

/**
 * Creates an interactive quad (square) element within the specified container.
 *
 * @param {IQuad} QuadProps - The properties of the quad to create.
 * @param {QuadEvent} e - The mouse or touch event associated with the creation.
 */
export const createQuad = (QuadProps: IQuad, e: QuadEvent) => {
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

/**
 * Updates the size of the interactive quad based on the mouse or touch position.
 *
 * @param {HTMLDivElement} container - The container within which the quad is contained.
 * @param {IQuad} QuadProps - The properties of the quad to update.
 * @param {QuadEvent} e - The mouse or touch event associated with the update.
 */
export const updateQuad = (
    container: HTMLDivElement,
    QuadProps: IQuad,
    e: QuadEvent
) => {
    if (QuadProps.drawing && QuadProps.currentQuad) {
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

        const width = clientX - QuadProps.startX;
        const height = clientY - QuadProps.startY;
        QuadProps.currentQuad.style.width = `${width}px`;
        QuadProps.currentQuad.style.height = `${height}px`;
        if (width > 0 || height > 0)
            container.appendChild(QuadProps.currentQuad);
    }
};

/**
 * Resets the properties of the interactive quad after finishing drawing.
 *
 * @param {IQuad} QuadProps - The properties of the quad to reset.
 */
export const resetQuad = (QuadProps: IQuad) => {
    if (QuadProps.drawing && QuadProps.currentQuad) {
        QuadProps.drawing = false;
        QuadProps.currentQuad = null;
    }
};

let lastClickTime = 0; // The timestamp of the last click event.
/**
 * Rotates the interactive quad on right-click, with double-click handling.
 *
 * @param {HTMLDivElement} container - The container containing the interactive quads.
 * @param {Event} e - The mouse or touch event associated with the rotation.
 */
export const rotateQuad = (
    container: HTMLDivElement,
    e: QuadEvent,
    cssClass: typeof DEFAULT_ROTATE_CLASS
) => {
    e.preventDefault();

    const currentTime = new Date().getTime();

    if (currentTime - lastClickTime > 300) {
        lastClickTime = currentTime;

        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

        const targetQuad = findTargetElement(container, clientX, clientY);
        logDebugMessage(targetQuad);

        if (targetQuad) {
            toggleRotationClass(targetQuad, cssClass);
            //Once rotation is complete, remove the element from the DOM

            customEventListener(
                targetQuad,
                "transitionend",
                () => {
                    targetQuad.remove();
                },
                { once: true }
            );
        }
    }
};
