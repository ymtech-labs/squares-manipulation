import { App } from "@components";
import "./main.scss";

// Get the root element
const rootElement = document.querySelector<HTMLDivElement>("#app")!;

// Append the App to the root element
rootElement.appendChild(App());
