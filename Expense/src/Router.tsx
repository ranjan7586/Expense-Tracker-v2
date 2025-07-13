import Home from './Pages/Home'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router