import type { EventCallback, EventType } from "../types";

/**
 * @function customEventListener
 * @description Registers a custom event listener on the specified target.
 * @param {HTMLElement | Document | Window} target The target element to add the event listener
 * @param {E extends EventType} eventType The event type to listen for on the target element
 * @param {EventCallback<E>} callback The callback function to execute when the event is triggered
 * @param {AddEventListenerOptions} [options] options The options to pass to the event listener
 * @returns {void}
 */
export function customEventListener<E extends EventType>(
    target: HTMLElement | Document | Window,
    eventType: E,
    callback: EventCallback<E>,
    options?: AddEventListenerOptions
): void {
    target.addEventListener(eventType, callback as EventListener, options);
}

/**
 * Get the bounds (rectangles) of a DOM element.
 *
 * @param {HTMLDivElement} element - The DOM element for which bounds are needed.
 * @returns {DOMRect} The element's bounds as a DOMRect.
 */
export const getElementBounds = (element: HTMLDivElement): DOMRect =>
    element.getBoundingClientRect();

/**
 * Check if a given point (x, y) is inside the bounds of an element.
 *
 * @param {DOMRect} elementBounds - The bounds of the element.
 * @param {number} x - The x-coordinate of the point.
 * @param {number} y - The y-coordinate of the point.
 * @returns {boolean} `true` if the point is inside the element, otherwise `false`.
 */
export const isInsideElement = (
    elementBounds: DOMRect,
    x: number,
    y: number
): boolean =>
    x >= elementBounds.left &&
    x <= elementBounds.right &&
    y >= elementBounds.top &&
    y <= elementBounds.bottom;

/**
 * Find and return the child element of a container in which a given point (x, y) is located.
 *
 * @param {HTMLDivElement} container - The container containing the child elements.
 * @param {number} x - The x-coordinate of the point.
 * @param {number} y - The y-coordinate of the point.
 * @returns {HTMLDivElement|null} The topmost child element within which the point is located, or `null` if none.
 */
export const findTargetElement = (
    container: HTMLDivElement,
    x: number,
    y: number
): HTMLDivElement | null => {
    const childElements = Array.from(container.children) as HTMLDivElement[];

    // Reverse the order of child elements to check from top to bottom in the DOM.
    const reversedElements = childElements.slice().reverse();

    // Find the topmost child element that contains the point (x, y).
    const targetChild = reversedElements.find((child) => {
        const elementBounds = getElementBounds(child);
        return isInsideElement(elementBounds, x, y);
    });

    return targetChild || null;
};

/**
 * Function to detect a double tap on an element.
 * @param element The element to detect the double tap on.
 * @param callback The callback function to call when a double tap is detected.
 */
function detectDoubleTap(
    element: HTMLElement,
    callback: (clientX: number, clientY: number) => void
): void {
    let lastTouchTime = 0;
    let isDoubleTap = false;
    let clientX = 0;
    let clientY = 0;

    element.addEventListener("touchstart", (event: TouchEvent) => {
        const currentTime = new Date().getTime();
        const timeSinceLastTouch = currentTime - lastTouchTime;
        //c
        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;

        if (timeSinceLastTouch <= 300) {
            // It's a double tap
            isDoubleTap = true;
        } else {
            isDoubleTap = false;
        }

        lastTouchTime = currentTime;
    });

    element.addEventListener("touchend", () => {
        if (isDoubleTap) {
            callback(clientX, clientY);
        }
    });
}

/**
 * Create a Custom Event for double tap.
 * @param element The element to apply the Custom Event to.
 * @returns A Custom Event for double tap.
 */
export function createDoubleTapEvent(element: HTMLElement): CustomEvent {
    const dbltap = new CustomEvent("dbltap", {
        bubbles: true,
        cancelable: true,
    });

    detectDoubleTap(element, (clientX, clientY) => {
        // When a double tap is detect4
        (dbltap as any).clientX = clientX; // Add clientX to the event
        (dbltap as any).clientY = clientY; // Add clientY to the event
        element.dispatchEvent(dbltap);
    });

    return dbltap;
}
