import Login from './Pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router