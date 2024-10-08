import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ReactDOM from "react-dom/client";
import App from "./App";
import home  from './components/home';
import myProfile from './components/avatar';
import checkout from "./components/checkout";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import  './manifest.json';
// this manifest is used temporarily for development purposes
const manifestUrl =
  "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";
 const newurl =  'https://raw.githubusercontent.com/Philip-webdev/telegram-webApp/refs/heads/main/src/manifest.json'
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={newurl}>
    <QueryClientProvider client={queryClient}>
     
      <App />
    </QueryClientProvider>
  </TonConnectUIProvider>
);
