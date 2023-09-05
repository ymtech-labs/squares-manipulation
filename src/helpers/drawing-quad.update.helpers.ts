import type { IQuad, QuadEvent } from "@types";

/**
 * Updates the size of the interactive quad based on the mouse or touch position.
 *
 * @param {HTMLDivElement} container - The container within which the quad is contained.
 * @param {IQuad} QuadProps - The properties of the quad to update.
 * @param {QuadEvent} e - The mouse or touch event associated with the update.
 */
export const updateQuad =
    (container: HTMLDivElement, QuadProps: IQuad) => (e: QuadEvent) => {
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
