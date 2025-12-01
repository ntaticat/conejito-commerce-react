import React, { createContext, useContext, useState } from "react";

interface ConfigContextProps {
  open: boolean;
  toggle: () => void;
  close: () => void;
}

const ConfigContext = createContext<ConfigContextProps | null>(null);

export function useConfig() {
  const ctx = useContext(ConfigContext);
  if (!ctx) throw new Error("useConfig must be used inside ConfigProvider");
  return ctx;
}

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ConfigContext.Provider
      value={{
        open,
        toggle: () => setOpen((o) => !o),
        close: () => setOpen(false),
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}
