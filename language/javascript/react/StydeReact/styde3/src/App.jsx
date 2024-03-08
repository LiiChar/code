import React, { useState, useEffect } from 'react'




function App() {
  // 1. Используем переменную состояния name
  const [name, setName] = useState('Мэри');

  // 2. Используем эффект для сохранения данных формы
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });

  // 3. Используем переменную состояния surname
  const [surname, setSurname] = useState('Поппинс');

  // 4. Используем эффект для обновления заголовка страницы
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  });


  // function handleName() {

  // }
  // ...

  return (
    <div>
      <div>
        {/* Name берётся из состояния*/}
        <input onChange={(e) => setName(e.target.value)} type="text" value={name} placeholder='имя'></input>
        <input onChange={(e) => setSurname(e.target.value)} type="text" value={surname} placeholder='имя'></input>
      </div>
      <div>
        {/* Name берётся из созранённого localStorage */}
        <input  type="text" value={localStorage.getItem('formData')} placeholder='имя'></input>
      </div>
    </div>
  )
}

export default App