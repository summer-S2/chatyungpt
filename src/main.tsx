import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { initializeDarkModeState } from "./atoms/darkMode/darkModeState.ts";
import { AxiosError } from "axios";
import { CustomAxiosError } from "./types/api.ts";

// tanstack query에 커스텀 오류 타입 등록
declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError<CustomAxiosError>;
  }
}

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot initializeState={initializeDarkModeState}>
        <App />
      </RecoilRoot>
    </QueryClientProvider>
  </StrictMode>
);
