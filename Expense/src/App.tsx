import "./App.css";
import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./errors/ErrorBoundary";
import { LoaderProvider } from "./contexts/LoaderContext";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <>
      <ErrorBoundary>
        <AuthProvider>
          <ToastContainer />
          <LoaderProvider>
            <Router />
          </LoaderProvider>
        </AuthProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
