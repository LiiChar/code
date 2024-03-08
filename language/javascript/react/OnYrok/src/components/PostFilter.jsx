import React from 'react'
import MySelect from './Select/MySelect'
import MyInput from './UI/Input/MyInput'

function PostFilter({filter, setFilter}) {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder='Поиск'
                />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue='Сортировка по'
                option={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' },
                ]}
            />
        </div>
    )
}

export default PostFilter