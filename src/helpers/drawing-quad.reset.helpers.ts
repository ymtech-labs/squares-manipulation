import type { IQuad } from "@types";

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
