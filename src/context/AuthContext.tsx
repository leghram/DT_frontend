import { useState, useContext, createContext, ReactNode } from "react";

const DataContext = createContext<any>(null);
const HandleDataContext = createContext<any>(null);
const status = false;

interface IProps {
  children: ReactNode;
}

export function useDataContextProvider() {
  const data = useContext(DataContext);
  const setData = useContext(HandleDataContext);

  return { data, setData };
}

export function DataContextProvider({ children }: IProps) {
  const [data, setData] = useState(status);

  return (
    <DataContext.Provider value={data}>
      <HandleDataContext.Provider value={setData}>
        {children}
      </HandleDataContext.Provider>
    </DataContext.Provider>
  );
}
