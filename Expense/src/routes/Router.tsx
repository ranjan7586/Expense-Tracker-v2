import Home from '../pages/Home'
import Login from '../pages/Login'
import ExpenseTrackerDesign from '../pages/ExampleDesign'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/example' element={<ExpenseTrackerDesign />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router