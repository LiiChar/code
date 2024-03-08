import React, {useState, useRef} from 'react'

export const EventExaple: React.FC = () => {
    const [value, setValue] = useState<string>()
    const [isDrag, setIsDrag] = useState<boolean>()

    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value) 
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag');
        
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
        
    }
    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
        console.log('DROP');
    }

  return (
    <div>
        <input value={value} onChange={changeHandler} type="text" placeholder='Управляемый'/>
        <input ref={inputRef} type="text" placeholder='Неуправляемый'/>
        <button onClick={clickHandler}></button>
        <div onDrag={dragHandler} draggable style={{width: '200px', height: '200px', background: 'red'}}></div>
        <div 
        onDrag={onDrop} 
        onDragLeave={leaveHandler} 
        onDragOver={dragWithPreventHandler}
        style={{width: '200px', height: '200px', background: isDrag ? 'blue' : 'red', marginTop: 15}}></div>
    </div>
  )
}
