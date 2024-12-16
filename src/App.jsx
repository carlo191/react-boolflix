import { SearchProvider } from "./contexts/searchContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <SearchProvider>
      <HomePage />
    </SearchProvider>
  );
}

export default App;

