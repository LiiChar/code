import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import SearchPage from './pages/SearchPage/SearchPage'
import AccountPage from './pages/AccountPage/AccountPage'
import BusketPage from './pages/BusketPage/BusketPage'
import DishesPage from './pages/DishesPage/DishesPage'
import Aside from './components/Main/Aside/Aside'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/dishes' element={<DishesPage />} />
        <Route path='/busket' element={<BusketPage />} />
      </Routes>
    </>
  )
}

export default App
