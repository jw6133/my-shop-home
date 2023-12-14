import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import useCart from '../context/UseCart';



function CartItem({product,index}) {
    const {addItemcart,removeCart}= useCart();
    const plusItem=()=>{
        addItemcart.mutate({...product,quantity:product.quantity+1})
    }
    const minusItem=()=>{
        if(product.quantity<2){
            alert('상품 갯수는 1보다 작을 수 없습니다.');
            return
        }
        addItemcart.mutate({...product,quantity:product.quantity-1})
    }
    const itemDelete = ()=>{
        removeCart.mutate(product.id);
    }
    /*
    mutation과 dispatch의 차이
    mutation = usemutation에서 비동기 작업을 실행하며 데이터를 생성 추가 업데이트 삭제
    데이터를 변경하는 작업에서 사용

    dispatch : redux에서 action을 내보내는데 사용하는 함수
    action은 type을 포함
    action을 받아 store에 전달

    reducer는 action을 받아 새 상태로 변경
    ui 상태변경에 사용

    차이점 : mutation - 외부데이터 / dispatch - 앱 내부 데이터
    */
    return (
        <div>
            <li>
                <p>{index}</p>
                <img src={product.image} alt={product.title}/>
                <p>{product.title}</p>
                <p>{product.option}</p>
                <p>{product.price}</p>
                <div className='quantityWrap'>
                    <p>수량 : {product.quantity}</p>
                    
                    <button onClick={plusItem}><IoMdArrowDropup /></button>
                    <button onClick={minusItem}><IoMdArrowDropdown /></button>

                </div>
                <button onClick={itemDelete}>삭제</button>
            </li>
        </div>
    )
}

export default CartItem