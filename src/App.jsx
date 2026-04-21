import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import KeyProvider, { keyItems } from "./store/key-item-store";
import WordArea from "./components/WordArea";
import Header from "./components/Header";
import Results from "./components/Results";
import { useContext } from "react";

const MainContent = () => {
  const { status } = useContext(keyItems);

  return (
    <div className="App bg-light min-vh-100">
      <Header />
      {status === "finished" ? <Results /> : <WordArea />}

      <footer className="text-center mt-5 p-4 text-muted">
        <small>&copy; {new Date().getFullYear()} Keystrokes</small>
      </footer>
    </div>
  );
};

function App() {
  return (
    <KeyProvider>
      <MainContent />
    </KeyProvider>
  );
}

export default App;
