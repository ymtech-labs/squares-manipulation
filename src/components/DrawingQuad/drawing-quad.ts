import { DEFAULT_ROTATE_CLASS, eventQuadManager } from ".";
import { createDoubleTapEvent, customEventListener } from "@utils";
import type { EventType, IQuad } from "@types";

export function DrawingQuad() {
    const container = document.createElement("div");
    container.classList.add("container");

    const QuadProps: IQuad = {
        drawing: false,
        startX: 0,
        startY: 0,
        currentQuad: null,
    };

    const eventHandlers = Object.keys(
        eventQuadManager(container, QuadProps, DEFAULT_ROTATE_CLASS)
    ) as Array<EventType>;

    // Add event listeners using forEach
    eventHandlers.forEach((eventType) => {
        const handler = eventQuadManager(
            container,
            QuadProps,
            DEFAULT_ROTATE_CLASS
        )[eventType as EventType];

        if (handler) {
            customEventListener(container!, eventType, handler);

            if (eventType === "dbltap") {
                // Use the Custom Event
                createDoubleTapEvent(container);
            }
        }
    });

    return container;
}
