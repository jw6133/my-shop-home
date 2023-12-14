import React, { useContext } from 'react'
import { CategoryContext } from '../context/CategoryContext'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MainMenu() {
    const {categoryList}=useContext(CategoryContext);
    return (
        <nav>
            <MenuList>
                {categoryList.map((el,index)=>(
                    <li key={index}>
                        <Link to ={ `/products/${el}`}>{el}</Link>
                    </li>
                ))}
            </MenuList>
        </nav>
    )
}

export default MainMenu
const MenuList = styled.ul`
    display:flex;
    flex-direction:row;
    gap : 20%;
`
