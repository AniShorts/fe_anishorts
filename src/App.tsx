import React from "react";
import Router from "./shared/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { AxiosError } from "axios";

const App: React.FC = () => {
  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        onError: (error: any) => {
          const err = error as AxiosError;
          const statusCode = err.response?.status;
          if (statusCode && statusCode > 500) {
          }
        },
      },
      mutations: {
        retry: 0,
        onError: (error: any) => {
          const err = error as AxiosError;
          const statusCode = err.response?.status;
          if (statusCode && statusCode > 500) {
          }
        },
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
