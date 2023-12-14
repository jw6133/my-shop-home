import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function DetailPageEvent({product}) {
    //const colorItem = product.colors;
    /*
    값을 변수에 담아 사용했을때와 아닐때

    장점:가독성,재사용성
    주의점 : 변수에 담긴 값은 변수에 저장이 됨. product.colors의 값이 달라진다면
    저장된 값에는 변동이 없어서 최신반영이 안됨.
    */
    /*
    링크 클릭 시 정보를 넘길 때
    단순한 페이지의 이동이 목적이라면 link가 편함.
    다수의 정보가 이동되어야 한다면, link보다는 useNavigate가 최적임. 
    */

    const navigate = useNavigate()
    const detailNavigate = ()=>{
        navigate(`/products/detail/${product.id}`,{
            state:{
                title:product.title,
                id:product.id,
                image:product.image,
                price:product.price,
                option:product.option,
                category:product.category,
                colors:product.colors,
                discription:product.discription
            }
        })
    }
    return (
        
        <DetailItem onClick={detailNavigate}>
            <img src={product.image}/>
            <div className='textWrap'>
                <h3 className='itemTitle'>{product.title}</h3>
                <div class="itemFlex">
                    <p className='itemPrice'>{product.price}</p>
                    <p classItemOpt>{product.option}</p>
                </div>
                <div className='itemColor'>
                    {/* {product.colors} */}
                    {/* 컬러 배열로 출력 */}
                    {product.colors && product.colors.map((color,index)=>(
                            <div
                            style={{backgroundColor:color}}>
                            </div>
                        ))}
                </div>
            </div>
        </DetailItem>
    )
}

export default DetailPageEvent

const DetailItem=styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    .textWrap{
        display:flex;
        flex-direction:column;
        gap:10px;
    }
    .itemTitle{
        font-size:20px;
        font-weight:normal;
        transition:500ms;
        color:rgba(0,0,0,0.5);
        &:hover{
            color:rgba(0,0,0,1);
        }
    }
    .itemFlex{
        display:flex;
        justify-content:space-between;
    }
    .itemColor{
        display:flex;
        height:15px;
        gap:2px;
        div{
            width:15px;
            height:15px;
        }
    }
`