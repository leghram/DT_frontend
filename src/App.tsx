import AppRouter from "./router";
import { DataContextProvider } from "./context/AuthContext";

function App(): JSX.Element {
  return (
    <DataContextProvider>
      <AppRouter />
    </DataContextProvider>
  );
}

export default App;
