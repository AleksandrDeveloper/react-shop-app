import React from 'react'
import {Menu } from 'semantic-ui-react';

export default function Filter({activeItem,setFilter}) {
    const handleItemClick=(e, { name })=>{
        setFilter(name)
    }
    return(
        <Menu secondary>
        <Menu.Item
          name='All'
          active={activeItem === 'All'}
          onClick={handleItemClick}
        >Все</Menu.Item>
        <Menu.Item
          name='PriceHigth'
          active={activeItem === 'PriceHigth'}
          onClick={handleItemClick}
        >Цена-дорогие</Menu.Item>
        <Menu.Item
          name='PriceLoy'
          active={activeItem === 'PriceLoy'}
          onClick={handleItemClick}
        >Цена-дещевые</Menu.Item>
      </Menu>
    )
};