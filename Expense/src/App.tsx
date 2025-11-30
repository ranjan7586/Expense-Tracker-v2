import './App.css';
import Router from './Router';
import { ToastContainer } from 'react-toastify';
import { LoaderProvider } from './Contexts/LoaderContext';
import ErrorBoundary from './Errors/ErrorBoundary';



function App() {
  return (
    <>
      <ErrorBoundary>
        <ToastContainer />
        <LoaderProvider>
          <Router />
        </LoaderProvider>
      </ErrorBoundary>
    </>
  )
}

export default App
