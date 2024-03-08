import React from 'react'
import { IDishe } from '../../../types/types'
import style from './card.module.css'
import { useModal } from '../../../context/useModal'

interface IPropsDisheCard {
    dishe: IDishe
}

const DishesCard: React.FC<IPropsDisheCard> = ({ dishe }) => {
    const {openModal} = useModal();

    const visibleModal = () => {
        openModal(dishe)
    }

    return (
        <div onClick={visibleModal} className={style.disheCard}>
            <div className={style.disheCardImg}>
                <img alt='image dishes' src={dishe.image_url} />
            </div>
            <div className={style.disheCardName}>
                {dishe.name}
            </div>
        </div>
    )
}

export default DishesCard