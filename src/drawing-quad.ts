import { customEventListener } from "./utils";
import { EventType, IQuad, QuadEvent } from "./types";
import { createQuad, updateQuad, resetQuad, rotateQuad } from "./helpers";
import { DEFAULT_ROTATE_CLASS } from "./drawing-quad.constants";

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

    const eventHandlers: Array<{
        eventType: EventType;
        handler: (e: QuadEvent) => void;
    }> = [
        {
            eventType: "mousedown",
            handler: (e) => {
                createQuad(QuadProps, e);
            },
        },
        {
            eventType: "touchstart",
            handler: (e) => createQuad(QuadProps, e),
        },
        {
            eventType: "mousemove",
            handler: (e) => updateQuad(container, QuadProps, e),
        },
        {
            eventType: "touchmove",
            handler: (e) => updateQuad(container, QuadProps, e),
        },
        { eventType: "mouseup", handler: () => resetQuad(QuadProps) },
        { eventType: "touchend", handler: () => resetQuad(QuadProps) },
        {
            eventType: "dblclick",
            handler: (e) => rotateQuad(container, e, DEFAULT_ROTATE_CLASS),
        },
    ];

    // Add event listeners using forEach
    eventHandlers.forEach(({ eventType, handler }) => {
        customEventListener(container, eventType, handler);
    });
}
