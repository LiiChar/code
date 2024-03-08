import style from './modal.module.css'
import { useModal } from '../../../context/useModal'
import { useBusket } from '../../../context/useBusket';

const DishesModal = () => {
    const { isVisible, dishe, closeModal } = useModal();
    const { addDishes } = useBusket();

    const addDishesToBusket = () => {
        if (dishe) {
            addDishes(dishe)
            closeModal()
        }
    }

    return (
        <>
            {
                isVisible && dishe ?
                    <div className={style.modalDisheWrapper}>
                        <div className={style.modalDishe}>
                            <div className={style.modalDisheImage}>
                                <img alt='image dishes for presentation' src={dishe?.image_url} />
                            </div>
                            <div className={style.modalDisheActions}>
                                <div onClick={addDishesToBusket} className={style.modalDisheFollow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 7.16221C9.92589 2.45596 2.66663 2.95722 2.66663 8.97235C2.66663 14.9875 12 20 12 20C12 20 21.3333 14.9875 21.3333 8.97235C21.3333 2.95722 14.074 2.45596 12 7.16221Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div onClick={closeModal} className={style.modalDisheClose}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16.7364 7.2636C17.0879 7.61508 17.0879 8.18492 16.7364 8.5364L13.273 12L16.7364 15.4636C17.0586 15.7858 17.0854 16.2915 16.817 16.6442L16.7364 16.7364C16.3849 17.0879 15.8151 17.0879 15.4636 16.7364L12 13.273L8.5364 16.7364C8.18492 17.0879 7.61508 17.0879 7.2636 16.7364C6.91213 16.3849 6.91213 15.8151 7.2636 15.4636L10.727 12L7.2636 8.5364C6.94142 8.21421 6.91457 7.70853 7.18306 7.35577L7.2636 7.2636C7.61508 6.91213 8.18492 6.91213 8.5364 7.2636L12 10.727L15.4636 7.2636C15.8151 6.91213 16.3849 6.91213 16.7364 7.2636Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                            <div className={style.modalDisheName}>
                                {dishe?.name}
                            </div>
                            <div className={style.modalDisheData}>
                                <div className={style.modalDishePrice}>
                                    {dishe?.price}₽ · 
                                </div>
                                <div className={style.modalDisheWight}>
                                    {dishe?.weight}г
                                </div>
                            </div >
                            <div className={style.modalDisheDescription}>
                                {dishe?.description}
                            </div>
                            <div className={style.modalDisheWightAddToBusket}>
                                <button onClick={addDishesToBusket}>
                                    Добавить в корзину
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    ''
            }
        </>
    )
}

export default DishesModal