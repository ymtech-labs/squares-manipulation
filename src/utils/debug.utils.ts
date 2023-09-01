import type { ICallerInfo } from "../types";

/**
 * Gets information about the calling function, including the file name and function name.
 *
 * @returns {ICallerInfo} - An object containing the file name and function name.
 */
function getCallerInfo(): ICallerInfo {
    try {
        const stackTrace = new Error().stack;
        if (stackTrace) {
            // Split the stack trace into lines
            const stackLines = stackTrace.split("\n");
            // The fourth line generally contains the caller
            if (stackLines.length > 3) {
                // Use a regex to extract the function name
                const functionMatch = /at (.+) \(/.exec(stackLines[3]);
                // Use a regex to extract the file URL
                const fileMatch = /\((.*):\d+:\d+\)/.exec(stackLines[3]);

                if (
                    functionMatch &&
                    functionMatch[1] &&
                    fileMatch &&
                    fileMatch[1]
                ) {
                    return {
                        functionName: functionMatch[1],
                        fileUrl: fileMatch[1],
                    };
                }
            }
        }
    } catch (error) {
        // Handle the error and return undefined
        console.error("Error in getCallerInfo:", error);
    }
    return {
        functionName: "Unknown Function",
        fileUrl: "Unknown File",
    };
}

/**
 * Logs a debug message with information about the calling file and function.
 *
 * @param {any} message - The debug message to log.
 */
export function logDebugMessage(message: any) {
    if (import.meta.env.DEV) {
        // Get caller information
        const { fileUrl, functionName } = getCallerInfo();

        // Use a regex to extract the file name
        const arrayFileName = fileUrl.match(/\/([^/]+\.ts)/);
        const fileName = arrayFileName ? arrayFileName[1] : "Unknown File";

        // Créez un style CSS pour personnaliser l'affichage du groupe
        const cssStyle = `
            font-weight: bold;
            color: #3366cc; /* Changez la couleur en fonction de vos préférences */
        `;

        // Open a console group with the custom file name
        console.group(`%c${fileName}`, cssStyle);

        // Display the formatted debug message in the console group
        console.log(`%c${functionName} | `, "font-weight: bold; color: #333;");
        if (message instanceof HTMLElement) {
            console.log("%o", message);
        } else {
            console.log(message);
        }

        console.groupEnd();
    }
}
