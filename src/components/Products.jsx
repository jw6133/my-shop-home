import React from 'react'
import styled from 'styled-components'
import DetailPageEvent from './DetailPageEvent'

function Products({products}) {
    return (
        <>
        <ProductList className='productList'>
            {products && products.map((product)=>(
                <li key={product.id}>
                    <DetailPageEvent product={product}/>
                </li>
                //&&를 써야지 먼저 데이터가 로딩이 되고 그 로딩된게 들어가기 때문에, 
                // &&를 쓰지 않고 map할시 로딩이 되지 않았기에 undefined로 오류가 난다.
            ))}
        </ProductList>
        </>
    )
}

export default Products

const ProductList = styled.ul`
    display:flex;
    gap:20px 5%;
    flex-wrap:wrap;
    li{
        flex-shrink:0;
        flex-basis:30%;
    }
`