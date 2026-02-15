import "./App.css";
import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./errors/ErrorBoundary";
import AuthProvider from "./contexts/AuthProvider";
import { LoaderProvider } from "./contexts/LoaderContext";
import BudgetProvider from "./contexts/BudgetProvider";

function App() {
  return (
    <>
      <ErrorBoundary>
        <AuthProvider>
          <ToastContainer />
          <LoaderProvider>
            <BudgetProvider>
              <Router />
            </BudgetProvider>
          </LoaderProvider>
        </AuthProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
