import React from "react";
import AppRoutes from "Routes";
import { SidebarProvider } from "utils/helpers/SidebarContext";
import { AuthProvider } from "utils/helpers/AuthContext";

function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <AppRoutes />
      </SidebarProvider>
    </AuthProvider>
  );
}

export default App;
