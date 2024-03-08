import React from 'react'
import { useFetchAllProductsQuery} from '../../store/Slices/productApi'
import { Product } from '../../components/product/Product';
import './products.css'
import { useFetchManufacturersQuery } from '../../store/Slices/manufacturerApi';
import { useFetchCategoryQuery } from '../../store/Slices/categoryApi';
import { TopDownListProduct } from '../../components/forms/TopDownListProduct';


export const Products = () => {
  const [page, setPage] = React.useState<number>(1);
  const [category, setCategory] = React.useState<string>('');
  const [manufacturer, setCompany] = React.useState<string>('');
  const { data: products, refetch } = useFetchAllProductsQuery({page, category, manufacturer});

  const {data: manufacturers} = useFetchManufacturersQuery()
  const {data: categories} = useFetchCategoryQuery()

  const ref1 = React.useRef<HTMLUListElement>();
  const ref2 = React.useRef<HTMLUListElement>();

  const handleRef = (num: number) => {
    if (num === 1) {
        if (ref1) {
            if (ref1.current) {
                ref1.current.style.height = '400px'
                ref1.current.style.width = '100px'
                ref1.current.style.opacity = '1'
                ref1.current.style.transition = 'opacity 1s ease-out'
                
                if (ref1.current.style.display === 'block' &&  ref1.current.style.opacity === '1') {
                    ref1.current.style.display = 'none'
                    ref1.current.style.opacity = '0'
                } else {
                    ref1.current.style.display = 'block'
                    ref1.current.style.opacity = '1'
                }

            }
        }
    } else {
        if (ref2) {
            if (ref2.current) {
                ref2.current.style.height = '400px'
                ref2.current.style.width = '130px'
                ref2.current.style.opacity = '1'
                if (ref2.current.style.display === 'block'  &&  ref2.current.style.opacity === '1') {
                    ref2.current.style.display = 'none'
                    ref2.current.style.opacity = '0'
                } else {
                    ref2.current.style.display = 'block'
                    ref2.current.style.opacity = '1'
                }

            }
        }
    }

}

  return (
    <div className='productsWrapper'>
      <div>
        <div style={{color: 'white'}} className='manifacturerNameList' onClick={() => handleRef(1)}><span style={{userSelect: 'none'}} onDoubleClick={() => setCompany('')}>Производители</span></div>
        {manufacturers && <TopDownListProduct setRef={ref1} list={manufacturers} selectElem={(name: any) => {setCompany(name.value); refetch()}} />}
      </div>
      <div className='productses'>
        {products?.products && products?.products?.map((prod) => (
          <Product key={prod.id} product={prod} />
        ))}
      </div>
      <div>
        <div style={{color: 'white'}} onClick={() => handleRef(2)}><span onDoubleClick={() => setCategory('')}>Категория</span></div>
        {categories && <TopDownListProduct setRef={ref2} list={categories} selectElem={(name: any) => {setCategory(name.value); refetch()}} />}
      </div>
      <div className='pages'>
        {products?.num ? Array.from({ length: products?.num })
          .map((_, index) => <div className={page === index + 1 ? 'page active' : 'page'} onClick={() => setPage(index + 1)} key={`${index}/amount`}>{index + 1}</div>) : null}
      </div>
    </div>
  )
}
