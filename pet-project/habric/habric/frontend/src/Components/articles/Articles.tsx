import React from 'react'
import { useFetchAllArticlesQuery, useFetchClearAllArticlesQuery, useGetTopUserQuery } from '../../Store/Slices/articlesSlice'
import { Article } from './Article'
import { IActicles } from '../../types/acticles'
import { Link } from 'react-router-dom'

export const Articles = () => {
    const [sort, setSort] = React.useState<string>('DESC');
    const [sortTags, setSortTags] = React.useState<any>('');
    const { data: users, isLoading } = useGetTopUserQuery()

    const [accurenstRefetch, setAccurenstRefetch] = React.useState('')

    const [sortName, setSortName] = React.useState<string>('');
    const [filterName, setFilterName] = React.useState<string>('');
    const [visionNameDrop, setVisionNameDrop] = React.useState<boolean>(false);

    const { data: articles, refetch, isSuccess } = useFetchAllArticlesQuery({ sort, sortTags, sortName })
    const { data: inputBar } = useFetchAllArticlesQuery({ sort: '', sortTags: '', sortName: '' })



    const filterNameArticles = inputBar?.filter((article: any) => article.name.toLowerCase().includes(filterName.toLowerCase()))

    const handleSortTags = (tag: any) => {
        setVisionNameDrop(false)
        setSortTags(tag)
        refetch()
    }

    const handleSort = (sorted: any) => {
        setSort(sorted)
        refetch()
    }

    const handleSearch = () => {
        setVisionNameDrop(false)
        setSortName(filterName)
        if (accurenstRefetch !== sortName) {
            console.log(accurenstRefetch, sortName);

            refetch()
            setAccurenstRefetch(sortName)
        }
    }



    return (
        <div className='flex justify-center flex-col items-center'>
            <div className='w-10/12 flex flex-col  mt-6 border-2 border-solid border-sky-900'>
                <div className='flex flex-row justify-between'>
                    <div>
                        <select className='outline-none' onChange={(e: any) => handleSort(e.target.value)} placeholder='Выберите параметр' id="">
                            <option value="DESC">По новизне</option>
                            <option value="ASC">По Старшенству</option>ASC
                            <option value="LIKE">По популярности</option>
                        </select>
                    </div>
                    <div className='mr-2 align-middle'>
                        <button onClick={() => handleSortTags('')}>
                            <span > {sortTags ? <span><span className='text-cyan-800'>X </span>{sortTags}</span> : 'без тега'} :тег</span>
                        </button>
                    </div>
                </div>
                <div className=' pl-2 pr-2 pt-1 pb-1'>
                    <div className='flex flex-row border-l-2 border-r-2 border-cyan-800'>
                        <input onClick={() => setVisionNameDrop(true)} value={filterName} onChange={(e) => setFilterName(e.target.value)} className='w-full outline-none' placeholder='Введите поиск' type="text" />
                        <button onClick={handleSearch} className='mr-2'>Поиск</button>
                    </div>
                    {visionNameDrop && filterNameArticles.length > 0 && <div style={{ width: 'calc(83.33333% - 20px)', maxHeight: '64px' }} className='absolute scrollBar overflow-auto bg-white border-b-2 border-l-2 border-r-2 border-cyan-800' id="">
                        {
                            filterNameArticles.map((name: any) => (
                                <div key={name.id}>
                                    <Link onClick={() => setVisionNameDrop(false)} to={'http://localhost:3000/artic/' + name.id}>{name.name}</Link>
                                </div>
                            ))
                        }
                    </div>}
                </div>
            </div>
            <div className='w-10/12 flex flex-row mt-6 mb-6'>
                <div className='w-full'>
                    {
                        articles?.map((article: IActicles) => (
                            <Article key={article.id} type='article' sortTags={handleSortTags} article={article}></Article>
                        ))
                    }
                </div>
                {!isLoading && <div className='ml-4 w-max p-1 pl-1 pr-4 h-max border-2 border-solid border-sky-900'>
                    {
                        users?.map((user: any) => (
                            <div key={user.id}>
                                <Link to={`/user/${user.id}`}>
                                    <div className='flex flex-row items-center'>
                                        <img alt='user_photo' onError={(e: any) => { e.target.src = `http://localhost:3000/image/goust.jpg` }} className='h-3 mr-1 w-3' src={`http://localhost:5000/images/${user.image}`} />
                                        <span style={{fontSize: '12px'}} className='mr-1'>{user.username}</span>
                                        <span style={{fontSize: '12px'}}> {user.watcher}</span>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>}
            </div>
        </div>
    )
}
