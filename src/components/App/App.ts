import { DrawingQuad } from "@components";

function App() {
    const app = document.createElement("div");

    //Call DrawingQuad and add it to the app component
    app.appendChild(DrawingQuad());

    return app;
}

export default App;
