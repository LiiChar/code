import { IDishe } from '../types/types'
import React from 'react'

interface IDefaultValueBusket {
    dishes: IDishe[] | [];
    icrementDisheCount: (id: number) => void;
    decrementDisheCount: (id: number) => void;
    addDishes: (dishe: IDishe) => void;
    deleteDishe: (id: number) => void;
};

const defaultValueBusket: IDefaultValueBusket = {
    dishes: [],
    icrementDisheCount: () => {},
    decrementDisheCount: () => {},
    addDishes: () => {},
    deleteDishe: () => {},
};

const BusketContext = React.createContext<IDefaultValueBusket>(defaultValueBusket);

export const useBusket = () => {
    return React.useContext(BusketContext);
};

interface IProps {
    children: React.ReactNode;
}

function BusketProvider({ children }: IProps) {
    const [dishes, setDishes] = React.useState<IDishe[]>([])

    const addDishes = (dishe: IDishe) => {
        dishe.count = 1
        setDishes(prev => [...prev, dishe])
    }

    const icrementDisheCount = (id: number) => {

        const updateDishes = dishes.map((dishe) => {
            if (dishe && dishe.id === id) {
                dishe.count++;
                return dishe
            }
            return dishe
        })
        setDishes(updateDishes)
    }

    const decrementDisheCount = (id: number) => {
        const updateDishes = dishes.map((dishe) => {
            if (dishe && (dishe.count > 0) && dishe.id === id) {
                dishe.count--;
                return dishe
            }
            return dishe
        })
        setDishes(updateDishes)
    }

    const deleteDishe = (id: number) => {
        setDishes(dishes.filter((dishe) => dishe.id !== id))
    }

    React.useEffect(() => {
        const dishesJSON = localStorage.getItem('dishes')
        if (dishesJSON) {
            setDishes(JSON.parse(dishesJSON));
        }

        return () => {
            localStorage.setItem('dishes', JSON.stringify(dishes))
        }
    }, [])

    const value = {
        dishes,
        addDishes,
        deleteDishe,
        decrementDisheCount,
        icrementDisheCount
    }

    return (
        <BusketContext.Provider value={value}>
            {children}
        </BusketContext.Provider >
    )
}

export default BusketProvider;