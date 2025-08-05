import "./index.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HeroUIProvider } from "@heroui/react";
import { App } from "./App";

import { store } from "./store";

// y = mx + b
// m is slope which is change in Y / change in X
// b is y-intercept where line intersects y
// yIntercept = b=y+mx

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </Provider>
);
