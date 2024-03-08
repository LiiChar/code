import React, { useEffect, useState } from 'react'
import { RepCard } from '../components/RepCard'
import { useDebounce } from '../hooks/debounds'
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../store/GitHub/gitHubApi'

export const HomePage = () => {
    const [Search, setSearch] = useState('')
    const [dropDown, setDropDown] = useState(false)
    const debounced = useDebounce(Search)
    const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true
    })

    const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserReposQuery()

    useEffect(() => {
        setDropDown(debounced.length > 3 && data?.length! > 0 ? true : false)
    }, [debounced, data])

    function clickHandler(username: string) {
        fetchRepos(username)
        setDropDown(false)
    }

    return (
        <div className='flex justify-center pt-10 mx-auto h-screen w-screnn'>
            {isError && <p className='text-center text-red-600'>Something went wrong</p>}

            <div className='relative w-[560px]'>
                <input
                    type="text"
                    className='border py-2 px-4 w-full h-[42px] mb-2'
                    placeholder='Seacrh for GitHub username...'
                    value={Search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {dropDown && <ul className='list-none absolure top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white'>
                    {isLoading && <p className='text-center'>Loading</p>}
                    {data?.map((user) => (
                        <li key={user.id}
                            onClick={() => clickHandler(user.login)}
                            className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-color cursor-pointer'
                        >
                            {user.login}
                        </li>
                    ))}
                </ul>}
                <div className="container">
                    {areReposLoading && <p className='text-center'>Repos are loading</p>}
                    { repos?.map(repo => <RepCard key={repo.id} repo={repo}/> ) }
                </div>
            </div>
        </div>
    )
}
