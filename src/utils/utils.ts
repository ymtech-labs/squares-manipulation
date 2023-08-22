import type { EventCallback, EventType } from "../types";

/**
 *
 * @param target The target element to add the event listener
 * @param eventType The event type to listen for on the target element
 * @param callback The callback function to execute when the event is triggered
 * @param options The options to pass to the event listener
 */
export function customEventListener<E extends EventType>(
    target: HTMLElement | Document | Window,
    eventType: E,
    callback: EventCallback<E>,
    options?: AddEventListenerOptions
): void {
    target.addEventListener(eventType, callback as EventListener, options);
}
