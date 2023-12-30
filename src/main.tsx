import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";
import App from "./App.tsx";
import ContextProvider from "./context/ContextProvider.tsx";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </QueryClientProvider>
  </Router>
);
