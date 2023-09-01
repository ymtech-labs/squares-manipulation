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
