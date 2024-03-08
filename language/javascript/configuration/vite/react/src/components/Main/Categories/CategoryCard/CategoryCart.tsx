import { ICategories } from "../../../../types/types"
import React from 'react'
import style from './category.module.css'
import {useNavigate} from 'react-router-dom'

interface IPropsCategoryCard {
    category: ICategories
}

const CategoryCart: React.FC<IPropsCategoryCard> = ({category}) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate('dishes')} className={style.categoryCard}>
        <div className={style.categoryName}>{category.name}</div>
        <img className={style.categoryImg} alt="image category for rarer" src={category.image_url}/>
    </div>
  )
}

export default CategoryCart