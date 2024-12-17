import { SearchProvider } from "./contexts/searchContext";
import HomePage from "./pages/HomePage";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <SearchProvider>
      <HomePage />
    </SearchProvider>
  );
}

export default App;

