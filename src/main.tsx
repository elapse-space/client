import App from "@app/app";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error("No root element found!");
}

const queryCache = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
});

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryCache}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
