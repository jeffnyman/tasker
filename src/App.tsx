import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import typescriptLogo from "./assets/typescript.svg";

import "./App.css";
import Task from "./components/Task";

function App() {
  return (
    <>
      <header>
        <h1>Tasker</h1>
      </header>
      <main>
        <Task></Task>
      </main>
      <footer>
        <p>
          <a href="https://react.dev" target="_blank" rel="noreferrer noopener">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          +
          <a href="https://vite.dev" target="_blank" rel="noreferrer noopener">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </p>
        <p>
          and
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={typescriptLogo}
              className="logo vanilla"
              alt="JavaScript logo"
            />
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
