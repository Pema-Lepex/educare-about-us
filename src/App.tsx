import React from "react";
import AppRoutes from "Routes";
import { SidebarProvider } from "utils/helpers/SidebarContext";

function App() {
  return (
    <>
      <SidebarProvider>
        <AppRoutes />
      </SidebarProvider>
    </>
  );
}

export default App;
