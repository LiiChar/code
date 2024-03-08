import React from 'react'
import "./load.css"

function LoadingHOC(prop) {
    // Получение данных
    let props = prop.get()

    // Проверка данных, есть они или нет
    if (props === null || props === undefined) {
        return <div className='loading'></div>
    } else if (prop) {
        // Если данных нет, гарузка экрана
        return <div>{props.title}</div>
    } else {
        // Есил есть данные показываются
        return <div className='loading'></div>
    }
}


export default LoadingHOC