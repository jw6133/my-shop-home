import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryProductList from '../components/CategoryProductList';
import { getCategoryProduct } from '../api/firebase';
import styled from 'styled-components';
import CategorySlider from '../components/CategorySlider';

function CategoryPage() {
    const {category}=useParams();
    const [products,SetProducts]= useState([]);
    const [randomImages,setRandomImages] = useState();

    useEffect(()=>{
        getCategoryProduct(category).then((product)=>{
            SetProducts(product);
        }).catch((error)=>{
            console.error(error)
        })
    },[category])
    // const slideItem = products.map((product)=>product.image)
    useEffect(()=>{
        if(products.length>0){
            const randomImg = [...products].sort(()=>0.5-Math.random());
            console.log(randomImg);
            const selectImg = randomImg.slice(0,4).map((el)=>el.image)
            setRandomImages(selectImg);
            console.log(randomImages);
        }
    },[products])

    /*
    a,b
    함수가 0보다 작은 값은 a가 앞으로
    0보다 큰 값이면 b가 앞으로
    */

    return (
        <div>
            <ProductList className='productList'>
            {category}
            <CategorySlider imgs={randomImages}/>
            <CategoryProductList category={category} product={products}/>
            </ProductList>
        </div>
    )
}

export default CategoryPage

const ProductList = styled.ul`
    display:flex;
    gap:20px 5%;
    flex-wrap:wrap;
    li{
        flex-shrink:0;
        flex-basis:30%;
    }
`