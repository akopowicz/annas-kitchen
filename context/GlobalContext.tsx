import { createContext, useContext, ReactNode, useState } from 'react';

type GlobalContextType = {
  // your global state types here
  theme: string;
  setTheme: (theme: string) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
  // your global state here
  const [theme, setTheme] = useState('light');

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) throw new Error('useGlobal must be used within GlobalProvider');
  return context;
}
