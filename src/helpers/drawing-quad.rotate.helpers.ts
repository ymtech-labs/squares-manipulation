import {
    customEventListener,
    findTargetElement,
    toggleRotationClass,
} from "@utils";
import { DEFAULT_ROTATE_CLASS } from "@components";
import type { QuadEvent } from "@types";

let lastClickTime = 0; // The timestamp of the last click event.
let transitionCount = 0; // Counts the number of "transitionend" events in progress.
let selectedQuads: HTMLDivElement[] = []; // Array of selected quads.

/**
 * Rotates an interactive quad on right-click, with double-click handling.
 *
 * @param {HTMLDivElement} container - The container containing the interactive quads.
 * @param {QuadEvent} e - The mouse or touch event associated with the rotation.
 * @param {string} cssClass - The CSS rotation class.
 */
export const rotateQuad =
    (container: HTMLDivElement, cssClass: typeof DEFAULT_ROTATE_CLASS) =>
    (e: QuadEvent) => {
        e.preventDefault();

        const currentTime = new Date().getTime();

        // Check if the time elapsed since the last click is greater than 300 milliseconds.
        if (currentTime - lastClickTime > 300) {
            lastClickTime = currentTime;

            // Determine the client coordinates based on mouse or touch event.
            const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
            const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

            // Find the target quad element at the given coordinates.
            const targetQuad = findTargetElement(container, clientX, clientY);

            if (targetQuad) {
                const isSelected = selectedQuads.includes(targetQuad);

                if (!isSelected) {
                    // Add the target quad to the list of selected quads and apply rotation.
                    selectedQuads.push(targetQuad);

                    //Once rotation is complete, remove the element from the DOM
                    toggleRotationClass(targetQuad, cssClass);

                    // Listen for the "transitionend" event and handle it once.
                    customEventListener(
                        targetQuad,
                        "transitionend",
                        () => {
                            transitionCount--;

                            // If all "transitionend" events are completed, remove selected quads.
                            if (transitionCount === 0) {
                                selectedQuads.forEach((quad) => {
                                    quad.remove();
                                });
                                selectedQuads = []; // Clear the list of selected quads.
                            }
                        },
                        { once: true }
                    );

                    // Increment the "transitionend" event count.
                    transitionCount++;
                }
            }
        }
    };
