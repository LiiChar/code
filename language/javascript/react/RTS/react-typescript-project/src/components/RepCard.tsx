import React, {useState} from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { IRepo } from '../models/models'

export const RepCard = ({ repo }: { repo: IRepo }) => {

    const { addFavourites, removeFavourites } = useActions()
    const {favourites} = useAppSelector(state => state.github)

    const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))

    function addNewFavourite(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()

        addFavourites(repo.html_url)
        setIsFav(true)
    }

    function removeFromFavourite(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()

        removeFavourites(repo.html_url)
        setIsFav(false)
    }

    return (
        <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
            <a href={repo.html_url} target='_blank' rel="noreferrer">
                <h2 className='text-lg font-bold'>{repo.full_name}</h2>
                <p className='text-sm'>
                    Forks: <span className='font-bold mr-2'>{repo.forks}</span>
                    Wathers: <span className='font-bold'>{repo.watchers}</span>
                </p>
                <p className='text-sm font-thin'>{repo?.description}</p>

                {!isFav
                  ?  
                    <button className='py-2 px-4 bg-yellow-400 mr-2 rounded hover: shadow-sm transition-all'
                    onClick={addNewFavourite}
                >
                    Add
                </button>
                :
                <button className='py-2 px-4 bg-red-400 rounded hover: shadow-sm transition-all'
                    onClick={removeFromFavourite}
                >
                    Remove
                </button>}
            </a >
        </div>
    )
}
