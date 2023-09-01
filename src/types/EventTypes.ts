/**
 * Type representing various mouse events.
 *
 * @typedef MouseEventType
 * @type {("click"|"dblclick"|"kmousedown"|"mouseup"|"mousemove"|"mouseenter"|"mouseleave"|"mouseover"|"mouseout")}
 */
export type MouseEventType =
    | "click"
    | "dblclick"
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
 * Type representing various touch events.
 *
 * @typedef TouchEventType
 * @type {("touchstart"|"touchend"|"touchmove"|"touchcancel")}
 */
export type TouchEventType =
    | "touchstart"
    | "touchend"
    | "touchmove"
    | "touchcancel";

/**
 * Type representing a union of MouseEventType and KeyboardEventType.
 *
 * @typedef EventType
 * @type {MouseEventType | KeyboardEventType | TouchEventType}
 */
export type EventType = MouseEventType | KeyboardEventType | TouchEventType;

/**
 * Type representing a callback function for handling events.
 * Depending on the event type, different event objects are expected.
 *
 * @template E - Extends from EventType
 * @callback EventCallback
 * @param {E extends MouseEventType ? MouseEvent : E extends KeyboardEventType ? KeyboardEvent : E extends TouchEventType ? TouchEvent : Event} event - The event object
 */
export type EventCallback<E extends EventType> = E extends MouseEventType
    ? (event: MouseEvent) => void
    : E extends KeyboardEventType
    ? (event: KeyboardEvent) => void
    : E extends TouchEventType
    ? (event: TouchEvent) => void
    : (event: Event) => void;
