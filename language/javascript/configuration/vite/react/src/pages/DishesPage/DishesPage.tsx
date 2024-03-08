import Dishes from "../../components/Dishes/Dishes"
import Aside from "../../components/Main/Aside/Aside"
import style from './dishes.module.css'


const DishesPage = () => {

  return (
    <div className={style.dishes}>
        <Aside/>
        <Dishes/>
    </div>
  )
}

export default DishesPage