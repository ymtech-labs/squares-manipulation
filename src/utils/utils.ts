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
