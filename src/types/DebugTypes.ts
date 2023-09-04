/**
 * Interface representing caller information.
 *
 * @interface
 */
export interface ICallerInfo {
    /**
     * The name of the calling function.
     *
     * @type {string}
     */
    functionName: string;

    /**
     * The URL of the file containing the calling function.
     *
     * @type {string}
     */
    fileUrl: string;
}
