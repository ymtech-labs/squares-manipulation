export type MouseEventType =
    | "click"
    | "mousedown"
    | "mouseup"
    | "mousemove"
    | "mouseenter"
    | "mouseleave"
    | "mouseover"
    | "mouseout";

export type KeyboardEventType = "keydown" | "keyup";

export type EventType = MouseEventType | KeyboardEventType;

export type EventCallback<E extends EventType> = E extends MouseEventType
    ? (event: MouseEvent) => void
    : E extends KeyboardEventType
    ? (event: KeyboardEvent) => void
    : (event: Event) => void;
