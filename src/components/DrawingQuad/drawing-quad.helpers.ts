import { DEFAULT_ROTATE_CLASS } from "@components";
import { createQuad, updateQuad, resetQuad, rotateQuad } from "@helpers";
import type { IQuad, PartialEventHandlers, QuadEvent } from "@types";

export const eventQuadManager = (
    container: HTMLDivElement,
    QuadProps: IQuad,
    cssClass: typeof DEFAULT_ROTATE_CLASS
): PartialEventHandlers<QuadEvent> => {
    return {
        mousedown: createQuad(QuadProps),
        touchstart: createQuad(QuadProps),
        mousemove: updateQuad(container, QuadProps),
        touchmove: updateQuad(container, QuadProps),
        mouseup: () => resetQuad(QuadProps),
        touchend: () => resetQuad(QuadProps),
        dblclick: rotateQuad(container, cssClass),
    };
};
