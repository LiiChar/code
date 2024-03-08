import { useBusket } from "../../../context/useBusket"
import { IDishe } from "../../../types/types"
import style from './card.module.css'
import React from 'react'

interface IPropsBusket {
    dishe: IDishe
}
const BusketCard: React.FC<IPropsBusket> = React.memo(({ dishe }) => {
    const {decrementDisheCount, icrementDisheCount} = useBusket()

    console.log(dishe);
    

    return (
        <div className={style.card}>
            <div className={style.cardInfoAll   }>
                <div className={style.cardInfoImg}>
                    <img alt="image dishes" src={dishe.image_url}/>
                </div>
                <div className={style.cardInfo}>
                    <div className={style.cardInfoName}>
                        {
                            dishe.name
                        }
                    </div>
                    <div className={style.cardInfoCommon}>
                        <div className={style.cardInfoPrice}>
                        {dishe.price} ₽ ·
                        </div>
                        <div className={style.cardInfoWeight}>
                        {dishe.weight}
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.cardCount}>
                <div onClick={() => decrementDisheCount(dishe.id)} className={style.increment}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                        <path d="M1 1H11" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
                <div className={style.count}>
                    {dishe.count}
                </div>
                <div onClick={() => icrementDisheCount(dishe.id)} className={style.decrement}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7 12H17" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 17L12 7" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
})

export default BusketCard;