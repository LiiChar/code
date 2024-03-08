
import style from './main.module.css'
import Aside from '../../components/Main/Aside/Aside';
import Categories from '../../components/Main/Categories/Categories';

const MainPage = () => {
    return (
        <div className={style.main}>
            <Aside/>
            <Categories/>
        </div>
    )
}

export default MainPage