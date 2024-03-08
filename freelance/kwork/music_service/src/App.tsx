import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage'
import { GlobalStyles } from './Styles/Global'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage'
import TrackPage from './Pages/TrackPage/TrackPage'
import CompilationPage from './Pages/CompilationPage/CompilationPage'
import ThemeContext from './Context/ThemeContext'
import { Provider } from 'react-redux'
import { store } from './store/store'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegistrationPage />,
    },
    {
        path: '/traks',
        element: <TrackPage />,
    },
    {
        path: '/compilations',
        element: <CompilationPage />,
    },
])

const App = () => {
    return (
        <Provider store={store}>
            <ThemeContext>
                <GlobalStyles />
                <RouterProvider router={router} />
            </ThemeContext>
        </Provider>
    )
}

export default App