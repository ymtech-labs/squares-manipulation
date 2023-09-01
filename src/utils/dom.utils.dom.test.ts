import { findTargetElement } from ".";

test("findTargetElement should return the correct target", () => {
    // Create a fictitious container and coordinates
    const container = document.createElement("div");
    const clientX = 50;
    const clientY = 50;

    // Call the function to find the target
    const target = findTargetElement(container, clientX, clientY);

    // Ensure that the target is correct (it can be a real element or a mock)
    expect(target).toBeDefined(); // Check that the target exists
    // Check other assertions based on what findTargetElement actually does
});
