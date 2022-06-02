import React from 'react'
import { Item } from './style'
const ItemProjeto = ({item}) => {
  console.log(item)
  return (
    <Item>
        <img alt={item.alt} src={item.src} />
    </Item>
  )
}

export default ItemProjeto