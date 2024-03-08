import React, { useState } from 'react'
import Get from './components/Get'
import Nav from './components/Nav';
import Portal from './components/Portal';
import PreLoader from './components/PreLoader';
import Set from './components/Set';



function App() {


    // Установка стейта
  let [on, setOn] = useState(false)

  // !!1!!!!!! ВАЖНО: Только таким способом можно предать state(состояние)
  function hadleState () {
    console.log("Наг");
    setOn(!on)
  }

  let ono;


  // Изменение переменной взависимости от значение on
  if (on) {
    ono = 'true'
  } else {
    ono = 'false'
  }

  return (
    <div>
      
      <Nav/>
      {/* Блок с текстом */}
      <div>Кнопка нажата: {ono}</div>
      {/* Компонент куда отправляется функция с изменением стейта */}
      <Set hadleState={hadleState}/>
      {/* Обёртка MyContext.Provider для премещения пропсом всем дочерним элементам */}
      <MyContext.Provider value={{title: "Бинго", click: () => {console.log('Нажата')}}}>
        {/* В компонент get поподают все пропсы из вышеназванной обёртки и также его детям */}
      <Get />
      </MyContext.Provider>
      <PreLoader/>
      <br />
      <br />
      <br />
      <Portal/>

    </div>
  )
}


// Создание контекста
export const MyContext = React.createContext();
export default App