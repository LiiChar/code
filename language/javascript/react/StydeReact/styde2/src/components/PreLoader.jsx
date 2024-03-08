import React, { useState } from 'react'
import LoadingHOC from './LoadingHOC'

function PreLoader() {
    // Данные которые могут быть загружены в сервер
    let data = {
        title: "Hpelaw fgsdfes",
        text: "Etsgdsgsd",
    }

    let [date, setData] = useState()

    // Получение состояния, P.S функцию не запускать в пропсах, эх надеюсь я в будущем буду читаьб
    function getDate() {
        return date
    }
    // Обновление состояние
    function addDate() {
        setData(data)
    }
    // Имитация загрузки данных с сервера
    setTimeout(addDate, 10000)


  return (
    <div>
        <LoadingHOC get={getDate}/>
    </div>
  )
}

export default PreLoader