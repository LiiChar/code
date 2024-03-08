import ContactPage from "./Pages/ContactPage/ContactPage"
import { DesignPage } from "./Pages/DesignPage/DesignPage"
import MainPage from "./Pages/MainPage/MainPage"
import StudioPage from "./Pages/StudioPage/StudioPage"
import VideoPage from "./Pages/VideoPage/VideoPage"
import Header from "./components/Header/Header"
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import AnimationPageChange from "./components/AnimationChangePage/AnimationPageChange"
import Footer from "./components/Footer/Footer"
import classNames from "classnames"
import { useTheme } from "./context/ThemeContext"
import style from './app.module.scss'
// import ChangeTheme from "./AnimationPage/ChangeTheme"



function App() {
  const { isLight } = useTheme()
  return (
    <div className={classNames(style.app, { [style.dark]: !isLight, [style.light]: isLight })}>
      {/* <AnimatePresence mode="wait">
        <AnimationPageChange /> */}

        <Header />
        <Routes>
          <Route Component={MainPage} path="/" /> c
          <Route Component={VideoPage} path="/video" />
          <Route Component={DesignPage} path="/design" />
          <Route Component={StudioPage} path="/studio" />
          <Route Component={ContactPage} path="/contact" />
        </Routes>
        <Footer />
      {/* </AnimatePresence> */}
    </div>
  )
}

export default App
