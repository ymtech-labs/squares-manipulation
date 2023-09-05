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
 * Type representing various animation events.
 *
 * @typedef AnimationEventType
 * @type {("animationstart"|"animationend"|"animationiteration")}
 */
export type AnimationEventType =
    | "animationstart"
    | "animationend"
    | "animationiteration";

/**
 * Type representing various transition events.
 *
 * @typedef TransitionEventType
 * @type {("transitionstart"|"transitionend"|"transitioncancel"|"transitionrun")}
 */
export type TransitionEventType =
    | "transitionstart"
    | "transitionend"
    | "transitioncancel"
    | "transitionrun";

/**
 * Type representing a union of MouseEventType and KeyboardEventType.
 *
 * @typedef EventType
 * @type {MouseEventType | KeyboardEventType | TouchEventType}
 */
export type EventType = MouseEventType | TouchEventType | TransitionEventType;

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
    : E extends TouchEventType
    ? (event: TouchEventType) => void
    : E extends TransitionEventType
    ? (event: TransitionEvent) => void
    : (event: Event) => void;

/**
 * Type representing an object with partial event handlers for specific event types.
 *
 * @typedef {Partial<{
 *   [key in EventType]: (e: MouseEventType) => void;
 * }>} PartialEventHandlers
 */
export type PartialEventHandlers<T> = Partial<{
    [key in EventType]: (e: T) => void;
}>;
