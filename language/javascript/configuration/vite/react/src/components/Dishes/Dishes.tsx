import React from 'react'
import useApi from '../../api/useApi';
import DishesCard from './DishesCard/DishesCard';
import { IDishe } from '../../types/types';
import DishesTabs from './DishesTabs/DishesTabs';
import { useEvent } from '../../hooks/useEvent';
import style from './dishes.module.css'
import DishesModal from './DishesModal/DishesModal';

const Dishes = () => {
    const { data, error, isLoading } = useApi<IDishe[]>('getDishes', []);
    const [filterDishe, setFilterDishe] = React.useState<string>("Все меню")

    const tags = React.useMemo(() => {
        let uniqueTag: string[] = [];
        data.forEach((dish) => {
            dish.tegs.forEach((tag) => {

                if (!uniqueTag.includes(tag)) {
                    uniqueTag.push(tag)
                }
            })
        })
        return uniqueTag;
    }, [data])

    React.useEffect(() => {
        setFilterDishe("Все меню")
    }, [])

    const dishes = React.useMemo(() => {
        return data.filter((fishe) => fishe.tegs.includes(filterDishe))
    }, [filterDishe])

    const changePickTags = useEvent((tag: string) => {
        setFilterDishe(tag);
    })

    return (
        <div className={style.dishes}>
            <DishesTabs changePickTags={changePickTags} tags={tags} />
            <div className={style.dishesList}>
                {
                    dishes.length > 0
                    ?
                    dishes.map((dishe) => (
                        <DishesCard  key={dishe.id} dishe={dishe} />
                    ))
                    :
                    data.map((dishe) => (
                        <DishesCard  key={dishe.id} dishe={dishe} />
                    ))
                }
            </div>
            <DishesModal/>
        </div>
    )
}

export default Dishes