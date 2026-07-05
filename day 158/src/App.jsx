import ErrorBoundary from "./ErrorBoundary";
import BuggyCounter from "./BuggyCounter";

function App() {
  return (

    // ErrorBoundary იცავს BuggyCounter-ს
    <ErrorBoundary>

      <BuggyCounter />

    </ErrorBoundary>

  );
}

export default App;