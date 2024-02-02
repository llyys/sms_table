import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import {Theme} from '@twilio-paste/core/theme';
import { worker } from "./mocks/browser";

const container = document.getElementById("root");
const root = createRoot(container)

worker.start({
  serviceWorker: {
    /**
     * Use a custom Service Worker script URL to resolve
     * the mock worker served by Codesandbox.
     * @note You DO NOT need this in your application.
     * @see https://mswjs.io/docs/api/setup-worker/start#serviceworker
     */
    url: "/mockServiceWorker.js"
  }
}).then(()=>{
  root.render(<Theme.Provider theme="default"><App /></Theme.Provider>);
});
