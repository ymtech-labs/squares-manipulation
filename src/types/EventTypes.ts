/**
 * Type representing various mouse events.
 *
 * @typedef MouseEventType
 * @type {("click"|"mousedown"|"mouseup"|"mousemove"|"mouseenter"|"mouseleave"|"mouseover"|"mouseout")}
 */
export type MouseEventType =
    | "click"
    | "mousedown"
    | "mouseup"
    | "mousemove"
    | "mouseenter"
    | "mouseleave"
    | "mouseover"
    | "mouseout";

/**
 * Type representing various keyboard events.
 *
 * @typedef KeyboardEventType
 * @type {("keydown"|"keyup")}
 */
export type KeyboardEventType = "keydown" | "keyup";

/**
 * Type representing a union of MouseEventType and KeyboardEventType.
 *
 * @typedef EventType
 * @type {MouseEventType | KeyboardEventType}
 */
export type EventType = MouseEventType | KeyboardEventType;

/**
 * Type representing a callback function for handling events.
 * Depending on the event type, different event objects are expected.
 *
 * @template E - Extends from EventType
 * @callback EventCallback
 * @param {E extends MouseEventType ? MouseEvent : KeyboardEvent} event - The event object
 */
export type EventCallback<E extends EventType> = E extends MouseEventType
    ? (event: MouseEvent) => void
    : E extends KeyboardEventType
    ? (event: KeyboardEvent) => void
    : (event: Event) => void;
