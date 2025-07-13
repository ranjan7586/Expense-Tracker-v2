import './App.css';
import Router from './Router';
import { ToastContainer } from 'react-toastify';
import { LoaderProvider } from './Contexts/LoaderContext';



function App() {
  return (
    <>
      <ToastContainer />
      <LoaderProvider>
        <Router />
      </LoaderProvider>
    </>
  )
}

export default App
