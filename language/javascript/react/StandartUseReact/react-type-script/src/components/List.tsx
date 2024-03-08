import React from 'react'

interface ListProps<T> {
    item: T[],
    renderItem: (item: T) => React.ReactNode
}

export function List<T> (props: ListProps<T>) {
    return (
        <div>
            {props.item.map(props.renderItem)}
        </div>
    )
}
