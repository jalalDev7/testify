"use client";

import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    // React Query Provider
    <QueryClientProvider client={queryClient}>
      {/* Theme Provider */}
      <ThemeProvider defaultTheme="light" attribute={"class"}>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
