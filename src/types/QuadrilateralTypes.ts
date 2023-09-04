/**
 * Interface representing a Quad object.
 *
 * @interface IQuad
 */
export interface IQuad {
    /**
     * The starting x-coordinate for the Quad.
     *
     * @type {number}
     */
    startX: number;

    /**
     * The starting y-coordinate for the Quad.
     *
     * @type {number}
     */
    startY: number;

    /**
     * The current HTMLDivElement being used for the Quad.
     * Set to `null` if no div is currently associated.
     *
     * @type {HTMLDivElement | null}
     */
    currentQuad: HTMLDivElement | null;

    /**
     * Flag indicating whether the Quad is currently being drawn.
     *
     * @type {boolean}
     */
    drawing: boolean;
}

/**
 * Type representing an event that can be either a MouseEvent or a TouchEvent.
 *
 * @typedef {MouseEvent | TouchEvent} QuadEvent
 */
export type QuadEvent = MouseEvent | TouchEvent;
