import React from 'react'
import style from './tags.module.css'

interface IPropsTags {
    tags: string[];
    changePickTags: (tag: string) => void;
}

const DishesTabs: React.FC<IPropsTags> = React.memo(({ tags, changePickTags}) => {

    return (
        <div className={style.tags}>
            {
                tags.map((tag) => (
                    <div className={style.tagsCard} key={tag} onClick={() => changePickTags(tag)}>
                        {tag}
                    </div>
                ))
            }
        </div>
    )
})

export default DishesTabs