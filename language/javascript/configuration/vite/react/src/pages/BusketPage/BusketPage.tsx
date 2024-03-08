import Aside from "../../components/Main/Aside/Aside"
// import Busket from "../../components/Busket/Busket"
import style from './busket.module.css'
import BusketBye from "../../components/Busket/BusketBye/BusketBye"
import BusketList from "../../components/Busket/BusketList"

const BusketPage = () => {

  return (
    <div className={style.busket}>
      <Aside/>
      <BusketList/>
      <BusketBye/>
    </div>
  )
}

export default BusketPage