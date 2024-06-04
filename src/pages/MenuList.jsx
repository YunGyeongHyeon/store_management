import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const MenuList = () => {
    const menuList = [
      {title:"메뉴", url:"/menu"},
      {title:"재고", url:"/stock"},
      {title:"매출", url:"/sales"}
    ]
    return (
        <MainField >
            <MenuBox >
                {menuList.map((menu) => {
                  return <Menu key={menu.url} to={menu.url}>{menu.title}</Menu>
                })}
            </MenuBox>
        </MainField>
    )
}

export default MenuList

const MainField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 2rem;
  color: #333;
  width:100%;
`

const MenuBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  height: 100%;
`

const Menu = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border:1px solid #333;
  width: 25%;
  height: 25%;
  border-radius: 15px;
  text-decoration: none;
  color:black;
  &:hover {
    background-color: #333;
    color: white;
  }
`  
