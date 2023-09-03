import {
    DEFAULT_ROTATE_CLASS,
    createQuad,
    updateQuad,
    resetQuad,
    rotateQuad,
} from ".";
import { customEventListener } from "@utils";
import type { EventType, IQuad, QuadEvent } from "@types";

export function DrawingQuad() {
    // Check if the container already exists, and if not, create it

    const container = document.createElement("div");
    container.classList.add("container");

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
            handler: (e) => updateQuad(container!, QuadProps, e),
        },
        {
            eventType: "touchmove",
            handler: (e) => updateQuad(container!, QuadProps, e),
        },
        { eventType: "mouseup", handler: () => resetQuad(QuadProps) },
        { eventType: "touchend", handler: () => resetQuad(QuadProps) },
        {
            eventType: "dblclick",
            handler: (e) => rotateQuad(container!, e, DEFAULT_ROTATE_CLASS),
        },
    ];

    // Add event listeners using forEach
    eventHandlers.forEach(({ eventType, handler }) => {
        customEventListener(container!, eventType, handler);
    });

    return container;
}
