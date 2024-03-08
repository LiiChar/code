import useApi from '../../../api/useApi'
import { ICategories } from '../../../types/types';
import CategoryCart from './CategoryCard/CategoryCart';
import style from './categories.module.css'

const Categories = () => {
    const {data: categories, error, isLoading} = useApi<ICategories[]>('getCategories', []);

  return (
    <div className={style.categories}>
        {
            categories.map((category) => (
                <CategoryCart key={category.id} category={category}/>
            ))
        }
    </div>
  )
}

export default Categories