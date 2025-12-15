import './App.css';
import Router from './routes/Router';
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from './errors/ErrorBoundary';
import { LoaderProvider } from './contexts/LoaderContext';



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
