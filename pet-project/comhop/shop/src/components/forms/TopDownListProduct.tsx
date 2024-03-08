import React from 'react'
import './topDownProduct.css'

export const TopDownListProduct = (list: any) => {
    let downList = list.list
    const selElem = (e: any, clear: boolean) => {
        if (clear) {
            list.selectElem({ value: '', id: e.target.id })
        } else {
            list.selectElem({ value: e.target.innerText, id: e.target.id })
            if (list.setRef) {
                if (list.setRef.current) {
                    if (list.setRef.current.style.visibility === 'visible') {
                        list.setRef.current.style.display = 'none'
                        list.setRef.current.style.opacity = '0'
                    } else {
                        list.setRef.current.style.display = 'block'
                        list.setRef.current.style.opacity = '1'
                    }
                }
            }
        }

    }
    

    return (
        <ul className='ulProduct' ref={list.setRef}>
            {downList?.map((elem: any) => (
                <li
                    className={downList[0] === 'fridge' ? 'liProduct1' : 'liProduct2'}
                    key={!Array.isArray(downList[0]) ? elem.id : elem}
                    id={!Array.isArray(downList[0]) ? elem.id : ''}
                    onClick={(e: any) => {
                        e.target.style.color === 'blue' 
                        ? 
                        function(){document.querySelectorAll<HTMLElement>(downList[0] === 'fridge' ? '.liProduct1' : '.liProduct2').forEach((el) => el.style.color = 'white')
                        selElem(e, true)}()
                        : 
                        function(){document.querySelectorAll<HTMLElement>(downList[0] === 'fridge' ? '.liProduct1' : '.liProduct2').forEach((el) => el.style.color = 'white')
                        selElem(e, false)
                        e.target.style.color = 'blue'}()
                    }}>
                    {!Array.isArray(downList[0]) ? elem.name : elem}
                </li>
            ))}
        </ul>
    )
}
